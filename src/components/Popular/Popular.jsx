import "./Popular.css";

function Popular() {
  return (
    <section id="popular">
      <div className="container">
        <div className="popular">
          <div className="popular-products">
            <h2>Popular products</h2>
            <a href="#">Show More</a>
          </div>
          <div className="popular-cards">
            <div className="popular-card">
              <img id="ni" src="/iphone.png" alt="" />
              <img src="/iphone1.png" alt="" />
              <h3>Magnetic Case</h3>
              <p>
                $13.49<span> $18.99</span>
              </p>
            </div>
            <div className="popular-card">
              <img id="ni" src="/rozetka.png" alt="" />
              <img src="/rozetka1.png" alt="" />
              <h3>UCOMX Nano 3 in 1</h3>
              <p>
                $39.99<span> $49.99</span>
              </p>
            </div>
            <div className="popular-card">
              <img id="ni" src="/abibas.png" alt="" />
              <img src="/abibas1.png" alt="" />
              <h3>NB Fresh Foam</h3>
              <p>
                $71.99<span> $81.99</span>
              </p>
            </div>
            <div className="popular-card">
              <img id="ni" src="/headphone1.png" alt="" />
              <img src="/headphone2.png" alt="" />
              <h3>Bose QuietComfort</h3>
              <p>
                $379.00<span> $429.00</span>
              </p>
            </div>
            <div className="popular-card">
              <img id="ni" src="/thor.png" alt="" />
              <img src="/thor1.png" alt="" />
              <h3>BUGANI BT Speaker</h3>
              <p>
                $59.93<span> $129.98</span>
              </p>
            </div>
            <div className="popular-card">
              <img id="ni" src="/plan.png" alt="" />
              <img src="/plan1.png" alt="" />
              <h3>Galaxy Tab A9+</h3>
              <p>
                $169.99 <span>$219.99</span>
              </p>
            </div>
            <div className="popular-card">
              <img id="ni" src="/aser.png" alt="" />
              <img src="/aser1.png" alt="" />
              <h3>Acer Aspire 1</h3>
              <p>
                $228.27<span> $300.00</span>
              </p>
            </div>
            <div className="popular-card">
              <img id="ni" src="/mouse.png" alt="" />
              <div className="card-mouse">
                <img src="/mouse1.png" alt="" />
                <h3>Redragon M810</h3>
                <p>
                  $32.99<span> $39.99</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popular;
