//EXERCICIO 6
function buscarEndereco() {
    let cep = prompt("Por favor, informe o CEP:");
  
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          var endereco = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
          alert(endereco);
        } else {
          alert("CEP não encontrado.");
        }
      })
      .catch((error) => console.error(error));
  }
  buscarEndereco();
  //EXERCICIO 7
  function buscarEndereco() {
    let cep = prompt("Por favor, informe o CEP:");
  
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          var endereco = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
          var confirmacao = confirm(`O endereço é: ${endereco}. Está correto?`);
  
          if (confirmacao) {
            localStorage.setItem("endereco", JSON.stringify(data));
            alert("Endereço salvo com sucesso!");
          } else {
            alert("Por favor, verifique o CEP e tente novamente.");
          }
        } else {
          alert("CEP não encontrado.");
        }
      })
      .catch((error) => console.error(error));
  }
//EXERCICIO 8
function buscarEndereco() {
    let enderecoSalvo = localStorage.getItem("endereco");
    if (enderecoSalvo) {
      let confirmacao = confirm("Já existe um endereço salvo. Deseja buscar um novo endereço?");
      if (!confirmacao) {
        return;
      }
    }
  
    let cep = prompt("Por favor, informe o CEP:");
  
    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          var endereco = `${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`;
          var confirmacao = confirm(`O endereço é: ${endereco}. Está correto?`);
  
          if (confirmacao) {
            localStorage.setItem("endereco", JSON.stringify(data));
            alert("Endereço salvo com sucesso!");
          } else {
            alert("Por favor, verifique o CEP e tente novamente.");
          }
        } else {
          alert("CEP não encontrado.");
        }
      })
      .catch((error) => console.error(error));
  }