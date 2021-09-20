let totalJugadas = 0;
let ganadas = 0;
let perdidas = 0;
let empatadas = 0;

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
const choice = (choice) => {
  const choices = ['piedra', 'papel', 'tijera']
  const choiceMachine = choices[getRandomInt(0, 3)]

  if (choice == choiceMachine) {


    empatadas += 1
    document.getElementById("resultado").innerHTML =
      `<h2>EMPATE la maquina eligio ${choiceMachine}.</h2>`

  } else if (choice == 'piedra' && choiceMachine == 'tijera' ||
    choice == 'papel' && choiceMachine == 'piedra' ||
    choice == 'tijera' && choiceMachine == 'papel') {


    ganadas += 1
    document.getElementById("resultado").innerHTML = `<h2>GANASTE la maquina eligio ${choiceMachine}.</h2>`

  } else {

    perdidas += 1
    document.getElementById("resultado").innerHTML = `<h2>PERDISTE la maquina eligio ${choiceMachine}.</h2>`

  }

  totalJugadas += 1
  document.getElementById("historial").innerHTML = `<p>Total jugadas: ${totalJugadas}</p>
      <p>Ganadas: ${ganadas}</p>
      <p>Empatadas: ${empatadas}</p>
      <p>Perdidas: ${perdidas}</p>`
}
const reset = () => {
  totalJugadas = 0;
  ganadas = 0;
  perdidas = 0;
  empatadas = 0;
  document.getElementById("resultado").innerHTML = ``
  document.getElementById("historial").innerHTML = `<p>Total jugadas: ${totalJugadas}</p>
  <p>Ganadas: ${ganadas}</p>
  <p>Empatadas: ${empatadas}</p>
  <p>Perdidas: ${perdidas}</p>`
}