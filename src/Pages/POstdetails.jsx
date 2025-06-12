import React from 'react';
import { Link, useLoaderData } from 'react-router';

const POstdetails = () => {

    const { id, title, body } = useLoaderData()


    return (
        <div className="card w-96 mx-auto my-12 bg-base-100 card-xl shadow-sm">
            <div className="card-body px-8 space-y-3">
                <h2 className="card-title">Id : {id}</h2>
                <p>Title : {title}</p>
                <p>Body : {body}</p>
                <div className="justify-end card-actions">
                    <Link to="/postes" className="btn btn-primary">Go back</Link>
                </div>
            </div>
        </div>
    );
};

export default POstdetails;