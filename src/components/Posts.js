import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadPosts } from '../actions/loadPosts';
import { postsMock } from '../__mocks__/data/postsMock';
import PostCard from './PostCard';
import '../styles/components/Posts.scss';
import mapPosts from '../mappers/mapPosts';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(mapPosts, shallowEqual);

    useEffect(() => {
        dispatch(loadPosts(postsMock));
    }, [dispatch]);

    return (
        <Container maxWidth="md">
            <PostCard posts={posts}/>
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