const temperatura = document.getElementById("temp");
const resultado = document.getElementById("resultado")

const calcular = () => {
  const select = document.getElementById("selectOrigen");
  const unidadOrigen = select.options[select.selectedIndex].text;
  const select2 = document.getElementById("selectDestino");
  const unidadDestino = select2.options[select2.selectedIndex].text;
  console.log(unidadOrigen)
  console.log(unidadDestino)
  const formulas = () => {
    let temp = temperatura.value;
    let res;
    if (unidadOrigen === "Celsius") {
      if (unidadDestino === "Fahrenheit") {
        res = (temp * 9 / 5) + 32;
      } else if (unidadDestino === "Kelvin") {
        res = parseFloat(temp) + 273.15;
      }
    } else if (unidadOrigen === "Fahrenheit") {
      if (unidadDestino === "Celsius") {
        res = (temp - 32) * 5 / 9;
      } else if (unidadDestino === "Kelvin") {
        res = parseFloat(temp - 32) * 5 / 9 + 273.15;
      }
    } else if (unidadOrigen === "Kelvin") {
      if (unidadDestino === "Celsius") {
        res = parseFloat(temp) - 273.15;
      } else if (unidadDestino === "Fahrenheit") {
        res = parseFloat(temp - 273.15) * 9 / 5 + 32;
      }
    }
    if (res !== undefined && res !== null) { // verificamos si el valor NO es undefined ni null
      resultado.innerHTML = res.toFixed(2); // llamamos al método toFixed
    }
  }
  if (unidadOrigen === unidadDestino) {
    // Impedir que el usuario seleccione la misma unidad de origen y destino
    let optionList = select2.options;
    for (let i = 0; i < optionList.length; i++) {
      if (optionList[i].text === unidadOrigen) {
        optionList[i].disabled = true;
        optionList[i].selected = false;
      } else {
        optionList[i].disabled = false;
      }
    }
  } else {
    // Habilitar todas las opciones
    let optionList = selectDestino.options;
    for (let i = 0; i < optionList.length; i++) {
      optionList[i].disabled = false;
    }
  }
  formulas()
  temperatura.addEventListener("input", () => {
    formulas()
  }) 
};

calcular()
