import { persistor } from './store/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { useRoutes } from 'react-router-dom'
import routes from '@/routes'
import './App.css'

function App() {
  const element = useRoutes(routes)
  return (
    <PersistGate loading={null} persistor={persistor}>
     {element}
    </PersistGate>
  )
}

export default App
