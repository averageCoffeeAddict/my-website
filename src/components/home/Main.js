import "../../styling/home/Main.css";
import Typewriter from "typewriter-effect";
import Terminal from "../Terminal";

export default function Main() {
    return (
        <main>
            <div id={"home-introduction"}>
                <p>
                    {/*
                        <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString('Hello World!')
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                        }} />
                    */}
                    <Terminal />
                </p>
            </div>
        </main>
    )
}