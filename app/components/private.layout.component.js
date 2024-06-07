export function PrivateLayout ($content, logic){
    const $renderPage = document.getElementById('root').innerHTML=`
    <nav>
        <ul>
            <li><a href="" id="reserve">Reservar</a></li>
        </ul>
    </nav>
    ${$content}
    `;

    logic()
    
    const $linkReserve = document.getElementById('reserve')
    $linkReserve.addEventListener('click',e=>{
        e.preventDefault();
    })
}