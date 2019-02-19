const section1 = document.querySelector("#section_1");
const tab1 = document.querySelector("[data-target='section_1']");

const tabs = document.querySelectorAll(".tab");
const mainSections = document.querySelectorAll(".main_sections");

window.onload = function() {
  section1.classList.add("active");
  tab1.classList.add("active");
};

tabs.forEach(singleTab => {
  singleTab.addEventListener("click", function() {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    singleTab.classList.add("active");
    mainSections.forEach(singleSection => {
      singleSection.classList.remove("active");
    });
    let targetSection = document.querySelector(
      `#${singleTab.getAttribute("data-target")}`
    );
    targetSection.classList.add("active");
  });
});
