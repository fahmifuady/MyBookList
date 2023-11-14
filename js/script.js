document.addEventListener("DOMContentLoaded", function() {
    const submitForm = document.getElementById("form");

    submitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addBooks();
    });

    if (isStorageExist()) {
        localDataFormStorage();
    }
});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan");
    if (scrollToBookshelf) {
        document.getElementById(READED_BOOK_LIST_ID).scrollIntoView({behavior: "smooth"});
    } else {
        document.getElementById(READING_BOOK_LIST_ID).scrollIntoView({behavior: "smooth"});
    }
});
document.addEventListener("ondataloaded", () => {
    retfeshDataFromBooks();
});

const READING_BOOK_LIST_ID = "readingbooks";
const READED_BOOK_LIST_ID = "readedbooks";
const BOOK_ITEMID = "itemId";
let scrollToBookshelf;

function makeBook(title, author, year, isCompleted) {
    const textTitle = document.createElement("h4");
    textTitle.innerText = title;

    const textAuthor = document.createElement("p");
    textAuthor.innerText = author;

    const numYear = document.createElement("small");
    numYear.innerText = year;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(textTitle, textAuthor, numYear);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container")

    if (isCompleted) {
        btnContainer.append(
            createUndoButton(),
            createTrashButton()
        );
        scrollToBookshelf = true;
    } else {
        btnContainer.append(
            createCheckButton(),
            createTrashButton()
        );
        scrollToBookshelf = false;
    }

    const container = document.createElement("div");
    container.classList.add("item");
    container.append(textContainer, btnContainer);

    return container;
}

function createButton(buttonTypeClass, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function(event){
        eventListener(event);
    });

    return button;
}

function createCheckButton() {
    return createButton("check-button", function(event){
        addBookToReaded(event.target.parentElement.parentElement);
    });
}

function addBookToReaded(bookElement) {

    const bookTitle = bookElement.querySelector(".inner > h4").innerText;
    const bookAuthor = bookElement.querySelector(".inner > p").innerText;
    const bookYear = bookElement.querySelector(".inner > small").innerText;

    const newBook = makeBook(bookTitle, bookAuthor, bookYear, true)
    const book = findBooks(bookElement[BOOK_ITEMID]);
    book.isCompleted = true;
    newBook[BOOK_ITEMID] = book.id;

    const listReaded = document.getElementById(READED_BOOK_LIST_ID);
    listReaded.append(newBook);
    bookElement.remove();

    updateDataToStorage();
}

function removeBook(bookElement) {
    const bookPosition = findBookIndex(bookElement[BOOK_ITEMID]);
    const bookData = books[bookPosition];
    const template = "uku "+ bookData.title + " karya " + bookData.author + " tahun " + bookData.year;

    if (confirm(`Apakah kamu yakin akan menghapus b${template}?`)) {
        books.splice(bookPosition, 1);
        bookElement.remove();
        updateDataToStorage();
    } else {
        return alert(`B${template} batal dihapus.`);
    }
    return alert(`B${template} akan segera dihapus.`);
}

function createTrashButton() {
    return createButton("trash-button", function(event){
        removeBook(event.target.parentElement.parentElement);
    });
}

function undoBookFromReaded(bookElement){
    const bookTitle = bookElement.querySelector(".inner > h4").innerText;
    const bookAuthor = bookElement.querySelector(".inner > p").innerText;
    const bookYear = bookElement.querySelector(".inner > small").innerText;

    const newBook = makeBook(bookTitle, bookAuthor, bookYear, false)
    const book = findBooks(bookElement[BOOK_ITEMID]);
    book.isCompleted = false;
    newBook[BOOK_ITEMID] = book.id;

    const listReading = document.getElementById(READING_BOOK_LIST_ID);
    listReading.append(newBook);
    bookElement.remove();

    updateDataToStorage();
}

function createUndoButton() {
    return createButton("undo-button", function(event){
        undoBookFromReaded(event.target.parentElement.parentElement);
    });
}

function searchBook() {
    const inputSearchBox = document.getElementById("txt-search");
    const divBook = document.getElementsByClassName("item");
    let filter = inputSearchBox.value.toUpperCase();
    

    for (let i = 0; i < divBook.length; i++) {
        const title = divBook[i].getElementsByTagName("h4")[0].innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            divBook[i].style.display = "";
        } else {
            divBook[i].style.display = "none";
        }
    }
}