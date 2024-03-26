

const getStoredBooks = () =>{
    const storedBooks = localStorage.getItem('books');
    if(storedBooks){
        return JSON.parse(storedBooks)
    }
    return []
}

const saveBooks = book =>{
    const getStoredBooksToSave = getStoredBooks() ;
    const exists = getStoredBooksToSave.find(item => item.bookId === book.bookId);
    if(exists){
        alert('Data already added')
    }
    else{
        getStoredBooksToSave.push(book);
        localStorage.setItem('books', JSON.stringify(getStoredBooksToSave))
    }
}

export {getStoredBooks, saveBooks}