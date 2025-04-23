function showAlert() {
    alert('Hello from JavaScript!');
  } 

  
  // Load JSON data
  fetch('data.json')
    .then(response => response.json())
    .then(data => {

    })
    .catch(error => {
      console.error("Failed to load JSON:", error);
    });
  