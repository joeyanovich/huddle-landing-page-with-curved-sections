import img from '../../assets/screen-mockups.svg'
import { InfoNumbers } from '../InfoNumbers/InfoNumbers'

import communities from '../../assets/icon-communities.svg'
import messages from '../../assets/icon-messages.svg'

export function InfoData() {
  return (
    <section className="flex flex-col items-center justify-center gap-20">
      <img src={ img } />
      <div className='flex justify-between max-w-[62.5rem] w-full'>
        <InfoNumbers icon={ communities } number='1.4k+' text='Communities Formed' />
        <InfoNumbers icon={ messages } number='2.7m+' text='Messages Sent' />
      </div>
    </section>
  )
}