interface ButtonProps {
    text: string,
    aTagClassName: string,
}

export function Button({ text, aTagClassName }:ButtonProps) {
    return (
        <div>
            <a href="#" className={aTagClassName}>
                <button>
                    {text}
                </button>
            </a>
        </div>
    )
}