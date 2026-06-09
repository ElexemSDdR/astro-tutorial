const $headerLinks =
  document.querySelectorAll<HTMLAnchorElement>(".header-links");

$headerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    link.classList.add("link-active");
    console.log(link);
  });
});
