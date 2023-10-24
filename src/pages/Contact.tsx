import BackgroundImage from '../images/background_3.jpg';

function Contact() {

    return (
        <main>
            <section className='background_image'>
                <img src={BackgroundImage} alt="background" />
                <div className='background_image_text'>
                    <h2>Have a question?</h2>
                    <button className='buttonStyle1'> Contact Us! </button>
                </div>
            </section>

            <section>
                <h2>GET IN TOUCH:</h2>
                
            </section>
        </main>
    )

}

export default Contact;
