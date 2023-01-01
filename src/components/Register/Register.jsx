import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { signupApi } from '../../api/user'
import { routeChanged } from "../../redux/topLoadingBar"

const Register = () => {
    const dispatch = useDispatch()
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
        if (password < 8 && password !== "") {
            setPasswordVal(true)
        } else {
            setPasswordVal(false)
        }
        if (password === confirmPassword && confirmPassword !== "") {
            setConfirmPasswordVal(false)
        } else {
            setConfirmPasswordVal(true)
        }
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
            console.log(!firstNameValidate, !lastNameVal, !emailVal, !passwordVal, !confirmPassword);
            if (!firstNameValidate && !lastNameVal && !emailVal && !passwordVal && confirmPassword) {
                let data = await signupApi(signupData)
                if (data?.userNameExist) {
                    setUserNameExist(true)
                } else if (data?.emailExist) {
                    setEmailExist(true)
                } else if (data?.sendEmail) {
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
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full sm:container'>
            <div className="hidden sm:block">
                <img className="w-full h-full overflow-hidden object-cover" src="https://media.smallbiztrends.com/2022/01/social-audio.png" alt="images" />
            </div>
            <div className="bgDivHandling flex flex-col justify-center">
                <form className="bg-snow-drift-50 max-w-[500px] w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900 mt-5 mb-5">
                    <h2 className="text-4xl text-heavy-metal-900 font-bold text-center">SIGN UP</h2>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>First Name</label>
                        <input value={firstName} onChange={firstNameChange} className={firstNameValidate ? notValid : valid} type="text" />
                        {firstNameValidate && <p className="text-red-600 text-sm">special characters not allowed</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Last Name</label>
                        <input value={lastName} onChange={lastNameChange} className={lastNameVal ? notValid : valid} type="text" />
                        {lastNameVal && <p className="text-red-600 text-sm">special characters not allowed</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Username</label>
                        <input value={userName} onChange={userNameChange} className={userNameVal ? notValid : valid} type="text" />
                        {userNameVal && <p className="text-red-600 text-sm">Username exist..!</p>}
                        {userNameExist && <p className="text-red-600 text-sm text-center">This username id Exist</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Email</label>
                        <input value={email} onChange={emailChange} className={emailVal ? notValid : valid} type="text" />
                        {emailVal && <p className="text-red-600 text-sm">Need "@"</p>}
                        {emailExist && <p className="text-red-600 text-sm text-center">This Email id Exist</p>}
                    </div>
                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Password</label>
                        <input value={password} onChange={passwordChange} className={passwordVal ? notValid : valid} type="text" />
                        {passwordVal && <p className="text-red-600 text-sm">Minimum 8 characters</p>}
                    </div>

                    <div className="flex flex-col font-semibold text-heavy-metal-900 py-2 ">
                        <label>Confirm Password</label>
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
                    {blankCheck && <p className="text-red-600 text-sm text-center">Fill all Fields</p>}
                    {valError && <p className="text-red-600 text-sm text-center">Some Data is Wrong</p>}
                    {successMessage && <p className="text-green-800 font-bold text-center">Verification link sent to your Email</p>}
                    <button className="w-full my-5 py-2 bg-heavy-metal-500 shadow-lg shadow-heavy-metal-500/40 hover:shadow-heavy-metal-700 text-white font-semibold rounded-lg" onClick={handleSignup}>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Register