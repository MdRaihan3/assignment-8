import { useEffect, useState } from "react";
import HomeBook from "../HomeBook/HomeBook";

const HomeBooks = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <div>
            <h2 className="text-4xl	font-bold mb-6 mt-20 text-center">Books</h2>
            <div className="grid grid-cols-3 gap-5">
                {
                    books.map(book => <HomeBook key={book.bookId} book={book}></HomeBook>)
                }
            </div>
        </div>

    );
};

export default HomeBooks;