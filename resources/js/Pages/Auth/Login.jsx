import React from 'react';
import { useForm } from '@inertiajs/inertia-react';

import './auth.scss';

export default function Login() {

    const {data, setData, post, processing, errors} = useForm({
        email: '',
        password: ''
    })

    function submit(e) {
        e.preventDefault();
        post('/login');
    }

    return (
        <div id="login-page">
            <div id="login-card">
                <div className="card">
                    <div className="card-content">
                        <p className="subtitle">Login</p>
                        <hr />
                        <form onSubmit={submit}>
                            <div className="field">
                                <label htmlFor="" className="label">Email</label>
                                <div className="control">
                                    <input type="email" className="input" onChange={e => setData('email', e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="" className="label">Senha</label>
                                <div className="control">
                                    <input type="password" className="input" onChange={e => setData('password', e.target.value)} />
                                </div>
                            </div>
                            <div className="field">
                                <button type="submit" className="button is-primary">Logar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
