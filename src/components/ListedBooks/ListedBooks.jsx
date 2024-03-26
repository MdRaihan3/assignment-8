import { useEffect, useState } from "react";
import { getStoredBooks } from "../../localStorage";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredBooks();
        setReadBooks(storedReadBooks)
        setDisplayBooks(storedReadBooks)
    }, [])

    const handleFilter = filter => {
        if (filter === 'rating') {
            const ratingBooks = readBooks.sort((a, b) => (a.rating - b.rating))
            setDisplayBooks(ratingBooks)
        }
    }
    console.log(displayBooks)
    return (
        <div>
            <h1 className="w-full text-center py-4 text-3xl rounded-2xl font-bold bg-[#1313130D]"> Books</h1>
            <details className="dropdown">
                <summary className="m-1 btn">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </details>
            <div>
                <ul>
                    {
                        displayBooks.map(book => <li key={book.bookId}>{book.bookName}</li>)
                    }
                </ul>

            </div>


        </div>
    );
};

export default ListedBooks;