// 01. Load existing posts
// 02. Create post
// 03. Load comments
// 04. Create comment for post
const urlPost = 'http://localhost:3030/jsonstore/collections/myboard/comments';

logPosts();
let postId = undefined;

const topicTitleContainer = document.querySelector('.topic-title');
const postTopicForm = document.querySelector('.new-topic-border');
const form = document.querySelector('form');
const cancelBtn = form.querySelector('.cancel');
const postBtn = form.querySelector('.public');
cancelBtn.addEventListener('click', cancel);
postBtn.addEventListener('click', createPost);

const commentForm = document.querySelector('.answer-comment form');
const commentPostBtn = commentForm.querySelector('button');
commentPostBtn.addEventListener('click', createComment);

let postDetailsSection = document.querySelector('.theme-content'); 
postDetailsSection.style.display = 'none';
const postComment = postDetailsSection.querySelector('.comment')

/*
const postDetailsSectionChildren = [...postDetailsSection.children];
postDetailsSectionChildren.forEach(c=> c.remove()); *///clear DOM

const postDetailsTitle = document.querySelector('.theme-name h2');


const commentSubmitForm = document.querySelector('.comment-form');


function cancel(event){
    event.preventDefault();
    form.reset(); // Clear all inputs in form
}

async function loadPostDetails(id) {
    const postRequest = await fetch(`${urlPost}/${id}`);
    console.log(postRequest);
    const post = await postRequest.json();

    topicTitleContainer.style.display = 'none';
    postTopicForm.style.display = 'none';
    postDetailsSection.style.display = 'block';
    [...postComment.children].forEach(c => c.remove());
    
    const postDetails = createEl('div', undefined, 'header', undefined, undefined,
            createEl('img', undefined, undefined, {src: './static/profile.png', alt: 'avatar'}, undefined ),
            createEl('p', undefined, undefined, undefined, undefined, 
                createEl('span', post.username, undefined, undefined, undefined),
                document.createTextNode(' posted on '),
                createEl('time', post.date, undefined, undefined, undefined)
            ),
            createEl('p', post.content, 'post-content', undefined, undefined)
        );

        postDetailsTitle.textContent = post.title;

        postId = post._id;

        postComment.appendChild(postDetails);
        // GET user comments and append
        const commentsRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
        const commentObj = await commentsRequest.json();
        const comment = Object.values(commentObj);

        const curComments = comment.filter(x=> x.postId = post._id);
       
        for (const comment of curComments) {
            const commentEl = createEl('div', undefined, undefined, {id: comment._id}, undefined,
                createEl('div', undefined, 'topic-name-wrapper', undefined, undefined,
                    createEl('div', undefined, 'topic-new', undefined, undefined,
                        createEl('p', undefined, undefined, undefined, undefined,
                            createEl('strong', comment.username, undefined, undefined, undefined),
                            document.createTextNode(' commented on'),
                            createEl('time', comment.date, undefined, undefined, undefined)
                        ),
                        createEl('div', undefined, 'post-content', undefined, undefined,
                            createEl('p', comment.postText, undefined, undefined, undefined)
                        )
                    )
                )
            )

            postComment.appendChild(commentEl);
        }
        
}

async function createComment(e) {
    e.preventDefault();

    const commentTextInput = commentForm.querySelector('textarea');
    const commentUsernameInput = commentForm.querySelector('input');
    const commentText = commentTextInput.value;
    const commentUsernameValue = commentUsernameInput.value;

    const date = new Date();
    const dateString = date.toISOString();

    const comment = {
        username: commentUsernameValue,
        postText: commentText,
        postId: postId,
        date: dateString
    }

    console.log(postId);
    
    const settings = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(
            comment
        )
    }

   const createCommentRequest = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', settings);

   loadPostDetails(postId);
    
}

async function createPost(event) {
    event.preventDefault();

    const date = new Date();
    const dateString = date.toISOString();

    const topicNameInput = document.querySelector('#topicName');
    const usernameInput = document.querySelector('#username');
    const postTextInput = document.querySelector('#postText');

    const topicNameValue = topicNameInput.value;
    const usernameValue = usernameInput.value;
    const postTextValue = postTextInput.value;

    if(topicNameValue.trim() !== '' && usernameValue.trim() !== '' && postTextValue.trim() !== ''){
        const post = {
            title: topicNameValue,
            username: usernameValue,
            content: postTextValue,
            date: dateString
        };
    
        const settings = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(
                post
            )
        }   
        const createPostRequest = await fetch(urlPost, settings);
        form.reset();
        logPosts();
    }
}

async function logPosts() {

    const postsRequest = await fetch(urlPost);
    const postsObj = await postsRequest.json();
    console.log(postsObj);

    const posts = Object.values(postsObj);

    for (const post of posts) {
        const topicContainer = document.createElement('div');
        topicContainer.classList.add('topic-container');

        const topicNameWrapper = document.createElement('div');
        topicNameWrapper.classList.add('topic-name-wrapper');

        const topicName = document.createElement('div');
        topicName.classList.add('topic-name');

        const titleAnchor = document.createElement('a');
        titleAnchor.classList.add('normal');

        const titleHeader = document.createElement('h2');
        titleHeader.textContent = post.title;

        const columnsDiv = document.createElement('div');
        columnsDiv.classList.add('columns');

        const columnsPaddingDiv = document.createElement('div');

        const timePar = document.createElement('p');
        timePar.textContent = `Date: `;
        const time = document.createElement('time');
        time.textContent = post.date;


        const nickDiv = document.createElement('div');
        nickDiv.classList.add('nick-name');
        
        const nickPar = document.createElement('p');
        nickPar.textContent = 'Username';

        const nickSpan = document.createElement('span');
        nickSpan.textContent = post.username;

        topicContainer.appendChild(topicNameWrapper);
        topicNameWrapper.appendChild(topicName);
        topicName.appendChild(titleAnchor);
        titleAnchor.appendChild(titleHeader);

        topicName.appendChild(columnsDiv);
        columnsDiv.appendChild(columnsPaddingDiv);

        columnsPaddingDiv.appendChild(timePar);
        timePar.appendChild(time);
        columnsPaddingDiv.appendChild(nickDiv);

        nickDiv.appendChild(nickPar);
        nickPar.appendChild(nickSpan);

        topicTitleContainer.appendChild(topicContainer);

        topicContainer.addEventListener('click', () => loadPostDetails(post._id));
    }
}


function createEl(tag, content, elClass, attributes, parent, ...children){
    const el = document.createElement(tag);
    if(content) {
        el.textContent = content;
    }

    if(elClass){
        el.classList.add(elClass);
    }

    if(attributes){
        for (const [key, value] of Object.entries(attributes)) {
            el[key] = value;
        }
    }

    if(parent){
        parent.appendChild(el);
    }

    for (const child of children) {
        if(child){
            el.appendChild(child);
        }
    }

    return el;
}
