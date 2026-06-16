const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 8.0 }
];
const topMovieTitles = movies
  .filter(movie => movie.rating > 8)
  .map(movie => movie.title);
console.log(topMovieTitles);