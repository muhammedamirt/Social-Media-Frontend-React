import { Navigate, useParams } from 'react-router-dom'

const ProfileParamsCheck = ({ children }) => {
    const { userId } = useParams()
    const currUser = localStorage.getItem('id')
    if (currUser === userId) return <Navigate to={'/myprofile'} />
        return children
}

export default ProfileParamsCheck