/* Colours to match the birthday card */
const colours = [
    "#f4a7bb",
    "#f8d7da",
    "#d4af37",
    "#ffffff",
    "#c08497",
    "#e8b4cb"
];

/* Find the confetti container in the HTML */
const container = document.querySelector(".confetti-container");

/* Create 100 pieces of confetti */
for (let i = 0; i < 100; i++) {
    const piece = document.createElement("div");

    piece.classList.add("confetti");

    /* Choose a random colour */
    piece.style.backgroundColor =
        colours[Math.floor(Math.random() * colours.length)];

    /* Choose a random horizontal position */
    piece.style.left = Math.random() * 100 + "%";

    /* Set a random falling speed */
    const duration = 3 + Math.random() * 4;
    piece.style.animationDuration = duration + "s";

    /* Make each piece start at a different time */
    const delay = Math.random() * 1.5;
    piece.style.animationDelay = delay + "s";

    /* Give each piece a slightly different size */
    const size = 5 + Math.random() * 7;
    piece.style.width = size + "px";
    piece.style.height = size * 1.5 + "px";

    /* Add the piece to the webpage */
    container.appendChild(piece);

    /* Remove the piece after its animation finishes */
    setTimeout(() => {
        piece.remove();
    }, (duration + delay) * 1000);
}