import { useSelector } from "react-redux";


function Orders() {
    const orders = useSelector(state => state.purchasedetails);

    const orderItems = orders.map((item, index) => (
        <li key={index} className="order-item">
            <strong>{item.name}</strong> {item.price} <br />
            Date of order: {item.date} <br />
            Total Amount of your orders: {item.totalAmount} <br />
            
            <ul className="order-products">
                {item.items.map((product, productIndex) => (
                    <li key={productIndex} className="order-product">
                        <strong>{product.name}</strong> - ${product.price} x {product.quantity}
                    </li>
                ))}
            </ul>
        </li>
    ));

    return (
        <div className="orders-container">
            <h1 className="orders-title">Purchase History</h1>
            {orders.length === 0 ? (
                <h1 className="no-purchase-history">No purchase history available.</h1>
            ) : (
                <ul className="order-list">{orderItems}</ul>
            )}
        </div>
    );
}

export default Orders;
