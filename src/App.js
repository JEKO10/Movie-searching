import { useEffect } from "react";

function App() {
  const fetchData = async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=a931948e&s=batman"
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <h1>Movie searching</h1>
    </div>
  );
}

export default App;
