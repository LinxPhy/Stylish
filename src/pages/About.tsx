import BackgroundImage from '../images/background_4.jpg';
import '../styles/About.css'

function About() {

    return (
        <main >
            <section className="background_image">
                <img src={BackgroundImage} alt="background" />
                <div className="background_image_text">
                    <h2>Find out more about the team</h2>
                    <p>Learn more about Stylish</p>
                    <button className="buttonStyle1">About Stylish</button>
                </div>
            </section>

            <div className='About'>

            <section className='about_section homepage_style'>
                <div className='About_text'>
                    <h2>About Us</h2>
                    <p>
                        Stylish is a small business, which started in 2023, created by an idividual, which is passionate about fashion and want to share our passion with others.
                        We are based in London, UK and we are very excited to share our products with you.
                    </p>
                </div>
            </section>

            <section className='FAQ homepage_style'>

                <div>
                    <h2>FAQ</h2>
                    <div>
                        <h4>
                            How do i place an order?
                        </h4>

                        <p>
                            To place an order, you can either add the product to your cart and checkout or you can contact us via email or phone.
                        </p>
                    </div>

                    <div>
                        <h4>
                            How do i pay for my order?
                        </h4>

                        <p>
                            We accept all major credit cards and PayPal.
                        </p>
                    </div>

                    <div>
                        <h4>
                            How do i track my order?
                        </h4>

                        <p>
                            Once your order has been shipped, you will receive an email with the tracking number.
                        </p>
                    </div>

                    <div>
                        <h4>
                            How do i return an item?
                        </h4>

                        <p>
                            To return an item, you can either contact us via email or phone. You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.
                        </p>
                    </div>

                    <div>
                        <h4>
                            How long will it take to receive my order?
                        </h4>

                        <p>
                            The products are delivered within 3 - 7 days (excluding Public holidays)
                        </p>
                    </div>

                    <div>
                        <h4>
                            Do you ship internationally?
                        </h4>

                        <p>
                            The products are only delivered within the UK and in EU.
                        </p>
                    </div>

                </div>

            </section>

            <section className='Privacy_Policy homepage_style'>

                <div>
                    <h2>Privacy Policy</h2>
                    <div>
                        <p>
                            We may collect the following types of personal information:

                            Name, Contact information, including email address and phone number, Shipping and billing address,
                            Payment information, including credit card details,
                            Order history and preferences,
                            IP address and device information,
                            Cookies and usage data,

                            We collect this information for the purpose of providing and improving our services, processing orders, and communicating with you.</p>
                    </div>

                    <div>
                        <p>
                            The security of your personal information is important to us, but remember that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                        </p>
                    </div>

                    <div>
                        <p>
                            We use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
                        </p>
                    </div>
                </div>
            </section>

            <section className='Terms_and_conditions homepage_style'>
                <div>
                    <h2>Terms & Conditions</h2>
                    <div>
                        <p>
                            By accessing this website we assume you accept these terms and conditions. Do not continue to use Stylish if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                    </div>

                    <div>
                        <p>
                            If you wish to purchase any product or service made available through the Site, you may be asked to provide certain information relevant to your purchase, including, without limitation, your name, shipping address, and payment information.
                            We reserve the right to refuse or cancel your order at any time for reasons including, but not limited to, product or service availability, errors in the description or price of the product or service, or errors in your order. We will issue a refund for any cancelled order.
                        </p>
                    </div>

                    <div>
                        <p>
                            The Site and its original content, features, and functionality are owned by Stylish and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                        </p>
                    </div>
                </div>
            </section>

            </div>
        </main>

    )

}



{/* <div className="shipping_section">
    <div className="shipping_information">

        <div className="shipping_info">
            <h5>Shipping Information</h5>
            <div>
                <h6>Standard Delivery</h6>
                <p className="shipping_text">The products are delivered within 3 - 7 days (excluding Public holidays).</p>
            </div>

            <div>
                <h6>International Delivery</h6>
                <p className="shipping_text"> The products are only delivered within the UK and in EU</p>
            </div>

            <div>
                <h6>Returns</h6>
                <p className="shipping_text">
                    The products can only returned within 28 days of purchase,
                    provided that they have not been used or fitted.
                </p>
            </div>

        </div>

    </div>
</div> */}

export default About;
