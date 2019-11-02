import React, {useState, useContext, useEffect} from 'react';
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const UserEdit = () => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    // const {user} = authContext;

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    const [updates, setUpdates] = useState({
        username: '',
        first_name: '',
        last_name: '',
        about: '',
        avatar: '',
        birth_date: '',
        country_id: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const {
        username,
        first_name,
        last_name,
        about,
        avatar,
        birth_date,
        country_id,
        email,
        password,
        confirm_password,
    } = updates;

    const onChange = (e) => {
        setUpdates({...updates, [e.target.name]: e.target.value });
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
            console.log('update');
        }
    };

    return (
        <div className="container">
            <div className='form-container'>
                <h1 className='form-title'>Account <span className="secondary">Update</span></h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">
                            <i className="far fa-user muted"/> Username
                        </label>
                        <input type="text" name="username" value={username} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_name">
                            <i className="fas fa-file-signature muted"/> First Name
                        </label>
                        <input type="text" name="first_name" value={first_name} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">
                            <i className="fas fa-file-signature muted"/> Last Name
                        </label>
                        <input type="text" name="last_name" value={last_name} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">
                            <i className="fas fa-info-circle muted"/> About Me
                        </label>
                        <textarea name="about" rows="8" value={about} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country_id">
                            <i className="fas fa-globe-americas muted"/> Nationality
                        </label>
                        <input type="text" name="country_id" value={country_id} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birth_date">
                            <i className="fas fa-calendar-alt muted"/> Birth Date
                        </label>
                        <input type="date" name="birth_date" value={birth_date} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="avatar">
                            <i className="fas fa-file-image muted"/> Avatar
                        </label>
                        <input type="file" name="avatar" value={avatar} onChange={onChange}/>
                    </div>
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
                    <input type="submit" value="Save Changes" className="submit"/>
                </form>
            </div>
        </div>
    );
};

export default UserEdit;
