import { useLoaderData, useParams } from "react-router-dom";
import { saveBooks, saveWishList } from "../../utility/localStorage";

const BookDetails = () => {
    const books = useLoaderData();
    const { id } = useParams();

    const intId = parseInt(id)
    const book = books.find(book => book.bookId === intId)
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    const handleRead = () => {
        saveBooks(book)
    }
    const handleWishList = () => {
        saveWishList(book)
    }

    return (
        <div className="md:grid grid-cols-2">
            <div className=" p-20 justify-center bg-[#1313130D] col-span-1 rounded-2xl ">
                <img className="w-full" src={image} alt="" />
            </div>

            <div className=" space-y-4 ml-8">
                <h2 className="text-4xl font-bold">{bookName}</h2>
                <p className="text-xl font-medium">By : {author}</p>
                <hr />
                <h3 className="text-xl">{category}</h3>
                <hr />
                <p><span className=" font-bold"> Review</span> : {review}</p>
                <p> <span className=" font-bold">Tags</span> :
                    <span className=" mx-3 font-medium text-[#23BE0A]">{tags[0]}</span>
                    <span className="font-medium text-[#23BE0A]">{tags[1]}</span>
                </p>
                <hr />
                <div className="grid grid-cols-3">
                    <div className="col-span-1 space-y-3">
                        <p>Number of Pages :</p>
                        <p>Publisher : </p>
                        <p>Year of Publishing : </p>
                        <p>Rating : </p>
                    </div>
                    <div className=" font-semibold space-y-3">
                        <p>{totalPages}</p>
                        <p>{publisher}</p>
                        <p>{yearOfPublishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div>
                    <button onClick={handleRead} className="border-2 rounded-lg px-4 py-2 mr-5">Read</button>
                    <button onClick={handleWishList} className="bg-[#50B1C9] rounded-lg px-4 py-2">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;