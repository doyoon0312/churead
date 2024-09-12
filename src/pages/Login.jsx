import React from 'react';
import InputField from '../components/InputField';
import LoginButton from '../components/LoginButton';

const Login = () => {
  // logic
  // const history = useNavigate(); useNavigate //페이지도 이동 할수 있게 하는 함수

  // const goToHome = () => {
  //   history('/'); //이동할 페이지 주소 입력
  // };

  // view
  return (
    <div className="flex justify-center flex-col px-20 space-y-4 text-xl ">
      {/* <button type="button" onClick={goToHome}>
        홈 화면으로 이동
      </button> */}
      {/* <Link to={'/'} style={{ color: '#222' }}>
        홈 화면으로 이동
      </Link> */}
      <img
        src="./images/logo.svg"
        alt="로고"
        className=" object-center items-center h-20"
      />
      <h2 style={{ color: '#F3F5F7' }} className="flex justify-center">
        Chureads에서 소통해보세요
      </h2>
      <InputField type="text" placeholder="Email" />
      <InputField type="password" placeholder="Password" />
      <LoginButton text="Login" className="block rounded-lg bg-white" />
      <p style={{ color: '#777777' }} className="flex justify-center">
        계정이 없으신가요?{' '}
        <a
          href="#"
          style={{ color: '#0095F6' }}
          className="underline-offset-auto"
        >
          가입하기
        </a>
      </p>
      <p style={{ color: '#777777' }} className="flex justify-center">
        or
      </p>
      <LoginButton
        text="Continue with Google"
        className="block rounded-lg bg-white"
      />
    </div>
  );
};

export default Login;
