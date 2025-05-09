
function updateCountdown() {
    const targetDate = new Date("May 26, 2026 00:00:00 GMT-0400"); // ET is GMT-4 during May (EDT)
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").textContent = "00:00:00:00";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const format = (num) => String(num).padStart(2, '0');
    document.getElementById("countdown").textContent =
        `${format(days)}:${format(hours)}:${format(minutes)}:${format(seconds)}`;
}


addEventListener("DOMContentLoaded", () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
})
