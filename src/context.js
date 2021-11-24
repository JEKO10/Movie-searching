import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("superman");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=a931948e&s=${query}`
      );
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, data, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
