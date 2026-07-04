

document.addEventListener("DOMContentLoaded", function () {


    const form = document.getElementById("registrationForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const successMessage =
                document.getElementById("successMessage");

            if (successMessage) {

                successMessage.classList.remove("d-none");

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }

            form.reset();

        });

    }


    const themeBtn = document.getElementById("themeBtn");

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        if (themeBtn) {

            themeBtn.innerHTML =
                '<i class="bi bi-sun-fill"></i>';

        }

    }

    if (themeBtn) {

        themeBtn.addEventListener("click", function () {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                localStorage.setItem("theme", "dark");

                themeBtn.innerHTML =
                    '<i class="bi bi-sun-fill"></i>';

            }

            else {

                localStorage.setItem("theme", "light");

                themeBtn.innerHTML =
                    '<i class="bi bi-moon-stars-fill"></i>';

            }

        });

    }

    const counters =
        document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
                +counter.getAttribute("data-target");

            const current =
                +counter.innerText;

            const increment =
                Math.ceil(target / 100);

            if (current < target) {

                counter.innerText =
                    current + increment;

                setTimeout(updateCounter, 20);

            }

            else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });


    const countdown =
        document.getElementById("countdown");

    if (countdown) {

        const eventDate =
            new Date("December 31, 2026 09:00:00").getTime();

        setInterval(function () {

            const now = new Date().getTime();

            const distance =
                eventDate - now;

            if (distance < 0) {

                countdown.innerHTML =
                    "🎉 Event Started!";

                return;

            }

            const days =
                Math.floor(distance /
                    (1000 * 60 * 60 * 24));

            const hours =
                Math.floor((distance %
                    (1000 * 60 * 60 * 24))
                    / (1000 * 60 * 60));

            const minutes =
                Math.floor((distance %
                    (1000 * 60 * 60))
                    / (1000 * 60));

            const seconds =
                Math.floor((distance %
                    (1000 * 60))
                    / 1000);

            countdown.innerHTML =

                days + "d "

                + hours + "h "

                + minutes + "m "

                + seconds + "s";

        }, 1000);

    }

});




window.addEventListener("scroll", function () {

    const winScroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled =
        (winScroll / height) * 100;

    const progress =
        document.getElementById("progress-bar");

    if (progress) {

        progress.style.width =
            scrolled + "%";

    }

});




const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}



const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.boxShadow = "none";

    }

});