import React from 'react'

function Navbar() {
    const [name, setName] = React.useState("")
    const handleChange = (e)=>{
        let value = e.target.value;
        setName = value
    }

    const handleSearch = (e)=>{
        // name.map(e =>)
    }

    return (
        <div>
            Book Name:<input value={name} onChange={handleChange} type="text"  placeholder="Enter Book Name"/>
            <button onClick={handleSearch}>search</button>
        </div>
    )
}

export default Navbar
