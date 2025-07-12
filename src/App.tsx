import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import { Button } from "./components/ui/button";
import CardExperience from "./components/CardExperience";

function App() {
  return (
    <>
      <Header title="🖥️ Hola" subtitle="xddding"></Header>
      <Introduction
        name="Johan"
        description="Soy una persona proactiva"
      ></Introduction>
      <Button></Button>
      <div className="h-screen">
        <CardExperience />
      </div>
    </>
  );
}

export default App;
