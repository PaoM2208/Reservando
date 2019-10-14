var Reserva = function(horario, cantidadPersonas, precioPersona, codigoDescuento) {
    this.horario = horario;
    this.cantidadPersonas = cantidadPersonas;
    this.precioPersona = precioPersona;
    this.codigoDescuento = codigoDescuento;
}

Reserva.prototype.precioReserva = function() {
    return this.cantidadPersonas * this.precioPersona;
}

Reserva.prototype.totalReserva = function() {
    var precio = this.precioReserva();
    var totalDescuentos = descuentos(this.cantidadPersonas, precio, this.codigoDescuento, this.precioPersona);
    var totalAdicionales = adicionales(this.horario, precio);
    var totalReservacion = precio + totalAdicionales - totalDescuentos;
    return totalReservacion;
}

function adicionales(horario, precio) {
    precio = adicionalesHorario(horario, precio);
    precio = adicionalesFinSemana(horario, precio);
    return precio;
}

function descuentos(cantidadPersonas, precio, codigoDescuento, precioPersona) {
    precio = descuentoGrupos(cantidadPersonas, precio);
    precio = descuentoCodigo(codigoDescuento, precio, precioPersona);
    return precio;
}

function porcentaje(precio, porcetaje) {
    return (precio * porcetaje) / 100;
}

function adicionalesFinSemana(horario, precio) {
    const dia = horario.getDay()
    if (dia === 4 || dia === 5 || dia === 6) {
        precio += porcentaje(precio, 10);
    }

    return precio;
}

function adicionalesHorario(horario, precio) {
    const dia = horario.getDate();
    if (dia == 13 || dia == 14 ||
        dia == 20 || dia == 21) {
        precio += porcentaje(precio, 5);
    }

    return precio;
}

function descuentoCodigo(codigoDescuento, precio, precioPersona) {
    if (codigoDescuento == 'DES15') {
        precio -= porcentaje(precio, 15);
    } else if (codigoDescuento == 'DES200') {
        precio -= 200;
    } else if (codigoDescuento == 'DES1') {
        precio -= precioPersona;
    }

    return precio;
}

function descuentoGrupos(cantidadPersonas, precio) {
    if (cantidadPersonas > 4 && cantidadPersonas < 6) {
        precio -= porcentaje(precio, 5);
    } else if (cantidadPersonas = 7 || cantidadPersonas == 8) {
        precio -= porcentaje(precio, 10);
    } else if (cantidadPersonas > 8) {
        precio -= porcentaje(precio, 15);
    }

    return precio;
}