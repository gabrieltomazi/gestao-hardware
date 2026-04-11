import { Input } from "../../components/atoms/Input"
import { Container, Content, Form, Title } from "./style"
import { FaUser, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export const Login = () => {

  return (
    <Container>
      <Content>
        <Title>
          <h1>Login</h1>
          <p>Faça login com a sua conta </p>
        </Title>

        <Form>
          <Input Icon={FaUser} placeholder="Nome de usuário" />
          <Input Icon={FaLock} placeholder="Senha" />
        </Form>

        <Link to=''>
        </Link>
      </Content>
    </Container>
  )

}