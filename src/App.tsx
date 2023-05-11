import { CallSection } from './components/CallSection'
import { Header } from './components/Header'
import './style/global.css'

export function App() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Header />
      <CallSection />
    </div>
  )
}
