const players = ["Jugador 1", "Jugador 2"]
var turno = 0
var marca = "O"
check = "vacia"
var power = true

function pintarGanador(x1, x2, x3) {
    document.getElementById(x1).style.backgroundColor = "green"
    document.getElementById(x2).style.backgroundColor = "green"
    document.getElementById(x3).style.backgroundColor = "green"
}


function comprobar() {
    if (turno % 2 == 0) {
        marca = "O"
    } else {
        marca = "X"
    }

    if (document.getElementById("estadoUno").innerText == marca && document.getElementById("estadoDos").innerText == marca && document.getElementById("estadoTres").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("1","2","3")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (document.getElementById("estadoCuatro").innerText == marca && document.getElementById("estadoCinco").innerText == marca && document.getElementById("estadoSeis").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("4","5","6")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (document.getElementById("estadoSiete").innerText == marca && document.getElementById("estadoOcho").innerText == marca && document.getElementById("estadoNueve").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("7","8","9")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (document.getElementById("estadoUno").innerText == marca && document.getElementById("estadoCuatro").innerText == marca && document.getElementById("estadoSiete").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("1","4","7")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (document.getElementById("estadoDos").innerText == marca && document.getElementById("estadoCinco").innerText == marca && document.getElementById("estadoOcho").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("2","5","8")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (document.getElementById("estadoTres").innerText == marca && document.getElementById("estadoSeis").innerText == marca && document.getElementById("estadoNueve").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("3","6","9")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (document.getElementById("estadoUno").innerText == marca && document.getElementById("estadoCinco").innerText == marca && document.getElementById("estadoNueve").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("1","5","9")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (document.getElementById("estadoTres").innerText == marca && document.getElementById("estadoCinco").innerText == marca && document.getElementById("estadoSiete").innerText == marca) {
        document.getElementById("salida").innerText = "Ha ganado el Jugador " + marca
        pintarGanador("3","5","7")
        power = false
        document.getElementById("restart").style.display = "flex"
    } else if (turno == 8) {
        document.getElementById("salida").innerText = "Ha habido Empate"
        power = false
        document.getElementById("restart").style.display = "flex"
    }
}


function jugar(numero, casilla) {
    console.log(document.getElementById(casilla).innerHTML == check)
    if (document.getElementById(casilla).innerHTML == check && power) {
        console.log("Entro en el primer if")
        if (turno % 2 == 0) {
            console.log("Entro en el segundo if")
            document.getElementById(numero).style.backgroundImage = "url('bx-radio-circle.svg')"
            document.getElementById(numero).style.backgroundRepeat = "no-repeat"
            document.getElementById(numero).style.backgroundSize = "100px 100px"
            document.getElementById(casilla).innerText = "O"
            document.getElementById("salida").innerText = " "
            comprobar()
        } else if (turno % 2 != 0) {
            console.log("Entro en el else if")
            document.getElementById(numero).style.backgroundImage = "url('bx-x.svg')"
            document.getElementById(numero).style.backgroundRepeat = "no-repeat"
            document.getElementById(numero).style.backgroundSize = "100px 100px"
            document.getElementById(casilla).innerText = "X"
            document.getElementById("salida").innerText = " "
            comprobar()
        }
        turno++
    }else if (document.getElementById(casilla).innerHTML != check) {
        document.getElementById("salida").innerText = "Casilla Ocupada!"
    }
}

function reset() {
    location.reload()
}
