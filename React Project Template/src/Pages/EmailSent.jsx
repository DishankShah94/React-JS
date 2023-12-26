import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function EmailSent() {
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [loading, setLoading] = useState(false);
    // ... state
    useEffect(() => emailjs.init("Ztan2sxgma7CiG4cP"), []);
    // Add these
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_q1zknmi";
        const templateId = "template_cjla6ag";
        try {
            setLoading(true);
            await emailjs.send(serviceId, templateId, {
                name: nameRef.current.value,
                recipient: emailRef.current.value,
                message: messageRef.current.value
            });
            alert("email successfully sent check inbox");
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section>
            <aside></aside>
            <form className="for" onSubmit={handleSubmit}>
                <div className="form_group mt-3" >
                    <input className="w-75 d-block mx-auto" style={{padding:"20px 20px"}} ref={nameRef} placeholder="enter your name" />
                </div>
                <div className="form_group mt-3">
                    <input className="w-75 d-block mx-auto" style={{padding:"20px 20px"}} ref={emailRef} type="email" placeholder="enter your email" />
                </div>
                <div className="form_group mt-3">
                    <textarea name="" className="w-75 d-block mx-auto" style={{padding:"20px 20px"}} ref={messageRef} id="" placeholder="enter your message" cols="30" rows="10"></textarea>
                </div>
                <button className="btn d-block mx-auto mt-3 text-black" disabled={loading}>
                    subscribe
                </button>
            </form>
        </section>
    );
}