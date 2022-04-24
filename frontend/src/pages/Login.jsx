import {useState, useEffect} from "react";
import {FaSignInAlt} from "react-icons/fa";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const {email, password} = formData

    const onNameChange = e => {
        setFormData((prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        })))
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt/> Login
                </h1>
                <p>Please enter your account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className="input-control" type={'email'} id={'email'} name={'email'}
                               placeholder={'Enter your email'} value={email} onChange={onNameChange}/>
                    </div>
                    <div className="form-group">
                        <input className="input-control" type={'password'} id={'password'} name={'password'}
                               placeholder={'Enter your password'} value={password} onChange={onNameChange}/>
                    </div>
                    <div className="from-control">
                        <buttun type={'submit'} className="btn btn-block">Login</buttun>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;
