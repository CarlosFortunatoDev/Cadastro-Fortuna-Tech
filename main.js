const formulario = document.querySelector("#formulario")
const nomeCompleto = document.querySelector("#fullName")
const buttonReset = document.querySelector("#reset")
const salarioBase = document.querySelector("#salarioBase")
const jornadaDeTrabalho = document.querySelector("#jornadaDeTrabalho")
const horasTrabalhadas = document.querySelector("#horasTrabalhadas")
const horaExtra = document.querySelector("#horaExtra")
const salarioTotal = document.querySelector("#salarioTotal")
const calcular = document.querySelector("#calcular")
const check = document.querySelector("#check")
const funcionario = document.querySelector("#funcionario")


document.addEventListener('DOMContentLoaded', () => {

  const calcularSalario = () =>{
    const valorSalarioBase = parseFloat(salarioBase.value) || 0;
    const valorJornadaDeTrabalho = parseFloat(jornadaDeTrabalho.value) || 0;
    const ValorHorasTrabalhadas = parseFloat(horasTrabalhadas.value) || 0;
    const ValorHoraExtra = parseFloat(horaExtra.value) || 0;

    if (valorJornadaDeTrabalho == 44){
      const valorSalarioTotal = ((valorSalarioBase / 176) * ValorHorasTrabalhadas) + ((valorSalarioBase / 176) * (ValorHoraExtra*2))
      salarioTotal.value = valorSalarioTotal.toFixed(2)
    } else if(valorJornadaDeTrabalho == 30){
      const valorSalarioTotal = ((valorSalarioBase / 120) * ValorHorasTrabalhadas) + ((valorSalarioBase / 120) * (ValorHoraExtra*2))
      salarioTotal.value = valorSalarioTotal.toFixed(2)
    }
  }
  salarioBase.addEventListener('input', calcularSalario);
  jornadaDeTrabalho.addEventListener('input', calcularSalario);
  horasTrabalhadas.addEventListener('input', calcularSalario);
  horaExtra.addEventListener('input', calcularSalario);

})

const adicionarFuncionario = () => {
  const nomeFuncionario = nomeCompleto.value;
  funcionario.textContent = nomeFuncionario
}
nomeCompleto.addEventListener('input', adicionarFuncionario);



buttonReset.addEventListener("click", () => {
  for (let i = 0; i < formulario.length; i++) {
    formulario[i].value = ''
  }
  check.checked = false
})
