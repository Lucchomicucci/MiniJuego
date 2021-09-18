const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  const choice = (choice) =>{
    const choices = ['piedra', 'papel', 'tijera']
    const choiceMachine = choices[getRandomInt(0, 3)]
    
    if(choice == choiceMachine){
      console.log(`Elegiste ${choice}, la maquina eligio ${choiceMachine}. EMPATE `)
    }else if(choice == 'piedra' && choiceMachine == 'tijera' ||
             choice == 'papel' && choiceMachine == 'piedra' ||
             choice == 'tijera' && choiceMachine == 'papel'){
      console.log(`Elegiste ${choice}, la maquina eligio ${choiceMachine}. GANASTE `)
    }else{
      console.log(`Elegiste ${choice}, la maquina eligio ${choiceMachine}. PERDISTE `)
    }
  }