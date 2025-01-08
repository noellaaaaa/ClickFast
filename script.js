let nombreDeClic = 0;
let tempsRestant = 5;
let intervalle;
let timerStart = false;

function counting() {
  if (!timerStart) {
    timerStart = true;
    document.getElementById(
      "timer"
    ).textContent = `temps restant : ${tempsRestant} seconde `;
    intervalle = setInterval(() => {
      tempsRestant--;
      document.getElementById(
        "timer"
      ).textContent = `temps restant : ${tempsRestant} seconde `;
      if (tempsRestant <= 0) {
        clearInterval(intervalle);
        alert(`Temps écoulé ! Vous avez cliquez ${nombreDeClic} fois`);
      }
    }, 1000);
  }
  if (tempsRestant > 0) {
    nombreDeClic++;
    document.getElementById("nombreDeClic").textContent = nombreDeClic;
    
  }
}
 document.getElementById("boutonClic").addEventListener("click", counting);
