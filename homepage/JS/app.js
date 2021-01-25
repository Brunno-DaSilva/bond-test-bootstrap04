console.log("こんにちは、私は日本語を話すのが好きです");

const progress = document.querySelector(".progress-bar__completed");

progress.style.width = progress.getAttribute("data-completion") + "%";
progress.style.opacity = 1;
