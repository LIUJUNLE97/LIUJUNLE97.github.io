(function () {
  "use strict";

  var storageKey = "site-language";

  function savedLanguage() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function preferredLanguage() {
    var language = savedLanguage();
    if (language === "en" || language === "zh") {
      return language;
    }
    return navigator.language && navigator.language.toLowerCase().indexOf("zh") === 0
      ? "zh"
      : "en";
  }

  function setLanguage(language) {
    var selectedLanguage = language === "zh" ? "zh" : "en";
    document.documentElement.setAttribute("data-language", selectedLanguage);
    document.documentElement.setAttribute("lang", selectedLanguage === "zh" ? "zh-CN" : "en");

    var label = document.getElementById("language-toggle-label");
    if (label) {
      label.textContent = selectedLanguage === "zh" ? "EN" : "中文";
    }
  }

  setLanguage(preferredLanguage());

  document.addEventListener("DOMContentLoaded", function () {
    setLanguage(preferredLanguage());

    var toggle = document.getElementById("language-toggle");
    if (!toggle) return;

    function switchLanguage() {
      var currentLanguage = document.documentElement.getAttribute("data-language") || "en";
      var nextLanguage = currentLanguage === "zh" ? "en" : "zh";
      try {
        localStorage.setItem(storageKey, nextLanguage);
      } catch (error) {
        // The switch still works when browser storage is unavailable.
      }
      setLanguage(nextLanguage);
    }

    toggle.addEventListener("click", switchLanguage);
    toggle.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        switchLanguage();
      }
    });
  });
})();
