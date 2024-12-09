import React from 'react'

const AppMain = ({ ...props }) => {
    return (
        <>
            <div >
                {props.children}
            </div>
        </>
    )
}

export default AppMain;
