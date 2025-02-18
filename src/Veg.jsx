import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./Store";
import { useState } from "react";
import './Veg.css'; 

function Veg() {
    let dispatch = useDispatch();
    let vegItems = useSelector((state) => state.products.veg);

    let [searchTerm, setSearchTerm] = useState("");
    let [selectedPrices, setSelectedPrices] = useState([]);

    let perPageItem = 8;

    // Price range options
    const priceRanges = [
        { label: "₹0 - ₹100", min: 0, max: 100 },
        { label: "₹100 - ₹200", min: 100, max: 200 },
        { label: "₹200 - ₹350", min: 200, max: 350 },
        { label: "₹350 - ₹600", min: 350, max: 600 }
    ];

    // Filtering logic for search and price range
    let filteredItems = vegItems
        .filter((item) => 
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((item) => {
            if (selectedPrices.length === 0) return true;
            return priceRanges.some((range) => 
                selectedPrices.includes(range.label) &&
                item.price >= range.min && item.price <= range.max
            );
        });

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

    // Handle price range selection
    const handlePriceChange = (label) => {
        if (selectedPrices.includes(label)) {
            setSelectedPrices(selectedPrices.filter((item) => item !== label));
        } else {
            setSelectedPrices([...selectedPrices, label]);
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

           {/* Price Range Filters */}
<div className="price-filters">
    <h3>Filter by Price:</h3>
    {priceRanges.map((range, index) => (
        <label key={index} className="price-checkbox">
            <input
                type="checkbox"
                checked={selectedPrices.includes(range.label)}
                onChange={() => handlePriceChange(range.label)}
            />
            <span>{range.label}</span>
        </label>
    ))}
</div>

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
                            className="add-to-cart-btn veg"
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
                {[...Array(totalPages)].map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => handlePage(index + 1)} 
                        className={pageNumber === index + 1 ? "active" : ""}
                    >
                        {index + 1}
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

export default Veg;
