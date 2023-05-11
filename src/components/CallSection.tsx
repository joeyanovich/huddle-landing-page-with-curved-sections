import { Button } from "./Button";

export function CallSection() {
    return (
        <section className="py-12 w-[1440px] flex flex-col justify-center items-center">
            <h1 className="font-poppins pt-40 text-5xl">Build The Community Your Fans Will Love</h1>
            <p className="font-open pt-10 text-lg text-center desktop:mx-[450px]">Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.
            </p>
            <div className="mt-14">
            <Button
                aTagClassName="px-16 py-4 bg-p-pink rounded-full text-white font-semibold"
                text="Get Started For Free" />
            </div>
            
        </section>
    )
}