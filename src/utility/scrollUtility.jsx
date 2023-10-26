// scrollUtil.js

function scrollTo(elementId) {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}

export default scrollTo;
