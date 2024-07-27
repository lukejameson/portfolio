document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  body.classList.toggle("dark-mode", currentTheme === "dark");

  themeToggle.children[0].src = currentTheme == "light" ? "images/moon.svg" : "images/sun.svg";

  themeToggle.addEventListener("click", function () {
    themeToggle.children[0].src = body.classList.contains("dark-mode") ? "images/moon.svg" : "images/sun.svg";

    body.classList.toggle("dark-mode");
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });

  const cardContainers = document.querySelectorAll(".card-container");
  const moreButton = document.querySelector(".more-button");
  const ellipsisElement = document.querySelector(".ellipsis");

  moreButton.addEventListener("click", function (event) {
    event.preventDefault();
    const moreButtonText = this.querySelector(".more-button-text");
    moreButtonText.textContent = moreButtonText.textContent === "More" ? "Less" : "More";

    const gridContainer = document.getElementById("gridContainer");
    gridContainer.classList.toggle("four-by-four");
  });

  cardContainers.forEach((cardContainer) => {
    const expandedContent = cardContainer.querySelector(".expanded-content");
    const cardHeader = cardContainer.querySelector(".card-header");

    cardHeader.addEventListener("click", function () {
      cardContainer.classList.toggle("expanded");

      if (cardContainer.classList.contains("expanded")) {
        expandedContent.style.maxHeight = expandedContent.scrollHeight + 16 + "px"; // Add 16px for padding
        expandedContent.style.opacity = "1";
        expandedContent.style.paddingBottom = "16px";
      } else {
        expandedContent.style.maxHeight = "0px";
        expandedContent.style.opacity = "0";
        expandedContent.style.paddingBottom = "0px";
      }
    });
  });

  function addHoverClass() {
    ellipsisElement.classList.add("hover");
  }

  function removeHoverClass() {
    setTimeout(function () {
      ellipsisElement.classList.remove("hover");
    }, 600);
  }

  ellipsisElement.addEventListener("mouseenter", addHoverClass);
  ellipsisElement.addEventListener("mouseleave", removeHoverClass);

  ellipsisElement.addEventListener("touchstart", function (e) {
    e.preventDefault();
    addHoverClass();
  });

  ellipsisElement.addEventListener("touchend", function (e) {
    e.preventDefault();
    removeHoverClass();
  });
});
