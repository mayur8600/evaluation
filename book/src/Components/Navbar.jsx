import React from 'react'

function Navbar() {

    return (
        <div>
            Book Name:<input type="text"  placeholder="Enter Book Name"/>
            <button onClick={handleBookName}>search</button>
        </div>
    )
}

export default Navbar
