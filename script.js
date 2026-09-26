```javascript
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
   JOIN BUTTON
========================= */

function joinGroup() {
    window.open(
        "https://chat.whatsapp.com/E8qtWNcte0CHenEnZQ3XCM",
        "_blank"
    );
}

    alert(
        "NORTHERN PAITER\n\n" +
        "Group contact will be added here later."
    );

/* =========================
   MEMBER REGISTRATION
========================= */

const memberForm = document.getElementById("memberForm");

if (memberForm) {

    memberForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("memberName").value.trim();
        const age = document.getElementById("memberAge").value.trim();
        const location = document.getElementById("memberLocation").value.trim();
        const bike = document.getElementById("memberBike").value.trim();

        if (!name || !age || !location || !bike) {
            alert("Sila isi semua maklumat terlebih dahulu.");
            return;
        }

        const message =
`🏍️ NORTHERN PAITER
MEMBER REGISTRATION

Nama: ${name}
Umur: ${age}
Stay: ${location}
Moto: ${bike}

Saya berminat untuk join Northern Paiter.`;

        const whatsappNumber = "601128904157";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.location.href = whatsappURL;

    });

}