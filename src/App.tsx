import Soma from "./components/Soma";
import Operacao from "./components/operacao";


function App() {
  return (
    <div className="App">
      <h1>Projeto em React por Isabelle Almeida</h1>
      <Soma/>
      <Operacao tipo="Subtracao"/>
      <Operacao tipo="Multiplicacao"/>
    </div>
  );
}

export default App;
