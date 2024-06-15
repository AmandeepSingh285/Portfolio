import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="bg-background min-w-full min-h-screen p-0 m-0">
      {loading ? <Loading /> : <Home />}
    </div>
  );
}

export default App;
