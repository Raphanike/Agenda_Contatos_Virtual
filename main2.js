const form = document.getElementById('cadasTro');



let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();

});
function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('tipo-nome');
    const inputNotaAtividade = document.getElementById('tipo-numero');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}<td>`;
    linha += `<td>${inputNotaAtividade.value}<td>`;
    linha += '</tr>';

    linhas += linha;
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    }

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
