const searchForm = document.querySelector('#search-form')
const query = document.querySelector('#search-input')
const resultsContainer = document.querySelector('#search-results')

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  const result = query.value.trim()

  try {
    const res = await fetch(`api/v1/tree?path=${encodeURIComponent(path)}`)
    const data = await res.json()

    if (data.ok) {
      resultsContainer.textContent = `<pre>${data.tree}</pre>`
    }


  } catch (error) {
    console.log('It went wrong')
  }

})

