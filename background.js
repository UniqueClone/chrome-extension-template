// This file is part of the extension that runs in the background and listens for messages from the popup.
// The manifest file tells Chrome to run this file in the background.
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "doThing") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const activeTabId = tabs[0].id;

        // Execute the content script in the active tab
        chrome.scripting.executeScript({
          target: { tabId: activeTabId },
          files: ["content.js"],
        });
      } else {
        console.error("No active tab found.");
      }
    });
  }
});
