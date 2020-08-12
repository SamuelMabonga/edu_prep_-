const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

// using the fetch api
fetch('fetch('http://ghibliapi.herokuapp.com/films')
')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // work with the JSON data here

    data.forEach(movie => {
      // Create a div with a card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      // create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1')
      h1.textContent = movie.title 

      // create a p and set the text content to the film's description
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)  // limit to 300 characters
      p.textContent = `${movie.description}...`  // end with ellipses

      // append the cards to the container element
      container.appendChild(card)

      // Each card will conatin an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)
    })

  })
  .catch(err => {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = 'Gah, its not working!'
    app.appendChild(errorMessage)
  })


      <div class="movie-section__category">
          <div class="movie-section__category-content">
            <div class="movie-section__movie-card">
              <div class="movie-card__image-wrapper">
                <img class="movie-card__image" src="images/deadpool.jpeg" alt="">
              </div>
              <div class="movie-card__title-container">
                <h4 class="movie-card__title">Deadpool</h4>
                <p class="movie-card__date"><small>10/09/2018</small></p>
                <p class="movie-card__rating"><small>Rating: 80%</small></p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>   <!-- movie-section__category-content -->
        </div>   <!-- movie-section__category -->
      </div>   <!-- movie-section__card -->
