import {useState, useEffect} from "react";
import {FaUser} from "react-icons/fa";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    })

    const {name, email, password, password2} = formData

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
                    <FaUser/> Register
                </h1>
                <p>Please create an account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className="input-control" type={'text'} id={'name'} name={'name'}
                               placeholder={'Enter your name'} value={name} onChange={onNameChange}/>
                    </div>
                    <div className="form-group">
                        <input className="input-control" type={'email'} id={'email'} name={'email'}
                               placeholder={'Enter your email'} value={email} onChange={onNameChange}/>
                    </div>
                    <div className="form-group">
                        <input className="input-control" type={'password'} id={'password'} name={'password'}
                               placeholder={'Enter your password'} value={password} onChange={onNameChange}/>
                    </div>
                    <div className="form-group">
                        <input className="input-control" type={'password'} id={'password2'} name={'password2'}
                               placeholder={'Confirm your password'} value={password2} onChange={onNameChange}/>
                    </div>
                    <div className="from-control">
                        <buttun type={'submit'} className="btn btn-block">Submit</buttun>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Register;
