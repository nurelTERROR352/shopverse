import "./Galaxy.css";
function Galaxy() {
  return (
    <div id="galaxy">
      <div className="container">
        <div className="galaxy">
          <div className="galaxy-content">
            <h2>galaxy sale is live now</h2>
            <h1>Galaxy S24 | S24+</h1>
            <h3>
              Get up to $1,000 in trade-in credit from participating <br />{" "}
              carriers. Terms apply.
            </h3>
          </div>
          <div className="galaxy-img">
            <img src="phones.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Galaxy;