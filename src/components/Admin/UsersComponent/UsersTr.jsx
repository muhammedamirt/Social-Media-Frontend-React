import React, { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { getIsBlockedApi } from '../../../api/admin';
const Users = ({ person }) => {
    const [isBlock, setIsBlock] = useState(person?.isBlocked)

    const submit = () => {
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do This ?',
            buttons: [
                {
                    label: 'Confirm',
                    onClick: async () => {
                        try {
                            const response = await getIsBlockedApi(person?._id)
                            if (response.userBlocked) {
                                setIsBlock(true)
                            } else {
                                setIsBlock(false)
                            }
                        } catch (error) {
                            console.log(error);
                        }
                    }
                },
                {
                    label: 'Cancel',
                },
            ],
            closeOnEscape: true,
            closeOnClickOutside: true,
            keyCodeForClose: [8, 32],
        });
    };
    const handleIsBlockButton = async () => {
        submit()
    }
    return (
        <tr key={person?.email}>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full" src={person?.picture} alt="" />
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{person?.first_name} {person?.last_name}</div>
                        <div className="text-sm text-gray-500">{person?.email}</div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{person?.username}</div>
                <div className="text-sm text-gray-500">{person?.place},{person?.country}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {person?.isLogged ?
                    <span
                        className="px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full bg-green-100 text-green-800"
                    >
                        Active
                    </span> : <span
                        className="px-2 inline-flex text-xs leading-5
                        font-semibold rounded-full bg-red-100 text-red-800"
                    >
                        inactive
                    </span>}
            </td>
            {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {person?.role}
                                                        </td> */}
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className='px-2 w-20'>
                    {!isBlock ? <button className='bg-red-400 text-snow-drift-500 py-1 px-3 rounded-lg ' onClick={handleIsBlockButton}>
                        Block
                    </button> : <button className='bg-green-400 text-snow-drift-50 py-1 px-3 rounded-lg' onClick={handleIsBlockButton}>
                        Unblock
                    </button>
                    }
                </div>
            </td>
        </tr>
    )
}

export default Users