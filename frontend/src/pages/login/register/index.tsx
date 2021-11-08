import { useFormik } from 'formik';
import Link from 'next/link';

import Container from './styles';

import Button from '../../../components/Form/Button';
import Input from '../../../components/Form/Input';
import Switch from '../../../components/Form/Switch';

const initialValues = {
  name: '',
  email: '',
  password: '',
  isCompany: false,
};

const Register = () => {
  const formik = useFormik({
    initialValues,
    onSubmit(values) {
      console.log(values);
    },
  });

  return (
    <Container onSubmit={formik.handleSubmit}>
      <h1>Cadastrar</h1>
      <Input
        labelValue="Nome"
        input={{
          onChange: formik.handleChange,
          value: formik.values.name,
          name: 'name',
        }}
      />
      <Input
        labelValue="Email"
        input={{
          onChange: formik.handleChange,
          value: formik.values.email,
          name: 'email',
        }}
        container={{ className: 'margin' }}
      />
      <Input
        labelValue="Senha"
        input={{
          onChange: formik.handleChange,
          value: formik.values.password,
          name: 'password',
        }}
      />
      <div className="switch">
        <Switch
          onChange={() =>
            formik.setFieldValue('isCompany', !formik.values.isCompany)
          }
          checked={formik.values.isCompany}
        />
        <p>É uma empresa?</p>
      </div>
      <Button type="submit" onClick={() => formik.handleSubmit()}>
        Cadastrar
      </Button>
      <Link href="/login">Já Possui cadastro? Clique Aqui</Link>
    </Container>
  );
};

export default Register;
