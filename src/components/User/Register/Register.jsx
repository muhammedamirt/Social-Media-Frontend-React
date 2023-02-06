import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { signupApi } from '../../../api/user'
import { routeChanged } from "../../../redux/topLoadingBar"
import PasswordStrengthBar from 'react-password-strength-bar';
import PasswordChecklist from "react-password-checklist"
import ParticlesBg from "../ParticlesBg/Particles"
import { Link, useNavigate } from "react-router-dom";
import GoogleSignUp from "./GoogleSignUp";

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    dispatch(routeChanged())
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
    const [blankCheck, setBlankCheck] = useState(false)
    const [valError, setValError] = useState(false)
    const [emailExist, setEmailExist] = useState(false)
    const [userNameExist, setUserNameExist] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)

    useEffect(() => {
        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
        if (firstName.match(format) && firstName !== "") {
            setFirstNameValidate(true)
        } else {
            setFirstNameValidate(false)
        }
        if (lastName.match(format) && lastName !== "") {
            setLastNameVal(true)
        } else {
            setLastNameVal(false)
        }
        if (!email.includes("@") && email !== "") {
            setEmailVal(true)
        } else {
            setEmailVal(false)
        }
        // if (password.length < 8 && password !== "") {
        //     setPasswordVal(true)
        // } else {
        //     setPasswordVal(false)
        // }
        // if (password === confirmPassword && confirmPassword !== "") {
        //     setConfirmPasswordVal(false)
        // } else {
        //     setConfirmPasswordVal(true)
        // }
    }, [firstName, lastName, userName, email, password, confirmPassword])

    const firstNameChange = (e) => {
        setBlankCheck(blankCheck && setBlankCheck(false))
        setFirstName(e.target.value)
    }
    const lastNameChange = (e) => {
        setBlankCheck(blankCheck && setBlankCheck(false))
        setLastName(e.target.value)

    }
    const userNameChange = (e) => {
        setBlankCheck(blankCheck && setBlankCheck(false))
        setUserName(e.target.value)
    }
    const emailChange = (e) => {
        setBlankCheck(blankCheck && setBlankCheck(false))
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setBlankCheck(blankCheck && setBlankCheck(false))
        setPassword(e.target.value)
    }
    const confirmPasswordChange = (e) => {
        setBlankCheck(blankCheck && setBlankCheck(false))
        setConfirmPassword(e.target.value)
    }
    let signupData = {
        first_name: firstName,
        last_name: lastName,
        username: userName,
        email: email,
        password: password,
    }

    const handleSignup = async (e) => {
        e.preventDefault()
        if (firstName !== "" && lastName !== "" && userName !== "" && email !== "" && password !== "" && confirmPassword !== "") {
            if (!firstNameValidate && !lastNameVal && !emailVal && passwordVal && confirmPassword) {
                setUserNameExist(false)
                setEmailExist(false)
                let data = await signupApi(signupData)
                if (data?.userNameExist) {
                    setUserNameExist(true)
                } else if (data?.emailExist) {
                    setEmailExist(true)
                } else if (data?.sendEmail) {
                    navigate('/login')
                    setSuccessMessage(true)
                }
            } else {
                setValError(true)
            }
        } else {
            setBlankCheck(true)
        }
    }

    let valid = "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100 "
    let notValid = "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50"

    return (
        <div>
            <ParticlesBg />
            <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full sm:container'>
                <div className="hidden sm:block py-52 px-20">
                    <h1 className=" text-white text-center text-6xl font-extrabold">Welcome...!</h1>
                    <p className=" text-white text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div className=" flex flex-col justify-center">
                    <form className="bg-snow-drift-50 max-w-[500px] w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900 mt-5 mb-5">
                        <h2 className="text-4xl text-heavy-metal-900 font-bold text-center">SIGN UP</h2>
                        <div className="flex gap-1">
                            <div className="w-2/4 flex flex-col font-semibold text-sm text-heavy-metal-900 py-2">
                                <label>First Name</label>
                                <input value={firstName} onChange={firstNameChange} className={firstNameValidate ? notValid : valid} type="text" />
                                {firstNameValidate && <p className="text-red-600 text-sm">special characters not allowed</p>}
                            </div>
                            <div className="w-2/4 flex flex-col font-semibold text-sm text-heavy-metal-900 py-2 ">
                                <label>Last Name</label>
                                <input value={lastName} onChange={lastNameChange} className={lastNameVal ? notValid : valid} type="text" />
                                {lastNameVal && <p className="text-red-600 text-sm">special characters not allowed</p>}
                            </div>
                        </div>
                        <div className="flex flex-col font-semibold text-sm text-heavy-metal-900 py-2 ">
                            <label>Username</label>
                            <input value={userName} onChange={userNameChange} className={userNameVal ? notValid : valid} type="text" />
                            {userNameVal && <p className="text-red-600 text-sm">Username exist..!</p>}
                            {userNameExist && <p className="text-red-600 text-sm text-center">This username id Exist</p>}
                        </div>
                        <div className="flex flex-col font-semibold text-sm text-heavy-metal-900 py-2 ">
                            <label >Email</label>
                            <input value={email} onChange={emailChange} className={emailVal ? notValid : valid} type="text" />
                            {emailVal && <p className="text-red-600 text-sm">Need "@"</p>}
                            {emailExist && <p className="text-red-600 text-sm text-center">This Email id Exist</p>}
                        </div>
                        <div className="flex gap-1">
                            <div className="w-2/4 flex flex-col font-semibold text-sm text-heavy-metal-900 py-2 ">
                                <label>Password</label>
                                <input value={password} onChange={passwordChange} className={passwordVal ? valid : notValid} type="text" />

                            </div>
                            <div className="w-2/4 flex flex-col font-semibold text-sm text-heavy-metal-900 py-2">
                                <label>Confirm Password</label>
                                <input value={confirmPassword} onChange={confirmPasswordChange} className={confirmPasswordVal ? valid : notValid} type="text" />
                            </div>
                        </div>
                        {password !== "" && !passwordVal && !confirmPasswordVal ?
                            <div>
                                <PasswordStrengthBar className="mt-1" password={password} />
                                <PasswordChecklist className="text-xs"
                                    rules={["minLength", "specialChar", "number", "capital", "match"]}
                                    minLength={8}
                                    value={password}
                                    valueAgain={confirmPassword}
                                    onChange={(isValid) => {
                                        setPasswordVal(isValid)
                                        setConfirmPasswordVal(isValid)
                                    }}
                                />
                            </div>
                            : null}
                        <div className="flex justify-center py-2">
                            <Link to={'/login'}>
                                <p className=" text-sm text-heavy-metal-900">Sign In?<span className="text-blue-600 cursor-pointer hover:underline">Click Me</span></p>
                            </Link>
                        </div>
                        <div className="flex justify-center w-full">
                            <h4>------OR------</h4>
                        </div>
                        <div className="flex justify-center w-full">
                            <GoogleSignUp />
                        </div>
                        {blankCheck && <p className="text-red-600 text-sm text-center">Fill all Fields</p>}
                        {valError && <p className="text-red-600 text-sm text-center">Some Data is Wrong</p>}
                        {successMessage && <p className="text-green-800 font-bold text-center">Verification link sent to your Email</p>}
                        {!successMessage && <button className="w-full my-5 py-3 border-white border-2 bg-heavy-metal-500 shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" onClick={handleSignup}>Sign Up</button>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
