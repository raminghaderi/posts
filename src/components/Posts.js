import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../actions/loadPosts';
import { postsMock } from '../__mocks__/data/postsMock';
import PostCard from './PostCard';
import '../styles/components/Posts.scss';

function Posts() {
    // TODO Ask Kevin why the following is not working?
    // const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!isLoaded) {
            dispatch(loadPosts(postsMock));
            setIsLoaded(!isLoaded);
        }
    }, [dispatch]);

    // TODO Ask Kevin how to use mapper here?
    // setPosts(useSelector(state => state.posts, shallowEqual));

    const posts = useSelector(state => state.posts, shallowEqual);

    return (
        <Container maxWidth="md">
            {posts && <PostCard posts = {posts}/>}
            <Grid container
                  direction="row"
                  justify="center"
                  spacing={1}
            >
                <Grid container item sm={4} justify="center">
                    <Link to='/post'>
                        <Button variant="contained" color="primary">
                            Post
                        </Button>
                    </Link>
                </Grid>
                <Grid item sm={4}>
                    <Link to='/post-form'>
                        <Button variant="contained" color="primary">
                            Post Form
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Posts;