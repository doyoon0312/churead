import React, { useState } from 'react';

const InputField = ({ type, field, onChange }) => {
  // logic
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    console.log('🚀event:', event.target.value); //사용자가 입력한 값
    const { value } = event.target;
    setValue(value); // value state 변경
    onChange(value, field); // 부모에게 이벤트, 데이터 보내기
  };

  //view
  return (
    <input
      type={type}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)} //소문자 대분자로 변환식
      name={field}
      value={value}
      className="block rounded-lg border border-gray-800 w-full bg-gray-400 text-white placeholder-gray-700 p-5"
      onChange={handleChange}
    />
  );
};

export default InputField;
