function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);
}
attachEvents();

async function getPosts(){
    let url = 'http://localhost:3030/jsonstore/blog/posts';

    let response = await fetch(url);
    let data = await response.json();

    let select = document.getElementById('posts');

    Object.values(data).map(createOption).forEach(o => select.appendChild(o));

    
}
function createOption(post){
    let result = document.createElement('option');
    result.textContent = post.title;
    result.value = post.id;

    return result;

}
function displayPost(){
    let postId = document.getElementById('posts').value;
    getCommentsByPostId(postId);

}

async function getCommentsByPostId(postId){

    let commentsUl = document.getElementById('post-comments');
    Array.from(commentsUl.querySelectorAll('li')).forEach(li => li.remove());
    
    let postResponse = await fetch('http://localhost:3030/jsonstore/blog/posts/' + postId);
    let postData = await postResponse.json();

    document.getElementById('post-title').textContent = postData.title;
    document.getElementById('post-body').textContent = postData.body;

    let url = 'http://localhost:3030/jsonstore/blog/comments';

    let commentsResponse = await fetch(url);
    let commentsData = await commentsResponse.json();
    let comments = Object.values(commentsData).filter(c => c.postId == postId);

    comments.map(createComment).forEach(c => commentsUl.appendChild(c));

}

function createComment(comment){
    let result = document.createElement('li');
    result.textContent = comment.text;
    result.id = comment.id;
    return result;

}