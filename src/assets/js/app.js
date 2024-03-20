const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hiddenElements = document.querySelectorAll('.hidden');
    // console.log(hiddenElements);
    hiddenElements.forEach((el) => {
        observer.observe(el)
    })
});
