const searchForm = document.querySelector('#search-form')
const query = document.querySelector('#search-input')
const resultsContainer = document.querySelector('#search-results')

searchForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const result = query.value.trim()

  resultsContainer.textContent = `You searched for: ${result}`

})

