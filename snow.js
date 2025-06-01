document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.querySelector(".snow-container");

  for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.textContent = "❄️";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = (8 + Math.random() * 8) + "s";
    snowflake.style.fontSize = (10 + Math.random() * 20) + "px";
    snowflake.style.opacity = Math.random();
    snowflake.style.animationDelay = Math.random() * 5 + "s";

    snowContainer.appendChild(snowflake);
  }
});
