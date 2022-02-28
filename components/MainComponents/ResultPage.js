import React, { useContext, useEffect } from 'react'
import { Context } from '../../context/Context'
import ForbiddenPage from './ForbiddenPage'
import classes from "./MainPage.module.css"
import { useRouter } from 'next/router'


export default function ResultPage() {


    const { encryptedMessage, resultMessage, setEncryptedMessage, setResultMessage, setNewEntry } = useContext(Context)
    const router = useRouter()
    const handleChange = () => {
        setEncryptedMessage('')
        setResultMessage('')
        setNewEntry(false)
        router.push('/')

    }

    useEffect(() => {
        if (encryptedMessage === '' || encryptedMessage === '') {
            router.push('/')
        }
    })

    return (
        <>
            {
                encryptedMessage === '' || encryptedMessage === '' ?
                    <ForbiddenPage /> :

                    <div className={`${classes.details} d-flex flex-direction-column justify-content-center align-items-center`}>

                        <div className='card p-3 w-50'>

                            {resultMessage === "Decryption Successful" || resultMessage === "Encryption Successful" ?
                                <div className='card-header m-3 bg-success text-light'>
                                    <h1>{resultMessage}</h1>
                                </div> :
                                <div className='card-header m-3 bg-danger text-light'>
                                    <h1>{resultMessage}</h1>
                                </div>
                            }

                            <div className='row p-2 border border-1 rounded-3 m-3'>
                                <p>{encryptedMessage}</p>
                            </div>
                            <div className='row p-2 m-2'>
                                <button
                                    className={`${classes.buttons} btn btn-outline-secondary w-100`}
                                    onClick={handleChange}
                                >Another Secret</button>
                            </div>

                        </div>

                    </div>
            }


        </>
    )
}
