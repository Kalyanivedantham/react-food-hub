import './Home.css';

function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1 style={{ color: "wheat" }}>Welcome to Our Store</h1>
          <p>Discover fresh and quality products for your daily needs</p>
        </div>
      </header>

      <section className="highlights">
        <h2>Popular Categories</h2>
        <div className="category-cards">
          <div className="category-card">
            <img src="veg.jpg" alt="Veg" />
            <h3>Veg Items</h3>
            <p>Explore our wide range of fresh vegetables!</p>
          </div>
          <div className="category-card">
            <img src="nonveg.jpeg" alt="Non-Veg" />
            <h3>Non-Veg Items</h3>
            <p>Premium quality non-veg products for you.</p>
          </div>
          <div className="category-card">
            <img src="sweet items.jpeg" alt="Sweets" />
            <h3>Sweet Products</h3>
            <p>Fresh sweet products delivered daily.</p>
          </div>
          <div className="category-card">
            <img src="snacks.jpeg" alt="Snacks" />
            <h3>Snacks</h3>
            <p>Delicious and crispy snacks for your evening cravings.</p>
          </div>
          <div className="category-card">
            <img src="fruits.jpeg" alt="Fruits" />
            <h3>Fruits</h3>
            <p>Enjoy seasonal and exotic fresh fruits every day.</p>
          </div>
          <div className="category-card">
            <img src="juices.jpeg" alt="Juices" />
            <h3>Juices</h3>
            <p>Refreshing fruit juices to keep you energized.</p>
          </div>
          <div className="category-card">
            <img src="dairy.jpeg" alt="Dairy" />
            <h3>Dairy Products</h3>
            <p>Fresh milk, cheese, butter, and yogurt for daily nutrition.</p>
          </div>
          <div className="category-card">
            <img src="bakery.jpeg" alt="Bakery" />
            <h3>Bakery Items</h3>
            <p>Freshly baked bread, cakes, and cookies just for you.</p>
          </div>
          <div className="category-card">
            <img src="dryfruits.jpeg" alt="Beverages" />
            <h3>DryFruits</h3>
            <p>Soft drinks, coffee, and tea to refresh your day.</p>
          </div>
          <div className="category-card">
            <img src="spices.jpeg" alt="Spices" />
            <h3>Spices</h3>
            <p>Authentic spices to add flavor to your meals.</p>
          </div>
          <div className="category-card">
            <img src="grains.jpeg" alt="Grains" />
            <h3>Grains & Pulses</h3>
            <p>Healthy grains, pulses, and lentils for a balanced diet.</p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>Why Choose Us?</h2>
        <p>We offer high-quality products, affordable prices, and fast delivery services. Your satisfaction is our priority!</p>
      </section>

       {/* Marquee Section for Food Items */}
       <section className="food-items-marquee">
        <h2>Special Food Items</h2>
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" scrollamount="20">
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.1LmtYXewveDP9mgdyUb73AHaFc?w=240&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Chicken" />
              <h3>Chicken</h3>
            </div>
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.DUYTHDHpC-gmooG0Pawt8gHaD5?w=332&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Mutton" />
              <h3>Sweets</h3>
            </div>
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.g_IOiHb9mx8R80T41Xq51QHaHa?w=156&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Sweets" />
              <h3>Mutton</h3>
            </div>
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.WFFVQvpawt-ljhTlTFFe1QHaFi?w=245&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Fruits" />
              <h3>Fruits</h3>
            </div>
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.T6pi12U2Vpa54RGmKIZt1QHaE7?w=221&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Grains" />
              <h3>Grains</h3>
            </div>
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.Zuvt_deT0BMVGkdi5Im-CgHaE8?rs=1&pid=ImgDetMain" alt="Juices" />
              <h3>Juices</h3>
            </div>
            <div className="food-item">
              <img src="https://i.pinimg.com/736x/fd/e8/68/fde8687d1479eb2d9846bf5b04b81ad8.jpg" alt="Vegetables" />
              <h3>Vegetables</h3>
            </div>
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.olBNlOUmxR5JbRL0B1ZlugHaEw?w=295&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Vegetables" />
              <h3>Spices</h3>
            </div>
            <div className="food-item">
              <img src="https://th.bing.com/th/id/OIP.mUQ3a14ZE7_A1V7kpwyHawHaEK?w=315&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Vegetables" />
              <h3>Dry fruits</h3>
            </div>
          </marquee>
        </div>
      </section>
 {/*special offers*/}
 <h1>Special Offers</h1>
      <section className="special-offers">
      <div className="special-offer">
      
    <div className="offer-card">
      <img src="https://th.bing.com/th/id/OIP.BETGxVUMOGtF4IZIG1oAaQHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Offer 1" />
      <h3>Exclusive Veg Discount</h3>
      <p>Get 20% off on all vegetable products.</p>
      
    </div>
    <div className="offer-card">
      <img src="https://th.bing.com/th/id/OIP.3EuYpE9asXnEFHvUaBHCrgHaKd?w=900&h=1272&rs=1&pid=ImgDetMain" alt="Offer 2" />
      <h3>Non-Veg Feast</h3>
      <p>Buy 2, Get 1 free on non-veg products.</p>
     
    </div>
    <div className="offer-card">
      <img src="https://cdn.wowdeals.me/uploads/catalogues/issues/52/37697/cover/551x752/1661432730.jpg" alt="Offer 3" />
      <h3>Sweet Treat</h3>
      <p>Special discount on all sweet items.</p>
     
    </div>
   
    <div className="offer-card">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-modern-fruits-sale-instagram-post-design-template-9efceb2135b171eb5f18704a35547933_screen.jpg?ts=1719180059" alt="Offer 4" />
      <h3>Fresh Fruits Deal</h3>
      <p>Get 15% off on seasonal fruits.</p>
   
    </div>
    <div className="offer-card">
      <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fresh-fruit-juice-food-menu-restaurant-flyer-design-template-30bf1db8a8889731bf62eeb5352a3862_screen.jpg?ts=1658773044" alt="Offer 5" />
      <h3>Juice Boost</h3>
      <p>Buy any 2 juices, get 1 free!</p>
      
    </div>
    <div className="offer-card">
      <img src="https://th.bing.com/th/id/OIP.g7j_HtoAfwlRCZOcyFB_aAAAAA?pid=ImgDet&w=178&h=315&c=7&dpr=1.5" alt="Offer 6" />
      <h3>Bakery Extravaganza</h3>
      <p>Special discounts on freshly baked goods.</p>
   
    </div>
  </div>
</section> 

      <div className="top-restaurants">
        <h2>Top 12 Restaurants</h2>
        <div className="restaurant-cards">
          <div className="restaurant-card">
            <img src="kritunga.jpeg" alt="Restaurant 1" />
            <h3>Kritunga Restaurant</h3>
          </div>
          <div className="restaurant-card">
            <img src="barbique.jpeg" alt="Restaurant 2" />
            <h3>Barbique Restarant</h3>
          </div>
          <div className="restaurant-card">
            <img src="kfc.jpeg" alt="Restaurant 3" />
            <h3>KFC Restaurant</h3>
          </div>
          <div className="restaurant-card">
            <img src="aha.jpeg" alt="Restaurant 4" />
            <h3>Aha Restaurant</h3>
          </div>
          <div className="restaurant-card">
            <img src="udipi.jpeg" alt="Restaurant 5" />
            <h3>Udipi Restaurent</h3>
          </div>
          <div className="restaurant-card">
            <img src="bramha.jpeg" alt="Restaurant 6" />
            <h3>Anandhobramha Restaurant</h3>
          </div>
          <div className="restaurant-card">
            <img src="hotel.jpeg" alt="Restaurant 7" />
            <h3>Subbayya Gari Restaurant</h3>
          </div>
          <div className="restaurant-card">
            <img src="paradise.jpeg" alt="Restaurant 8" />
            <h3>Paradise Restaurant</h3>
          </div>
          <div className="restaurant-card">
            <img src="mandi.jpeg" alt="Restaurant 9" />
            <h3>Jain Mandi Restaurent</h3>
          </div>
          <div className="restaurant-card">
            <img src="redrose.jpeg" alt="Restaurant 10" />
            <h3>Red Rose Restaurant</h3>
          </div>
          <div className="restaurant-card">
            <img src="jewel.jpeg" alt="Restaurant 9" />
            <h3>Jewel Of Nizam</h3>
          </div>
          <div className="restaurant-card">
            <img src="spicev.jpeg" alt="Restaurant 10" />
            <h3>Spicy Venue</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
