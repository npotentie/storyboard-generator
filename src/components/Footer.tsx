import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
    let logoProps = {
        width:"80",
        height:"80"
    }

    return (
        <>
        <footer>
        </footer>
        <style jsx>{`
            footer {
                position: fixed;
                width: 100%;
                z-index: 30;
                bottom: 0;

                height: 104px; // ONLY FOR FILL UP
                padding: 10px 130px;
                background-color: #000;
            }
        `}</style>
        </>
    );
};

export default Navbar;