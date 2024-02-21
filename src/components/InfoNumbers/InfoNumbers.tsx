interface InfoNumbersProps {
  icon: string
  number: string
  text: string
}

export function InfoNumbers({ icon, number, text }: InfoNumbersProps) {
  return (
    <div className="flex flex-col gap-5 p-8">
      <img src={icon} className='w-12' />
      <h2 className='font-body font-bold text-8xl'>{number}</h2>
      <p className='font-body text-2xl text-center text-gray-400'>{text}</p>
    </div>
  )
}