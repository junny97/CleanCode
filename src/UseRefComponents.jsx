import React, { useEffect, useState } from 'react';

//리랜더링 방지가 필요하다면 useState 보다 useRef 사용
//컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야 하는 경우
export default function UseRefComponents() {
  //useState를 사용해 컴포넌트 마운트 정보를 확인하는 방법
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
    }
  }, [isMount]);

  return <div></div>;
}
