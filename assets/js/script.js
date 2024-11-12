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
