import { useGlobalContext } from "./context";

function App() {
  const { isLoading, data } = useGlobalContext();

  return (
    <div>
      <h1>Movie searching</h1>
    </div>
  );
}

export default App;
