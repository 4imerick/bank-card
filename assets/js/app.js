const app = {
  init: function () {
    console.log("Hello world, I'm app.js 👑");

    // We load the module used in the app.
    range.init();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
