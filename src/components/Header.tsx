import logo from '../assets/logo.svg'
import { Button } from './Button'

export function Header() {
    return (
        <header className='flex items-center justify-between h-20 mt-16 w-[1440px]'>
            <div>
                <img src={ logo } alt="" />
            </div>
            <Button
                aTagClassName='px-8 py-2 bg-white border-2 border-p-pink rounded-full text-p-pink'
                text='Try It Free'
            />
        </header>
        
    )
}