// This file is the content script that runs in the context of the active tab.
// It is injected into the page by the background script when the user clicks the extension button.
// This script removes the navigation bar with the class ms-Stack from the page.
document
  .querySelectorAll('[role="navigation"].ms-Stack')
  .forEach((el) => el.remove());
