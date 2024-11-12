const searchFormEl = document.querySelector('#search-form');
const APIKey = "c057bce0c648afb5f7c5c2f415a6141e";
function handleSearchFormSubmit(event) {
  event.preventDefault();

  const searchInputVal = document.querySelector('#search-input').value;
  const formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  const queryString = `./search-results.html?q=${searchInputVal}&format=${formatInputVal}`;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

// Get weather data 
app.get('/api/weather', async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = 'c057bce0c648afb5f7c5c2f415a6141e'; 
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  try {
      const response = await fetch(url);
      const data = await response.json();
      res.json(data);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// front end code to make fetch request
fetch('/api/weather?lat=42.6667&lon=83.3999')
    .then(response => response.json())
    .then(data => {
        // Handle the weather data here
    })
    .catch(error => console.error('Error fetching weather data:', error));