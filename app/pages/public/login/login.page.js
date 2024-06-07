import { navigateTo } from "../../../Router";

export function LoginPage() {
  const $renderPage = document.getElementById("root");
  const $pageLogin = `
    <form id="formLogin">
        <label for="email">Correo Electronico</label>
        <input type="email" name="email" placeholder="Indicar email" id="email">
        <label for="password">Contrseña</label>
        <input type="password" name="password" id="password">
        <button type="submit" name="btn-submit" id="btn-submit">Log in</button>
    </form>
    `;
  $renderPage.innerHTML = `
    ${$pageLogin}
    `;
  //logic
  const $formLogin = document.getElementById("formLogin");
  $formLogin.addEventListener("submit",async (e) => {
    e.preventDefault();

    const $emailUser = document.getElementById("email").value;
    const $passwordUser = document.getElementById("password").value;
    

    if (!$emailUser || !$passwordUser) {
      alert("Todos los campos son requeridos")
    }

    const $userLogged = await fetch("http://localhost:3000/User");

    if (!$userLogged.ok) {
      alert("Error al iniciar sesion");
      return;
    }    

    const $verifyAdmin = 1

    const $userToJson = await $userLogged.json();
    const $userFound = $userToJson.find((user) => user.email === $emailUser);
    const $matchPassword = $userToJson.find((user)=>user.password === $passwordUser);
    const $roleUser = $userToJson.find((user)=>user.roleId === $verifyAdmin)
    
    
    if ($userFound && $matchPassword && $roleUser) {  
        const $token = Math.random().toString(36).substring(2);
        localStorage.setItem("token", $token);
        const $roleAdmin = 'Authorized'
        localStorage.setItem("Admin", $roleAdmin)
        navigateTo('/dashboard')         
    }else if($userFound && $matchPassword && !$roleUser){
        const $token = Math.random().toString(36).substring(2);
        localStorage.setItem("token", $token);
        navigateTo('/dashboard')
    }else{
      alert('Usuario no encontrado')
    }

  });
}
