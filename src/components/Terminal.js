import "../styling/home/terminal.css"
import Typewriter from "typewriter-effect";

export default function Terminal() {
    const l1 =
        <Typewriter
            options={{
                delay: 40,
                deleteSpeed: 40
            }}
            onInit={(typewriter) => {typewriter
                .typeString("Hey User! This is the Website of Makar Haustein!")
                .start();
        }}
    />
    const l2 =
        <Typewriter
            options={{
                delay: 40,
                deleteSpeed: 40
            }}
            onInit={(typewriter) => {typewriter
                .pauseFor(3000)
                .typeString("You can explore different areas of the website through the command terminal!")
                .start();
            }}
        />

    return (
        <div className="terminal">
            <button className="terminal--close-btn">
                <p>_</p>
            </button>
            <div className="terminal--frame">
                <p className="terminal--text">
                    {l1} {l2}
                </p>

            </div>
        </div>
    )
}