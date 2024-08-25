import React from 'react'
import Img from '../assets/reactbook.jpg'
import '../Components/Style.css'

// Define the Modal component, which takes 'show', 'item', and 'onClose' as props
const Modal = ({ show, item, onClose }) => {
    // If 'show' is false, do not render the modal
    if (!show) {
        return null  // Return null to prevent the modal from rendering
    }

    // Extract the thumbnail image from the item, with a fallback to the placeholder image
    let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail || Img;

    // Render the modal's UI
    return (
        <>
            <div className='overlay'>
                <div className="overlay-inner">
                    {/* Close button with an icon, calls onClose to close the modal */}
                    <button className='close' onClick={onClose}><i class="fa-solid fa-x"></i></button>
                    <div className="inner-box">
                        {/* Display the book's thumbnail */}
                        <img src={thumbnail} alt="" width={150} height={200} />
                        <div className="info">
                            {/* Display the book's title */}
                            <h1>{item.volumeInfo.title}</h1>
                            {/* Display the book's authors */}
                            <h3>{item.volumeInfo.authors}</h3>
                            {/* Display the book's publisher and publication date */}
                            <h4>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span></h4>
                            <br />
                            {/* Link to more information about the book, opens in a new tab */}
                            <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                                <button>More</button>
                            </a>

                        </div>
                    </div>
                    {/* Display the book's description */}
                    <h4 className="description">
                        {item.volumeInfo.description}
                    </h4>
                </div>
            </div>
        </>
    )
}

export default Modal
