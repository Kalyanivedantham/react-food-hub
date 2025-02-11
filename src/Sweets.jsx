import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function Sweets() {
    const sweetItems = useSelector(state => state.products.Sweets);
    const dispatch = useDispatch();

    let [searchTerm, setSearchTerm] = useState("");
    let perPageItem = 9;
    let filteredItems = sweetItems.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    let totalPages = Math.ceil(filteredItems.length / perPageItem);
    let [pageNumber, setPageNumber] = useState(1);

    let pageEndIndex = perPageItem * pageNumber;
    let pageStartIndex = pageEndIndex - perPageItem;
    let currentItems = filteredItems.slice(pageStartIndex, pageEndIndex);

    let handlePage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setPageNumber(page);
        }
    };

    return (
        <div className="sweet-container">
            <h2 className="sweet-title">Sweet Items</h2>
            
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search for a sweet item..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <br /> <br />
            
            <div className="sweet-items">
                {currentItems.map((item, index) => (
                    <div className="sweet-card" key={index}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="sweet-image"
                        />
                        <span className="sweet-name">{item.name} - ₹{item.price}</span>
                        <button 
                            onClick={() => dispatch(addToCart(item))} 
                            className="add-to-cart-btn"
                        >
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
            <br /><br />
            {/* Pagination Controls */}
            <div className="pagination">
                <button 
                    onClick={() => handlePage(pageNumber - 1)} 
                    disabled={pageNumber === 1}
                >
                    Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        className={`pagination-btn ${pageNumber === i + 1 ? "active" : ""}`}
                        onClick={() => handlePage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button 
                    onClick={() => handlePage(pageNumber + 1)} 
                    disabled={pageNumber === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Sweets;
