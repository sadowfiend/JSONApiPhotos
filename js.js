const root = document.getElementById('root');
const galleryBox = document.createElement('div');
galleryBox.classList.add('gallery');
root.appendChild(galleryBox);

function createPhotos(title, url) {
    const post = document.createElement('div');
    post.classList.add('photo');

    const postImg = document.createElement('div');
    postImg.classList.add('photo__img');


    const postTitle = document.createElement('div');
    postTitle.classList.add('photo__title');
    postTitle.textContent = title;

    post.appendChild(postTitle);
    post.appendChild(postImg);

    return post
}

fetch('http://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                const t = createPhotos(data[i].title, data[i].url);
                galleryBox.appendChild(t);
            }
        }
    );


fetch('http://jsonplaceholder.typicode.com/photos/4')
.then(res => res.json())
    .then(data => {
        for (let i = 5; i<12; i++){
            console.log(data)
        }
    });