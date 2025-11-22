document.addEventListener('DOMContentLoaded', () => {
    let noBtn = document.querySelector(".noBtn");
    let yesBtn = document.querySelector(".yesBtn");
    let heading = document.querySelector("h1");
    noBtn.addEventListener('mouseenter', () => {
        // Generate random positions within the viewport dimensions
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        // Set the button's new position
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    });

    // Corrected the event listener for yesBtn
    yesBtn.addEventListener("click", () => {
        heading.innerHTML = "I knew it 🤭 <br/> 😅😂"
        yesBtn.style.display="none";
        noBtn.style.display="none";
    });
});


