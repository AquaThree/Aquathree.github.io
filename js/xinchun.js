function setTime() {
    var time = new Date("2025-1-29").getTime();
    var nowTime = Date.now();
    if(nowTime < time){
        var timestamp = Math.round((time - nowTime) / 1000);
        var days = parseInt(timestamp / 3600 / 24).toString().padStart(2, "0");
        var hours = parseInt(timestamp / 3600 % 24).toString().padStart(2, "0");
        var minutes = parseInt(timestamp / 60 % 60).toString().padStart(2, "0");
        var seconds = parseInt(timestamp % 60).toString().padStart(2, "0");
        parseInt(timestamp % 60).toString().substring()
        document.getElementById("time").innerText = days + ":" + hours + ":" + minutes + ":" + seconds;
    } else {
        document.getElementById("time").innerText = "新春快乐!!!";
    }
}

window.setInterval(setTime, 1000);
