import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import '../styles/components/PostCard.scss';

export default function PostCard({posts}) {
    return (
        posts && posts.map(post => (
            <Card key={post.id} variant={'outlined'}>
                <CardContent >
                    <Typography color="textSecondary">
                        {post.title}
                    </Typography>
                </CardContent>
        </Card>
        ))
    );
}