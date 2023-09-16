import { RecoilRoot } from "recoil";
import "./App.css";
import Main from "./components/Main/Main";
import AppBootstrap from "./AppBootstrap";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
         <AppBootstrap /> 
      </RecoilRoot>
    </div>
  );
}

export default App;
