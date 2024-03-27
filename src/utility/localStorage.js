

const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('books');
    if (storedBooks) {
        return JSON.parse(storedBooks)
    }
    return []
}
const saveBooks = book => {
    const getStoredBooksToSave = getStoredBooks();
    const exists = getStoredBooksToSave.find(item => item.bookId === book.bookId);
    if (!exists) {
        getStoredBooksToSave.push(book);
        localStorage.setItem('books', JSON.stringify(getStoredBooksToSave))
    }
    else {
        alert('exist in read list')
    }
}




const storedWishListBooks = () => {
    const wishListBooks = localStorage.getItem('wishlist');
    if (wishListBooks) {
        return JSON.parse(wishListBooks)
    }
    return []
}
const saveWishList = book => {
    const getReadList = getStoredBooks()
    const wishListExistInRead = getReadList.find(itm => itm.bookId === book.bookId);
    if (wishListExistInRead) {
        alert('exist in read-list, can not add in wish list')
    }
    else {
        const getWishList = storedWishListBooks()
        const wishListExist = getWishList.find(b => b.bookId === book.bookId)
        if (wishListExist) {
            alert('exist in wishlist, can not add in wish list')
        }
        else {
            getWishList.push(book)
            localStorage.setItem('wishlist', JSON.stringify(getWishList))
        }
    }
}

export{getStoredBooks, saveBooks, storedWishListBooks, saveWishList }