import React from 'react';
import axios from 'axios';

const App = () => {

  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    axios.get('http://localhost:4000/data')
      .then((result) => {
        setCounter(result.data.counter);
      })
      .catch((err) => {

      });
  }, []);

  return (
    <div>
      <h1>Title</h1>
      <h4>{counter}</h4>
    </div>

  );
};

export default App;
