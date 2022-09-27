var elForm = document.querySelector(".form");
var elKM = document.querySelector(".inputkm");
var textDanger = document.querySelector(".text");
var elman = document.querySelector(".input-men");
var text = document.querySelector(".man-strong");
var eltext =document.querySelector(".text");
var elveloso = document.querySelector(".velo-strong");
var elCar = document.querySelector(".strong-car");
var elsam = document.querySelector(".strong-sam");




elForm.addEventListener('submit', function (e){
  e.preventDefault()
  var elvLU = Number(elKM.value) 
  
  if (isNaN(elvLU)) {
    eltext.textContent = "harf  mumkin emas"
    return
  } if (elvLU < 0) {
    eltext.textContent = "0 dan kichik sonlar kirg'azish mumkin emas"
    return
  }

  text.textContent = human(elvLU).toFixed(2)
  elveloso.textContent = velo(elvLU).toFixed(2)
  elCar.textContent = car(elvLU).toFixed(2)
  elsam.textContent = sam (elvLU).toFixed(2)
});


function human (elvLU) {
  return elvLU / 3.6
};

function velo (elvLU) {
  return elvLU / 20.1
};

function car (elvLU) {
  return elvLU / 70
};

function sam (elvLU) { 
  return elvLU / 800
};
 
