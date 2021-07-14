/**
 * An array containing the books in this library
 */
let myLibrary = []; 

/**
 * Gets the addBook button which will be used by the user to add a new book to the library
 */
const newBook = document.querySelector('#newBook'); 

/**
 * Gets the form to toggle on and off when newBook is clicked
 */
const addForm = document.querySelector('#form'); 

/**
 * Tracks the size of the myLibrary array
 */
let size = 0; 

/**
 * Creates a book object to store in the myLibrary array.
 * @param {*} title the title of the book
 * @param {*} author the author of the book
 * @param {*} pages the number of pages in the book
 * @param {*} read was the book read or not yet
 */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = size;

        /**
         * Gets a string containing information about the book
         * @returns a string containing information about the book
         */
        this.info = function () {
            return `${title} by ${author}, ${pages}, ${read}`;
        };
    }
}

/**
 * Adds a new book to the library and updates the display table with the new book
 * @param {*} title the title of the book
 * @param {*} author the author of the book
 * @param {*} pages the number of pages in the book
 * @param {*} read was the book read or not yet
 */
function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read); 
    myLibrary.push(book);
    size++; 
    libraryDisplay(); 
}

/**
 * Removes a book from the library and updates the display table to remove the book
 * @param {*} book the Book object to remove
 */
function removeBookFromLibrary(book) {
    myLibrary.splice(myLibrary.findIndex(book), 1); 
    size--; 
    libraryDisplay(); 
}

/**
 * Loops through each book in the libarry to build the display table
 */
function libraryDisplay() {
    const tbody = document.querySelector('tbody'); 
    tbody.innerHTML = ""; 
    myLibrary.forEach(book => {
        const row = document.createElement('tr'); 

        const tdTitle = document.createElement('td'); 
        tdTitle.textContent = book.title; 

        const tdAuthor = document.createElement('td'); 
        tdAuthor.textContent = book.author; 
        
        const tdPages = document.createElement('td'); 
        tdPages.textContent = book.pages; 

        const tdRead = document.createElement('td'); 
        tdRead.textContent = book.read; 

        row.appendChild(tdTitle); 
        row.appendChild(tdAuthor); 
        row.appendChild(tdPages); 
        row.appendChild(tdRead); 
        
        tbody.appendChild(row); 
    }); 
}

newBook.addEventListener('click', () => {
    const formSection = document.querySelector('#form'); 
    formSection.style.display = "block";  
});

form.addEventListener("submit", (i) => {
    const title = document.getElementById("title").nodeValue; 
    const author = document.getElementById("author").nodeValue; 
    const pages = document.getElementById("pages").nodeValue; 
    const read = document.getElementById("read").nodeValue; 

    addBookToLibrary(title, author, pages, read); 
}); 