const STORAGE_KEY = "MYBOOKSHELF_APP";
 
let books = [];
 
function isStorageExist() {
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    }
    return true;
}

function saveData() {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event("ondatasaved"));
}

function localDataFormStorage() {
    const loadStorage = localStorage.getItem(STORAGE_KEY);

    let data = JSON.parse(loadStorage);

    if (data !== null) {
        books = data
    }

    document.dispatchEvent(new Event("ondataloaded"));
}

function updateDataToStorage() {
    if (isStorageExist()) {
        saveData();
    }
}

function composeBookObject(title, author, year, isCompleted) {
    return {
        id: +new Date(),
        title,
        author,
        year,
        isCompleted
    };
}

function findBooks(bookId) {
    for(book of books) {
        if (book.id === bookId) {
            return book;
        }
    }
    return null;
}

function findBookIndex(bookId) {
    let index = 0;
    for (book of books) {
        if (book.id === bookId) {
            return index;            
        }
        index++
    }
    return -1;
}

function retfeshDataFromBooks() {
    const listReading = document.getElementById(READING_BOOK_LIST_ID);
    let listReaded = document.getElementById(READED_BOOK_LIST_ID);

    for (book of books) {
        const newBook = makeBook(book.title, book.author, book.year, book.isCompleted);
        newBook[BOOK_ITEMID] = book.id;

        if (book.isCompleted) {
            listReaded.append(newBook);
        } else {
            listReading.append(newBook);
        }
    }
}