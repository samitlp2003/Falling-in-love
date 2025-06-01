// Falling Hearts Generator
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (2 + Math.random() * 3) + 's';
  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
setInterval(createHeart, 300);

// Sparkle on Scroll
window.addEventListener('scroll', () => {
  const sparkle = document.createElement('div');
  sparkle.textContent = '✨';
  sparkle.style.position = 'fixed';
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.top = Math.random() * 100 + 'vh';
  sparkle.style.fontSize = '16px';
  sparkle.style.zIndex = '999';
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 800);
});
