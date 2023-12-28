import customBanner from './assets/customBanner.png';
import Card from './components/Card';

function App() {
  const cardData = [
    {
      "title": "Product 1",
      "description": "This is a description of product 1",
      "buttonText": "View More"
    },
    {
      "title": "Product 2",
      "description": "This is a description of product 2",
      "buttonText": "View More"
    },
    {
      "title": "Product 3",
      "description": "This is a description of product 3",
      "buttonText": "View More"
    },
    {
      "title": "Product 4",
      "description": "This is a description of product 4",
      "buttonText": "View More"
    }
  ]
  return (
    <div class='container m-auto'>
      <header>
        <img class="rounded-md" src={customBanner} alt="store banner" />
      </header>
      
      <div className="grid grid-cols-4 gap-5 my-4">
      {cardData.map((card) => (
        <Card>
          <h1>{card.title}</h1> 
          <p>{card.description}</p> 
          <button class='btn'>{card.buttonText}</button>
        </Card>
      ))}
      </div>
    </div>
  );
}

export default App;
