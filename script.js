
//Redirect to Portfolio website
function portfolioFunction(){
  window.open("portfolio.html");
}

//Taggel Humbarger
    function callHumbarger(){
      var barger=document.getElementById("NavLists");
      if(barger.style.display === "none"){
        barger.style.display ="inline-grid";
      }
      else{
        barger.style.display ="none";
      }
    }

// Function to start the counting effect
function countUp(element) {
  const target = +element.getAttribute("data-target");
  let count = 0;

  function updateCounter() {
      const increment = target / 100; // Number of increments for a smooth transition
      if (count < target) {
          count += increment;
          element.textContent = Math.round(count);
          requestAnimationFrame(updateCounter);
      } else {
          element.textContent = target;
      }
  }
  updateCounter();
}

// Function to check if the element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle the scroll event
function onScroll() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
      if (isElementInViewport(counter) && !counter.classList.contains("counted")) {
          counter.classList.add("counted");
          countUp(counter);
      }
  });
}

// Attach the scroll event listener
window.addEventListener("scroll", onScroll);
