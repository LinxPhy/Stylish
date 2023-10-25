import '../styles/Contact.css';
import BackgroundImage from '../images/background_3.jpg';

function Contact() {

    return (
        <main className='Contact'>
            <section className='background_image'>
                <img src={BackgroundImage} alt="background" />
                <div className='background_image_text'>
                    <h2>Have a question?</h2>
                    <button className='buttonStyle1'> Contact Us! </button>
                </div>
            </section>

            <section className='Contact_area homepage_style'>
                <div className='contact_left_section'>
                    <h2>Get in Touch:</h2>

                    <p className='description'>
                        Have a burning question?, need help with your order or just want to say hi?<br></br> We are always happy to hear from you.
                    </p>

                    <ul>
                        <li><span className="material-symbols-outlined">call</span> +44 1234 567891</li>
                        <li><span className="material-symbols-outlined">mail</span><u>services@stylish.com</u></li>
                        <li><span className="material-symbols-outlined">location_on</span>Emirates, Hornsey Rd, London N7 7AJ</li>
                    </ul>

                </div>

                <div className='contact_right_section'>
                    <h2>Send us a message:</h2>

                    <input type='text' placeholder='Name' />
                    <input type='text' placeholder='Subject' />
                    <input type='text' placeholder='Email' />
                    <textarea placeholder='Message' />

                    <div className='checkbox_area'>
                        <input type='checkbox' />
                        <label>I agree with the <b>terms and conditions</b></label>
                    </div>
                    
                    <button className='buttonStyle1'>Send Message</button>
                </div>


            </section>

            <section className='map_area'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17682.934916948623!2d-0.11930268565964855!3d51.548928018356925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b7645295e3b%3A0x3600713c8382cf90!2sEmirates%20Stadium!5e0!3m2!1sen!2suk!4v1698227932837!5m2!1sen!2suk" 
                    width="100%" 
                    height="550" 
                    style={{border:0}} 
                    allowFullScreen={false}
                    ></iframe>
            </section>
        </main>
    )

}

export default Contact;
