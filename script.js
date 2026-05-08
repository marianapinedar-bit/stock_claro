const logoImages = document.querySelectorAll(".logo img, .footer-logo img");

logoImages.forEach((image) => {
  image.addEventListener("error", () => {
    image.src = "https://via.placeholder.com/150x50?text=StockClaro";
  });
});
