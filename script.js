const form = document.querySelector(".fale-conosco");
const mask = document.querySelector(".mascara-form");
const parag = document.querySelector("#parag");

function chamaForm() {
  form.style.left = "40%";
  mask.style.visibility = "visible";
  parag.style.visibility = "hidden";
}

function voltaForm() {
  form.style.left = "-300px";
  mask.style.visibility = "hidden";
  parag.style.visibility = "visible";

}
