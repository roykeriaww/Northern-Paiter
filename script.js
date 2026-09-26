/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* =========================
   CLOSE MENU
========================= */

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


/* =========================
   SCROLL
========================= */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================
   MEMBER REGISTRATION
========================= */

const memberForm = document.getElementById("memberForm");

if (memberForm) {

    memberForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("memberName").value.trim();
        const age = document.getElementById("memberAge").value.trim();
        const location = document.getElementById("memberLocation").value.trim();
        const bike = document.getElementById("memberBike").value.trim();


        /* CHECK FORM */

        if (!name || !age || !location || !bike) {

            alert("Sila isi semua maklumat terlebih dahulu.");

            return;

        }


        /* WHATSAPP MESSAGE */

        const message =
`🏍️ NORTHERN PAITER
MEMBER REGISTRATION

Nama: ${name}
Umur: ${age}
Stay: ${location}
Moto: ${bike}

Saya berminat untuk join Northern Paiter.`;


        /* WHATSAPP NUMBER */

        const whatsappNumber = "601128904157";


        /* WHATSAPP LINK */

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);


        /* OPEN WHATSAPP */

        window.location.href = whatsappURL;

    });

}/* =========================
   RIDE COUNTDOWN
========================= */

const rideDate = new Date("October 9, 2026 17:00:00").getTime();

const countdownTimer = setInterval(function() {

    const now = new Date().getTime();

    const distance = rideDate - now;

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");


    if (distance < 0) {

        clearInterval(countdownTimer);

        document.getElementById("countdown").innerHTML = `
            <div class="countdown-card">
                <p class="countdown-small">RIDE DAY</p>
                <h2>🏍️ CAMERON HIGHLAND ATTACK</h2>
                <p class="countdown-message">
                    Let's ride! Northern Paiter 🔥
                </p>
            </div>
        `;

    }

}, 1000);