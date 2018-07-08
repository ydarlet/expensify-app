import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle, startLoginFacebook } from '../actions/auth';

export const LoginPage = ({ startLoginGoogle, startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button button--google" onClick={startLoginGoogle}>
                <i className="fab fa-google font-awesome"></i>
                Login with Google
            </button>
            <button className="button button--facebook" onClick={startLoginFacebook}>
                <i className="fab fa-facebook-f font-awesome"></i>
                Login with Facebook
            </button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);