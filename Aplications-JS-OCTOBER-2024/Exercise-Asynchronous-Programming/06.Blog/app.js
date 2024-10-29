function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';
    
    // Select all DOM elements
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const postsSelect = document.getElementById('posts');
    const btnViewPost = document.getElementById('btnViewPost');
    const postTitle = document.getElementById('post-title');
    const postContent = document.getElementById('post-body');

    // Add event listeners
    btnLoadPosts.addEventListener('click', handleLoadPosts);
    btnViewPost.addEventListener('click', handleViewPost);

    
    let commonData;
    function handleLoadPosts(){
        // Get posts

        fetch(postsURL)
        .then(res => res.json())
        .then(data => addPost(data));

        function addPost(data){
            commonData = data;

            postsSelect.innerHTML = '';
            
            for(let [id, postInfo] of Object.entries(data)){
                // Create <option>
                const option = document.createElement('option');
                option.value = id;
                option.textContent = postInfo.title;
                option.dataset.body = postInfo.body;

                postsSelect.appendChild(option);
            }
        }
    }

    function handleViewPost(){
        // Get post ID
        const selectedPostID = document.getElementById('posts').value;
        postTitle.textContent = commonData[selectedPostID].title;
        postContent.textContent = commonData[selectedPostID].body;

        fetch(commentsURL)
        .then(res => res.json())
        .then(data => addComment(data));

        function addComment(data){
            
            const commentsUI = document.getElementById('post-comments');
            commentsUI.innerHTML = '';

            for(let [id, commentInfo] of Object.entries(data)){

                const li = document.createElement('li');
                li.id = commentInfo.id;
                li.textContent = commentInfo.text;

                commentsUI.appendChild(li);
                console.log(commentInfo);
                
            }
        }
    }
}

attachEvents();