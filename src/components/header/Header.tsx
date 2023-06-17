
import './Header.css'
import ME from '../../assets/my_photo2.png'
import CTA from "./CTA.tsx";
import HeaderSocials from "./HeaderSocials.tsx";


const Header = () => {
    return (
        <header>
            <div className="container header_container" id="home">
                <h5>Hello I'm</h5>
                <h1>Vikram Mali</h1>
                <h5 className={"text-light"}>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt={"My photo"}/>
                </div>
                <a href="#contact" className={"scroll_down"}>Scroll Down</a>

            </div>
        </header>
    )
}

export default Header;