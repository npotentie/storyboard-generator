import Image from "next/image";

const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <Image
      src="/../public/logo.png"
      alt="Logo NPO"
      width={width}
      height={height}
    />
  );
};

export default Logo;
