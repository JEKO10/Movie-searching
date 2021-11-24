import { useGlobalContext } from "./context";

function App() {
  const { isLoading, data } = useGlobalContext();

  console.log(data);
  return (
    <div>
      <h1>Movie searching</h1>
    </div>
  );
}

export default App;
