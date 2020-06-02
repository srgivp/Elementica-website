const inputOnClick = e => {
  if (event.target.id === "name-label") {
    document.getElementById("name-label").style.display = "none";
    document.getElementById("name").style.display = "flex";
  } else if (event.target.id === "mail-label") {
    document.getElementById("mail-label").style.display = "none";
    document.getElementById("mail").style.display = "flex";
  } else if (event.target.id === "project-label") {
    document.getElementById("project-label").style.display = "none";
    document.getElementById("project").style.display = "flex";
  }
};
const submitOnClick = () => {
  document.getElementById("name-label").style.display = "none";
  document.getElementById("mail-label").style.display = "none";
  document.getElementById("name").style.display = "flex";
  document.getElementById("mail").style.display = "flex";
  document.getElementById("project-label").style.display = "none";
  document.getElementById("project").style.display = "flex";
};
const dropDownOnTitle = e => {
  document.getElementById(event.target.id).style.color = "cyan";
  document.getElementById(event.target.id).nextElementSibling.style.display =
    "block";
};
const hideParent = e => {
  event.currentTarget.style.display = "none";
  event.currentTarget.parentNode.children[0].style.color = "rgb(43, 182, 115)";
};
const fontSizeAdjuster = () => {
  let imgWidth = document.getElementById("nav-logo").offsetWidth;
  let navWidth = document.getElementById("nav-gadgets").offsetWidth;
  let wholeWidth = imgWidth + navWidth;
  console.log(wholeWidth);
  let containerWidth = document.getElementById("top-navigation").offsetWidth;
  console.log(containerWidth);
  let fSize = 1;
  console.log(fSize);
  while (wholeWidth > containerWidth) {
    fSize = fSize * 0.9;

    console.log(fSize);
    document.getElementById("nav-gadgets").style.fontSize = `${fSize}rem`;
    imgWidth = document.getElementById("nav-logo").offsetWidth;
    navWidth = document.getElementById("nav-gadgets").offsetWidth;
    wholeWidth = imgWidth + navWidth;
    containerWidth = document.getElementById("top-navigation").offsetWidth;
    console.log(containerWidth);
  }
};
