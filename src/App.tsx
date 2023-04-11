import Form from './components/Form/Form';
import styled from '@emotion/styled';
import { fontFamily } from './theme/index';
import UserList from './components/UserList/UserList';

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    font-family: ${fontFamily};
  `;
  return (
    <>
      <Title>FORM TEST </Title>
      <Form />
      <UserList />
    </>
  );
}

export default App;
