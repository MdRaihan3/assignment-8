import { CiStar } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const HomeBook = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book
    return (
        <div>
            <NavLink to={`/details/${bookId}`}>
            <div className="p-4 gap-4 rounded-2xl border-2 space-y-3">
            <div className="px-6 py-3 rounded-2xl bg-[#1313130D]">
                <img className="w-full h-80" src={image} alt="" />
            </div>
            <p className="text-[#23BE0A]"><span className="mr-6">{tags[0]}</span>  <span>{tags[1]}</span></p>
            <p className="text-2xl	font-bold">{bookName}</p>
            <p>By : {author}</p>
            <hr />
            <p className="flex justify-between">
                 <span>{category}</span>
                <span className="flex">{rating} <CiStar className="text-2xl"></CiStar></span></p>
        </div>
            </NavLink>
        </div>
        
    );
};

export default HomeBook;