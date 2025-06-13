import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../firebaseAuth/Authcontext';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { sendEmailVerification } from 'firebase/auth';
import auth from '../firebase/firebase.init';

const Signup = () => {

    const { SignUpUser } = use(Authcontext)
    const [showPassword, setShowPassword] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [success, setSuccess] = useState(false)

    const handleSignup = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(email, password);

        if (password.length < 6) {
            return setErrorMessage("password should be 6 digit")
        }


        SignUpUser(email, password)
            .then(result => {
                console.log(result);
                setSuccess(true)

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast.success("send a email for varification , please ceek email", {
                            position: "top-center",
                            autoClose: 4000, // 3 seconds
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    })
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="flex flex-col mx-auto my-12 max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            </div>
            <form onSubmit={handleSignup} className="space-y-12">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <label htmlFor="password" className="text-sm">Password</label>
                        </div>
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <p onClick={handleShowPassword} className='absolute left-[330px] top-3'>{showPassword ? <FaEye /> : <FaEyeSlash />}</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-primary cursor-pointer dark:text-gray-50">Sign up</button>
                    </div>
                    <p className="px-6 text-sm text-center">You have alredy account?
                        <Link to="/login" rel="noopener noreferrer" className="hover:underline dark:text-primary">Log in</Link>
                    </p>
                </div>

                <div className='text-red-600 text-center'>
                    {
                        errorMessage
                    }
                </div>
                <div className='text-center text-primary'>
                    {
                        success && <p>User create successfully</p>
                    }
                </div>
            </form>
        </div>
    );
};

export default Signup;