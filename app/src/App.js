import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This app is bootstrapped by{' '}
          <a
            className="App-link"
            href="https://create-react-app.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            CRA
          </a>{' '}
          and hosted by{' '}
          <a
            className="App-link"
            href="https://cloud.google.com/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            GCP
          </a>
          .
        </p>
      </header>
    </div>
  );
}

export default App;
