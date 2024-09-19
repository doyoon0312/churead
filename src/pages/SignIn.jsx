import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const history = useNavigate(); //페이지도 이동 할수 있게 하는 함수'

  const goToSignIn = () => {
    history('/signin'); //이동할 페이지 주소 입력
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
      <form id="longin-form" className="text-center flex flex-col gap-2">
        <InputField type="text" field="name" />
        <InputField type="text" field="email" />
        <InputField type="password" field="password" />
        <LoginButton category="login" name="Create Account" />
      </form>
      <div className="flex justify-center gap-1 py-6">
        <p>계정이 없으신가요?</p>
        <Link to={'/signin'} className="text-blue-400">
          가입하기
        </Link>
      </div>
      <LoginButton category="signlogin" name="Continue with Google" />
    </div>
  );
};

export default SignIn;
