import Image from "next/image";

const Logo = ({ props }) => {
  return (
    <Image
      src="/../public/logo.png"
      alt="Logo NPO"
      width={props.width}
      height={props.height}
    />
  );
};

export default Logo;