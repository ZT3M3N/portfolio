import "./App.css";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import { Button } from "./components/ui/button";
import CardExperience from "./components/CardExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Languages from "./components/Languages";

function App() {
  return (
    <>
      <Header title="🖥️ Hola" subtitle="xddding"></Header>
      <Introduction name="Johan" description="Soy una persona ..." />
      <Button></Button>
      <CardExperience />
      <Projects />
      <Education />
      <Certificates />
      <Languages />
    </>
  );
}

export default App;
