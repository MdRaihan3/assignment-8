import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { NavLink } from "react-router-dom";



const ListedBook = ({ book }) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
    return (
        <div className="p-8 w-full grid grid-cols-5">
            <div className="col-span-1 p-4 bg-[#1313130D]">
                <img className=" w-full" src={image} alt="" />
            </div>
            <div className="border-2 col-span-4">
                <p>{bookName}</p>
                <p>By : {author}</p>
                <div className="flex gap-5">
                    <p className="flex">Tags: <span>{tags[0]}</span> <span>{tags[1]}</span></p>
                    <p className="flex"><IoLocationOutline className="text-3xl"></IoLocationOutline> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="flex gap-5">
                    <p className="flex"><MdOutlinePeopleOutline className="text-3xl"></MdOutlinePeopleOutline> Publisher : {publisher}</p>
                    <p className="flex">
                        <GrDocumentText className=" text-3xl"></GrDocumentText> Pages : {totalPages}
                    </p>
                </div>
<hr />
<div className="flex gap-7">
    <span className="px-4 py-2 rounded-3xl text-[#328EFF] bg-[#328EFF26]">
        Category : {category}</span>
    <span className="px-4 py-2 rounded-3xl text-[#FFAC33] bg-[#FFAC3326]">Rating : {rating}</span>
    <NavLink to={`/details/${bookId}`}>
    <span className="px-4 py-1 rounded-3xl btn text-lg font-medium bg-[#23BE0A] text-white">
    View Details
    </span>
    </NavLink>
    
</div>
            </div>

        </div>
    );
};

export default ListedBook;