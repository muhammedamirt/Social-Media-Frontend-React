import { useParams } from "react-router-dom"
import { Card } from "../Card/Card"
import { verifyEmailFunc } from "../../api/user"

const VerifyEmail = () => {
    const { id, token } = useParams()
    const handleVerifyEmail = (e) =>{
        e.preventDefault()
       let data = verifyEmailFunc(id,token)
       console.log(data);

    }
    return (
        <Card >
            <p onClick={handleVerifyEmail}>verify here</p>
        </Card>
    )
}

export default VerifyEmail