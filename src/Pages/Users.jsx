import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {

    const users = useLoaderData()

    const [active, setActive] = useState([])
    const [favourite, setFavourite] = useState([])

    const handleActive = (user) => {
        const newUser = [...active, user]
        setActive(newUser)
    }

    const handleFavourite = (user) => {
        const newUser = [...favourite, user]
        setFavourite(newUser)
    }

    const handleActiveUser = () => {
        document.getElementById('my_modal_3').showModal()
    }

    const handleFavouriteUsers = () => {
        document.getElementById('my_modal_4').showModal()
    }

    console.log(active);

    return (
        <div>
            {/* user count */}
            <section className=" mt-2 dark:bg-gray-100 dark:text-gray-900 sticky top-16 z-49">
                <div className="container mx-auto flex flex-col justify-around p-4 text-center md:p-10 lg:flex-row">
                    <div className="flex flex-col justify-center lg:text-left">

                        <h1 className="py-2 text-3xl font-medium leading-tight title-font">Users :<span className='text-blue-500'> {users.length}</span></h1>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-shrink-0 mt-6 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:ml-4 lg:mt-0 lg:justify-end">

                        <button onClick={handleActiveUser} className="inline-flex cursor-pointer items-center px-6 py-3 rounded-lg dark:bg-primary font-semibold dark:text-gray-50">
                            Active : {active.length}

                        </button>

                        {/*Active modal */}
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className=''>
                                    {
                                        active.map(user => <div className='flex gap-4 space-y-3'>
                                            <p>Id : {user.id}</p>
                                            <p>Name : {user.name}</p>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </dialog>

                        <button onClick={handleFavouriteUsers} className="inline-flex cursor-pointer     items-center px-5 py-3 rounded-lg dark:bg-primary font-semibold dark:text-gray-50">

                            Favourite : {favourite.length}
                        </button>

                        {/*Favourite modal */}
                        <dialog id="my_modal_4" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className=''>
                                    {
                                        favourite.map(user => <div className='flex gap-4 space-y-3'>
                                            <p>Id : {user.id}</p>
                                            <p>Name : {user.name}</p>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </section>

            {/* display users */}
            <section className="p-4 lg:my-16 md:my-8 my-4 grid justify-items-center py-14 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 dark:bg-gray-100 dark:text-gray-900">
                {
                    users.map(user => <User
                        handleActive={handleActive}
                        handleFavourite={handleFavourite}
                        key={user.id}
                        user={user}></User>)
                }
            </section>
        </div>
    );
};

export default Users;