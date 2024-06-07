import { navigateTo } from "../../../Router";

export function NotFound() {
  const $renderPage = document.getElementById("root");
  const $pageNotFound = `
    <div>
      <h1>NOT FOUND PAGE</h1>
      <h3>Error 404</h3>
    </div>
    <div>
      <button id="btn-return">Return</button>
    </div>
    `;

    $renderPage.innerHTML = `
    ${$pageNotFound}
    `
    //logic
    const $return = document.getElementById('btn-return');
    $return.addEventListener('click',e =>{
      navigateTo('/register')
    })
}
