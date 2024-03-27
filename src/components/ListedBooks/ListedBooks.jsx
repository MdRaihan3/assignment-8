import { useEffect, useState } from "react";
import { getStoredBooks, storedWishListBooks } from "../../utility/localStorage";
import { RiArrowDropDownLine } from "react-icons/ri";
import ListedBook from "../ListedBook/ListedBook";


const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wLBooks, setWLBooks] = useState([]);

    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const storedReadBooks = getStoredBooks();

        setReadBooks(storedReadBooks)
        setDisplayBooks(storedReadBooks)
    }, []);

    useEffect(() => {
        const storedWLBooks = storedWishListBooks();
        setWLBooks(storedWLBooks)
    }, [])
    
    const handleWishList = () => {
        setDisplayBooks(wLBooks)
    }
    const handleReadBooks = () => {
        setDisplayBooks(readBooks)
    }
    const handleFilter = filter => {
        if (filter === 'rating') {
            if(readBooks.length > 0){
                const ratingBooks = readBooks.sort((a, b) => (b.rating - a.rating))
                const filteredRating = ratingBooks.filter(fr => fr.rating > 0)
                setDisplayBooks(filteredRating)
                if(wLBooks.length > 0){
                    const ratingWLBooks = wLBooks.sort((a, b) => (b.rating - a.rating))
                    const filteredWLRating = ratingWLBooks.filter(fr => fr.rating > 0)
                    setDisplayBooks(filteredWLRating)
                }
            }
            else if(wLBooks.length > 0){
                const ratingWLBooks = wLBooks.sort((a, b) => (b.rating - a.rating))
                    const filteredWLRating = ratingWLBooks.filter(fr => fr.rating > 0)
                    setDisplayBooks(filteredWLRating)
            }

           
        }
        else if (filter === 'pages') {
            if(readBooks.length > 0){
                const pageBooks = readBooks.sort((a, b) => (b.totalPages - a.totalPages));
                const filteredPages = pageBooks.filter(pb => pb.totalPages > 0)
                setDisplayBooks(filteredPages)
                if(wLBooks.length > 0){
                    const pageWLBooks = wLBooks.sort((a, b) => (b.totalPages - a.totalPages));
                    const filteredWLPages = pageWLBooks.filter(pb => pb.totalPages > 0)
                    setDisplayBooks(filteredWLPages)
                }
            }
            else if(wLBooks.length > 0){
                const pageWLBooks = wLBooks.sort((a, b) => (b.totalPages - a.totalPages));
                    const filteredWLPages = pageWLBooks.filter(pb => pb.totalPages > 0)
                    setDisplayBooks(filteredWLPages)
            }        
        }

        else if(filter === 'year'){
            if(readBooks.length > 0){
                const yearBooks = readBooks.sort((a,b) => (b.yearOfPublishing - a.yearOfPublishing));
                const filteredYear = yearBooks.filter(yb => yb.yearOfPublishing > 0)
                setDisplayBooks(filteredYear)
                if(wLBooks.length > 0){
                    const yearWLBooks = wLBooks.sort((a,b) => (b.yearOfPublishing - a.yearOfPublishing));
                    const filteredWLYear = yearWLBooks.filter(yb => yb.yearOfPublishing > 0)
                    setDisplayBooks(filteredWLYear)
                }
            }
            else if(wLBooks.length > 0){
                const yearWLBooks = wLBooks.sort((a,b) => (b.yearOfPublishing - a.yearOfPublishing));
                    const filteredWLYear = yearWLBooks.filter(yb => yb.yearOfPublishing > 0)
                    setDisplayBooks(filteredWLYear)
            }      
        }
    }
    return (
        <div>
            <h1 className="w-full text-center py-4 text-3xl rounded-2xl font-bold bg-[#1313130D]"> Books</h1>

            <details className="dropdown mt-8 mb-4">
                <summary className="m-1 btn px-4 pt-1 pb-2 bg-[#23BE0A] text-white font-semibold">Sort By <RiArrowDropDownLine className="text-4xl"></RiArrowDropDownLine></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box border-2 w-52">
                    <li onClick={() => handleFilter('rating')}><a>Rating</a></li>
                    <li onClick={() => handleFilter('pages')}><a>Number of pages</a></li>
                    <li onClick={() => handleFilter('year')}><a>Publisher year</a></li>
               </ul>
            </details>

            <div className="grid grid-cols-5">
                <div role="tablist" className="tabs tabs-lifted grid-span-3">
                    <input onClick={handleReadBooks} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />

                    <input onClick={handleWishList} type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                </div>
            </div>

            <div className="space-y-4">
                {
                    displayBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
                }
            </div>


        </div>
    );
};

export default ListedBooks;