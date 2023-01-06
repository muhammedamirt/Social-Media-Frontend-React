import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginApi } from '../../api/user'
import { routeChanged } from "../../redux/topLoadingBar"
import {userAddDetails} from '../../redux/authSliceUser'
const Login = () => {
    const dispatch = useDispatch()
    dispatch(routeChanged())
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [checked, setChecked] = useState(false)
    const [emailValidate, setEmailValidate] = useState(false)
    const [passwordValid, setPasswordValid] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [authCommonMessage, setAuthCommonMessage] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        setEmailValidate(email.includes('@') && email.trim().length > 7)
        setPasswordValid(password.length > 7)
    }, [email, password])

    const handleLogin =async (e) => {
        e.preventDefault()
        if (emailValidate && passwordValid) {
            let data =await loginApi(email, password)
            console.log(data);
            if (data?.passwordError) {
                setPasswordError(true)
            } else if (data?.emailError) {
                setEmailError(true)
            } else if (data?.success) {
                console.log(data?.token);
                localStorage.setItem('userToken', data?.token)
                localStorage.setItem('id', data?.id)
                dispatch(userAddDetails({token:data?.token,id:data?.id}))
                navigate('/')
            }
        } else {
            setAuthCommonMessage('something wrong')
        }
    }

    const emailChange = (e) => {
        emailError && setEmailError(false)
        setEmail(e.target.value)
    }

    const passwordChange = (e) => {
        passwordError && setPasswordError(false)
        setPassword(e.target.value)
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full sm:container'>
            <div className="hidden sm:block">
                <img className="w-full h-full object-cover" src="https://media.smallbiztrends.com/2021/01/Active-Social-Media-Presence.png" alt="Background" />
            </div>
            <div className="bgDivHandling flex flex-col justify-center">
                <form className="bg-snow-drift-50 max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900">
                    <h2 className="text-4xl text-heavy-metal-800 font-bold text-center">SIGN IN</h2>
                    {
                        <div className="flex flex-col text-heavy-metal-800 py-2 ">
                            <label>Email</label>

                            <input
                                className={emailValidate ? "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100  " : "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50 "}
                                type="email"
                                value={email}
                                onChange={emailChange}
                            />
                            {emailError ? <p className="text-sm text-red-600">Email not registered*</p> : <p hidden></p>}
                        </div>
                    }

                    {
                        <div className="flex flex-col text-heavy-metal-800 py-2 ">
                            <label>Password</label>
                            <input
                                className={passwordValid ? "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100  " : "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50 "}
                                type="password"
                                value={password}
                                onChange={passwordChange} />
                            {passwordError ? <p className="text-sm text-red-600">Wrong Password*</p> : <p hidden></p>}
                        </div>
                    }
                    <div className="flex justify-center">
                        <h4>sign in with...</h4>
                    </div>
                    <div className="flex justify-center">
                        <img className="h-10 shadow-lg hover:shadow-heavy-metal-600 rounded-lg" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="google logo" />
                    </div>
                    <div className="flex justify-between py-2">
                        <p className="flex items-center"><input className="mr-2" type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} />Remember Me</p>
                        <p className=" text-blue-800">Forgot password ?</p>
                    </div>
                    <p className="text-sm text-red-600">{authCommonMessage}</p>
                    
                        <button disabled={emailValidate && passwordValid? false : true} className="w-full my-5 py-2 bg-heavy-metal-500 shadow-lg text-heavy-metal-100/40 hover:shadow-heavy-metal-700 text-white font-semibold rounded-lg" onClick={handleLogin}>Sign In</button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login
