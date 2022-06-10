window.onload = function () {
document.querySelectorAll('.price_list_web').forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('price_list_web_open').style.display = 'block';
    });
});

document.getElementById('price_list_web_close').onclick = (e) => {
    e.preventDefault();
    document.getElementById('price_list_web_open').style.display = 'none';
}

document.getElementById('price_list_web_close').onclick = (e) => {
    e.preventDefault();
    document.getElementById('price_list_web_open').style.display = 'none';
}
};