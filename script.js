
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('#navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('visible');
});

;




window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
ddocument.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
    readMoreButtons.forEach(button => {
      button.addEventListener('click', () => {
        const moreContent = button.nextElementSibling;
        if (moreContent.style.display === 'block') {
          moreContent.style.display = 'none';
          button.classList.remove('active');
        } else {
          moreContent.style.display = 'block';
          button.classList.add('active');
        }
      });
    });
  });
  