import styles from "../../styles/contacte/contacte.module.css"
import emailjs from 'emailjs-com';
import {useState} from "react"
import {text} from "../text"
import Image from 'next/image'


export function Contacte(props){

    const [emailSent, setEmailSent] = useState(false)
    const [state, setState] = useState({
        nume: "",
        prenume: "",
        email: "",
        message: "",
        number: ""
    })

    function handleInputChange(e) {
        e.preventDefault();
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setState({ ...state , [name]: value });
    }

    function sendEmail(e) {

        e.preventDefault();

        const templateParams = {
            from_name: state.nume + state.prenume + " ( Email : " + state.email + ", telefon : " + state.number + ")",
            to_name: "Belvedere Wood Parquet",
            message: state.message
        };

        emailjs
            .send("contact_bwp", "contact_bwp_template", templateParams, "user_EqOBrPF8rtgBDhkZe8vcW")
            .then(
                function(response) {
                // toast.success("Your message has successfully sent!", {
                //     position: toast.POSITION.BOTTOM_CENTER
                // });
                console.log("SUCCESS!", response.status, response.text);
                },
                function(err) {
                // toast.error("Your message was not able to be sent");
                }
            );
        setState({
            nume: "",
            prenume: "",
            email: "",
            message: "",
            number: ""
        });

        setEmailSent(true)

    }

    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.dirrectContactsWrapper}>

                        <h2 className={styles.h2Left}>
                            {text.contactsPage[props.lang].heading1}
                        </h2>

                        <div className={styles.contactsBox}>
                            <div className={styles.contactsNameWrapper}>
                                <div className={styles.contactsNameImg}>
                                    <Image
                                        src="/contacte/phoneIcon2.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                {text.contactsPage[props.lang].teleNumber}
                            </div>
                            <div className={styles.contactsLink}>
                                <a 
                                    href="tel:37369239184"
                                    style={{
                                        textDecoration: "none",
                                        color: "#EDB65C"
                                    }}
                                >
                                    +37369239184
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactsBox}>
                            <div className={styles.contactsNameWrapper}>
                                <div className={styles.contactsNameImg}>
                                    <Image
                                        src="/contacte/emailIcon2.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>

                                {text.contactsPage[props.lang].email}
                            </div>
                            <div className={styles.contactsLink}>
                                <a 
                                    href="mailto:Belvederewoodp@gmail.com"
                                    style={{
                                        textDecoration: "none",
                                        color: "#EDB65C"
                                    }}
                                >
                                    Belvederewoodp@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactsBox}>
                            <div className={styles.contactsNameWrapper}>
                                <div className={styles.contactsNameImg}>
                                    <Image
                                        src="/contacte/locationIcon.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                                {text.contactsPage[props.lang].address}
                            </div>
                            <div className={styles.contactsLink}>
                                <a 
                                    style={{
                                        textDecoration: "none",
                                        color: "#EDB65C"
                                    }}
                                    target="blank" 
                                    href="https://www.google.com/maps/dir/47.0414581,28.8280053/47.0140443,28.8749886/@47.0284079,28.8164507,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0"
                                >
                                    strada Uzinelor 15/4
                                </a>
                            </div>
                        </div>

                        <div className={styles.contactsNameWrapper2}>
                            {text.contactsPage[props.lang].social}
                        </div>
                        <div className={styles.socialPhotosWrapper}>
                            <a href="https://www.instagram.com/parchet_belvederewood/" target="blank">
                                <div className={styles.socialImg}>
                                    <Image
                                        src="/contacte/instagramIcon4.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                            </a>
                            <a href="https://www.facebook.com/belvedereparquet" target="blank">
                                <div className={styles.socialImg}>
                                    <Image
                                        src="/contacte/facebookIcon4.svg"
                                        alt=""
                                        layout="fill"
                                    />
                                </div>
                            </a>
                        </div>

                    </div>

                    <div className={styles.backwardContactsWrapper}>
                        <h2 className={styles.h2Right}>
                            {text.contactsPage[props.lang].heading2}
                        </h2>
                            <form
                                onSubmit={sendEmail}
                                className={styles.form}
                            >
                                <div 
                                    className={styles.succesText}
                                    style={{
                                        display: emailSent ? "flex" : "none"
                                    }}
                                >
                                    {text.contactsPage[props.lang].messageReceived}
                                </div>
                                <div className={styles.nameInputsWrapper}>
                                    <input
                                        type="text" 
                                        placeholder = {text.contactsPage[props.lang].nume}
                                        className={styles.inputSmall}
                                        type="text" 
                                        id="name"
                                        name="nume"
                                        onChange={handleInputChange}
                                        required
                                        value={state.nume}
                                    ></input>
                                    <input 
                                        type="text" 
                                        placeholder = {text.contactsPage[props.lang].prenume} 
                                        className={styles.inputSmall}
                                        id="name"
                                        name="prenume"
                                        onChange={handleInputChange}
                                        required
                                        value={state.prenume}
                                    ></input>
                                </div>
                                <input 
                                    type="text" 
                                    placeholder={text.contactsPage[props.lang].teleNumber}
                                    className={styles.input}
                                    id="name"
                                    name="number"
                                    onChange={handleInputChange}
                                    required
                                    value={state.number}
                                ></input>
                                <input 
                                    type="text" 
                                    placeholder={text.contactsPage[props.lang].emailAddress}
                                    className={styles.input}
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    required
                                    value={state.email}                        
                                ></input>
                                <input 
                                    type="text" 
                                    placeholder={text.contactsPage[props.lang].message}
                                    className={styles.input} 
                                    style={{height: "120px"}}
                                    id="message"
                                    name="message"
                                    onChange={handleInputChange}
                                    required
                                    value={state.message}                        
                                ></input>
                                <input
                                    type="submit"
                                    placeholder="Trimite" 
                                    value={text.contactsPage[props.lang].send}
                                    className={styles.button}
                                >
                                </input>
                            </form>
                    </div>
                </div>
            </section>
        </div>
    )
}