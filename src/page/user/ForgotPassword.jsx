import React, { useState, useRef, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/useAuth'
import Alert from '../../components/Alert'

const ForgotPassword = () => {
    const emailRef = useRef()
    const { forgotPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navgate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setMessage('')
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage('Please check your message box for further instruction')
        } catch (e) {
            setError("Failed to reset, please try again!\n Error Message: " + e)
        }

        setLoading(false)
    }

    return (
        <div >
            <div className="w-full max-w-xs mx-auto my-8 text-purple">
                <h1 className='font-Carter pb-5 text-4xl text-amber-300'>Reset Password</h1>
                {error && <Alert type="error" message={error}></Alert>}
                {message && <Alert type="success" message={message}></Alert>}

                <form className="bg-white shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4"
                    onSubmit={handleSubmit}>

                    {/* Username */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        {/*TODO: some tailwind style <rounded> is not working within module file.
                         Currently set into global index.css */}
                        <input className="form-input"
                            id="email" type="text" ref={emailRef} placeholder="email" />
                    </div>

                    {/* Reset button */}
                    <div className='flex items-center justify-between '>
                        <button className="btn" type="submit" disabled={loading}>
                            Reset password
                        </button>
                        <Link className="inline-block align-baseline text-sm text-navy hover:text-amber-800" to="/login">
                            Log In
                        </Link>
                    </div>

                    {/* Sign up link */}
                    <div className='pt-3'>
                        <p className="inline-block">Don't have an account?</p>
                        <Link className="pl-2 inline-block align-baseline text-sm text-navy hover:text-amber-800 underline underline-offset-2" to="/sign-up">
                            Sign up!
                        </Link>
                    </div>

                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2023 Amber. This is a test.
                </p>
            </div>
        </div>
    )
}

export default ForgotPassword 