import React, { useEffect, useRef, useState } from "react"
import { editProfile, fetchOneUserProfile, uploadProfile } from "../../../api/user"
import ProtectedRoute from "../ProtectedRout/ProtectedRoute";
import FadeLoader from "react-spinners/ClipLoader";


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const EditProfileModal = ({ visible, onClose, user, setUser }) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const user = await fetchOneUserProfile(localStorage.getItem('id'))
    setData(user)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const [profile, setProfile] = useState(null);
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState("#303E2B");
  const imageRefPro = useRef(null);
  const imageRefCov = useRef(null);
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleProfile = async (e) => {
    setProfile(e.target.files[0]);
  };
  const handleCover = async (e) => {
    setCover(e.target.files[0]);
  };
  const handleSubmit = async () => {
    setLoading(true)
    console.log(profile, "profile");
    if (profile) {
      const formData = new FormData();
      formData.append("file", profile);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      );
      const imageUrl = await uploadProfile(formData);
      data.picture = imageUrl;
      console.log(imageUrl);
      setProfile(null)
    }
    // uploading cover_image to cloudinary
    if (cover) {
      const formData = new FormData();
      formData.append("file", cover);
      formData.append(
        "upload_preset",
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
      );
      const coverUrl = await uploadProfile(formData);
      data.cover = coverUrl;
      setCover(null)
    }
    const response = await editProfile(data);
    if (response.status) {
      setUser(data)
      setLoading(false)
      onClose();
    }
  }
  return (
    <>
      {visible ? (
        <>
          <ProtectedRoute >
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
                        <button onClick={() => imageRefPro.current.click()} className="text-lg text-blue-600 ml-auto">
                          edit
                        </button>
                        <input onChange={handleProfile} name="cover_img" ref={imageRefPro} hidden type="file" />
                      </div>
                      <div className="flex justify-center mt-2">
                        <div className='w-36 h-36 rounded-full overflow-hidden shadow-sm shadow-gray-500'>
                          <img src={profile ? URL.createObjectURL(profile) : data?.picture} alt="avatars" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex">
                        <h1 className="font-bold text-2xl">Cover photo</h1>
                        <button onClick={() => imageRefCov.current.click()} className="text-lg text-blue-600 ml-auto">
                          edit
                        </button>
                        <input onChange={handleCover} name="cover_img" ref={imageRefCov} hidden type="file" />
                      </div>
                      <div className="h-36 overflow-hidden flex justify-center mt-4 items-center">
                        <img src={cover ? URL.createObjectURL(cover) : data?.cover} alt="cover" />
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
                          value={data?.first_name}
                          name="first_name"
                          onChange={handleChange}
                          className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                        />
                        <input
                          type="Text"
                          placeholder="Full Name"
                          value={data?.last_name}
                          name="last_name"
                          onChange={handleChange}
                          className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                        />
                        <input
                          type="text"
                          placeholder="Username"
                          value={data?.username}
                          onChange={handleChange}
                          name="username"
                          className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                        />
                      </div>
                      <div className="mt-2 gap-2 flex justify-between">
                        <input
                          type="Text"
                          placeholder="country..."
                          value={data?.country}
                          onChange={handleChange}
                          name='country'
                          className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                        />
                        <input
                          type="text"
                          placeholder="place . . ."
                          value={data?.place}
                          onChange={handleChange}
                          name='place'
                          className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                        />
                      </div>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="About . . ."
                          value={data?.about}
                          onChange={handleChange}
                          name='about'
                          className="text-center w-full h-8 rounded-md bg-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                  {/* footer */}

                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    {loading ? <FadeLoader
                      color={color}
                      loading={loading}
                      cssOverride={override}
                      size={50}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                      : <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Save Changes
                      </button>}
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </ProtectedRoute>
        </>
      ) : null}
    </>
  )
}
export default EditProfileModal