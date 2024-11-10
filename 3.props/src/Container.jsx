import React from 'react'

function Container({ children }) {

    return (
        <div>
            <div>Container compenenti çalıştı</div>
            {children}
        </div>
    )
}

export default Container