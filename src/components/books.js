import BookItem from "./bookItem";

// Create book items on page
function Books(props){

    // returns book items
    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );

}

export default Books;