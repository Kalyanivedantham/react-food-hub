function Home() {
    return (
      <>
        <header className="hero">
          <div className="hero-content">
            <h1 style={{color:"wheat"}}>Welcome to Our Store</h1>
            <p>Discover fresh and quality products for your daily needs</p>
            {/* <button className="shop-now-btn">Shop Now</button> */}
          </div>
        </header>
  
        <section className="highlights">
          <h2>Popular Categories</h2>
          <div className="category-cards">
            <div className="category-card">
              <img src="veg.jpg" alt="Veg" />
              <h3>Veg Items</h3>
              <p>Explore our wide range of fresh vegetables!</p>
              {/* <button>Browse Veg</button> */}
            </div>
            <div className="category-card">
              <img src="nonveg.jpeg" alt="Non-Veg" />
              <h3>Non-Veg Items</h3>
              <p>Premium quality non-veg products for you.</p>
              {/* <button>Browse Non-Veg</button> */}
            </div>
            <div className="category-card">
              <img src="sweet items.jpeg" alt="Milk" />
              <h3>Sweet Products</h3>
              <p>Fresh sweet products delivered daily.</p>
              {/* <button>Browse Milk</button> */}
            </div>
          </div>
        </section>
  
        <section className="about-us">
          <h2>Why Choose Us?</h2>
          <p>We offer high-quality products, affordable prices, and fast delivery services. Your satisfaction is our priority!</p>
          {/* <button className="learn-more-btn">Learn More</button> */}
        </section>
      </>
    );
  }
  
  export default Home;