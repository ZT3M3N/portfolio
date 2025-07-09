import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Header title="🖥️ Hola" subtitle="xddding"></Header>
      <Introduction
        name="Johan"
        description="Soy una persona proactiva"
      ></Introduction>
      <Button></Button>
    </>
  );
}

export default App;
