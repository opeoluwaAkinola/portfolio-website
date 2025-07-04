import React,{useState}from 'react';
import './Contact.css';
import email from "./../../assets/icons8-email-64 (1).png";
import location from "./../../assets/icons8-location-50 (1).png";
import 'bootstrap-icons/font/bootstrap-icons.css';


function Contact() {
    
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "7f6380d4-dcf3-4e12-a01e-d8c7ff6b1010");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
        setTimeout(() => {
            setResult('');
          }, 3000);
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };
    
    return (
        <section id='contact' className='contact'>
            <div className='contact-title'>
                    <h2 className='contacttitle'>Get in Touch</h2>
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Lets Talk</h1>
                    <p> I'm Currently available  take on new challenges, so feel free to reach out to me.</p>
                    <div className='contact-details'>
                        <div className='contact-detail'>
                            <img src={email} alt=''/><p>Opiiiakinola@gmail.com</p>
                        </div>
                        <div className='contact-detail'>
                        <img src={location} alt=''/><p>Dublin,Ireland</p>
                        </div>
                        
                    </div>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label> Your Name</label>
                    <input type='text' placeholder='Enter your name' name='name'/>
                    <label> Your Email</label>
                    <input type='email' placeholder='Enter your email address' name='email'/>
                    <label> Your Message</label>
                    <textarea name='message' id='' rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit</button>
                </form>   
            </div>
            <span className='result'>{result}</span>
        </section>
    )
}

export default Contact
