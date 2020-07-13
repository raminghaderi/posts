import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';

import '../styles/components/PostCard.scss';

export default function PostCard({ posts }) {
    return (
        posts.map(post => (
            <Card key={post.id} variant={'outlined'}>
                <CardContent>
                    <Typography color="textSecondary">
                        <Link to={'/post/' + post.id}>{post.title}</Link>
                    </Typography>
                </CardContent>
            </Card>
        ))
    );
}

PostCard.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            userId: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string.isRequired
        })).isRequired
};