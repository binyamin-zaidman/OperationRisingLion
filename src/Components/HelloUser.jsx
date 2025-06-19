

function HelloUser() {
    return (
      <header className="App-header">
        <p id="helloMan">
          Hello ______
        </p>
        <input type="text" placeholder="Enter your name" id="name"/>
      <button type="button" id="button" onClick={() => {document.getElementById("helloMan").innerHTML = "Hello " + document.getElementById("name").value; document.getElementById("name").value = "";}}>Enter</button>
      </header>
  );
}

export default HelloUser