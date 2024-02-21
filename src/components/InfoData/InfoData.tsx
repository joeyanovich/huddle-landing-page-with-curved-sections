import img from '../../assets/screen-mockups.svg'
import { InfoNumbers } from '../InfoNumbers/InfoNumbers'

export function InfoData() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 mb-[1000px]">
      <img src={ img } alt="" />
      <div className='flex'>
        <InfoNumbers />
        {/* <InfoNumbers /> */}
      </div>
    </section>
  )
}