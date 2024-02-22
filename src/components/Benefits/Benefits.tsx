import img from '../../assets/illustration-grow-together.svg'

export function Benefits() {
  return (
    <section className='flex items-center content-center w-full max-w-[1280px] m-auto bg-slate-500'>
      <div className='bg-green-500 flex flex-col gap-8 w-full'>
        <h3 className='font-title font-bold text-4xl'>Grow Together</h3>
        <p className='font-body'>Generate meaningful discussions with your audience and build a
          strong, loyal community. Think of the insightful conversations you
          miss out on with a feedback form. </p>
      </div>
      <div className=' w-full bg-red-500'>
        <img className='' src= {img } alt="" />
      </div>
    </section>
  )
}