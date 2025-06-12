import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {

    const { id, title } = post

    return (
        <div className="card w-96 bg-base-100 card-lg shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-500">
            <div className="card-body text-start">
                <h2 className="card-title">Id : {id}</h2>
                <p>Title : {title}</p>
                <div className="justify-end card-actions mt-4">
                    <Link to={`/post/${id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Post;