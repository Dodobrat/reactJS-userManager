import React, {useState, useContext, useEffect} from 'react';
import AuthContext from "../../context/auth/authContext";

const UserEdit = () => {
    const authContext = useContext(AuthContext);

    const { current, clearCurrent, setCurrent, updateUser} = authContext;

    useEffect(() => {
        setCurrent(current);
        if (current !== null){
            setUpdates(current);
        }
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
        email: ''
    });

    const {
        username,
        first_name,
        last_name,
        about,
        avatar,
        birth_date,
        country_id,
        email
    } = updates;

    const onChange = (e) => {
        setUpdates({...updates, [e.target.name]: e.target.value });
    };

    const onCancel = () => {
        clearCurrent();
    };

    const onDelete = () => {
        console.log('delete and logout');
    };

    const onSubmit = (e) => {
        e.preventDefault();
        updateUser(updates);
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
                        <input type="text" name="username" value={username || ''} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="first_name">
                            <i className="fas fa-file-signature muted"/> First Name
                        </label>
                        <input type="text" name="first_name" value={first_name || ''} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">
                            <i className="fas fa-file-signature muted"/> Last Name
                        </label>
                        <input type="text" name="last_name" value={last_name || ''} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="about">
                            <i className="fas fa-info-circle muted"/> About Me
                        </label>
                        <textarea name="about" rows="8" value={about || ''} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="country_id">
                            <i className="fas fa-globe-americas muted"/> Nationality
                        </label>
                        <input type="text" name="country_id" value={country_id || ''} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birth_date">
                            <i className="fas fa-calendar-alt muted"/> Birth Date
                        </label>
                        <input type="date" name="birth_date" value={birth_date || ''} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="avatar">
                            <i className="fas fa-file-image muted"/> Avatar
                        </label>
                        <input type="text" name="avatar" value={avatar || ''} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <i className="far fa-envelope-open muted"/> E-mail
                        </label>
                        <input type="email" name="email" value={email || ''} onChange={onChange} required/>
                    </div>
                    <input type="submit" value="Save Changes" className="submit" onClick={onSubmit}/>
                    <button className="submit cancel" onClick={onCancel}>Cancel Changes</button>
                    <button className="submit delete" onClick={onDelete}>Delete Account</button>
                </form>
            </div>
        </div>
    );
};

export default UserEdit;
