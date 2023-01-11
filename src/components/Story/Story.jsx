import Avatars from '../Avathar/Avathar'
import { Card } from '../Card/Card'

const Story = () => {
    return (
        <Card>
            <div className=''>
                <div className='flex gap-3 overflow-x-scroll'>
                    <Avatars />
                    <Avatars />
                    <Avatars />
                    <Avatars />
                    <Avatars />
                    <Avatars /> 
                    <Avatars />
                    <Avatars />
                    <Avatars />
                    <Avatars />
                    <Avatars />
                </div>
            </div>
        </ Card>
    )
}

export default Story