import logo from '../assets/logo.svg'
import { Button } from './Button'

export function Header() {
    return (
        <header className='flex items-center justify-between desktop:px-20 mobile:px-5 h-20 mt-16 w-full bg-red-300'>
            <div className='mobile:w-20 desktop:w-full'>
                <img src={ logo } alt="" />
            </div>
            <Button
                aTagClassName='px-8 py-2 bg-white border-2 border-p-pink rounded-full text-p-pink'
                text='Try It Free'
            />
        </header>
        
    )
}