/* ========================================
   BIRTHDAY SURPRISE
======================================== */

function openBirthdaySurprise() {
    const gift = document.getElementById("giftBox");
    const message = document.getElementById("birthdayMessage");
    const button = document.querySelector(".surprise-button");
    const music = document.getElementById("birthdayMusic");

    // Start birthday music
    if (music) {
        music.play().catch(() => {
            // Browser may block autoplay until user interaction.
        });
    }

    // Hide the gift
    if (gift) {
        gift.style.transform = "scale(0)";
        gift.style.opacity = "0";
    }

    // Hide the surprise button
    if (button) {
        button.style.opacity = "0";
        button.style.pointerEvents = "none";
    }

    // Show the birthday message
    setTimeout(() => {
        if (message) {
            message.classList.add("show");
        }

        createHearts();
    }, 700);
}


/* ========================================
   FLOATING HEARTS
======================================== */

function createHearts() {
    const heartCount = 25;

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");

        heart.textContent = "♥";
        heart.classList.add("surprise-heart");

        // Positioning
        heart.style.position = "fixed";
        heart.style.bottom = "-30px";
        heart.style.left = `${Math.random() * 100}%`;

        // Appearance
        heart.style.fontSize = "25px";
        heart.style.color = "white";

        // Interaction
        heart.style.zIndex = "2000";
        heart.style.pointerEvents = "none";

        // Animation
        heart.style.animation =
            "surpriseHeartFloat 5s linear forwards";

        heart.style.animationDelay =
            `${Math.random() * 2}s`;

        // Add heart to the page
        document.body.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
}


/* ========================================
   FULL-SCREEN PHOTO VIEWER
======================================== */

function openPhoto(photo) {
    const viewer = document.getElementById("photoViewer");
    const largePhoto = document.getElementById("largePhoto");
    const caption = document.getElementById("photoCaption");

    if (!viewer || !largePhoto || !caption || !photo) {
        return;
    }

    // Set the large image
    largePhoto.src = photo.src;

    // Set the image caption
    caption.textContent = photo.dataset.caption || "";

    // Show the photo viewer
    viewer.classList.add("show-photo");
}


/* ========================================
   CLOSE PHOTO VIEWER
======================================== */

function closePhoto() {
    const viewer = document.getElementById("photoViewer");

    if (!viewer) {
        return;
    }

    // Hide the photo viewer
    viewer.classList.remove("show-photo");
}
