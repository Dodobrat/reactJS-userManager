import React, {useState, useContext, useEffect} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';
import {Link} from "react-router-dom";

const Register = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated){
            props.history.push('/');
        }

        if (error){
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    },[error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: '',
        confirm_password: ''
    });

    const {email, password, confirm_password} = user;

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' || password === ''){
            setAlert('Please enter all fields', 'danger');
        }else if (password !== confirm_password){
            setAlert('Passwords do not match','danger');
        }else if (password.length < 6){
            setAlert('Passwords must be at least 6 characters','danger');
        }else{
            register({
                email,
                password
            })
        }
    };

    return (
        <div className='form-container'>
            <h1 className='form-title'>Account <span className="secondary">Register</span></h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">
                        <i className="far fa-envelope-open muted"/> E-mail
                    </label>
                    <input type="email" name="email" value={email} onChange={onChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        <i className="fas fa-lock muted"/> Password
                    </label>
                    <input type="password" name="password" value={password} onChange={onChange} required minLength="6"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirm_password">
                        <i className="fas fa-lock muted"/> Confirm Password
                    </label>
                    <input type="password" name="confirm_password" value={confirm_password} onChange={onChange} required />
                </div>
                <input type="submit" value="Register" className="submit"/>
                <p className='muted'>Already have an account? <Link to='/login' className='link'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;
