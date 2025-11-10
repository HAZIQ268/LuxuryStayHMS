import React, { useEffect, useState, useCallback } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [user, setUser] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({});
    const [preview, setPreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const navigate = useNavigate();

    // Fetch user profile
    const fetchProfile = useCallback(async () => {
        try {
            const res = await api.get("/auth/profile");
            setUser(res.data);
            setForm(res.data);
            setPreview(
                res.data.image ? `http://localhost:5000/${res.data.image}` : null
            );
        } catch {
            alert("Unauthorized, please login again");
            navigate("/login");
        }
    }, [navigate]);

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    //  image preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    // profile update
    async function handleUpdate(e) {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", form.name);
            formData.append("contact", form.contact);
            if (imageFile) formData.append("image", imageFile);

            const res = await api.put("/auth/profile", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Profile updated successfully!");
            setUser(res.data.user);
            setEditMode(false);
            setPreview(
                res.data.user.image
                    ? `http://localhost:5000/${res.data.user.image}`
                    : null
            );
        } catch (err) {
            console.error(err);
            alert("Failed to update profile");
        }
    }


    if (!user) return <p className="text-center mt-4">Loading...</p>;

    return (
        <div className="container mt-4">
            <div className="card shadow p-4">
                <h3 className="mb-4 text-center">My Profile</h3>

                <div className="text-center mb-4">
                    <img
                        src={preview}
                        alt="Profile"
                        className="rounded-circle mb-2"
                        style={{
                            width: "120px",
                            height: "120px",
                            objectFit: "cover",
                            border: "3px solid #ccc",
                        }}
                    />
                </div>

                {!editMode ? (
                    <>
                        <div className="mb-3">
                            <label className="fw-bold">Name:</label>
                            <p>{user.name}</p>
                        </div>

                        <div className="mb-3">
                            <label className="fw-bold">Email:</label>
                            <p>{user.email}</p>
                        </div>

                        <div className="mb-3">
                            <label className="fw-bold">Role:</label>
                            <p>{user.role}</p>
                        </div>

                        <div className="mb-3">
                            <label className="fw-bold">Contact:</label>
                            <p>{user.contact || "-"}</p>
                        </div>

                        <div className="text-end">
                            <button
                                onClick={() => setEditMode(true)}
                                className="btn btn-primary me-2"
                            >
                                Edit Profile
                            </button>
                         
                        </div>
                    </>
                ) : (
                    <form onSubmit={handleUpdate}>
                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={form.name || ""}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Contact</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={form.contact || ""}
                                    onChange={(e) =>
                                        setForm({ ...form, contact: e.target.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Profile Picture</label>
                            <input
                                type="file"
                                className="form-control"
                                accept="image/*"
                                onChange={handleImageChange}
                            />
                        </div>

                        {preview && (
                            <div className="text-center mb-3">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="rounded-circle"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        border: "2px solid #aaa",
                                    }}
                                />
                            </div>
                        )}

                        <div className="text-end">
                            <button type="submit" className="btn btn-success me-2">
                                Save Changes
                            </button>
                            <button
                                type="button"
                                onClick={() => setEditMode(false)}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
