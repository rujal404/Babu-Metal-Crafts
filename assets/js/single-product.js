// Optional animation or interactivity example
document.querySelectorAll(".option-card").forEach(card => {
  card.addEventListener("click", () => {
    alert(`You selected ${card.querySelector("h2").innerText}`);
  });
});
