//const abreviarNomes = (nomes) => {
    //return nomes.map(abreviarNomes => elemento * elemento);
 // }
  
  //console.log(abreviarNomes(["Carlos Alberto", "José Maria"]))


  const abreviarNomes = (nomes) => {
    return nomes.map(nome => nome[0] + "." + nome[7] + "." + nome[14] + nome[15] + nome[16] + nome [17] + nome [18] + nome [19] );
    
  }
  
  console.log(abreviarNomes(['Carlos Alberto Silva', 'Julia Pereira Gomes']))



