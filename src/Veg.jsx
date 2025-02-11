
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";

function Veg() {
    let dispatch = useDispatch();
    let vegItems = useSelector((state) => state.products.veg);
    
    let [searchTerm, setSearchTerm] = useState("");
    let perPageItem = 9;
    let filteredItems = vegItems.filter((item) => 
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
        <div className="veg-container">
            <h1 className="veg-title">Veg Items</h1>
            
            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search for a veg item..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <br />
            <br />
            <div className="veg-items">
                {currentItems.map((item, index) => (
                    <div key={index} className="veg-card">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="veg-image"
                        />
                        <span className="veg-name">{item.name} - ₹{item.price}</span>
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
            {totalPages > 1 && (
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
                            className={pageNumber === i + 1 ? "active" : ""}
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
            )}
        </div>
    );
}

export default Veg;
