import React, { useEffect, useState } from 'react'
import { searchUserApi } from '../../../api/user'
import Layout from '../../../components/User/Layout/Layout'
import SearchBar from '../../../components/User/SearchItems/SearchBar'
import SearchResults from '../../../components/User/SearchItems/SearchResults'

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchUsers, setSearchUsers] = useState([])

    useEffect(() => {
        try {
            const fetchSearchData = async () => {
                if (searchInput !== '') {
                    let searchResponse = await searchUserApi(searchInput)
                    setSearchUsers(searchResponse)
                } else {
                    setSearchUsers([])
                    console.log('null search input');
                }
            }
            fetchSearchData()
        } catch (error) {
            console.log(error);
        }
    }, [searchInput])
    return (
        <div>
            <Layout>
                <h2 className="hidden md:block text-3xl mb-4 text-heavy-metal-500 opacity-40">Search here</h2>
                <SearchBar setSearchInput={setSearchInput} />
                <SearchResults searchResults={searchUsers} />
            </Layout>
        </div>
    )
}

export default Search