var Restaurant = function(id, nombre, rubro, ubicacion, horarios, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
}

Restaurant.prototype.reservarHorario = function(horarioReservado) {
    for (var i = 0; i < this.horarios.length; i++) {
        if (this.horarios[i] === horarioReservado) {
            //this.horarios.splice(i, 1);
            this.horarios = this.horarios.filter(hora => hora !== horarioReservado);
            return;
        }
    }
}

Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}

Restaurant.prototype.obtenerPuntuacion = function() {
    // if (this.calificaciones.length === 0) {
    //     return 0;
    // } else {
    //     var sumatoria = 0;
    //     for (var i = 0; i < this.calificaciones.length; i++) {
    //         sumatoria += this.calificaciones[i]
    //     }
    //     var promedio = sumatoria / this.calificaciones.length;
    //     return Math.round(promedio * 10) / 10;
    // }
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return Math.round(promedio(this.calificaciones) * 10) / 10;
    }
}

function sumatoria(sumandos) {
    var suma = 0;
    sumandos.forEach((sumando) => {
        suma += sumando;
    });
    return suma;
}

function promedio(cantidad) {
    return sumatoria(cantidad) / cantidad.length;
}
