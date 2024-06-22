var saniye = document.querySelector(".saniye")
var deqiqe = document.querySelector(".deqiqe")
var saat = document.querySelector(".saat")
var start = document.querySelector(".start")
var stopp = document.querySelector(".stop")
var reset = document.querySelector(".reset")
var saniyee = 0
var deqiqee = 0
var saatt = 0
start.onclick = function () {
    stopp.onclick = function () {
        clearInterval(a)
    }
    reset.onclick = function () {
        saniyee = 0
        deqiqee = 0
        saatt = 0
        saat.innerText = saatt;
        deqiqe.innerText = deqiqee;
        saniye.innerText = saniyee;
        clearInterval(a)

    }
    var a = setInterval(function () {
        saniyee++

        if (saniyee == 60) {
            saniyee = 0
            deqiqee++
            deqiqe.innerText = deqiqee
        }
        if (deqiqee == 60) {
            deqiqee = 0
            saatt++
            saat.innerText = saatt
        }
        if (saatt == 24) {
            saatt = 0
        }
        saniye.innerText = saniyee

    }, 100)

}
