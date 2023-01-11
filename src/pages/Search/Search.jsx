import React from 'react'
import Layout from '../../components/Layout/Layout'
import SearchBar from '../../components/SearchItems/SearchBar'
import SearchResults from '../../components/SearchItems/SearchResults'

const Search = () => {
    return (
        <div>
            <Layout>
                <h2 className="hidden md:block text-6xl mb-4 text-heavy-metal-500 opacity-40">Search here</h2>
                <SearchBar />
                <SearchResults />
            </Layout>
        </div>
    )
}

export default Search