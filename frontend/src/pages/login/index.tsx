import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Container from './styles';

import Button from '../../components/Form/Button';
import Input from '../../components/Form/Input';
import { login } from '../../services/api/login';
import { useContextProvider } from '../../services/Context';
import { storageItem } from '../../services/storage';

const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { updateLogin } = useContextProvider();
  const router = useRouter();
  const formik = useFormik({
    initialValues,
    async onSubmit(values) {
      if (loading) {
        return;
      }
      console.log(values);
      setLoading(true);
      try {
        const response = await login(values.email, values.password);
        storageItem('token', { token: response.data.acess_token });
        updateLogin();
        router.replace('/');
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <h1>Login</h1>
      <Input
        labelValue="Email"
        container={{ className: 'margin' }}
        input={{
          onChange: formik.handleChange,
          value: formik.values.email,
          name: 'email',
        }}
      />
      <Input
        labelValue="Senha"
        input={{
          onChange: formik.handleChange,
          value: formik.values.password,
          name: 'password',
          type: 'password',
        }}
      />
      <Button className="button" type="submit">
        Login
      </Button>
      <Link href="/login/register">Não possui cadastro? Clique Aqui</Link>
    </Container>
  );
};

export default Login;
