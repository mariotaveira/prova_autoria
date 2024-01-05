const formatarString = (detalharEndereco) => {
    let {rua, cidade, cep} = detalharEndereco; 
    return `Rua: ${rua}, Cidade: ${cidade}, CEP: ${cep}`;
  };
  
  
  console.log(formatarString({rua : "Rua das Flores", cidade: "Porto Alegre", cep: "90000-000"}));