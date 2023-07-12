import './App.css';
import { useState } from 'react';
import { Header } from './components/Header/Header';
import { Form, RegisterType } from './components/Form/Form';
import { Button } from './components/Button/Button';
import { PasswordList } from './components/PasswordList/PasswordList';

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

  const handleDelete = (service: string) => {
    setRegisterValue(registerValue
      .filter((value:RegisterType) => value.serviço !== service));
  };

  return (
    <div className="App">
      <Header />
      {showForm && <Form
        showForm={ setShowForm }
        formValue={ formValue }
        setFormValue={ (state) => formValueset(state) }
        setRegisterValue={ (state) => registerValueSet(state) }
        registerValue={ registerValue }
      />}
      {!showForm
      && <Button onClick={ () => setShowForm(true) } className="register-button" />}
      {registerValue.length === 0
        ? <h2>Nenhuma senha cadastrada</h2>
        : <PasswordList
            registerValue={ [...registerValue] }
            handleDelete={ handleDelete }
        /> }
    </div>
  );
}

export default App;
