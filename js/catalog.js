fetch('catalog.html')

  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('catalog').innerHTML = data; // Insert navbar HTML
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  })

;