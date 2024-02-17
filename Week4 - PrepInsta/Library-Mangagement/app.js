const bookForm = document.getElementById("bookForm");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const bookDisplay = document.getElementById("bookDisplay");
const noResults = document.getElementById("noResults");

let books = [];

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const genre = document.getElementById("genre").value;

    if (title && author && pages && genre) {
        const newBook = {
            id: books.length + 1,
            title,
            author,
            pages,
            genre,
        };

        books.push(newBook);
        displayBooks();
        bookForm.reset();
    }
});