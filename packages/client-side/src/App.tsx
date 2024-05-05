import './App.css'
import axios from 'axios'
import { Toaster, toast } from 'sonner'
import './styles.css'
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons'
import { useState } from 'react';

function App() {
  const [project, setProject] = useState("Teste")

  function click() {
    const promise = axios.post(`http://localhost:5000/api/${project}`)
    toast.promise(promise, {
      loading: `Criando a RestAPI ${project}...`,
      success: () => {
        return `${project} criado com sucesso!`;
      },
      error: 'Error'
    })
  }

  return (
    <>
      <Toaster position="top-center" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            Criar a Rest API
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="DialogOverlay" />
          <Dialog.Content className="DialogContent">
            <Dialog.Title className="DialogTitle">Criar RestAPI</Dialog.Title>
            <Dialog.Description className="DialogDescription">
              Crie um nova RestAPI.
            </Dialog.Description>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Nome
              </label>
              <input className="Input" id="name" defaultValue="Teste" onChange={(e) => setProject(e.target?.value)} />
            </fieldset>
            <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
              <Dialog.Close asChild>
                <button onClick={click} className="Button green">Gerar</button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

export default App
