const body = document.body;
const secilen = document.getElementById("secilen");
var obje = document.getElementById("objeekle");
var objeler = [];
var objeid = [];
var i = -1;
const liste = document.getElementById("liste");
window.onload = () => {
  body.style.backgroundColor = "#333333";
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.boxSizing = "border-box";
};
function objeekle() {
  i++;
  objeid[i] = i;
  objeler[i] =
    "<li onclick='$(this).hide()' id=" + objeid[i] + ">" + obje.value + "</li>";
  liste.innerHTML += objeler[i];
}
function rastgele() {
  secilen.innerHTML = objeler[Math.floor(Math.random() * objeler.length)];
  console.log(objeler.length);
}
