function onLoad() {

}

function openButtonAnim(name) {
    if (document.getElementById(name).style.transform != "scale3d(1, 1, 1)") {
        document.getElementById(name).style.transform = "scale3d(1, 1, 1)";
    }
}

function closeButtonAnim(name) {
    if (document.getElementById(name).style.transform != "scale3d(0, 1, 1)") {
        document.getElementById(name).style.transform = "scale3d(0, 1, 1)";
    }
}

function goLearnMore() {
    window.scrollTo({
        top: document.getElementById("header").scrollHeight + document.getElementById("banner").scrollHeight,
        behavior: "smooth"
    });
}

onLoad();