
import "./About.css"
import Me from "../../assets/about_me.png"
import {FaAward} from "react-icons/fa";
import {GiTargetPrize} from "react-icons/gi";
import {VscFolderLibrary} from "react-icons/vsc";

function About() {
    return (
        <section id="about">
            <h5>Get To</h5>
            <h2>About ME</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={Me} alt='my_memoji'/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">

                        <article className='about_card'>
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>2 internships</small>
                        </article>

                        <article className='about_card'>
                            <GiTargetPrize className="about_icon"/>
                            <h5>Hackathons</h5>
                            <small>won 2+ Hackathons</small>
                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>2+ Completed Projects</small>
                        </article>

                    </div>
                    <p>
                        Lorem ipsum
                    </p>

                    <a href='#contact' className="btn btn-primary">Let's Talk</a>
                </div>

            </div>

        </section>
    )
}

export default About;