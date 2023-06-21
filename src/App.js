import React, { useState, useEffect } from 'react';
import './styles.css'

function App() {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.value);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      document.title = 'Chuck Norris Jokes';
    }
  }, [isLoading]);

  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      {isLoading ? <p>Loading joke...</p> : <p>{joke}</p>}
    </div>
  );
}

export default App;
