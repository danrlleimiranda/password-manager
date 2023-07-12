import './App.css';
import { useState } from 'react';
import { T } from 'vitest/dist/types-e3c9754d';
import { Header } from './components/Header';
import { Form, RegisterType } from './components/Form';
import { Button } from './components/Button';
import { PasswordList } from './components/PasswordList';

function App() {
  const initialState = { serviço: '',
    login: '',
    senha: '',
    url: '' };
  const [showForm, setShowForm] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const [registerValue, setRegisterValue] = useState<any>([]);

  function formValueset(state:RegisterType) {
    setFormValue(state);
  }

  function registerValueSet(state: RegisterType) {
    setRegisterValue(state);
  }

  return (
    <div>
      <Header />
      {showForm && <Form
        showForm={ setShowForm }
        formValue={ formValue }
        setFormValue={ (state) => formValueset(state) }
        setRegisterValue={ (state) => registerValueSet(state) }
        registerValue={ registerValue }
      />}
      {!showForm
      && <Button onClick={ () => setShowForm(true) } />}
      {registerValue.length === 0
        ? <h2>Nenhuma senha cadastrada</h2>
        : <PasswordList registerValue={ [...registerValue] } /> }
    </div>
  );
}

export default App;
