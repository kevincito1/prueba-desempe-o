export function DashboardPage() {
  const $content = `
    <h1>Vuelos Actuales</h1>
    <div id="flights"></div>
    `;
  //logic
  const logic = async () => {
    const $flightsContainer = document.getElementById("flights");

    const allFlights = await fetch("http://localhost:3000/Flights");
    const responseJson = await allFlights.json();
    responseJson.forEach((flight) => {
      $flightsContainer.innerHTML += `
        <div>
            <h2>Numero de Vuelo: ${flight.number}</h2>
            <h4>Ciudad Despegue: ${flight.origin}</h4>
            <h4>Ciudad Aterrizaje: ${flight.destination}</h4>
            <h4>Fecha y Hora de Salida: ${flight.departure}</h4>
            <h4>Fecha y Hora de Llegada: ${flight.arrival}</h4>
            <h4>Capacidad del avion: ${flight.capacity}</h4>
            <div class="container-btns"></div>
        </div>        
            `;     
    });

        
    const $verifyUser = localStorage.getItem("Admin");
    if ($verifyUser) {
      const $btnsAdmin = document.getElementsByClassName("container-btns");
      const $btnEdit = document.createElement("BUTTON");
      $btnEdit.textContent = 'Editar'
      const $btnDelete = document.createElement("BUTTON");
      $btnDelete.textContent = 'Eliminar'
      $btnsAdmin.appendChild($btnEdit)
      $btnsAdmin.appendChild($btnDelete)
      
    }
  };

  return {
    $content,
    logic,
  };
}
