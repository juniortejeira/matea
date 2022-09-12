/*
  Crea un array de películas (cada elemento o película del array es un Objeto). La estructura de la película debe ser: título: “valor”, id: número, duración: número. Mínimo 6 películas. La duración se expresa en minutos.
*/

const movies = [
  {
    id: 1,
    title: "Top Gun: Maverick",
    duration: 131,
  },
  {
    id: 2,
    title: "Interestelar",
    duration: 169,
  },
  {
    id: 3,
    title: "Predestinación",
    duration: 97
  },
  {
    id: 4,
    title: "Eterno resplandor de una mente sin recuerdos",
    duration: 108,
  },
  {
    id: 5,
    title: "Sr. Nadie",
    duration: 138,
  },
  {
    id: 6,
    title: "Los juegos del hambre",
    duration: 142,
  }
]


/*
  Find - Crea una función que reciba como parámetro un identificador y utilizando el método .find devuelve una película si existe.
*/
const getMovieById = id => movies.find(movie => movie.id == id)
/* 
Filter - Filtra aquellas películas que duran menos de dos horas con el método filter.
*/
const longMovies = movies.filter(movie => movie.duration > 120)

/* 
  Map - Utilizando el método map, crea un nuevo array sólo con los nombres de las películas.
*/
const nameMovies = movies.map(movie => movie.title)

/* 
  forEach - Utiliza el método forEach para mostrar en consola únicamente la duración de cada película.
*/
movies.forEach(movie => console.log(movie.title))