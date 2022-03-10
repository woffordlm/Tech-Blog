


async function commentFormHandler(event) {
  event.preventDefault();
  console.log('event:', event)

  const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  console.log('post_id:', post_id)


  if (comment_text) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        comment_text,
        post_id
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      console.log('response:', response)

      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.comment-button').addEventListener('click', commentFormHandler);