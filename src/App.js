import logo from './logo.svg';
import './App.css';
import CenteredCard from './components/CenteredCard/CenteredCard.jsx'

function App() {
  return (
    <div className="App">
      <header>
          <h1>Escolha seu Card</h1>
      </header>
      <main className="App-header">
       
        <CenteredCard><h1>Card 01</h1></CenteredCard>
        <CenteredCard><h1>Card 02</h1></CenteredCard>
        <CenteredCard><h1>Card 03</h1></CenteredCard>
      </main>
    </div>
  );
}

export default App;
