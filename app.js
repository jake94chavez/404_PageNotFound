var index = 0;

let changeBanner = () => {
    [].forEach.call(document.images, function(v, i) {
        document.images[i].hidden = i !== index
    });
    index = (index + 1) % document.images.length;
}
window.onload = () => {
    setInterval(changeBanner, 2000)
};