
function somar(){
    var t1 = window.document.getElementById('valor1')
    var t2 = window.document.getElementById('valor2')
    var res = window.document.getElementById('res')
    
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var s = n1 + n2

    res.innerHTML = ` ${n1} + ${n2} =
    <strong>${s}</strong>`
}

function subtrair(){
    var t1 = window.document.getElementById('valor1')
    var t2 = window.document.getElementById('valor2')
    var res = window.document.getElementById('res')
    
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var s = n1 - n2

    res.innerHTML = ` ${n1} / ${n2} =
    <strong>${s}</strong>`
    
}

function multiplicar (){
    var t1 = window.document.getElementById('valor1')
    var t2 = window.document.getElementById('valor2')
    var res = window.document.getElementById('res')
    
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var s = n1 * n2

    res.innerHTML = ` ${n1} x ${n2} =
    <strong>${s}</strong>`
}

function dividir(){
    var t1 = window.document.getElementById('valor1')
    var t2 = window.document.getElementById('valor2')
    var res = window.document.getElementById('res')
    
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var s = n1 / n2

    res.innerHTML = ` ${n1} * ${n2} =
    <strong>${s}</strong>`
}