import React, { useState } from 'react';

const User = ({ user, handleActive, handleFavourite }) => {

    const [active, setActive] = useState(false)
    const [favourite, setFavourite] = useState(false)

    const handleActives = () => {
        handleActive(user)
        setActive(true)
    }

    const handleFavourites = () => {
        handleFavourite(user)
        setFavourite(true)
    }

    return (
        <div className={`card card-border w-96 hover:shadow-2xl ${active ? "bg-blue-100" : "bg-base-100"}`}>
            <div className="card-body">
                <h2 className="card-title">Name : {user.name}</h2>
                <h3 className='text-base font-semibold'>Email : {user.email}</h3>
                <h3 className='text-base font-semibold'>Phone : {user.phone}</h3>
                <div className="card-actions justify-end mt-4">
                    <button onClick={handleActives} className={active ? "'bg-white btn text-black cursor-not-allowed'" : "btn btn-primary"} disabled={active}>Active</button>

                    <button onClick={handleFavourites} className={favourite ? "'bg-white btn text-black cursor-not-allowed'" : "btn btn-primary"} disabled={favourite}> Favourite</button>
                </div>
            </div>
        </div>
    );
};

export default User;