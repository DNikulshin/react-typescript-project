import React from 'react'
import { useLoginUserQuery } from '../store/erp/erp.api'

const HomePage = () => {

    const {isLoading, isError, data} = useLoginUserQuery('ndu')
    return (
        <div>
            HomePage
        </div>
    )
}

export default HomePage
