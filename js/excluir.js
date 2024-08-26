export const excluirItem = (elemento) => {
    let confirmacao = confirm("Sure you want to delete this item?");
   
    if (confirmacao) {
        elemento.remove();
    }
};
