import React from 'react'
import PageNav from './PageNav'

export default function Layout(props) {
    return (
        <>
            <div className='container-fluid  p-2'>
                <PageNav />
                {props.children}
            </div>
        </>
    )
}
