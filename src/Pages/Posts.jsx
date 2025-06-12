import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {

    const posts = useLoaderData()

    return (
        <div>
            {/* posts count */}
            <section className=" mt-2 dark:bg-gray-100 dark:text-gray-900 sticky top-16 z-51 rounded-lg p-4 text-center">
                <h1 className="py-2 text-3xl font-medium leading-tight title-font">Posts : {posts.length}</h1>
            </section>

            {/* post display */}
            <section className=" mt-2 lg:mt-12 md:mt-8 sm:mt-4 dark:bg-gray-100 dark:text-gray-900 rounded-lg p-4 text-center">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center my-12 gap-16'>
                    {
                        posts.map(post => <Post 
                            key={post.id}
                            post={post}></Post>)
                    }
                </div>
            </section>

        </div>
    );
};

export default Posts;