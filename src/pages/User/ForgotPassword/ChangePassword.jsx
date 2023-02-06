import React, { useState } from 'react'
import PasswordChecklist from "react-password-checklist"
import { useNavigate, useParams } from 'react-router-dom'
import { changePasswordAPI } from '../../../api/user'
import FadeLoader from 'react-spinners/FadeLoader'


const ChangePassword = () => {
    const { id: userId, token } = useParams()
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordVal, setPasswordVal] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordVal, setConfirmPasswordVal] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [userNotFount, setUserNotFount] = useState(false)
    const [tokenErr, setTokenErr] = useState(false)
    const navigate = useNavigate()
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const confirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleSubmit = async () => {
        setLoading(true)
        let sendData = {
            newPassword: password,
            token,
            userId
        }
        if (passwordVal && confirmPasswordChange && password === confirmPassword) {
            const response = await changePasswordAPI(sendData)
            setLoading(false)
            if (response?.status) {
                setSuccessMessage(true)
                setTokenErr(false)
                setUserNotFount(false)
                setTimeout(() => {
                    navigate('/login')
                }, 3000);
            } else if (response.tokenErr) {
                setTokenErr(true)
            } else {
                setUserNotFount(true)
            }
        } else {
            console.log('error');
        }
    }
    let valid = "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100 "
    let notValid = "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50"

    return (
        <div>
            <div className="overflow-hidden py-40 w-full md:px-10">
                <div className="w-full flex flex-col justify-center">
                    <div className="bg-snow-drift-50 max-w-[400px] h-2/4 w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900">
                        <h2 className='text-center w-full font-bold text-3xl text-heavy-metal-600'>Change Password</h2>
                        <div className="flex flex-col text-heavy-metal-800 py-2 ">
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
                            {loading && <div className='flex justify-center w-full'>
                                <FadeLoader className='w-10' color="#303e2b" />
                            </div>}
                            {successMessage && <p className="text-lg font-bold text-center text-green-600">Password Changed</p>}
                            {userNotFount && <p className="text-lg font-bold text-center text-red-600">User not found</p>}
                            {tokenErr && <p className="text-lg font-bold text-center text-red-600">Invalid Token</p>}
                            <button disabled={passwordVal && confirmPassword ? false : true} className="w-full my-5 py-3   bg-heavy-metal-500 shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" onClick={handleSubmit}>Change</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default ChangePassword

