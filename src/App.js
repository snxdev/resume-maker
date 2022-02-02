import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <BrowserRouter basename={"resume-builder"}>
      <Switch>
        <PublicRoutes />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
