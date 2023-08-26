import Image from "next/image";
import Link from "next/link";
const SingleHeroSlider = ({ BackgourndImages, images, Title }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgourndImages})`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
      className={`bg-[#032836] bg-opacity-40 w-full h-screen cursor-pointer`}
    >
      <div
        className="w-full max-w-6xl mx-auto h-full flex flex-col  md:flex-row gap-10  items-center p-10 md:p-5"
      >
        <div className="w-full md:w-1/2 space-y-5">
          <h3 className="text-2xl  text-zinc-300 font-medium">
            Welcome to Laroja
          </h3>
          <h2 style={{ fontFamily: "Rubik Moonrocks" }} className="leading-relaxed text-4xl tracking-wider font-bold text-white">
            {Title}
          </h2>
          <div>
            <Link href={"/"}>
              <button className="py-2 px-8 rounded-full bg-gradient-to-r from-rose-500 to-orange-500  text-white">
                Explore Menu
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 animate-bounce">
          <Image width={1000} height={1000} src={images} alt="images"></Image>
        </div>
      </div>
    </div>
  );
};

export default SingleHeroSlider;
