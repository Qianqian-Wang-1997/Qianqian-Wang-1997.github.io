import React, { useState, useRef, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/useAuth'
import Alert from '../../components/Alert'

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navgate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navgate("/")
        } catch (e) {
            console.log('error', e)
            setError("Failed to login, please try again!" + e)
        }

        setLoading(false)
    }

    return (
        <div >
            <div className="w-full max-w-xs mx-auto my-8 text-purple">
                <h1 className='font-Carter pb-5 text-4xl text-amber-300'>Login</h1>
                {error && <Alert error={error}></Alert>}

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

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="form-input border border-red-500"
                            id="password" type="password" ref={passwordRef} placeholder="******************" />
                        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                    </div>

                    {/* Sign in button */}
                    <div className='flex items-center justify-between '>
                        <button className="btn" type="submit" disabled={loading}>
                            Sign In
                        </button>
                        <Link className="inline-block align-baseline text-sm text-navy hover:text-amber-800" to="/forgot-password">
                            Forgot Password?
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

export default Login 