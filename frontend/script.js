async function fetchVideo() {
  const url = document.getElementById("videoURL").value;
  const resultBox = document.getElementById("result");
  const videoPreview = document.getElementById("videoPreview");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!url) {
    alert("❌ Please enter a valid video URL!");
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/api/download", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });

    const data = await response.json();

    if (data && data.url) {
      videoPreview.src = data.url;
      downloadBtn.href = data.url;
      resultBox.classList.remove("hidden");
    } else {
      alert("❌ Could not fetch video.");
    }

  } catch (err) {
    alert("⚠️ Error connecting to server.");
    console.error(err);
  }
}
