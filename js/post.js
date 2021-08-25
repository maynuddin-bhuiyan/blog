const postAll = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(pos => pos.json())
    .then(post => allPost(post))
}

postAll();

const allPost = (post) => {
    const maunText = document.getElementById('posts');

    for(const data of post){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `
        maunText.appendChild(div)
    }
}