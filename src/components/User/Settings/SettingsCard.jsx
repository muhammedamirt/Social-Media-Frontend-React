import { userLogoutAPI } from "../../../api/user"
import { Card } from "../Card/Card"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link, useNavigate } from "react-router-dom";
import BookmarkIcon from '@mui/icons-material/Bookmark';


const SettingsCard = () => {
  const userId = localStorage.getItem('id')
  const navigate = useNavigate()

  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to logout.',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            const response = await userLogoutAPI(userId)
            if (response.status) {
              localStorage.clear()
              navigate('/login')
            }
          }
        },
        {
          label: 'Cancel',
          // onClick: () => alert('Click No')
        }
      ]
    });
  };

  const handleLogout = () => {
    submit()
  }

  return (
    <div>
      <Card>
        <div className="px-4">
          <div className="grid gap-5">
            <div className="flex gap-4  w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                </svg>
              </span>
              <p className="font-bold hover:underline cursor-pointer">Notifications</p>
            </div>
            <Link to={'/savedPosts'}>
              <div className="flex gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
                <span>
                  <BookmarkIcon />
                </span>
                <p className="font-bold hover:underline cursor-pointer">Saved</p>
              </div>
            </Link>
            <div className="flex gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </span>
              <p className="font-bold hover:underline cursor-pointer">Privacy</p>
            </div>

            <div className="flex gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </span>
              <p className="font-bold hover:underline cursor-pointer">About</p>
            </div>
            <div className="flex gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </span>
              <p className="font-bold hover:underline cursor-pointer">Theme</p>
            </div>
            <div className="flex gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </span>
              <p className="font-bold hover:underline cursor-pointer">Report</p>
            </div>
            <div className="flex gap-4 w-1/4 hover:bg-snow-drift-300 py-1 px-3 rounded" onClick={handleLogout}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </span>
              <p className="font-bold hover:underline cursor-pointer text-blue-500">Log Out</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default SettingsCard