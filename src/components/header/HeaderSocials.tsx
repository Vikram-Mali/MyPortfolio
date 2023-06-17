import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";

const HeaderSocials = () => {
    return (
        <div className="header_social">
            <a href="https://www.linkedin.com/in/vikram-mali-2993701ba" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Vikram-Mali" target="_blank">{BsGithub()}</a>
        </div>
    )
}

export default HeaderSocials;