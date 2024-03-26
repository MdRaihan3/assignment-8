
const ListedBook = ({book}) => {
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div>
           <p>{image}</p> 
           <p>{bookName}</p>
        </div>
    );
};

export default ListedBook;