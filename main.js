const formulario = document.querySelector("#formulario")
const buttonReset = document.querySelector("#reset")
const salarioBase = document.querySelector("#salarioBase")
const horasTrabalhadas = document.querySelector("#horasTrabalhadas")
const horaExtra = document.querySelector("#horaExtra")





buttonReset.addEventListener("click", () => {
  console.log(salarioBase.value);
  console.log(diasTrabalhados.value);
  console.log(horaExtra.value);
  for (let i = 0; i < formulario.length; i++) {
    formulario[i].value = ''
  }
})
