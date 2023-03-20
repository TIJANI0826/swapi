const apiUrl = 'https://swapi.dev/api/people';

async function fetchPosts() {
  try {
    const response = await fetch(`${apiUrl}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    console.log('fetchPosts:', e);
  }
}

function listPosts(postContainerElementId) {
  const postContainerElement = document.getElementById(
    `${postContainerElementId}`
  );

  if (!postContainerElement) {
    return;
  }

  // because fetchPosts returns a promise, use then() to get content and
  // catch() in case of any error, e.g. if posts is not iterable
  fetchPosts()
    .then((posts) => {
      console.log(posts);
      if (!posts) {
        postContainerElement.innerText = 'Could not get posts';
      }
      for (const post of posts.results) {
        postContainerElement.appendChild(postElement(post));
      }
    })
    .catch((e) => {
      console.log('listPosts:', e);
    });
}

function postElement(post) {
    const id = post.url;
    const p = document.createElement('p');
    const buttonElement = document.createElement('button'); 
    buttonElement.addEventListener('click', function() {
        showDetails(post);
    });
    
    
    p.innerText = capitalizeFirstLetter(post.name)
    buttonElement.innerText = 'More';
    
    const postTitleElement = document.createElement('div');
    postTitleElement.appendChild(p)
    postTitleElement.appendChild(buttonElement);
    return postTitleElement;
}

function showDetails(post){
    //alert(post.url)
    const divElement = document.createElement('div');
    post.forEach(element => {
        const p = document.createElement('p');
        p.innerText(element)
        divElement.appendChild(p)
        postTitleElement.appendChild(divElement)

}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}