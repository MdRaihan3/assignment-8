import { Link, NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="md:grid md:grid-cols-5 md:p-20 rounded-2xl bg-[#1313130D]">
            <div className="col-span-3 space-y-8 md:mr-20">
                <p className="text-5xl	font-bold">Books to freshen up your mind.</p>
                <p>
                <Link to='/bookslist'>
                <button className="btn bg-[#23BE0A] text-white text-xl	font-bold">View The List</button>
                </Link>
                </p>            
            </div>
            <div className="">            
                <img src="https://i.ibb.co/L0BPn8F/pngwing-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;