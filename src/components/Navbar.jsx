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
                position: sticky;
                z-index: 30;
                top: 0;
            }
            nav {
                display: flex;
                padding: 10px 130px;
                justify-content: space-between;
                background-color: #000;
            }
        `}</style>
        </>
    );
};

export default Navbar;