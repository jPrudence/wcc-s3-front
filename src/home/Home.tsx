import "./Home.scss"

const Home = () => {
    return (
        <>
            <div className="div_text">
                <h3 className="animated-letter">
                    <h4 className="animated-letter" id="A">A</h4>
                    <h4 className="animated-letter" id="N" >N</h4>
                    <h4 className="animated-letter" id="S">S</h4>
                    <h4 className="animated-letter" id="A2">A</h4>
                    <h4 className="animated-letter" id="R">R</h4>
                    <h4 className="animated-letter" id="O">O</h4>
                    <h4 className="animated-letter" id="L">L</h4>
                    <h4 className="animated-letter" id="L2">L</h4>
                </h3>
            </div>

            <div className="div_logos">
                {/* logo facebook in a link */}
                <a href="https://www.facebook.com/ansaroll.sa" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/facebook-new.png" alt="facebook" />
                </a>
                {/* logo instagram in a link */}
                <a href="https://www.instagram.com/ansarolll/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="instagram" />
                </a>
                {/* logo linkedin in a link */}
                <a href="https://www.linkedin.com/in/sahobisoa-rolland-andrianiaina-317b77181/" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="linkedin" />
                </a>
                {/* logo github in a link */}
                <a href="https://github.com/ansaroll" target="_blank" rel="noreferrer">
                    <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="github" />
                </a>
            </div>
        </>
    )
}

export default Home