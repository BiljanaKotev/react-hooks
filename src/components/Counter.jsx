import { useEffect, useState } from 'react';
import axios from 'axios';

function Counter() {
  const [count, setCount] = useState(0);
  const [myCharacter, setmyCharacter] = useState({});

  // first arguement: function
  // second argument: dependency array

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 10000);

    axios.get('https://swapi.dev/api/people/1/').then((response) => {
      console.log(response.data);
      setmyCharacter(response.data);
    });

    // Cleanup function
    return () => {
      console.log('unmounted');
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    console.log('updating phase');
    document.title = count;
  }, [count]);

  // if we want to run a function on the Mounting phase ONLY keep the dependency empty

  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

export default Counter;
