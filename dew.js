document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".dew-container");

  for (let i = 0; i < 60; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${5 + Math.random() * 7}s`;
    drop.style.animationDelay = `${Math.random() * 5}s`;
    drop.style.width = `${4 + Math.random() * 6}px`;
    drop.style.height = drop.style.width;
    container.appendChild(drop);
  }
});
