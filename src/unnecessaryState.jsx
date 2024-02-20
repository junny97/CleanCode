import React from 'react';

const MOCK_DATA = [
  {
    userId: 1,
    id: 1,
    title: 'clean room',
    completed: true,
  },
  {
    userId: 2,
    id: 2,
    title: 'clean house',
    completed: false,
  },
];

// 불필요한 상태를 만든다면?
// 결국에는 리액트에 의해 관리되는 값이 늘어난다는 것
// 그러다보면 렌더링에 영향을 주는 값이 늘어나 관리 포인트가 더더욱 늘어난다

export default function unnecessaryState() {
  const [userList, setUserList] = useState(MOCK_DATA);
  const [completUserList, setCompleteUserList] = useState(MOCK_DATA);

  useEffect(() => {
    const newList = completUserList.filter((user) => user.completed === true);
    setUserList(newList);
  }, [userList]);

  return (
    <div>
      <ul>
        {Mock_Data.map((user) => {
          <li>
            {user.title} / {user.completed}
          </li>;
        })}
      </ul>
      <ul>
        {props.userList.map((user) => {
          <li>
            {user.title} / {user.completed}
          </li>;
        })}
      </ul>
      <ul>
        {completUserList.userList.map((user) => {
          <li>
            {user.title} / {user.completed}
          </li>;
        })}
      </ul>
    </div>
  );
}
