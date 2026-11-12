import "./Header.css"

function Header() {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h5>ShopVerse</h5>
          <div className="header-a">
            <a href="">About</a>
            <a href="">Shop</a>
            <a href="">Categories</a>
            <a href="">Help</a>
          </div>
          <div className="input-head">
            <input type="text" placeholder="Search for “Phones”"  />
            <img src="/heart.png" alt="" />
            <img src="/shopping-bag.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header