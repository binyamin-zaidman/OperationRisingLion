import { useState } from 'react';

function HelloUser() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState("");

  const handleClick = () => {
    setGreeting(`Hello ${name}`);
    setName("");
  };
    return (
      <header className="App-header">
        <p className="helloMan">
          {greeting || "Hello ______"}
        </p>
        <input type="text" placeholder="Enter your name" className="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="button" className="button" onClick={handleClick}>Enter</button>
      </header>
  );
}

export default HelloUser