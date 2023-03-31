function movie() {
  fetch("http://localhost:3000/films")
    .then((res) => res.json())

    .then((data) => {
      const movieData = data;

      for (let i = 0; i < movieData.length; i++) {

      let display = document.querySelector("#display");

      let title = document.createElement("h1");
      let poster = document.createElement("img");
      let description = document.createElement("h3");
      let showTime = document.createElement("h4");
      let runtime = document.createElement("h4");
      let tickets = document.createElement("p");


      

      title.textContent = movieData[i].title;
      poster.src = movieData[i].poster;
      description.textContent = movieData[i].description;
      showTime.textContent = movieData[i].showTime;
      runtime.textContent = `Duration: ${movieData[i].runtime} minutes`;
      tickets.textContent = `Tickets sold: ${movieData[i].tickets_sold}`;

        display.appendChild(title);

        display.appendChild(poster);
        display.appendChild(description);
        display.appendChild(showTime);
        display.appendChild(runtime);
        display.appendChild(tickets);
      }
      
    })
    .catch((err) => console.log(err)); 
}
