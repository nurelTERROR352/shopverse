import "./Watch.css";

function Watch() {
  return (
    <section id="watch">
      <div className="container">
        <div className="watch">
          <div className="watch-content">
            <h3>
              Sale up to 20% <br /> off
            </h3>

            <h1>Apple Watch Ultra 2</h1>

            <p>
              The most rugged and capable Apple Watch pushes <br />
              the limit again. Featuring the all-new S9 SiP.
            </p>

            <div className="watch-content-btns">
              <button id="btn">Shop Now</button>
              <button>Learn More</button>
            </div>
          </div>

          <div className="watch-img">
            <img src="/watch.png" alt="apple Watch" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Watch;
