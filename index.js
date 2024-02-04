const myH3 = document.querySelectorAll(".head-3");

for (let i = 0; i < myH3.length; i++) {
  myH3[i].addEventListener("click", function () {
    this.classList.toggle("open");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
