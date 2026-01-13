import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e) => {
        setAgreeToTerms(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (isLogin) {
            if (!formData.email || !formData.password) {
                alert('Please fill in all fields');
                return;
            }
        } else {
            if (!formData.name || !formData.email || !formData.password) {
                alert('Please fill in all fields');
                return;
            }
            if (!agreeToTerms) {
                alert('Please agree to the terms of use & privacy policy');
                return;
            }
        }

        // Submit data
        console.log(isLogin ? 'Login data:' : 'Signup data:', formData);
        alert((isLogin ? 'Login' : 'Signup') + ' successful!');

        // Reset form
        setTimeout(() => {
            setFormData({ name: '', email: '', password: '' });
            setAgreeToTerms(false);
        }, 1500);
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setFormData({ name: '', email: '', password: '' });
        setAgreeToTerms(false);
    };

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <div className='loginsignup-fields'>
                    {!isLogin && (
                        <input
                            type='text'
                            placeholder='Your Name'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    )}
                    <input
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                {isLogin && (
                    <div className='loginsignup-forgot'>
                        <button
                            type='button'
                            onClick={() => alert('Password reset link sent to your email')}
                            className='forgot-password-btn'
                        >
                            Forgot password?
                        </button>
                    </div>
                )}

                {!isLogin && (
                    <div className='loginsignup-agree'>
                        <input
                            type='checkbox'
                            name='agree'
                            checked={agreeToTerms}
                            onChange={handleCheckboxChange}
                        />
                        <p>By continuing, I agree to the terms of use & privacy policy</p>
                    </div>
                )}

                <button onClick={handleSubmit}>
                    Continue
                </button>

                <p className='loginsignup-login'>
                    {isLogin ? "Don't have an account? " : 'Already have an account? '}
                    <span onClick={toggleForm}>
                        {isLogin ? 'Sign Up here' : 'Login here'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginSignup;
