/**
 * Aplica a cor #BECCC3 no background do body da página teste
 */
function background(){

    /**
     * Tarefa/Issue  1
     *
     * Desenvolva uma função capaz de trocar a cor do fundo da página, ou seja,
     * alterar o background do body para a cor #BECCC3.
     */
    document.body.style.backgroundColor = "#BECCC3";

}

/**
 * Recupera os valores dos campos de texto cujo o id='fname' e id='lname'
 * e apresente o nome e o sobrenome de uma pessoa (separado por um espaço)
 * na div id='result'
 */
function show(){

     /**
      * Issue  2
      *
      * Recupera os valores dos campos de texto cujo o id='fname' e id='lname' e apresente o nome
      * e o sobrenome de uma pessoa (separado por um espaço) na div id='result'
      */

        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;

        const fullName = firstName + ' ' + lastName;

        document.getElementById('result').textContent = fullName;
}

/**
 * Filtra o array de objetos (data) de acordo com os caracteres
 * digitados no campo de texto id='name'
 */
function search() {
    var searchTerm = document.getElementById('name').value.toLowerCase();

    removeAllChildren('search');

    for (var i = 0; i < data.length; i++) {
        var name = data[i].name.toLowerCase();

        if (name.startsWith(searchTerm)) {
            var para = document.createElement('div');
            result.textContent = data[i].name;

            document.getElementById('search').appendChild(result);
        }
    }
}

/**
 * Remove todos os filhos de um nó
 *
 * @param {*} node Um objeto HTML Node
 */
function removeAllChildren(node){
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}
