import React from 'react'
import { LoginBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components/atoms';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    return (
        <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="image-bg" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={30} />
                <Button title="Login" onClick={() => history.push('/')}/>
                <Gap height={100} />
                <Link title="Silahkan Daftar" onClick={() => history.push('/register')}/>
            </div>
        </div>
    )
}

export default Login
