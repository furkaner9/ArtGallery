import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      <Image
        src="/image/hero-bg.jpg" // Arka plan resminizin yolunu buraya ekleyin
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Modern Resim Galerisi
        </h1>
        <p className="text-lg md:text-xl mb-8">
          En güzel resimlerin keyfini çıkarın.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-semibold text-white">
          <Link href="/galeri">Galeriye Git</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
