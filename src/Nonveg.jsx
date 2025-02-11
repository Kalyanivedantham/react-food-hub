import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function Nonveg() {
    let dispatch = useDispatch();
    let nonVegItems = useSelector((state) => state.products.Nonveg);
    
    let [searchTerm, setSearchTerm] = useState("");
    let perPageItem = 9;
    let filteredItems = nonVegItems.filter((item) => 
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
        <div className="nonveg-container">
            <h1 className="nonveg-title">Non-Veg Items</h1>
            
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search for a non-veg item..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <br /> <br />
            <div className="nonveg-items">
                {currentItems.map((item, index) => (
                    <div key={index} className="nonveg-card">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="nonveg-image"
                        />
                        <span className="nonveg-name">{item.name} - ₹{item.price}</span>
                        <button
                            onClick={() => dispatch(addToCart(item))}
                            className="add-to-cart-btn"
                        >
                            Add To Cart
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

export default Nonveg;