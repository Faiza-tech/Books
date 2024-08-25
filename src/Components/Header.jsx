// Import necessary libraries and components
import React, { useState } from 'react'; // Import React and useState hook
import Image from '../assets/booktree.jpg'; // Import an image for the header
import Card from './Card'; // Import the Card component to display book data
import axios from 'axios'; // Import axios for making HTTP requests

// Define the Header component
const Header = () => {
  // State variables for managing search input and book data
  const [search, setSearch] = useState(''); // search stores the input value, setSearch updates it
  const [bookData, setBookData] = useState([]); // bookData stores fetched book data, setBookData updates it


  // Function to fetch book data from Google Books API
  const searchBook = () => {
    // Make a GET request to the Google Books API with the search query
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAVWrLpbxtz4FDyQSQ-jeErZFRvpgR1mnA&maxResults=40`)
      .then(res => setBookData(res.data.items)) // On success, update bookData with the fetched items
      .catch(err => {
        console.error('Error:', err); // Log any errors to the console
        setBookData([]);  // Set bookData to an empty array if there's an error
      });
  }


  // Function to handle the Enter key press in the search input
  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') { // If the Enter key is pressed
      searchBook(); // Call searchBook function to fetch the data
    }
  }


  // Render the Header component's UI
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>A room without books is like <br /> a body without a soul.</h1> {/* Display a quote */}
        </div>

        <div className="row2">
          <h2>Find your books</h2> {/* Subtitle */}

          <div className="search">
            <input 
              type="text" 
              placeholder='Enter Your Name' // Placeholder text in the input field
              value={search} // Bind the input value to the search state
              onChange={(e) => setSearch(e.target.value)} // Update search state on input change
              onKeyDown={handleKeyDown} // Handle key down events
            />
            <button onClick={searchBook}>
              <i className="fa-solid fa-magnifying-glass"></i> {/* Search icon */}
            </button>
          </div>

          <img src={Image} alt="Books" width={300} height={320} /> {/* Display the imported image */}
        </div>
      </div>
      
      <div className="container">
        <Card book={bookData} /> {/* Pass the fetched book data to the Card component */}
      </div>
    </>
  );
}

// Export the Header component as the default export
export default Header;
