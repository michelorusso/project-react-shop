import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { store } from "../store";
import Header from './header'

export const Login = () => {
    
    const arrayMagazine = store.getState();



    const dispatch = useDispatch();

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const [admin, setAdmin] = useState('login');

    const [error, setError] = useState('');

    const [userCount , setUserCount] = useState(-1);
    console.log(arrayMagazine.LoginUser.log)

    useEffect(() => {

    }, []);
    return <div>
<Header/>
        <div className="loginForm login">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required autoComplete="Username" autoFocus placeholder="Inserisci Username" onChange={(elem) => {setUsername(elem.target.value);
                      switch (elem.target.value) {
                        case "KenKaneki131099":
                    return setUserCount(0); 
                        case "Naofumi201095":
                    return setUserCount(1);
                    }}} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" required autoComplete="current-password" placeholder="Password"  onChange={(elem) => setPassword(elem.target.value)} />
                    
                </div>
                <div className="text-center">
                    <Link to={`/${admin}`} type="submit" className="btn btn-dark" onClick={() => {
                        arrayMagazine.LoginUser.utenti[userCount].password == password && arrayMagazine.LoginUser.utenti[userCount].userName == username ? setAdmin('AdminPage') : setError('Username o Password errate');
                        dispatch({
                            type: 'LOGGATO',
                            username: username,
                            password: password,
                            count: userCount,
                            log: true
                        });
                        dispatch({
                            type: 'USER_SELECTED',
                            user: userCount
                        });
                    }}>Login in</Link>
                </div>
                <span className="text-danger">{error}</span>
            </form>
        </div>
        
       
    </div>
}
export default Login;