import { useState } from "react"
import {signupApi} from '../../api/user'

const Register = () => {
    const [firstName, setFirstName] = useState('')
    const [firstNameValidate, setFirstNameValidate] = useState(false)
    const [lastName, setLastName] = useState('')
    const [lastNameVal, setLastNameVal] = useState(false)
    const [userName, setUserName] = useState('')
    const [userNameVal, setUserNameVal] = useState(false)
    const [email, setEmail] = useState('')
    const [emailVal, setEmailVal] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordVal, setPasswordVal] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordVal, setConfirmPasswordVal] = useState(false)

    const firstNameChange = (e) => {
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        setFirstName(e.target.value)
        if (firstName.match(format)) {
            setFirstNameValidate(true)
        } else {
            setFirstNameValidate(false)
        }
    }
    const lastNameChange = (e) => {
        setLastName(e.target.value)
        let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        setLastName(e.target.value)
        if (lastName.match(format)) {
            setLastNameVal(true)
        } else {
            setLastNameVal(false)
        }
    }
    const userNameChange = (e) => {
        setUserName(e.target.value)
        // let format =/^[a-zA-Z\-]+$/
        // if(userName.match(format)){
        //     setUserNameVal(true)
        // }else{
        //     setUserNameVal(true)  
        // }
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
        if (email.includes("@")) {
            setEmailVal(false)
        } else {
            setEmailVal(true)
        }
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
        if (password < 8) {
            setPasswordVal(true)
        } else {
            setPasswordVal(false)
        }
    }
    const confirmPasswordChange = (e) => {
        if (password.trim() !== confirmPassword.trim()) {
            setConfirmPasswordVal(true)
        } else {
            setConfirmPasswordVal(false)
        }
        setConfirmPassword(e.target.value)
    }
    let signupData = {
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: email,
        password: password,
    }

    const handleSignup =async (e) => {
        e.preventDefault()
        let data = await signupApi(signupData)
    }

    let valid = "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100 "
    let notValid = "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50"

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full sm:container'>
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src="https://media.smallbiztrends.com/2022/01/social-audio.png" alt="images" />
            </div>
            <div className="bgDivHandling flex flex-col justify-center">
                <form className="bg-snow-drift-50 max-w-[500px] w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900 mt-5 mb-5">
                    <h2 className="text-4xl text-heavy-metal-900 font-bold text-center">SIGN UP</h2>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>First Name</label>
                        <input value={firstName} onChange={firstNameChange} className={firstNameValidate ? notValid : valid} type="text" />
                        {firstNameValidate && <p className="text-red-600 text-sm">special</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Last Name</label>
                        <input value={lastName} onChange={lastNameChange} className={lastNameVal ? notValid : valid} type="text" />
                        {lastNameVal && <p className="text-red-600 text-sm">special characters not excepted</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>username</label>
                        <input value={userName} onChange={userNameChange} className={userNameVal ? notValid : valid} type="text" />
                        {userNameVal && <p className="text-red-600 text-sm">special</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Email</label>
                        <input value={email} onChange={emailChange} className={emailVal ? notValid : valid} type="text" />
                        {emailVal && <p className="text-red-600 text-sm">Need "@"</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Password</label>
                        <input value={password} onChange={passwordChange} className={passwordVal ? notValid : valid} type="text" />
                        {passwordVal && <p className="text-red-600 text-sm">Minimum 8 characters</p>}
                    </div>

                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Conform Password</label>
                        <input value={confirmPassword} onChange={confirmPasswordChange} className={confirmPasswordVal ? notValid : valid} type="text" />
                        {confirmPasswordVal && <p className="text-red-600 text-sm">Not Matching</p>}
                    </div>
                    <div className="flex justify-center">
                        <h4>sign in with...</h4>
                    </div>
                    <div className="flex justify-center">
                        <img className="h-10 shadow-lg hover:shadow-heavy-metal-600 rounded-lg" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="google logo" />
                    </div>
                    <div className="flex justify-between font-semibold text-heavy-metal-900 py-2">
                        <p className="flex items-center"><input className="mr-2 " type="checkbox" />Remember Me</p>
                        <p className="font-semibold text-blue-900">Forgot password ?</p>
                    </div>
                    <button className="w-full my-5 py-2 bg-heavy-metal-500 shadow-lg shadow-heavy-metal-500/40 hover:shadow-heavy-metal-700 text-white font-semibold rounded-lg" onClick={handleSignup}>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Register