/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
let newMovies = movies.map(function(elem){
    let durationSplit = elem.duration.split([' ']);
    let newRate = (parseInt(durationSplit[0],10)*60)+
     (parseInt(durationSplit[1],10));
    return elem.duration=newRate;
  });
  
  console.log(newMovies);
  console.log(movies);

// Get the average of all rates with 2 decimals 
let rates = movies.map(function(elem) {
    return Number(elem.rate);
  }).reduce(function(base,elem){
    return base + elem;
  });
  let rateAverages = (rates/movies.length).toFixed(2);
  console.log(rateAverages);

// Get the average of Drama Movies


let avdrama = movies.filter(function(elem){
    return elem.genre.includes('Drama');
          
  });
  console.log (avdrama);
  console.log(avdrama.length/movies.length);
  


  


// Best yearly rate average
