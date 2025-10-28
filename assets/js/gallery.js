document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".square-thumb img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close-btn");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 0;

  // Open Lightbox
  galleryItems.forEach((img, index) => {
    img.addEventListener("click", function() {
      lightbox.style.display = "block";
      lightboxImg.src = this.src;
      currentIndex = index;
    });
  });

  // Close Lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Navigation
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
  });

  // Close when clicking outside image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.style.display = "none";
  });
});
