import Input from "./components/Input";
import Output from "./components/Output";
import Card from "./components/UI/Card";

import logo from "./logo.svg";
import "./App.css";

const data = [
  { name: "Max", iceCreams: 3, id: 1 },
  { name: "Jost", iceCreams: 2, id: 2 },
  { name: "Engo", iceCreams: 5, id: 3 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello User! 👋🏼 </p>
        <p>This is an ice cream tracker 🍦!</p>
      </header>
      <main className="App-main">
        <Card>
          <Input />
        </Card>
        <Card>
          <Output outputData={data} />
        </Card>
      </main>
    </div>
  );
}

export default App;
