const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateInvoice(bill, guest, cb) {
  try {
    const tmpDir = path.join(__dirname, "..", "tmp");
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir);
    }

    const filename = `invoice_${bill.bill_id}.pdf`;
    const filePath = path.join(tmpDir, filename);

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Generate simple invoice
    doc.fontSize(20).text("LuxuryStay Hospitality", { align: "center" });
    doc.moveDown();
    doc.fontSize(12).text(`Invoice ID: ${bill.bill_id}`);
    doc.text(`Guest: ${guest?.name || "N/A"}`);
    doc.text(`Email: ${guest?.email || "N/A"}`);
    doc.text(`Date: ${new Date().toLocaleString()}`);
    doc.moveDown();

    doc.text("Charges:", { underline: true });
    doc.text(`Room Charges: ${bill.room_charges}`);
    doc.text(`Services: ${JSON.stringify(bill.services || [])}`);
    doc.text(`Total: ${bill.total}`);
    doc.moveDown();

    doc.text("Thanks for staying with us!", { align: "center" });
    doc.end();

    stream.on("finish", () => cb(null, filePath, filename));
    stream.on("error", (err) => cb(err));
  } catch (err) {
    cb(err);
  }
}

module.exports = { generateInvoice };
