import { useDispatch, useSelector } from "react-redux";
import { addPurchaseDetails, clearCart, decreament, increament, remove } from "./Store";
import { useState } from "react";

function Cart() {
  let cartItems = useSelector(state => state.cart);
  let dispatch = useDispatch(); 

  let [showDiscount, setShowDiscount] = useState(false); 
  let [couponCode, setCouponCode] = useState('');
  let [couponcodeDiscountPer, setCouponcodeDiscountPer] = useState(0);

  let handlingCouponPer = () => {
    switch (couponCode.toUpperCase()) {  
      case 'AMAZON 10':  setCouponcodeDiscountPer(10); break;
      case 'AMAZON 20':  setCouponcodeDiscountPer(20); break;
      case 'AMAZON 30':  setCouponcodeDiscountPer(30); break;
      case 'AMAZON 40':  setCouponcodeDiscountPer(40); break;
      default: 
        alert('Invalid coupon code');
        setCouponcodeDiscountPer(0);
    }
  }
  // purchase handling function
  let handlePurchaseDetails =() => {
    let purchaseDate= new Date().toLocaleDateString();
    let total=totalPrice-couponDiscountAmount;
    let purchaseDetails={ items: [...cartItems],
                          totalAmount: total,
                          date :purchaseDate

    }
    dispatch(addPurchaseDetails(purchaseDetails));
    dispatch(clearCart());
  }

  // Rendering cart items
  let finalItems = cartItems.map((item, index) => (
    <li key={index}>
      {item.name} - ${item.price}
      <button  className="incre"onClick={() => dispatch(increament(item))}>+</button>
      <button  className="decre"onClick={() => dispatch(decreament(item))}>-</button>
      Quantity: {item.quantity}
      <button  className="remove"onClick={() => dispatch(remove(item))}>Remove</button>
    </li>
  ));
  

  // Calculating the total price
  let totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  // State for discount percentage
  let [discountPercentage, setDiscountPercentage] = useState(0);

  // Calculating discount amount and final price
  let discountAmount = totalPrice * discountPercentage / 100;
  let finalAmount = totalPrice - discountAmount;
  
  // Adding coupon discount
  let couponDiscountAmount = totalPrice * couponcodeDiscountPer / 100;
  let finalAmountWithCoupon = finalAmount - couponDiscountAmount;

  return (
    <>
      {cartItems.length > 0 ? (
        <div>
          <br />
          <h1>Welcome to the cart page</h1>
          <ul>{finalItems}</ul>
          <p>Total price: ${totalPrice}</p>
          
          {showDiscount && (
            <>
              <p>Discount Applied: {discountPercentage}%</p>
              <p>Discount Amount: ${discountAmount}</p>
            </>
          )}

          {couponcodeDiscountPer > 0 && (
            <>
              <p>Coupon Applied: {couponCode}</p>
              <p>Coupon Discount: ${couponDiscountAmount}</p>
            </>
          )}
          
          <p>Your net amount to pay: ${finalAmountWithCoupon}</p>

           
         <button className="button3"onClick={() => { setDiscountPercentage(10); setShowDiscount(true); }} >
            Apply 10% Discount
          </button>
          <button className="button2" onClick={() => { setDiscountPercentage(20); setShowDiscount(true); }}>
            Apply 20% Discount
          </button>
          <button className="button1" onClick={() => { setDiscountPercentage(30); setShowDiscount(true); }}>
            Apply 30% Discount
          </button>

         
          <p><input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Enter your coupon code"
          /></p>
          <button className="apply" onClick={() => handlingCouponPer()}> Apply Coupon </button>
          <p>Your coupon code Applied : {couponCode}</p>
          <p>Your coupon code Discount Applied : {couponDiscountAmount}</p>
        </div>
      ) : (
       
         <center> <br /> <br /><h1 style={{color:"orangered"}}>Your cart is empty!</h1></center>
      )}
      <br /><br />
      <button className="complete" onClick={handlePurchaseDetails}> Complete Purchase</button>
    </>
  );
}

export default Cart;