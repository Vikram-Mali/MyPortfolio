
import './Contact.css'
import {MdOutlineEmail} from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>


            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className="contact_icons"/>
                        <h4>Email</h4>
                        <h5>burpees-spinier00@icloud.com</h5>
                        <a href="mailto:burpees-spinier00@icloud.com">Send a Message</a>
                    </article>
                </div>

                <form action="">
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="message" rows={7} placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">send message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact;