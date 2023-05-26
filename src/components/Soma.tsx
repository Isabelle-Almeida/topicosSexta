//Todo componente deve ter a primeirra letra maiuscula
//Todo componente deve ter uma função que retorna um HTML
//Todo componente deve ser exportado
//Todo componente deve retornar apenas um elemento pai HTML

import { useState } from "react";

function Soma() {

    const [num1, setNum1] = useState<any>();
    const [num2, setNum2] = useState<any>();
    const [soma, setSoma] = useState<any>();

    function clicarNoBotao(){
        setSoma(Number.parseInt(num1) + Number.parseInt(num2));
        console.log(soma);
    }

    function escreverCaixaTexto1(event: any){
        setNum1(event.target.value);
        console.log(num1);
    }

    function escreverCaixaTexto2(event: any){
        setNum2(event.target.value);
        console.log(num2);
    }

  return (
    <div>
      <div>
        <h2>Componente da soma</h2>
        <label>Numero 1: </label>
        <input type="text" onChange={escreverCaixaTexto1} />
      </div>
      <div>
        <label>Numero 2: </label>
        <input type="text"  onChange={escreverCaixaTexto2} />
      </div>
      <div>
        <button onClick={clicarNoBotao}>Calcular</button>
        <br/>
        <span>{soma}</span>
      </div>
    </div>
  );
}

// Criar duas caixas de texto
// Criar um botão
// Somar os dois valores
// Exibir em alert e depois no HTML

export default Soma;
