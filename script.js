function navigate(url) {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('show');
    setTimeout(() => {
        window.location.href = url;
    }, 500); // Match this duration to the CSS transition duration
}
