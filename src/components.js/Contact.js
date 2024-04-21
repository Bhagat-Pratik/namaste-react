const Contact=()=>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-2 m-2">Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
                <button className="border border-black p-2 m-2 bg-gray-600 rounded">Submit</button>
            </form>
        </div>
    )
}
export default Contact;