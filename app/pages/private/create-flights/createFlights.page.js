export function CreateFlightsPage(){
    const $content=`
    <form id="formCreateFlights">
        <label for="number">Numero de Vuelo</label>
        <input type="text" name="number" id="number" maxlength="20">
        <label for="origin">Origen del Vuelo</label>
        <input type="text" name="origin" id="origin" maxlength="50">
        <label for="destination">Destino del Vuelo</label>
        <input type="text" name="destination" id="destination" maxlength="50">
        <label for="departure">Fecha de salida en Formato YYYY-MM-DDT00:00:00</label>
        <input type="datetime" name="departure" id="departure">
        <label for="arrival">Fecha de llegada en Formato YYYY-MM-DDT00:00:00</label>
        <input type="datetime" name="arrival" id="arrival">
        <button type="submit" name="btn-create" id="btn-create">Guardar Cambios</button>
    </form>
    `;
    const logic = () => {
        const $formCreateFlights = document.getElementById('formCreateFlights');
        $formCreateFlights.addEventListener('submit', async(e)=>{
            e.preventDefault();

            const $numberFlight = document.getElementById('number').value;
            const $originFlight = document.getElementById('origin').value;
            const $destinationFlight = document.getElementById('destination').value;
            const $departureFlight = document.getElementById('departure').value;
            const $arrivalFlight = document.getElementById('arrival').value;

            if(!$numberFlight || !$originFlight || !$destinationFlight || !$departureFlight || !$arrivalFlight){
                alert('Todos los campos son requeridos')
                return
            }

            const $flightCreated = await fetch('http://localhost:3000/Flights', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    number: $numberFlight,
                    origin: $originFlight,
                    destination: $destinationFlight,
                    departure: $departureFlight,
                    arrival: $arrivalFlight
                  }),
            })

            if(!$flightCreated.ok){
                alert('Error al crear el vuelo');
                return;
            }

            alert('Vuelo creado exitosamente');
        });
    }

    return{
        $content,
        logic,
    }
}