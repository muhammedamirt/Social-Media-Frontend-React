import React, { useEffect, useState } from 'react'
import { forgotPasswordAPI } from '../../../api/user'
import FadeLoader from 'react-spinners/FadeLoader'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [emailValidate, setEmailValidate] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errMessage, setErrMessage] = useState(false)
  const [userNotFount, setUserNotFount] = useState(false)
  // const [blankInput, setBlankInput] = useState(false)

  useEffect(() => {
    setEmailValidate(email.includes('@') && email.trim().length > 7)
  }, [email])

  const emailChange = (e) => {
    emailError && setEmailError(false)
    setEmail(e.target.value)
  }

  const handleEmailSend = async () => {
    try {
      setLoading(true)
      if (emailValidate) {
        const response = await forgotPasswordAPI(email)
        setLoading(false)
        if (response?.status === true) {
          setUserNotFount(false)
          setSuccessMessage(true)
        } else if (response?.status === false) {
          setLoading(false)
          setUserNotFount(true)
        } else {
          setLoading(false)
          errMessage(true)
        }
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
      setUserNotFount(true)
    }
  }

  return (
    <div>
      <div className="overflow-hidden py-40 w-full md:px-10">
        <div className="w-full flex flex-col justify-center">
          <div className="bg-snow-drift-50 max-w-[400px] h-2/4 w-full mx-auto p-8 px-8 rounded-lg shadow-md shadow-heavy-metal-900">
            <h2 className='text-center w-full font-bold text-3xl text-heavy-metal-600'>Enter Email</h2>
            <div className="flex flex-col text-heavy-metal-800 py-2 ">
              <input
                className={emailValidate ? "focus:outline-1 outline-green-600 rounded-lg bg-snow-drift-100 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-100  " : "focus:outline-1 outline-red-500 text-red-600 rounded-lg bg-snow-drift-200 mt-2 p-2 focus:border-blue-500 focus:bg-snow-drift-50 "}
                type="email"
                value={email}
                onChange={emailChange}
                readOnly={successMessage}
              />
              {emailError ? <p className="text-sm text-red-600">Email not registered*</p> : <p hidden></p>}
            </div>
            {loading && <div className='flex justify-center w-full'>
              <FadeLoader className='w-10' color="#303e2b" />
            </div>}
            {successMessage && <p className="text-lg font-bold text-center text-green-600"> Link Sent To Your Email</p>}
            {userNotFount && <p className="text-lg font-bold text-center text-red-600">User not found</p>}
            {errMessage && <p className="text-lg font-bold text-center text-red-600">internal error</p>}
            {/* {blankInput && <p className="text-lg font-bold text-center text-red-600">Fill the field</p>} */}
            {!successMessage && <button disabled={emailValidate ? false : true} className="w-full my-5 py-3   bg-heavy-metal-500 shadow-lg text-snow-drift-50 hover:shadow-heavy-metal-700  font-semibold rounded-lg" onClick={handleEmailSend}>Send Link</button>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword