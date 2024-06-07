export function EditFlightsPage() {
  const $content = `
    <form id="formCreateFlights">
        <label for="number">Numero de Vuelo</label>
        <input type="text" name="number" id="number" maxlength="20">
        <label for="origin">Origen del Vuelo</label>
        <input type="text" name="origin" id="origin" maxlength="50">
        <label for="destination">Destino del Vuelo</label>
        <input type="text" name="destination" id="destination" maxlength="50">
        <label for="departure">Fecha de salida en Formato YYYY-MM-DDT00:00:00</label>
        <input type="datetime" name="departure" id="departure">
        <label for="arrival">Fecha de salida en Formato YYYY-MM-DDT00:00:00</label>
        <input type="datetime" name="arrival" id="arrival">
        <label for="capacity">Capacidad del avion</label>
        <input type="number" name="capacity" id="capacity">
        <button type="submit" name="btn-create" id="btn-create">Guardar Cambios</button>
    </form>
    `;
  const logic = async () => {
    const searchParams = window.location.search;
    const paramsTransformer = new URLSearchParams(searchParams);
    const flightId = paramsTransformer.get("flightId");
    const fetchedFlightId = await fetch(
      `http://localhost:3000/Flights/${flightId}`
    );
    const responseJson = await fetchedFlightId.json();
    const $numberFlight = document.getElementById("number").value;
    const $originFlight = document.getElementById("origin").value;
    const $destinationFlight = document.getElementById("destination").value;
    const $departureFlight = document.getElementById("departure").value;
    const $arrivalFlight = document.getElementById("arrival").value;
    const $capacityPlane = document.getElementById("capacity").value;

    $numberFlight = responseJson.number
    $originFlight = responseJson.origin
    $destinationFlight = responseJson.destination

    const $editFlight = await fetch('http://localhost:3000/Flights',{
        method: 'PATCH',
        header:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            departure: $departureFlight,
            arrival: $arrivalFlight,
            capacity: $capacityPlane
        })
    })

    if(!$editFlight.ok){
        alert('Error al guardar cambios')
        return;
    }

    alert('cambios guardados exitosamente')
  };

  return{
    $content,
    logic,
  }


}
