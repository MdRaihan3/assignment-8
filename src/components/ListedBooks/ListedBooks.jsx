import { useEffect, useState } from "react";
import { getStoredBooks, storedWishListBooks } from "../../localStorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import ListedBook from "../ListedBook/ListedBook";


const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wLBooks, setWLBooks] = useState([])
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredBooks();
        const storedWLBooks = storedWishListBooks();
        setWLBooks(storedWLBooks)
        setReadBooks(storedReadBooks)
        setDisplayBooks(storedReadBooks)
    }, []);


    const handleWishList = () => {
        setDisplayBooks(wLBooks)
    }
    const handleReadBooks = () => {
        setDisplayBooks(readBooks)
    }

    const handleFilter = filter => {
        if (filter === 'rating') {
            const ratingBooks = readBooks.sort((a, b) => (a.rating - b.rating))
            setDisplayBooks(ratingBooks)
        }
    }
    console.log(displayBooks)
    return (
        <div className="border-4">
            <h1 className="w-full text-center py-4 text-3xl rounded-2xl font-bold bg-[#1313130D]"> Books</h1>

            <details className="dropdown mt-8 mb-4">
                <summary className="m-1 btn px-4 pt-1 pb-2 bg-[#23BE0A] text-white font-semibold">Sort By <RiArrowDropDownLine className="text-4xl"></RiArrowDropDownLine></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box border-2 w-full text-center">
                    <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>

            <div className="grid grid-cols-5">
                <div role="tablist" className="tabs tabs-lifted grid-span-3">
                    <input onClick={handleReadBooks} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />


                    <input onClick={handleWishList} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                </div>
            </div>

            <div>            
                    {
                        displayBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                    }             
            </div>


        </div>
    );
};

export default ListedBooks;