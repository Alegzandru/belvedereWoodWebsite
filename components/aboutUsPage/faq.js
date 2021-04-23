import styles from "../../styles/despreNoi/FAQ.module.css"
import {useState} from "react"
import {text} from "../text"
import Image from 'next/image'

export function FAQ(props){

    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)
    const [open6, setOpen6] = useState(false)
    const [open7, setOpen7] = useState(false)
    const [open8, setOpen8] = useState(false)


    return(
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.h2}>
                        FAQ
                    </h2>

                    <div className={styles.treeImg}>
                        <Image
                            src="/despreNoi/treeFAQ.png"
                            alt=""
                            layout="fill"
                        />
                    </div>

                    <div 
                        className={open1 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen1(!open1) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                1.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question1}                        
                            </div>
                            <div className={styles.questionPlus}>
                                {open1? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open1 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer1}
                        </div>
                    </div>

                    <div 
                        className={open2 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen2(!open2) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                2.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question2}
                            </div>
                            <div className={styles.questionPlus}>
                                {open2? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open2 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer2}
                            <div 
                            style={{
                                position: "relative",
                                overflow: "hidden"
                            }}>
                                {/* <a 
                                    href="https://yandex.com/maps/10313/kishinev/?utm_medium=mapframe&utm_source=maps" 
                                    style={{
                                        color:"#eee",
                                        fontSize:"12px",
                                        position:"absolute",
                                        top: "0px"
                                    }}
                                >
                                    Kishinev
                                </a>
                                <a 
                                    href="https://yandex.com/maps/10313/kishinev/house/ZkEYfg5kQE0CQFpsfXV4eXVnYQ==/?ll=28.895286%2C46.999015&utm_medium=mapframe&utm_source=maps&z=19.02" 
                                    style={{
                                        color:"#eee",
                                        fontSize:"12px",
                                        position:"absolute",
                                        top:"14px"
                                    }}
                                >
                                    Strada Uzinelor, 90 — Yandex.Maps
                                </a> */}
                                <iframe 
                                    src="https://yandex.com/map-widget/v1/-/CCUYQ6gjHD" 
                                    width="100%"
                                    height="400" 
                                    frameborder="0" 
                                    allowfullscreen="true" 
                                    style={{
                                        position:"relative",
                                        marginTop: "20px"
                                    }}
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>

                    <div 
                        className={open3 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen3(!open3) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                3.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question3}
                            </div>
                            <div className={styles.questionPlus}>
                                {open3? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open3 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer3}
                        </div>
                    </div>

                    <div 
                        className={open4 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen4(!open4) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                4.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question4}
                            </div>
                            <div className={styles.questionPlus}>
                                {open4? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open4 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer3}
                        </div>
                    </div>

                    <div 
                        className={open5 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen5(!open5) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                5.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question5}
                            </div>
                            <div className={styles.questionPlus}>
                                {open5? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open5 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer5}
                        </div>
                    </div>

                    <div 
                        className={open6 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen6(!open6) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                6.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question6}
                            </div>
                            <div className={styles.questionPlus}>
                                {open6? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open6 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer6}
                        </div>
                    </div>

                    <div 
                        className={open7 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen7(!open7) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                7.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question7}
                            </div>
                            <div className={styles.questionPlus}>
                                {open7? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open7 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer7}
                        </div>
                    </div>

                    <div 
                        className={open8 ? styles.questionWrapperOpen : styles.questionWrapper}
                        onClick={() => setOpen8(!open8) }
                    >
                        <div className={styles.question}>
                            <div className={styles.questionNumber}>
                                8.
                            </div>
                            <div className={styles.questionText}>
                                {text.aboutUsPage.faq[props.lang].question8}
                            </div>
                            <div className={styles.questionPlus}>
                                {open8? "-" : "+"}
                            </div>
                        </div>
                        <div 
                            className={styles.questionAnswer}
                            style={{
                                display: open8 ? "block" : "none"
                            }}
                        >
                            {text.aboutUsPage.faq[props.lang].answer8}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}