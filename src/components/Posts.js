import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import PostCard from './PostCard';
import Paginations from './Pagination';

import { loadPosts } from '../actions/loadPosts';
import '../styles/components/Posts.scss';
import mapPosts from '../mappers/mapPosts';

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(mapPosts, shallowEqual);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    // Get page index
    const lastIndex = currentPage * postsPerPage;
    const startIndex = lastIndex - postsPerPage;
    const limitedPosts = posts.slice(startIndex, lastIndex);

    useEffect(() => {
        if (posts.length === 0) {
            dispatch(loadPosts());
        }
    }, [dispatch, posts.length]);

    const currentPageNumber = (currentPageNumber) => {
        setCurrentPage(currentPageNumber);
    };

    return (
        <Container maxWidth="md">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Posts App
                    </Typography>
                </Toolbar>
            </AppBar>
            <br/>
            <PostCard posts={limitedPosts}/>
            <Paginations numberOfPages={posts.length / postsPerPage} currentPageNumber={currentPageNumber}/>
            <br/>
            <Grid container
                  direction="row"
                  justify="center"
                  spacing={1}
            >
                <Grid container item sm={4} justify="center">
                    <Link to='/post-form'>
                        <Button variant="contained" color="primary">
                            Add Post
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Posts;