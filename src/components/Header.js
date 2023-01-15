import '../styling/Header.css';

export default function Header(){
    return(
        <header>
            <ul>
                <li>
                    <a href={"/"}>mh.home()</a>
                </li>
                <li>
                    <a href={"/public/projects.html"}>mh.projects()</a>
                </li>
                <li>
                    <a href={"/public/aboutMe.html"}>mh.aboutMe()</a>
                </li>
            </ul>
        </header>
    )
}