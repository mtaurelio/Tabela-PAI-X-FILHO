function excluirLinha(elemento) {
  fnWdkRemoveChild(elemento);
}

// Funçãp Padrão TOTVS que exluir o filho da tabela atráves do icone da lixeira

function addLinha() {
  wdkAddChild("lixeira");
  console.log("Linha +newId+ adicionada");
}
