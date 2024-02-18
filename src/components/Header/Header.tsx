import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className='flex justify-between m-auto max-w-[100vw] px-20 py-10 bg-green-400'>
      <img src={ logo } alt="Huddle" />
      <button className='bg-red-600'>Try It Free</button>
    </header>
  )
}