import img from '../../assets/illustration-grow-together.svg'

export function Benefits() {
  return (
    <section className='flex'>
      <div>
        <h3>Grow Together</h3>
        <p>Generate meaningful discussions with your audience and build a
          strong, loyal community. Think of the insightful conversations you
          miss out on with a feedback form. </p>
      </div>
      <img src= {img } alt="" />
    </section>
  )
}