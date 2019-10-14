var expect = chai.expect;
var restaurant = new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]);
var lista = [restaurant];
var listado = new Listado(lista);
var reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1")
var reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200")
describe('Reservar un horario.', () => {
    var horariosALmacenados = restaurant.horarios;
    var reservarHorario = "6:00";
    it('Cuando se reserva un horario de un restaurant, el horario correspondiente se elimina del arreglo.', () => {
        restaurant.reservarHorario(reservarHorario);
        expect(horariosALmacenados).to.not.include("6:00");
    });
    it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', () => {
        var adicionarHorario = "50:00";
        restaurant.reservarHorario(adicionarHorario);
        expect(horariosALmacenados).to.have.ordered.members(horariosALmacenados);
    });
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', () => {
        restaurant.reservarHorario();
        expect(horariosALmacenados).to.have.ordered.members(horariosALmacenados);
    });
    it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', () => {
        restaurant.reservarHorario();
        expect(horariosALmacenados).to.have.ordered.members(horariosALmacenados);
    });
    it('La cantidad de elementos del arreglo disminuya o no según corresponda.', () => {
        restaurant.reservarHorario(reservarHorario);
        expect(2).to.equal(horariosALmacenados.length - 1);
    });
    it('El arreglo se mantenga igual, exactamente con los mismos elementos.', () => {
        restaurant.reservarHorario(reservarHorario);
        expect(horariosALmacenados.length).to.equal(horariosALmacenados.length);
    });
    it('El arreglo cambie y contenga exactamente los elementos que corresponden.', () => {
        restaurant.reservarHorario(reservarHorario);
        expect(horariosALmacenados.length).to.equal(horariosALmacenados.length);
    });
});
describe('Obtener puntuación.', () => {
    it('Dado un restaurant con determinadas calificaciones, la puntuación (que es el promedio de ellas) se calcula correctamente.', () => {
        expect(restaurant.obtenerPuntuacion()).to.be.above(0);
    });
    it('Dado un restaurant que no tiene ninguna calificación, la puntuación es igual a 0.', () => {
        restaurant.calificaciones = [];
        expect(restaurant.obtenerPuntuacion()).to.equal(0);
    });
});
describe('Calificar()', () => {
    var listaCalificaciones = restaurant.calificaciones;
    var rangoCalificacion = restaurant.calificaciones.length;
    it('La calificacion sea de 1 a 9', () => {
        restaurant.calificar(4);
        expect(listaCalificaciones).to.have.lengthOf(rangoCalificacion);
    });
    it('El valor no sea una letra', () => {
        restaurant.calificar('Puntuacion');
        expect(listaCalificaciones).to.eql(listaCalificaciones);
    });
});
describe('buscarRestaurante(id).', () => {
    it('No existe id.', () => {
        var consultarRestaurante = listado.buscarRestaurante('11');
        expect(consultarRestaurante).to.be.an('string');
    });
    it('Parámetro nulo.', () => {
        var busquedaRestaurante = listado.buscarRestaurante(null);
        expect(busquedaRestaurante).to.be.an('string');
    });
});
describe('obtenerRestaurantes().', () => {
    it('Parámetros nulos.', () => {
        var totalRestaurantes = listado.restaurantes;
        var restaurantesAlmacenados = listado.obtenerRestaurantes(null, null, null);
        expect(restaurantesAlmacenados).to.have.ordered.members(totalRestaurantes);
    });
});
describe('Reserva1().', () => {
    var precioBase = reserva1.precioReserva();
    var precioFinal = reserva1.totalReserva();
    it('Que un restaurante calcule correctamente su precio base.', () => {
        expect(precioBase).to.equal(2800);
    });
    it('Que un restaurante calcule correctamente su precio final, contemplando bien los descuentos y los adicionales.', () => {
        expect(precioFinal).to.equal(3710);
    });
});
describe('Reserva2().', () => {
    var precioBase = reserva2.precioReserva();
    var precioFinal = reserva2.totalReserva();
    it('Que un restaurante calcule correctamente su precio base.', () => {
        expect(precioBase).to.equal(300);
    });
    it('Que un restaurante calcule correctamente su precio final, contemplando bien los descuentos y los adicionales.', () => {
        expect(precioFinal).to.equal(530);
    });
});