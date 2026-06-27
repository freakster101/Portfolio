const viewResumeBtn = document.getElementById("viewResumeBtn");
const downloadResumeBtn = document.getElementById("downloadResumeBtn");
const resumeStatus = document.getElementById("resumeStatus");

viewResumeBtn.addEventListener("click", () => {
  resumeStatus.textContent = "Opening resume in a new tab...";
});

downloadResumeBtn.addEventListener("click", () => {
  resumeStatus.textContent = "Resume download started.";
});