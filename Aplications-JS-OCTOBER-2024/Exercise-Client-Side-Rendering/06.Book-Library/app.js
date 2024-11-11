import { html, render} from '../node_modules/lit-html/lit-html.js';

const baseUrl = 'http://localhost:3030/jsonstore/collections/books';
const tbody = document.querySelector('table tbody');

const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', addBook);
const editForm = document.getElementById('edit-form');
editForm.style.display = 'none';

const loadButton = document.getElementById('loadBooks');
loadButton.addEventListener('click', loadBooks);

async function loadBooks() {
    const response = await fetch(baseUrl);
    const data = await response.json();

    const booksListInfo = Object.entries(data);
    
    const tableRow = booksListInfo.map(bookListInfo => {
        const bookId = bookListInfo[0];
        const bookInfo = bookListInfo[1]
        return createRowTable(bookId, bookInfo)}
    );

    updateTable(tableRow);
    
}

function createRowTable(bookId ,bookInfo){
    return html`
     <tr data-id='${bookId}'>
        <td>${bookInfo.title}</td>
        <td>${bookInfo.author}</td>
        <td>
            <button @click=${editBook}>Edit</button>
            <button @click=${deleteBook}>Delete</button>
        </td>
    </tr>
    `;
}

function updateTable(data){
    render(data, tbody);
}

async function addBook(e) {
    e.preventDefault();

    const titleEl = document.querySelector('#add-form input[name="title"]');
    const authorEl = document.querySelector('#add-form input[name="author"]');

    if( titleEl.value === '' || authorEl.value === '') return;

    const settings = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            author: authorEl.value,
            title: titleEl.value
        }),
    };

    const addRequest = await fetch(baseUrl, settings);

    titleEl.value = '';
    authorEl.value = '';
    loadBooks();
}

async function editBook(el){
    addForm.style.display = 'none';
    editForm.style.display = 'block';

    const bookIdData = el.target.parentNode.parentNode.dataset.id;

    const bookIdEl = document.querySelector('#edit-form input[name="id"]');
    const titleEl = document.querySelector('#edit-form input[name="title"]');
    const authorEl = document.querySelector('#edit-form input[name="author"]');

    bookIdEl.value = bookIdData;

    const response = await fetch(`${baseUrl}/${bookIdEl.value}`);
    const data = await response.json();
    const bookData = Object.values(data);
    const authorData = bookData[0];
    const titleData = bookData[1];

    titleEl.value = titleData;
    authorEl.value = authorData;
            

    editForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        /*
        const formData = new FormData(e.target);

        const title = formData.get('title');
        const author = formData.get('author');
        */

        if( titleEl.value === '' || authorEl.value === '') return;
        
        const settings = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                author: authorEl.value,
                title: titleEl.value
            }),
        };

        const updateRequest = await fetch(`${baseUrl}/${bookIdEl.value}`, settings);

        addForm.style.display = 'block';
        editForm.style.display = 'none';

        loadBooks();
    });
}

async function deleteBook(el){
    const tableRow = el.target.parentNode.parentNode;   
    const bookIdData = tableRow.dataset.id;

    const updateRequest = await fetch(`${baseUrl}/${bookIdData}`, {
        method: 'DELETE',
    });

    tableRow.remove();
}