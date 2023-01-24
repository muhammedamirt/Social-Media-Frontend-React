import { useNavigate } from 'react-router-dom'

const AdminPublicRoute = ({ children }) => {
    const navigate = useNavigate()
    const admin = localStorage.getItem('adminId')
    console.log(admin, 'admin');
    if (admin) {
        console.log('lo');
        navigate('/admin')
    }
    return children;
}
export default AdminPublicRoute
