import { useState, useEffect } from 'react'

const FetchUserData = () => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {
        let isMounted = true

        const loadUserData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            if (isMounted) {
                setUserData(data)
            }
        }

        loadUserData()

        return () => {
            isMounted = false
        }
    }, [])

    return (
        <div>
            <h1>Fetch User Data</h1>
            {
                userData.map(item => (
                    <div key={item.id}>
                        <p>Name: {item.name}</p>
                        <p>Email: {item.email}</p>
                        <p>Phone: {item.phone}</p>
                    </div>
                ))
            }
        </div >
    )
}

export default FetchUserData
