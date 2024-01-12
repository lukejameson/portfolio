document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".card-container");
  const expandedContent = cardContainer.querySelector(".expanded-content");

  document.querySelector(".more-button").addEventListener("click", function () {
    if (document.querySelector(".more-button-text").textContent == "More") {
      document.querySelector(".more-button-text").textContent = "Less";
    } else {
      document.querySelector(".more-button-text").textContent = "More";
    }

    var gridContainer = document.getElementById("gridContainer");
    gridContainer.classList.toggle("four-by-four");
  });

  if (cardContainer) {
    cardContainer.addEventListener("click", function () {
      if (expandedContent.classList.contains("hidden")) {
        expandedContent.classList.remove("hidden");
        cardContainer.classList.add("expanded");
      } else {
        expandedContent.classList.add("hidden");
        cardContainer.classList.remove("expanded");
      }
    });
  }

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
