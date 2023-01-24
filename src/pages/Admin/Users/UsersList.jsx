import React, { useEffect } from 'react'
import { useState } from 'react';
import { allUsersApi } from '../../../api/admin';
import AdminCard from '../../../components/Admin/Card/AdminCard'
import AdminLayout from '../../../components/Admin/Layout/AdminLayout'
import UsersTh from '../../../components/Admin/UsersComponent/UsersTh';
import Users from '../../../components/Admin/UsersComponent/UsersTr';


const UsersList = () => {
    const [people, setPeople] = useState([])
    useEffect(() => {
     try {
            const fetchAllUsers = async () => {
                const data = await allUsersApi()
                console.log(data,'userPage');
                setPeople(data)
            }
            fetchAllUsers()
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div>
            <AdminLayout>
                <AdminCard>
                    <UsersTh>
                        {people?.map(person => (
                            <Users person={person} />
                        ))}
                    </UsersTh>
                </AdminCard>
            </AdminLayout>
        </div>
    )
}

export default UsersList


