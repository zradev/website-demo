import React from 'react';
import { FaAccusoft, FaAsterisk, FaDatabase, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <div className="col-1">
                        <h1>Data to enrich your <span className="primary-color">online business</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ipsam, dolor amet velit iure quos beatae illum
                            pariatur corrupti placeat eos.
                        </p>
                        <div className="used-by">
                            <i><FaDatabase />Staxx</i>
                            <i><FaAsterisk />Star AI</i>
                            <i><FaAccusoft />Accusoft</i>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-layout">
                            <div className="form-container">
                                <p className="sign-in-text">Sign in with</p>
                                <div className="social-logins">
                                    <i><FaFacebook size={20} /></i>
                                    <i><FaTwitter size={20} /></i>
                                    <i><FaGithub size={20} /></i>
                                </div>
                                <div className="divider">
                                    <p><span>Or</span></p>
                                </div>
                                <form action="">
                                    <input type="text" placeholder='Name' />
                                    <input type="email" placeholder='Email' />
                                    <input type="password" placeholder='Password' />
                                    <button>Create your account</button>
                                </form>
                            </div>
                            <div className="form-footer">
                                <p> By signing up, you agree to our
                                    <span className="primary-color">Terms, Data policy</span> and
                                    <span className="primary-color">Cookies policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;