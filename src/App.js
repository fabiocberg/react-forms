import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {

  const {register, handleSubmit} = useForm();

  const onSubmit = (e) => {
    console.log(e);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nome:
        <input type="text" {...register("firstName")} />
      </label>
      <label>
        Sobrenome:
        <input type="text" {...register("lastName" )}/>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
