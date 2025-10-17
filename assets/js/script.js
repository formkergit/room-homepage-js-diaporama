let currentDiapoIndex = 0;
const diapos = document.querySelectorAll(".txtDiscover");


document.querySelector('.precedent').addEventListener('click',() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex - 1);
});

document.querySelector('.suivant').addEventListener('click',() => {
    showDiapo(currentDiapoIndex = currentDiapoIndex + 1);
});

function showDiapo(currentDiapoIndexParametre) {
    diapos.forEach(
        (diapo) => {diapo.style.display = "none"}
    );

    if (currentDiapoIndexParametre >= diapos.length) {
        currentDiapoIndex = 0;
    } else if (currentDiapoIndexParametre < 0) {
        currentDiapoIndex = diapos.length -1;
    } 
 
    diapos[currentDiapoIndex].style.display = "block";
}

showDiapo(currentDiapoIndex);