import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
    let logoProps = {
        width:"80",
        height:"80"
    }

    return (
        <>
        <header>
        <nav className={`nav`}>
            <Link href={"/"}>
                <Logo props={logoProps}/>
            </Link>
        </nav>
        </header>
        <style jsx>{`
            header {
                position: fixed;
                width: 100%;
                z-index: 30;
                top: 0;
            }
            nav {
                padding: 10px 130px;
                background-color: #000;
            }
        `}</style>
        </>
    );
};

export default Navbar;