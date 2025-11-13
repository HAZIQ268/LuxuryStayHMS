import React, { useEffect, useState } from "react";
import api from "../../services/api"; //  Make sure api.js is set correctly

export default function Settings() {
  const [settings, setSettings] = useState({ tax_rate: 0.0, policies: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  //  Fetch settings
  useEffect(() => {
    async function fetchSettings() {
      try {
        const res = await api.get("/settings");
        setSettings(res.data);
      } catch (err) {
        console.error("Error fetching settings:", err);
        setMessage("Error loading settings");
      } finally {
        setLoading(false);
      }
    }
    fetchSettings();
  }, []);

  //  Save settings
  const save = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await api.post("/settings", settings);
      setMessage(" Settings saved successfully!");
      setSettings(res.data.settings);
    } catch (err) {
      console.error(err);
      setMessage("Error saving settings");
    }
  };


  const resetDefaults = async () => {
    if (!window.confirm("Are you sure you want to reset settings to default?"))
      return;
    try {
      const res = await api.post("/settings/reset");
      setSettings(res.data.settings);
      setMessage(" Settings reset to default values!");
    } catch (err) {
      console.error("❌ Reset error:", err);
      setMessage("Error resetting settings");
    }
  };

  if (loading) return <div className="p-3">Loading settings...</div>;

  return (
    <div className="container mt-3">
      <h3 className="mb-3">Settings</h3>

      {message && <div className="alert alert-info">{message}</div>}

      <form onSubmit={save}>
        <div className="mb-3">
          <label className="form-label">Tax Rate (%)</label>
          <input
            type="number"
            className="form-control"
            step="0.01"
            value={settings.tax_rate}
            onChange={(e) =>
              setSettings({
                ...settings,
                tax_rate: parseFloat(e.target.value) || 0,
              })
            }
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Policies</label>
          <textarea
            className="form-control"
            rows="4"
            value={settings.policies}
            onChange={(e) =>
              setSettings({ ...settings, policies: e.target.value })
            }
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Save
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={resetDefaults}
        >
          Reset to Default
        </button>
      </form>
    </div>
  );
}
