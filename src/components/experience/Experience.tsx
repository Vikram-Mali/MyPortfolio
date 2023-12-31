
import './Experience.css'
import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>FrontEnd Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>BootStrap</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>Javascript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience_backend">
                    <h3>BackEnd Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>NodeJs</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>MySql</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_detail_icon"/>
                            <div>
                                <h4>Django</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience;