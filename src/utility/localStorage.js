import swal from 'sweetalert';

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
        localStorage.setItem('books', JSON.stringify(getStoredBooksToSave));
        swal('added in read books list')
        
    }
    else {
        swal('Already exist in read books list')
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
        swal('Already exist in read books list, can not add in wish books list')
    }
    else {
        const getWishList = storedWishListBooks()
        const wishListExist = getWishList.find(b => b.bookId === book.bookId)
        if (wishListExist) {
            swal('Already exist in wish books list')
        }
        else {
            getWishList.push(book)
            localStorage.setItem('wishlist', JSON.stringify(getWishList))
            swal('added in wish books list')
        }
    }
}

export { getStoredBooks, saveBooks, storedWishListBooks, saveWishList }