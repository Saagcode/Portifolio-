import React, {useState, useEffect} from "react"; // importar o react primeiramente e o  useState
import Icone from './assets/listaservicos.png'

function TodoList() {
    const listaStorage = localStorage.getItem('Lista');

    const [lista, setLista] = useState(listaStorage ? JSON.parse(listaStorage) : []); //criar variaveis que vao receber valores do array
    const [novoItem, setNovoItem] = useState (''); //criar variaveis que inicialmente nao recebem um valor, mas armazenam dados do user
    useEffect(()=>{
        localStorage.setItem('Lista', JSON.stringify(lista));
    },[lista])

    function adicionaItem(form) { //aciona a funcao ao enviar o formulario (onsubmit)
        form.preventDefault(); //para nao disparar o formulario toda vez que reiniciar pagina.
        if(!novoItem) {
            return;
        } else
        setLista([...lista, {text: novoItem, isCompleted: false}]);
        setNovoItem('');
        document.getElementById('input-entrada').focus();
    }

    function clicou(index) {
        const listaAux = [...lista];
        listaAux[index].isCompleted = !listaAux[index].isCompleted;
        setLista(listaAux)
    }

    function deleta(index) {
        const listaAux = [...lista];
        listaAux.splice(index, 1) // metodo (splice) para remover item do array, apos indicacao do indice, se houver, precisa indicar a quantidade de itens removidos
        setLista(listaAux);
    }

    function deletaTudo() {
        const listaAux = [...lista];
        setLista([]);
    }

// a letra 'e' serve para ser a variavel onde sera armazenado o valor para trata-lo depois, nesse caso ele armazena o valor do novoitem dentro da variavel e que esta dentro dele mesmo.
///////// criar a funcao onchange para o elemento de mudanca da constante novoitem. 
    return (
        <div id="interface">
            <h1>Lista de Tarefas</h1>
            <form onSubmit={adicionaItem}>
                <input value={novoItem} type="text" placeholder="Adicione uma tarefa" onChange={(e)=>{setNovoItem(e.target.value)}} id="input-entrada"/> 
                <button className="add" type="submit">Add</button>
            </form> 
            <div className="listaTarefas">
                {
                    lista.length < 1
                    ?
                    <img src={Icone} id="imagemlista"/>
                    :
                    lista.map((item, index) => (
                    <div className={item.isCompleted ? "item completo" : "item"}>
                    <span onClick={()=>{ clicou(index)}}>{item.text}</span>
                    <button className="dell" onClick={()=>{ deleta(index)}}>Deletar</button>
                    </div> 
                ))}
                {
                    lista.length > 0 &&
                    <button className="deleteAll" onClick={()=>{ deletaTudo()}}>Deletar Tudo</button> 
                }
            </div>
        </div>
    )
}

export default TodoList