import './App.css';
import Card from './components/Card';
import Counter from './components/Counter';

const movie = {
  id: 0,
  title: "Oblivion",
  description: "High above a war-torn future Earth, Cmdr. Jack Harper is maintaining the planet's defensive drones when a crippled starship enters his territory.",
  imgUrl: "https://cdn.discordapp.com/attachments/789169114686029906/1021592983709167659/oblivion.jpg"
}

const movies = [
  movie,
  {
    id: 1,
    title: "Mr nobody",
    description: "It tells the life story of Nemo Nobody, an 118-year-old man who is the last mortal on Earth after the human race has achieved quasi-immortality",
    imgUrl: "https://cdn.discordapp.com/attachments/789169114686029906/1021592984334127245/mrnobody.jpg"
  },
  {
    id: 2,
    title: "Predestination",
    description: "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time. The chase turns into a unique, surprising and mind-bending exploration of love, fate, identity and time travel taboos.",
    imgUrl: "https://cdn.discordapp.com/attachments/789169114686029906/1021592983419748432/predestination.jpg"
  },
  {
    id: 3,
    title: "Top Gun: Maverick",
    description: "After more than 30 years of service as one of the Navy's top aviators, Pete “Maverick” Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
    imgUrl: "https://cdn.discordapp.com/attachments/789169114686029906/1021592983067431043/topgun.jpg"
  },
  {
    id: 4,
    title: "Arrival",
    description: "When mysterious spacecraft touch down across the globe, an elite team – led by expert linguist Louise Banks (Amy Adams) – are brought together to investigate. As mankind teeters on the verge of global war, Banks and the team race against time for answers – and to find them, she will take a chance that could threaten her life, and quite possibly humanity.",
    imgUrl: "https://cdn.discordapp.com/attachments/789169114686029906/1021592982773837874/arrival.jpg"
  }
]

function App() {

  return (
    <div className="App">
      <h2>Ejercicio 1:</h2>
      <hr />
      <Counter />
      <h2>Ejercicio 2:</h2>
      <hr />
      <Card {...movie} />
      <h2>Ejercicio 3:</h2>
      <hr />
      <div className='cards__ctn'>
        {
          movies.map(movie => <Card key={movie.id} {...movie} />)
        }
      </div>
      <h2>Ejercicio 3.2:</h2>
      <hr />
      <div className='cards__ctn'>
        {
          movies.filter(movie => movie.title.length >= 10).map(movie => <Card key={movie.id} {...movie} />)
        }
      </div>
    </div >
  );
}

export default App;
