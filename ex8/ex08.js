function calculo(){
    let tabela = document.getElementById('tabela')
    let valor = document.getElementById('reais').value  
    let cedula = [200.0, 100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
    console.log("NOTAS:")
    tabela.innerHTML=""
    for (let i = 0; i < 6; i++) {
        let aux = parseInt(valor / cedula[i])
        tabela.innerHTML+=(`<li>${aux} nota(s) de R$ ${cedula[i].toFixed(2)}</li>`)
        valor = valor % cedula[i]
    }
    console.log("MOEDAS:")
    for (let j = 6; j < cedula.length; j++) {
        let aux = parseInt(valor / cedula[j])
        tabela.innerHTML+=(`<li>${aux} moeda(s) de R$ ${cedula[j].toFixed(2)}</li>`)
        valor = valor % cedula[j] + 0.00001
    }
    }