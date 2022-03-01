import React, { useContext, useEffect } from 'react'
import classes from "./MainPage.module.css"
import { Context } from '../../context/Context'




export default function MainPage() {

    const {
        secret,
        setSecret,
        message,
        setMessage,
        submitButton,
        disabled
    } = useContext(Context)


    return (
        <div className={`${classes.details} container-fluid d-flex justify-content-center align-items-center`}>
            <div className={`${classes.cards} card p-3`}>
                <form>
                    <div className='row m-3'>
                        <label className='form-label p-0'>Secret PassCode</label>
                        <input
                            className='form-control'
                            type="text"
                            onChange={(e) => setSecret(e.target.value)}
                            value={secret}
                        />

                    </div>

                    <div className='row m-3'>
                        <label className='form-label p-0'>Message</label>
                        <textarea
                            className='form-control'
                            type="text"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            placeholder="Type your message here..."
                        ></textarea>

                    </div>

                    <div className='row m-3 d-flex justify-content-between'>
                        <div className='col-sm-12 col-md-5 col-lg-5 p-0 mb-1'>
                            <button
                                disabled={disabled}
                                className={`${classes.buttons} btn btn-outline-secondary w-100`}
                                onClick={() => submitButton(event, 'encrypt')}>Encrypt</button>

                        </div>
                        <div className='col-sm-12 col-md-5 col-lg-5 mb-1 p-0'>
                            <button
                                disabled={disabled}
                                className={`${classes.buttons} btn btn-outline-secondary w-100`}
                                onClick={submitButton}>Decrypt</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
