(function () {
  if (window.hasRun) return;
  window.hasRun = true;

  function insertBeast(beastUrl) {
    removeExistingBeasts();
    let beastImage = document.createElement('img');
    beastImage.setAttribute('src', beastUrl);
    beastImage.style.height = '100vh';
    beastImage.className = 'beastify-image';
    document.body.appendChild(beastImage);
  }

  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll('.beastify-image');
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * Listen for messages from the background script.
   */
  browser.runtime.onMessage.addListener((message) => {
    message.command === 'beastify' ? insertBeast(message.beastUrl) : removeExistingBeasts();
  });

})();