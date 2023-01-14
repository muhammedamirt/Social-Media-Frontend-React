import { Card } from "../Card/Card"
import {useSelector} from 'react-redux'

const MyAboutTab = () => {
  const userData = useSelector((state) => state.userData.userData)
  return (
    <div>
        <Card>
            <div>
                <h2 className="text-3xl mb-2">About Me</h2>
               {userData?.about !== '' ? <p className="text-sm">{userData?.about}</p>:<h1>No About</h1>}
            </div>
        </Card>
    </div>
  )
}

export default MyAboutTab