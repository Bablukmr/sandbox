import "./styles.css";

let Name = "Bablu Kumar";
export default function App() {
  function Alert() {
    Name = "Dablu Kumar";
    alert("i am Alert Hi " + Name);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{Name} </h2>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={Alert}>Click Me</button>
    </div>
  );
}
export function App1() {
  function Alert() {
    alert("Hi i am Alert");
  }

  return (
    <div className="App">
      <h1>Hello Arrow function Alert</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{Name} </h2>

      <button onClick={() => alert("Hi i 2nd Alert")}>Click Me</button>
    </div>
  );
}
