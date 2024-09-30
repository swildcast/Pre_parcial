fetch('data/taller.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const tituloPagina = document.getElementById('titulo_pagina');
        tituloPagina.innerHTML = data.titulo_pagina;

    const datos = document.getElementById('datos');
datos.innerHTML = `
    <div class="card bg-light mb-3 text-center"> 
        <div class="card-body">
            <h5 class="card-title text-primary" style="font-family: 'Courier New', Courier, monospace;"></h5> <!-- Clase de Bootstrap para el título de la tarjeta con texto en color primario y fuente diferente -->
            <p class="card-text"><strong style="color: red;">Nombre:</strong> <span style="color: green;">${data.datos_tienda.nombre}</span></p> <!-- Etiqueta en rojo y atributo en negro -->
            <p class="card-text"><strong style="color: red;">Correo:</strong> <span style="color: black;">${data.datos_tienda.correo}</span></p>
            <p class="card-text"><strong style="color: red;">Teléfono:</strong> <span style="color: black;">${data.datos_tienda.telefono}</span></p>
            <p class="card-text"><strong style="color: red;">Dirección:</strong> <span style="color: black;">${data.datos_tienda.direccion}</span></p>
        </div>
    </div>
`;



        const computadores = data.computadores;
        console.log(computadores);

        let computadoresHTML = '';
        for(let i = 0; i < computadores.length; i++) {
            console.log(computadores[i].nombre);
            computadoresHTML += `
                <tr class="table-responsive-table-<div class="shadow p-3 mb-5 bg-body-tertiary rounded">Portatil</div>"<li class="list-group-item list-group-item-info">PROMOCION</li> > 
                    <td tab>${computadores[i].nombre}</td>
                    <td>${computadores[i].descripcion}</td>
                    <td class="text-success"><strong>$${computadores[i].precio.toFixed(2)}</strong></td> <!-- Clase de Bootstrap para el texto en color verde -->
                </tr>
            `;
        }

        const tablaComputadores = document.getElementById('tabla_computadores');
        tablaComputadores.innerHTML = computadoresHTML;
    });
