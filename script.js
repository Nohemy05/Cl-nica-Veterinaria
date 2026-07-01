function enviarWhatsApp() {

    let dueno = document.querySelector('input[placeholder="Escribe tu nombre"]').value;
    let mascota = document.querySelector('input[placeholder="Ej. Luna, Max, Milo"]').value;
    let telefono = document.querySelector('input[type="tel"]').value;
    let servicio = document.querySelector('select').value;
    let fecha = document.querySelector('input[type="date"]').value;
    let hora = document.querySelector('input[type="time"]').value;
    let mensaje = document.querySelector('textarea').value;

    let numero = "50496512618"; 

    let texto =
`*Nueva cita veterinaria*

 Dueño: ${dueno}

 Mascota: ${mascota}

 Teléfono: ${telefono}

 Servicio: ${servicio}

 Fecha: ${fecha}

 Hora: ${hora}

 Observaciones:
${mensaje}`;

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
}