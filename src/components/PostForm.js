import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import makeStyles from '@material-ui/core/styles/makeStyles';

import '../styles/components/PostForm.scss';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

function PostForm({ handleSubmit }) {
    const classes = useStyles();
    const history = useHistory();

    const renderInputField = ({ label }) => {
        return (
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">{label}</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    labelWidth={60}
                />
            </FormControl>
        );
    };

    return (
        <Container maxWidth="md">
            <div className={'back-button-container'}>
                <Button variant="contained" color="secondary" onClick={() => history.goBack()}>
                    Back
                </Button>
            </div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        Add a Post
                    </Typography>
                </Toolbar>
            </AppBar>
            <br/>
            <Grid container
                  direction="row"
                  justify="center"
                  spacing={1}
            >
                <form onSubmit={handleSubmit}>
                    <Field name={'postId'} component={renderInputField} label={'Post ID'}/>
                    <Field name={'postTitle'} component={renderInputField} label={'Post Title'}/>
                    <Field name={'postBody'} component={renderInputField} label={'Post Body'}/>
                    <div className={'button-container'}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant="contained" color="primary" type="reset">
                            Reset
                        </Button>
                    </div>
                </form>
            </Grid>
        </Container>
    );
}

export default reduxForm({ form: 'postForm' })(PostForm);

PostForm.propTypes = {
    handleSubmit: PropTypes.func
};