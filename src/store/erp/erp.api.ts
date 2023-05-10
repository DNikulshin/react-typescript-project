import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const erpApi = createApi({
    reducerPath: 'erp/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://erp.silinet.net/api.php'
    }),
    endpoints: build => ({
        loginUser: build.query<any, string>({
            query: (login: string) => ({
                url: '/',
                params: {
                    key: '0QlVFA0Q',
                    cat: 'employee',
                    action: 'check_pass',
                    login,
                    pass: '4ZKr7QQ8'
                }
            })
        })
    })
})

// cat=employee&action=check_pass&login=ndu&pass=4ZKr7QQ8

export const { useLoginUserQuery } = erpApi 