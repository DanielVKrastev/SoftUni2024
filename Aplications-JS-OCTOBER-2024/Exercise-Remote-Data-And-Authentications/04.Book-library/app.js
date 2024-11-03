document.addEventListener('DOMContentLoaded', () => {
    
    const loadBookButton = document.getElementById('loadBooks');
    const bookForm = document.querySelector('form');
    const bookList = document.querySelector('tbody');

    const url = 'http://localhost:3030/jsonstore/collections/books';

    loadBookButton.addEventListener('click', loadBooks);

    bookForm.addEventListener('submit', handleFormSubmit);

    async function loadBooks(){
        const response = await fetch(url);
        const data = await response.json();
        
        bookList.innerHTML = '';

        Object.entries(data).forEach(([id, book]) => {
            const row = document.createElement('tr');

            const titleCell = document.createElement('td');
            titleCell.textContent = book.title;
            row.appendChild(titleCell);

            const authorCell = document.createElement('td');
            authorCell.textContent = book.author;
            row.appendChild(authorCell);

            const actionCell = document.createElement('td');

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.setAttribute('data-id', id);
            editBtn.addEventListener('click', handleEdit);

            actionCell.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.setAttribute('data-id', id);
            deleteBtn.addEventListener('click', handleDelete);

            actionCell.appendChild(deleteBtn);

            row.appendChild(actionCell);

            bookList.appendChild(row);

        });
        
    }

    async function handleFormSubmit(ev){
        ev.preventDefault();

        const formData = new FormData(bookForm);
        const title = formData.get('title');
        const author = formData.get('author');
        const bookId = bookForm.getAttribute('data-id');

        //const isValidBook = title !== '' && author !== '';

        try{
            let response;

            if(bookId){
                response = await fetch(`${url}/${bookId}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        author: author
                    })
                });

                //clear inputs
                bookForm.removeAttribute('data-id');
                bookForm.querySelector('h3').textContent = 'Form';
            }else{
                response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        author: author
                    })
                });
            }

            bookForm.reset();
            loadBooks(); 

        } catch {
            console.error('Error');
        }
    }

    async function handleEdit(ev){
        ev.preventDefault();
        const bookId = ev.target.getAttribute('data-id');
        const tr = ev.target.parentNode.parentNode;
        let [title, author, buttons] = [...tr.querySelectorAll('td')];
        title = title.textContent;
        author = author.textContent;

        bookForm.querySelector('input[name="title"]').value = title;
        bookForm.querySelector('input[name="author"]').value = author;
        
        bookForm.setAttribute('data-id', bookId);
        bookForm.querySelector('h3').textContent = 'Edit FORM';

        bookForm.querySelector('button').textContent = 'Save';
    }

    async function handleDelete(ev){
        const bookId = ev.target.getAttribute('data-id');
        const tr = ev.target.parentNode.parentNode;
        tr.remove();

        const response = await fetch(`${url}/${bookId}`,{
            method: 'DELETE'
        })
    }
})