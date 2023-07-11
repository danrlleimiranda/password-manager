import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Button } from './components/Button';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Header />
      {showForm && <Form showForm={ setShowForm } />}
      {!showForm
      && <Button onClick={ () => setShowForm(true) } />}
    </div>
  );
}

export default App;
