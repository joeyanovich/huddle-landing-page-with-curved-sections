import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <header className='absolute flex justify-between m-auto w-full max-w-[100vw] px-20 py-10 mt-10'>
      <img src={ logo } alt="Huddle" />
      <button className='bg-transparnet rounded-full border-solid border-2 px-10 border-pink text-pink'>Try It Free</button>
    </header>
  )
}