export function RegisterPage() {
  const $renderPage = document.getElementById("root");
  const $pageRegister = `
    <form id="formRegister">
        <label for="name">Nombre</label>
        <input type="text" placeholder="Indicar nombre" name ="name" id="name">
        <label for="email">Correo electronico</label>
        <input type="email" placeholder="Indicar email" name ="email" id="email">
        <label for="birthday">Fecha de nacimiento</label>
        <input type="date" name="birthday" id="birthday">
        <label for="password">Contrseña</label>
        <input type="password" name="password" id="password">
        <button type="submit" name="btn-submit" id="btn-submit">Registrarse</button>
    </form>
    `;
  $renderPage.innerHTML = `
    ${$pageRegister}
    `;
  //logic

  const $formRegister = document.getElementById("formRegister");
  $formRegister.addEventListener("submit", async (e) => {
    e.preventDefault();

    const $nameUser = document.getElementById("name").value;
    const $emailUser = document.getElementById("email").value;
    const $birthdayUser = document.getElementById("birthday").value;
    const $passwordUser = document.getElementById("password").value;

    if (!$nameUser || !$emailUser || !$birthdayUser || !$passwordUser) {
      alert("Todos los campos son requeridos");
      return
    };

    function emailValidator(){
        if($emailUser.includes('@') && $emailUser.includes('.')){
            return
        }else{
            console.log('email invalido')
        }            
    };

    emailValidator();

    const $userCreated = await fetch("http://localhost:3000/User", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: $nameUser,
        email: $emailUser,
        birthday: $birthdayUser,
        password: $passwordUser,
      }),
    });

    if (!$userCreated.ok) {
      alert("Error al crear el usuario");
      return;
    }

    alert("Usuario creado exitosamente");
  });
}
