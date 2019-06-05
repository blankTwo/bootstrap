var count = -120;
var settim;
var animation;
$(function () {
    setoffleft();
    loadlottie();
})

function setoffleft() {
    count++;
    var w = document.body.clientWidth - 115;
    var _dom = document.querySelector("#bm");
    if (_dom) _dom.setAttribute("style", "left:" + count + "px"); else
        return;

    if (count >= w) {
        count = -120;
    }
    settim = setTimeout(() => {
        setoffleft();
    }, 7);
}

function onscroll() {
    var top = $(document).scrollTop();
    if (top >= 100) document.querySelector("header").classList.add("mindiv");
    else document.querySelector("header").classList.remove("mindiv");
}

function loadlottie() {
    if (document.getElementById("bm")) {
        animation = bodymovin.loadAnimation({
            container: document.getElementById("bm"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "https://assets10.lottiefiles.com/packages/lf20_aufO4c.json"
        });
    }
}

