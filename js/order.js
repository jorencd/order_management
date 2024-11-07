  fetch('/order navigation.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      document.getElementById('order_navigation').innerHTML = data; // Insert navbar HTML
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.product-name').forEach(function(element) {
      const originalText = element.innerText;
      if (originalText.length > 13) {
        element.innerText = originalText.substring(0, 13) + '...';
      }
    });
  });