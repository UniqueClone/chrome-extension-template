// This file runs is called by popup.html when it opens. Good for adding event listeners for buttons etc.
document.getElementById("buttonId").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "doThing" });
});
