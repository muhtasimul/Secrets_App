import Cryptr from "cryptr"


export default async function handler(req, res) {

    if (req.method === "POST") {

        const data = req.body
        const secret = req.body.secret
        const message = req.body.message
        const secretType = req.body.secretType

        if (secretType === 'encrypt') {
            const key = new Cryptr(secret)
            const encrypting = key.encrypt(message)

            res.json({
                result_message: 'Encryption Successful',
                encrypted_message: encrypting
            })
        } else {

            try {
                const key = new Cryptr(secret)
                const decrypting = key.decrypt(message)
                res.json({
                    result_message: 'Decryption Successful',
                    encrypted_message: decrypting
                })
            } catch (e) {
                res.json({
                    result_message: 'Decryption Unsuccessful',
                    encrypted_message: 'Please Try Again'
                })
            }


        }

    }

}