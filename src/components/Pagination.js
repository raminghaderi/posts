import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

function Pagination({ numberOfPages, currentPageNumber }) {
    const numberOfPagesButtons = [];
    for (let i = 1; i <= numberOfPages; i++) {
        numberOfPagesButtons.push(
            <Grid item key={i}>
                <Button variant="contained" color="secondary" onClick={() => currentPageNumber(i)}>
                    {i}
                </Button>
            </Grid>
        );
    }
    return (
        <Grid container
              direction="row"
              justify="center"
              spacing={1}
        >
            {numberOfPagesButtons}
        </Grid>
    );
}

Pagination.propTypes = {
    numberOfPages: PropTypes.number.isRequired,
    currentPageNumber: PropTypes.func.isRequired
};

export default Pagination;