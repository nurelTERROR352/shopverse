import "./Trending.css";

function Trending() {
  return (
    <section id="trending">
      <div className="container">
        <div className="trending">
          <div className="trending-categories">
            <h2>Trending Categories</h2>
            <a href="#">Show More </a>
          </div>

          <div className="categories-list">
            <div className="category-item">
              <img src="/phone.png" alt="Mobile" />
              <h3>Mobiles</h3>
            </div>

            <div className="category-item">
              <img src="/labtop.png" alt="Laptop" />
              <h3>Laptops</h3>
            </div>

            <div className="category-item">
              <img src="/headphone.png" alt="Headphones" />
              <h3>Headphones</h3>
            </div>

            <div className="category-item">
              <img src="/monitor.png" alt="Monitor" />
              <h3>Monitors & TVs</h3>
            </div>

            <div className="category-item">
              <img src="/kolonka.png" alt="Speakers" />
              <h3>Speakers</h3>
            </div>
          </div>
          <div className="now-cards">
            <div className="now-card">
              <h2>Nike, Adidas</h2>
              <p>MIN 40% OFF</p>
              <img src="/nike.png" alt="Shoes" />
              <button>Shop Now</button>
            </div>
            <div className="now-card">
              <h2>PlayStation 5</h2>
              <p>MIN 25% OFF</p>
              <img src="/ps5.png" alt="PlayStation 5" />
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trending;
