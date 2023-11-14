function addBooks() {
    const readingBookList = document.getElementById(READING_BOOK_LIST_ID);
    const readedBookList = document.getElementById(READED_BOOK_LIST_ID);

    const txtTitle = document.getElementById("title").value;
    const txtAuthor = document.getElementById("author").value;
    const numYear = Number(document.getElementById("year").value);
    const booRead = document.getElementById("boo-read").checked;

    const book = makeBook(txtTitle, txtAuthor, numYear, booRead);
    const bookObject = composeBookObject(txtTitle, txtAuthor, numYear, booRead);

    book[BOOK_ITEMID] = bookObject.id;
    books.push(bookObject);

    if (booRead) {
        readedBookList.append(book)
    } else {
        readingBookList.append(book);
    }
    updateDataToStorage();
    
    // clear form
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
    document.getElementById("boo-read").checked = false;

}