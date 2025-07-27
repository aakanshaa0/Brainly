import { Button } from "./components/ui/Button";
import './App.css'
import {PlusIcon} from './icons/PlusIcon'
import {ShareIcon} from './icons/ShareIcon'

function App() {
  return (
    <>
      <Button startIcon={<PlusIcon size={"sm"} />} size="sm" variant="primary" text="Add" />
      <Button startIcon={<ShareIcon size="md" />} size="md" variant="secondary" text="Share" />
      <Button size="lg" variant="secondary" text="Add Content" />
    </>
  )
}

export default App
