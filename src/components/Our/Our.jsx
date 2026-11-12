import "./Our.css"

function Our(){
    return(
        <section id="our">
            <div className="container">
                <div className="our">
                    <div className="our-title">
                        <h3>Our Blogs</h3>
                        <p>Show More</p>
                    </div>
                    <div className="our-cards">
                        <div className="our-card">
                            <img src="/our1.png" alt="" />
                            <h4>Accessorize Like a Pro</h4>
                            <div className="info">
                                <h5>10th January 2024</h5>
                                <h6>Read More</h6>
                            </div>
                        </div>
                        <div className="our-card">
                            <img src="/our2.png" alt="" />
                            <h4>10 Timeless Wardrobe Staples</h4>
                            <div className="info">
                                <h5>3rd February 2024</h5>
                                <h6>Read More</h6>
                            </div>
                        </div>
                        <div className="our-card">
                            <img src="/our3.png" alt="" />
                            <h4>The Art of Sustainable Fashion</h4>
                            <div className="info">
                                <h5>1st March 2024</h5>
                                <h6>Read More</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Our