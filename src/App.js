import { useGlobalContext } from "./context";
import { Switch, Route } from "react-router";
import Home from "./components/Home";

function App() {
  const { isLoading, data } = useGlobalContext();

  console.log(data);
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
