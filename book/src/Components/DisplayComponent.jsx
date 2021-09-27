import React from 'react'
import Navbar from './Navbar'
import Axios from 'axios'
import Card from './Card'

function DisplayComponent() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        Axios.get('http://localhost:3001/book').then(resp => setData(resp.data))
    }, [])

    return (
        <div>
            <Navbar />
            {
                data.map(el => (
                    <Card data={el} key={el.id} />
                ))
            }
        </div>
    )
}

export default DisplayComponent
