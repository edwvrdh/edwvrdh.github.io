const observer = new IntersectionObserver((entries) =>
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
)

const hiddenElements = document.querySelectorAll('.container');
const fadeElements = document.querySelectorAll('.single-container');
hiddenElements.forEach((el) => observer.observe(el));
fadeElements.forEach((el) => observer.observe(el));