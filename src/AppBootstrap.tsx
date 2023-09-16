import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./Routes";
import useBootstrapEffect from "./hooks/useBootstrapEffect";

function AppBootstrap() {
  useBootstrapEffect();

  return (
    <Router>
      <main className="root">{routes}</main>
    </Router>
  );
}

export default AppBootstrap;
