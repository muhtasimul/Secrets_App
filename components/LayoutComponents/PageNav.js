import React from 'react'
import classes from "./PageNav.module.css"

export default function PageNav() {
    return (
        <>
            <nav className={`${classes.details} navbar navbar-expand-lg navbar-light bg-light p-0`}>
                <div className='container-fluid'>
                    <h1 className='navbar-brand fs-1'>Secrets App</h1>
                </div>
            </nav>
        </>
    )
}
