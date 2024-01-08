const Buy = () => {

    return (<>
        <section>
            <aside></aside>
            <form className="for">
                <div className="form_group mt-3" >
                    <input className="w-75 d-block mx-auto" style={{ padding: "20px 20px" }} placeholder="enter your name" required />
                </div>
                <div className="form_group mt-3">
                    <input className="w-75 d-block mx-auto" style={{ padding: "20px 20px" }} type="email" placeholder="enter your email" required />
                </div>
                <button className="btn d-block mx-auto mt-3 text-black" >
                    Successfully Buy
                </button>
            </form>
        </section>
    </>);
}

export default Buy;