document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const fel = document.querySelectorAll(".fel");
    const le = document.querySelectorAll(".le");

    if (!menuIcon || !dropdownMenu) {
        console.error("Az ikon vagy a menü nem található!");
        return;
    }

    menuIcon.addEventListener("click", function () {
        dropdownMenu.classList.toggle("active");

    
        [...fel, ...le].forEach((img) => {
            img.classList.remove("play");
            void img.offsetHeight; 
        });

        if (dropdownMenu.classList.contains("active")) {
            setTimeout(() => {
                fel.forEach((img, index) => {
                    setTimeout(() => {
                        img.classList.add("play"); 
                    }, index * 500);
                });

                le.forEach((img, index) => {
                    setTimeout(() => {
                        img.classList.add("play"); 
                    }, (fel.length + index) * 500);
                });
            }, 100);
        } else {
            [...fel, ...le].forEach((img) => {
                img.classList.remove("play");
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let pageClass = document.body.classList[0]; // Az oldal osztályát lekéri
    let backgrounds = {
        "page1": "hatter.jpg",
        "page2": "blog.jpg",
        "page3":"támogatás.jpg"
    };

    document.querySelector(".bg-pan-tl").style.backgroundImage = `url('${backgrounds[pageClass]}')`;
});

document.addEventListener("mousemove", function (event) {
    const bgElement = document.querySelector(".bg-pan-tl");
    if (!bgElement) return;

    // Az egér X és Y koordinátái az ablakmérethez viszonyítva
    const xPercent = (event.clientX / window.innerWidth) * 100;
    const yPercent = (event.clientY / window.innerHeight) * 100;

    // Dinamikusan frissítjük a háttér pozícióját
    bgElement.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});
document.addEventListener("DOMContentLoaded", function() {
    let scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) { 
            scrollToTopButton.style.display = "block"; 
        } else {
            scrollToTopButton.style.display = "none"; 
        }
    });

    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
document.querySelector(".fixed-image").style.transform = "scaleX(-1)";
