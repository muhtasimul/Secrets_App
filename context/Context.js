import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
const Context = React.createContext()


function ContextProvider({ children }) {

    const router = useRouter()
    const [secret, setSecret] = useState('')
    const [message, setMessage] = useState('')
    const [encryptedMessage, setEncryptedMessage] = useState('')
    const [resultMessage, setResultMessage] = useState('')
    const [newEntry, setNewEntry] = useState(null)
    const [disabled, setDisabled] = useState(true)


    useEffect(() => {

        if (secret === '' || message === '') {
            setDisabled(true)
        } else {
            setDisabled(false)
        }

        if (newEntry === false) {
            location.reload()
            setNewEntry(true)
        }
    }, [newEntry, secret, message])

    const submitButton = async (event, type) => {
        event.preventDefault()
        const secretType = type

        if (secret === '' || message === '') {
            router.push('/')
        } else {
            axios.post('/api/server', {
                secret,
                message,
                secretType
            }).then(res => {
                setEncryptedMessage(res.data.encrypted_message)
                setResultMessage(res.data.result_message)
                router.push('/results')

            })

        }

    }

    return (
        <Context.Provider value={{
            secret,
            setSecret,
            message,
            setMessage,
            submitButton,
            encryptedMessage,
            setEncryptedMessage,
            resultMessage,
            setResultMessage,
            newEntry,
            setNewEntry,
            disabled
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }