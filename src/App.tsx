import { RecoilRoot } from "recoil";
import "./App.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Main />
      </RecoilRoot>
    </div>
  );
}

export default App;
