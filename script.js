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

}
```
