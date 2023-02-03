import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userAddDetails } from "../../../redux/authSliceUser"
import { useNavigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        const publicFu = () => {
            dispatch(userAddDetails({ token: localStorage.getItem('userToken'), id: localStorage.getItem('id') }));
        }
        publicFu()
    }, []);
    const user = useSelector((state) => state?.user?.userToken);
    if (user) {
        navigate('/')
    } else {
        return children;
    }
}

export default PublicRoute;
