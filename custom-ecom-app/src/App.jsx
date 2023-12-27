import customBanner from './assets/customBanner.png';
import Card from './components/Card';

function App() {
  return (
    <div>
      <header>
        <h1>Merch</h1>
      </header>
      <img src={customBanner} alt="store banner" />

      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
