let books = [
    { title: "Book 1", author: "Author 1", pages: 200, genre: "Fiction" },
    { title: "Book 2", author: "Author 2", pages: 250, genre: "Non-Fiction" },
    { title: "Book 3", author: "Author 3", pages: 180, genre: "Mystery" }
];

function displayBooks(booksToShow) {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    booksToShow.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
        `;
        bookList.appendChild(bookDiv);
    });
}

function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));
    if (filteredBooks.length > 0) {
        document.getElementById('noResultsMessage').style.display = 'none';
        displayBooks(filteredBooks);
    } else {
        document.getElementById('noResultsMessage').style.display = 'block';
        document.getElementById('bookList').innerHTML = '';
    }
}


function addBook(event) {
    event.preventDefault();
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const pages = parseInt(document.getElementById('pages').value.trim());
    const genre = document.getElementById('genre').value.trim();
    if (title && author && pages && genre) {
        const newBook = { title, author, pages, genre };
        books.push(newBook);
        displayBooks(books);
        document.getElementById('addBookForm').reset();
    } else {
        alert("Please fill in all fields.");
    }
}

// Display all books initially
displayBooks(books);
document.getElementById('addBookForm').addEventListener('submit', addBook);
