import React, { useState, useEffect } from "react";

export default function App() {
  const [taco, setTaco] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://taco-randomizer.herokuapp.com/random/?full-tack=true"
        );
        const data = await response.json();
        setTaco(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      {Object.keys(taco).length ? (
        <div>
          <h1>Shell Name: {taco.shell.name}</h1>
          <p>{taco.shell.recipe}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
