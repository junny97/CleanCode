import React, { useEffect } from 'react';

//리랜더링 방지가 필요하다면 useState 보다 useRef 사용
//컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야 하는 경우
export default function UseRefComponents() {
  //useRef로 리랜더링 방지하며 컴포넌트 마운트 정보를 확인하는
  //useRef는 DOM 이벤트 조작만 다룬다는 생각 버리기!
  const isMount = useRef(false);

  useEffect(() => {
    isMount.current = true;
    return () => (isMount.current = false);
  }, []);

  return <div>{isMount && '컴포넌트 마운트 완료'}</div>;
}
