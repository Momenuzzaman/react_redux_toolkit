import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostView = () => {
    const { isLoading, posts, error } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    return (
        <div>
            <section>
                {isLoading && <h3>Loading...</h3>}
                {error && <h3>Error</h3>}
                {posts && posts.map((post) => {
                    return (
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </article>
                    )
                })}
            </section>
        </div>
    );
};

export default PostView;