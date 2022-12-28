
const Register = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full sm:container'>
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src="https://media.smallbiztrends.com/2022/01/social-audio.png" alt="images" />
            </div>
            <div className="bgDivHandling flex flex-col justify-center">
                <form className="bg-snow-drift-50 max-w-[500px] w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900 mt-5 mb-5">
                    <h2 className="text-4xl text-heavy-metal-900 font-bold text-center">SIGN IN</h2>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>First Name</label>
                        <input className=" rounded-lg bg-heavy-metal-300 mt-2 p-2 focus:border-blue-500 focus:bg-heavy-metal-100 focus:outline-1 outline-heavy-metal-900 " type="text" />
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Last Name</label>
                        <input className=" rounded-lg bg-heavy-metal-300 mt-2 p-2 focus:border-blue-500 focus:bg-heavy-metal-100 focus:outline-1 outline-heavy-metal-900" type="text" />
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>username</label>
                        <input className=" rounded-lg bg-heavy-metal-300 mt-2 p-2 focus:border-blue-500 focus:bg-heavy-metal-100 focus:outline-1 outline-heavy-metal-900" type="text" />
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Email</label>
                        <input className=" rounded-lg bg-heavy-metal-300 mt-2 p-2 focus:border-blue-500 focus:bg-heavy-metal-100 focus:outline-1 outline-heavy-metal-900" type="text" />
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Password</label>
                        <input className=" rounded-lg bg-heavy-metal-300 mt-2 p-2 focus:border-blue-500 focus:bg-heavy-metal-100 focus:outline-1 outline-heavy-metal-900" type="text" />
                    </div>

                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Conform Password</label>
                        <input className=" rounded-lg bg-heavy-metal-300 mt-2 p-2 focus:border-blue-500 focus:bg-heavy-metal-100 focus:outline-1 outline-heavy-metal-900" type="text" />
                    </div>
                    <div className="flex justify-between font-semibold text-heavy-metal-900 py-2">
                        <p className="flex items-center"><input className="mr-2 " type="checkbox" />Remember Me</p>
                        <p className="font-semibold text-blue-900">Forgot password ?</p>
                    </div>
                    <button className="w-full my-5 py-2 bg-heavy-metal-500 shadow-lg shadow-heavy-metal-500/40 hover:shadow-heavy-metal-700 text-white font-semibold rounded-lg">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Register