// //EXERCICIO 1
function verificarPar(numero) {
    return new Promise((resolve, reject) => {
      if (numero % 2 === 0) {
        resolve("Numero validad é par");
      } else {
        reject("Error: Número informado é impar");
      }
    });
  }
  verificarPar(2)
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
//ECERCICIO 2
function getUserInfo() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          nome: "Bruno",
          idade: 25,
          email: "brunosr099@outlook.com",
        });
      }, 2000);
    });
  }
  
  async function displayUserInfo() {
    try {
      const userInfo = await getUserInfo();
      console.log(userInfo);
    } catch (error) {
      console.error(error);
    }
  }
  displayUserInfo();

  //EXERCICIO 3

  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const body = document.body;

    const nomeElement = document.createElement("p");
    nomeElement.textContent = "Nome: " + data.nome;
    body.appendChild(nomeElement);

    const idadeElement = document.createElement("p");
    idadeElement.textContent = "Idade: " + data.idade;
    body.appendChild(idadeElement);

    const emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + data.email;
    body.appendChild(emailElement);
  })
  .catch((error) => console.error("Erro:", error));
  //EXERCICIO 4
  function solicitarInformacoesUsuario() {
    let nome = prompt("Por favor, insira seu nome:");
    let idade = prompt("Por favor, insira sua idade:");
    let email = prompt("Por favor, insira seu email:");

    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    // Salva o objeto do usuário no localStorage
    localStorage.setItem('user', JSON.stringify(usuario));
}
//EXERCICIO 5
fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      document.write(`<img src='${item.url}' width='125'/> <br />`);
    });
  })
  .catch((error) => console.error(error));