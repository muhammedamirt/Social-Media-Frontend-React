import React from 'react'
import AdminCard from '../../../components/Admin/Card/AdminCard'
import AdminLayout from '../../../components/Admin/Layout/AdminLayout'
import UsersTh from '../../../components/Admin/UsersComponent/UsersTh';
import Users from '../../../components/Admin/UsersComponent/UsersTr';

const people = [
    {
        name: 'Jane Cooper',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Admin',
        email: 'jane.cooper@example.com',
        image: 'https://bit.ly/33HnjK0',
    },
    {
        name: 'John Doe',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: 'Tester',
        email: 'john.doe@example.com',
        image: 'https://bit.ly/3I9nL2D',
    },
    {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },
    {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },
    {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },
    {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },
    {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },
    {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    }, {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },

    {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    }, {
        name: 'Veronica Lodge',
        title: 'Regional Paradigm Technician',
        department: 'Optimization',
        role: ' Software Engineer',
        email: 'veronica.lodge@example.com',
        image: 'https://bit.ly/3vaOTe1',
    },

    // More people...
];

const UsersList = () => {
    return (
        <div>
            <AdminLayout>
                <AdminCard>
                    <UsersTh>
                        {people.map(person => (
                            <Users person={person} />
                        ))}
                    </UsersTh>
                </AdminCard>
            </AdminLayout>
        </div>
    )
}

export default UsersList


