const btn = document.getElementById('btn-theme-toggle');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    document.body.classList.toggle('dark');
});
