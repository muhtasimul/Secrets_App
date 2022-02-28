import React from 'react'
import PageNav from './PageNav'
import classes from "./Layout.module.css"

export default function Layout(props) {
    return (
        <>
            <div className='container-fluid  p-2'>
                <PageNav />
                {props.children}
                <footer className={`${classes.details} d-flex justify-content-center`}>
                    <p><sub>Secrets App</sub></p>
                </footer>
            </div>
        </>
    )
}
