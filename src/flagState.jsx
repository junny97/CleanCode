import React, { useEffect } from 'react';

// 플래그 값
// - 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 Boolean으로 나타내는 값

export default function flagState() {
  const [isLogin, setIsLogin] = useState(false);

  //안좋은 예시
  useEffect(() => {
    if (hasToken) {
      setIsLogin(true);
    }
    if (isNewUser === false) {
      setIsLogin(true);
    }
    if (isValidToken) {
      setIsLogin(true);
    }
  }, [hasToken, isValidToken, isNewUser]);

  return <div></div>;
}
