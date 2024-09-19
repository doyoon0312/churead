import React, { useState } from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const history = useNavigate(); //페이지도 이동 할수 있게 하는 함수'

  const goToSignUp = () => {
    history('/signup'); //이동할 페이지 주소 입력
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (inputValue, field) => {
    if (field === 'name') {
      setName(inputValue);
    } else if (field === 'email') {
      setEmail(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('name', name);
    console.log('email', email);
    console.log('password', password);
  };

  return (
    <div className="text-center px-6">
      <h1 className="flex justify-center">
        <img src="./images/logo.svg" alt="로고" />
      </h1>
      <h3 className="text-white font-bold text-base py-6">
        Chureads에서 소통해보세요
      </h3>

      {/* 폼영역 */}
      <form
        id="longin-form"
        className="text-center flex flex-col gap-2"
        onSubmit={handleSignup}
      >
        <InputField type="text" field="name" onChange={handleInputChange} />
        <InputField type="text" field="email" onChange={handleInputChange} />
        <InputField
          type="password"
          field="password"
          onChange={handleInputChange}
        />
        <LoginButton category="login" name="Create Account" />
      </form>

      <div className="flex justify-center gap-1 py-6">
        <p>계정이 없으신가요?</p>
        <Link to={'/signup'} className="text-blue-400">
          가입하기
        </Link>
      </div>
      {/* <LoginButton category="signlogin" name="Continue with Google" /> */}
    </div>
  );
};

export default SignUp;
