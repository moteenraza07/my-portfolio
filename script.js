const button = document.querySelectorAll(".toggleButton"); // create a variable for toggleButton class
const nextButton = document.querySelectorAll(".nextButton"); // create a variable for nextButton class
const prevButton = document.querySelectorAll(".prevButton"); // create a variable for prevButton class
const projects = document.querySelectorAll(".projectGallery"); // create a variable for projectGlarrey class
let currentIndex = 0; // create a variable for current index value

// create a function that check current index and check if its beind displayed as flex or none.
function updateProject() {
  projects.forEach((project, index) => {
    project.style.display = index === currentIndex ? "flex" : "none";
  });
}

// initialize update project
updateProject();

// create a toggle button function that updates the icon, title and info
button.forEach((btn) => {
  btn.addEventListener("click", function () {
    const parent = btn.closest(".projectGallery");
    const icon = parent.querySelector(".madeUsingIcons");
    const title = parent.querySelector(".madeUsingTitle");
    const info = parent.querySelector(".moreInfo");

    // Toggle icon usinf if statement
    if (icon.style.display === "none") {
      icon.style.display = "flex";
    } else {
      icon.style.display = "none";
    }

    // Toggle title using if statement
    if (title.style.display === "none") {
      title.style.display = "flex";
    } else {
      title.style.display = "none";
    }

    // Toggle info using if statement
    if (info.style.display === "none") {
      info.style.display = "flex";
    } else {
      info.style.display = "none";
    }
  });
});

// create a next button function that adds to the current index value
nextButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % projects.length;
    updateProject();
  });
});

// create a previous button function that subtracts from the current index value
prevButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    updateProject();
  });
});
