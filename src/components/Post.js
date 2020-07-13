import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { shallowEqual, useSelector } from 'react-redux';
import mapPosts from '../mappers/mapPosts';

export default function Post() {
    let { id } = useParams();
    const posts = useSelector(mapPosts, shallowEqual);

    const post = posts.find(post => post.id === parseInt(id));

    return (
        <div>
            {post &&
            <Fragment>
                <h1>Post ID: {post.id}</h1>
                <h2>Post Title: {post.title}</h2>
                <p>Post Body: {post.body}</p>
            </Fragment>
            }
        </div>
    );
}