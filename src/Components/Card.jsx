import React, { useState } from 'react';
import Image1 from '../assets/reactbook.jpg';
import Modal from './Modal';


// Define the Card component, which takes 'book' as a prop
const Card = ({ book }) => {

  console.log(book);// Log the book data to the console for debugging

  // State variables for managing the modal visibility and selected book item
  const [show, setShow] = useState(false) // 'show' controls the modal's visibility, 'setShow' updates it
  const [bookItem, setBookItem] = useState() // 'bookItem' stores the selected book data, 'setBookItem' updates it

  // Render the Card component's UI
  return (
    <>
      {book.map((item) => {
        // Extract book thumbnail, price, and title, with fallbacks if data is missing
        let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail || Image1;  // Use a placeholder image if no thumbnail is available
        let amount = item.saleInfo.listPrice?.amount; // Get the book's price, if available
        let title = item.volumeInfo.title || 'No Title Available';  // Get the book's title, with a fallback

        // Render each book as a card
        return (
          <div className='card' key={item.id} onClick={() => { setShow(true); setBookItem(item) }}>
            {/* Display the book's thumbnail */}
            <img src={thumbnail} alt="Book Cover" width={200} height={250} />
            <div className="bottom">
              {/* Display the book's title */}
              <h3 className="title">{title}</h3>
              {/* Display the book's price or a placeholder if not available */}
              <p className="amount">
                {amount !== undefined ? `£${amount}` : 'Price not available'}
              </p>
            </div>
          </div>
        );
      })}
      {/* Render the Modal component, passing in the state variables and handlers */}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
}

export default Card;
