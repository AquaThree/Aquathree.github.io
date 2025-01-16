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

function clickGoLearnMoreButton() {
    window.scrollTo({
        top: document.getElementById("header").scrollHeight + document.getElementById("banner").scrollHeight,
        behavior: "smooth"
    });
}

function clickOpenPopupButton() {
    document.getElementById("popup").style.display = "flex";
}

function clickClosePopupButton() {
    document.getElementById("popup").style.display = "none";
}

onLoad();