import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { NavLink } from "react-router-dom";



const ListedBook = ({ book }) => {
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className=" p-6 rounded-xl w-full md:grid grid-cols-5 border-2 gap-6">
            <div className="col-span-1 p-5 rounded-xl bg-[#1313130D]">
                <img className=" w-full" src={image} alt="" />
            </div>
            <div className="col-span-4 p-5 space-y-4">
                <p className="text-2xl font-bold">{bookName}</p>
                <p className=" font-medium">By : {author}</p>
                <div className="md:flex gap-7">
                    <p className="flex gap-3"><span className=" font-bold">Tags:</span>
                      <span className="text-[#23BE0A] font-medium mr-6">{tags[0]}</span> 
                      <span className="text-[#23BE0A] font-medium">{tags[1]}</span>
                    </p>
                    <p className="flex"><IoLocationOutline className="text-2xl"></IoLocationOutline> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className="md:flex gap-7">
                    <p className="flex"><MdOutlinePeopleOutline className="text-2xl"></MdOutlinePeopleOutline> Publisher : {publisher}</p>
                    <p className="flex">
                        <GrDocumentText className=" text-2xl"></GrDocumentText> Pages : {totalPages}
                    </p>
                </div>
                <hr />
                <div className="md:flex md:gap-7">
                    <p className="px-4 py-2 rounded-3xl text-[#328EFF] bg-[#328EFF26]">
                        Category : {category}</p>
                    <p className="px-4 py-2 rounded-3xl text-[#FFAC33] bg-[#FFAC3326]">Rating : {rating}</p>
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