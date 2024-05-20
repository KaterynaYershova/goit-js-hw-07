function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button.change-color");
  const spanColor = document.querySelector("span.color");

  button.addEventListener("click", () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    spanColor.textContent = newColor;
  });
});
