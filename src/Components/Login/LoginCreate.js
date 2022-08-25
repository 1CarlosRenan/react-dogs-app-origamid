import React from 'react';
import Input from '../Forms/Input';

const LoginCreate = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input />
      </form>
    </section>
  );
};

export default LoginCreate;
