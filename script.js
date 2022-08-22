document.getElementById("github_profile").onclick = function(){
    window.open("https://github.com/GiovanniMonti", '_blank').focus();
}

function startTime_n(){
    let time = moment().tz("Europe/Rome").format("hh:mm:ss");

    document.getElementById("clock").textContent = time;
    document.getElementById("clock").innerText = time;

}
setInterval(startTime_n, 1000);
