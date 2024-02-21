import { Button } from "../Button/Button";

export function Banner() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 py-10 h-[100vh]">
      <h1 className="text-4xl font-title text-dark-cyan">
        Build The Community Your Fans Will Love
      </h1>
      <p className="max-w-[480px] text-center font-body text-dark-cyan">
        Huddle re-imagines the way build communities. You have a 
        voice, but so does your audience. Create connections with your
        users as you engage in genuine discussion.
      </p>
      <Button />
    </section>
  )
}