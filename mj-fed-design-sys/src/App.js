import logo from './logo.svg';
import './App.css';
import { Pager } from "./components/pager/pager"
import { PersonCard } from "./components/person-card/person-card"

function App(args) {
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


     <h1>I'll add stuff here</h1>

     <Pager/>
     <PersonCard {...args} />

    </div>
  );
}

export default App;
