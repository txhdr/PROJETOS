
function somar(){
    var t1 = window.document.getElementById('valor1')
    var t2 = window.document.getElementById('valor2')
    var res = window.document.getElementById('res')
    
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var s = n1 + n2

    res.innerHTML = ` ${n1} + ${n2} =
    <strong>${s}</strong>`

    document.body.style.backgroundColor = 'black'
    //res.innerHTML += ` <img src="imgs/bruxo.ico">`
    var img = document.createElement('img')
    img.src = 'imgs/bruxo.ico'; 
    document.getElementById('res').appendChild(img);


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

    document.body.style.backgroundColor = `#523478`

    var img = document.createElement('img')
    img.src = 'imgs/bruxo.ico'
    document.getElementById('res').appendChild(img)
    
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
    var img = document.createElement('img')
    img.src = 'imgs/bruxo.ico'
    document.body.style.backgroundColor = '#373478'
    document.getElementById('res').appendChild(img)
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
    document.body.style.backgroundColor = '#105785'

    var img = new Image();
    img.src = 'imgs/bruxo.ico'
    document.querySelector('div#res').appendChild(img);

}