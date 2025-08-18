const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if(secTop < triggerBottom){
      sec.classList.add("active");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
