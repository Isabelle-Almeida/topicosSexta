import { useState } from "react";

interface Props {
  tipo: string;
}

function Operacao(props: Props) {
  const [num1, setNum1] = useState<any>();
  const [num2, setNum2] = useState<any>();
  const [subtracao, setsubtracao] = useState<any>();

  function clicarNoBotao() {
    if (props.tipo === "Subtracao") {
      setsubtracao(Number.parseInt(num1) - Number.parseInt(num2));
      console.log(subtracao);
      
    } else if(props.tipo === "Multiplicacao"){
      setsubtracao(Number.parseInt(num1) * Number.parseInt(num2));
      console.log(subtracao);
    }
  }

  /*function escreverCaixaTexto1(event: any){
        setNum1(event.target.value);
        console.log(num1);
    }

    function escreverCaixaTexto2(event: any){
        setNum2(event.target.value);
        console.log(num2);
    }*/

  return (
    <div>
      <div>
        <h2>Componente da {props.tipo}</h2>
        <label>Numero 1: </label>
        <input
          type="text"
          onChange={(event: any) => setNum1(event.target.value)}
        />
      </div>
      <div>
        <label>Numero 2: </label>
        <input
          type="text"
          onChange={(event: any) => setNum2(event.target.value)}
        />
      </div>
      <div>
        <button onClick={clicarNoBotao}>Calcular</button>
        <br />
        <span>{subtracao}</span>
      </div>
    </div>
  );
}
export default Operacao;
