import React, { useEffect, useRef, useState } from "react"
// import { useSelector } from "react-redux"
import { fetchOneUserProfile } from "../../api/user"


const EditProfileModal = ({ visible, onClose }) => {
  const profileRef = useRef(null)
  const coverRef = useRef(null)
  // const [changedData, setChangedData] = useState({})
  const [editProfileData, setEditProfileData] = useState({})
  // const userData = useSelector((state) => state.userData.userData)
  const userId = localStorage.getItem('id')
  const fetchUserProfile = async () => {
    const data = await fetchOneUserProfile(userId)
    setEditProfileData(data)
  }
  useEffect(() => {
    fetchUserProfile()
  }, [])
  return (
    <>
      {visible ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto mx-auto max-w-xl h-96 w-76">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-snow-drift-200 text-heavy-metal-900 outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-center p-5 text-center border-b border-solid border-slate-200 bg-main rounded-t">
                  <h3 className="text-3xl text-heavy-metal-900 justify-items-center text-center font-semibold">
                    Edit profile
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                  </button>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <div className="mt-2">
                    <div className="flex">
                      <h1 className="font-bold text-2xl">Profile photo</h1>
                      <button onClick={() => profileRef.current.click()} className="text-lg text-blue-600 ml-auto">
                        edit
                      </button>
                      <input name="cover_img" ref={profileRef} hidden type="file" />
                    </div>
                    <div className="flex justify-center mt-2">
                      <div className='w-36 h-36 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                        <img src={editProfileData?.picture} alt="avatars" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex">
                      <h1 className="font-bold text-2xl">Cover photo</h1>
                      <button onClick={() => coverRef.current.click()} className="text-lg text-blue-600 ml-auto">
                        edit
                      </button>
                      <input name="cover_img" ref={coverRef} hidden type="file" />
                    </div>
                    <div className="h-36 overflow-hidden flex justify-center mt-4 items-center">
                      <img src={editProfileData?.cover} alt="cover" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex">
                      <h1 className="font-bold text-2xl">Personal Details</h1>
                    </div>
                    <div className="mt-2 gap-2 flex justify-between">
                      <input
                        type="Text"
                        placeholder="first_name"
                        value={editProfileData?.first_name}
                        // onChange={(e)=>setEditProfileData({first_name:e.target.value})}
                        className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                      />
                      <input
                        type="Text"
                        placeholder="Full Name"
                        value={editProfileData?.last_name}
                        className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                      />
                      <input
                        type="text"
                        placeholder="Username"
                        value={editProfileData?.username}
                        className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                      />
                    </div>
                    <div className="mt-2 gap-2 flex justify-between">
                      <input
                        type="Text"
                        placeholder="country..."
                        value={editProfileData?.country}
                        className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                      />
                      <input
                        type="text"
                        placeholder="place . . ."
                        value={editProfileData?.place}
                        className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        placeholder="About . . ."
                        value={editProfileData?.about}
                        className="text-center w-full h-8 rounded-md bg-gray-100"
                      />
                    </div>
                  </div>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={onClose}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  )
}

export default EditProfileModal