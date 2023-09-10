import MainPage from 'components/main-page/main-page';
import './App.css';
import Header from './components/header/header';

function App():JSX.Element {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
