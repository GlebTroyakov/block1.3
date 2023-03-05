function readMore() {
    let btn_open_text = document.getElementById("btn_open_text");
    let btn_close_text = document.getElementById("btn_close_text");
    let about_us_text = document.getElementById("about_us_text");

    if (btn_open_text.style.display !== "none") {
        about_us_text.style.height = "100%";
        btn_open_text.style.display = "none";
        btn_close_text.style.display = "inline";
    } else if (window.innerWidth <= 768) {
        about_us_text.style.height = "120px";
        btn_open_text.style.display = "inline";
        btn_close_text.style.display = "none";
    } else if (window.innerWidth <= 1200) {
        btn_open_text.style.display = "inline";
        about_us_text.style.height = "150px";
        btn_close_text.style.display = "none";
    } else {
        btn_open_text.style.display = "inline";
        about_us_text.style.height = "155px";
        btn_close_text.style.display = "none";
    }
}