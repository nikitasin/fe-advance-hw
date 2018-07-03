const getAllUsers = () => {
  fetch("https://api.themoviedb.org/3/movie/popular?api_key=734894a8b2924a0c01d7558d620798ec")
    .then(response => {
      if (response.ok) return response.json();
    .then(data => {
      const wrap = document.getElementById("wrapper");
      let obj = data.results;
      console.log(data);
      for(let i=0; i<obj.length; i++){
        const movieCard = document.createElement("div");
        movieCard.setAttribute("id", "movieCard");
        const image = document.createElement("img");
        const title = document.createElement("h1");
        const description = document.createElement("p");
        title.textContent = obj[i].title;
        description.textContent = obj[i].overview;
        image.setAttribute("src", "http://image.tmdb.org/t/p/w500" + obj[i].poster_path);
        movieCard.appendChild(image);
        movieCard.appendChild(title);
        movieCard.appendChild(description);
        wrap.appendChild(movieCard);
      }
    })
};


















getAllUsers();

function getAllCards (proto) {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=734894a8b2924a0c01d7558d620798ec')
    .then(response => response.json())
    .then(data => {
        const wrap = document.getElementById("wrapper");
        let obj = data.results;
        console.log(data);
        for(let i = 0; i < obj.length; i++){
            const movieCard = document.createElement("div");
            movieCard.setAttribute("id", "movieCard");
            const image = document.createElement("img");
            const title = document.createElement("h2");
            const description = document.createElement("p");
            title.textContent = obj[i].title;
            description.textContent = obj[i].overview;
            image.setAttribute("src", "http://image.tmdb.org/t/p/w500" + obj[i].poster_path);
            movieCard.appendChild(image);
            movieCard.appendChild(title);
            movieCard.appendChild(description);
            wrap.appendChild(movieCard);
        }
    })
};
getAllCards();

    
    
    
    
    
    
    
    
    
    
    
    
    
    