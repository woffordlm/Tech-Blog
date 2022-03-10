async function saveFormHandler (event) {
    // event.preventDefault();
    const title = document.querySelector('#edited-input').value.trim();
    console.log('title:', title)
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];  
    console.log('id:', id)
    const response = await fetch(`/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('#save-button').addEventListener('click', saveFormHandler);