
import './App.css';
// import Function from './component/Function';
// import Classcomp from './component/Classcomp';
// import StateComp from './component/StateComp';
import MethodEventComp from './component/MethodEventComp';
import Parentcomp from './component/Parentcomp';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
{/* 
      <h1>Welcome </h1>
      <Classcomp ename="Nixen" epost="Software engineer"/>
      <Function uname="Girish" upost="Software engineer"/>
      <StateComp/>
      <MethodEventComp/> */}
      <MethodEventComp/>
      <Parentcomp/>
    </div>
  );
}

export default App;
