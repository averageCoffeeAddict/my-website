import "../../styling/home/Main.css";
import Typewriter from "typewriter-effect";

export default function Main() {
    return (
        <main>
            <div id={"home-introduction"}>
                <h1>
                    <Typewriter options={{
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        strings: ["I am a web developer"]
                    }} />
                </h1>
            </div>
        </main>
    )
}