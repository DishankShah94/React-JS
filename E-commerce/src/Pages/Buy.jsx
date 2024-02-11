import emailjs from 'emailjs-com';
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        'service_dpx5jj1', //service key
        'template_od8o01j', // template id
        e.target,
        'Ztan2sxgma7CiG4cP' // public key
    ).then(res => {
        console.log(res);
        e.target.reset();
    }
    )

    // console.log("called");
}
const Buy = () => {

    return (<>
        <section>
            <aside></aside>
            <form className="for" onSubmit={sendEmail}>
                <div className="form_group mt-3" >
                    <input className="w-75 d-block mx-auto" name="name" style={{ padding: "20px 20px" }} placeholder="enter your name" required />
                </div>
                <div className="form_group mt-3">
                    <input className="w-75 d-block mx-auto" name="mail" style={{ padding: "20px 20px" }} type="email" placeholder="enter your email" required />
                </div>
                <button className="btn d-block mx-auto mt-3 text-black" >
                    Successfully Buy
                </button>
            </form>
        </section>
    </>);
}

export default Buy;