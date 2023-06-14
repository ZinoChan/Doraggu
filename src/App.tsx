import DropZone from './components/DropZone'
import { TodoProvider } from './context';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


function App() {
  return (
    <>
      <main className="max-w-screen-lg mx-auto p-6">
        <h1 className="text-4xl font-bold italic text-center capitalize mb-8">
          <span className="text-primary1">Dora</span>
          <span className="text-primary2">ggu</span>
        </h1>
        <DndProvider backend={HTML5Backend}>
          <TodoProvider>
            <DropZone />
          </TodoProvider>
        </DndProvider>
      </main>
    </>
  )
}

export default App
