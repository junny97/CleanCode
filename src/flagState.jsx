import React, { useEffect } from 'react';

// 플래그 값
// - 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 Boolean으로 나타내는 값

export default function flagState() {
  //상태 값 없이 로그인 여부 조건 제어문으로 변경
  const isLogin = hasToken && isNewUser === false && isValidToken;

  return <div>{isLogin && '안녕하세요! 반갑습니다.'}</div>;
}
