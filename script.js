const input = document.getElementById("input");
const img = document.getElementById("imgqr");
const caption = document.getElementById("caption");
const downloadBtn = document.getElementById("downloadBtn");
const output = document.getElementById("output");

function isValidFullURL(url) {
  try {
    const parsed = new URL(url.trim());
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function generate() {
  const value = input.value.trim();
  if (!isValidFullURL(value)) {
    alert("🚫 Please enter a full valid URL (starting with http:// or https://)");
    input.classList.add("error");
    output.style.display = "none";
    return;
  }

  input.classList.remove("error");

  const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`;

  img.src = qrURL;
  caption.textContent = `QR for: ${value}`;
  downloadBtn.href = qrURL;

  output.style.display = "block";
}
