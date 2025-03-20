import Image from "next/image";

const Gallery = () => {
  const images = [
    "/image/hero1.webp", // Galeri resimlerinizin yollarını buraya ekleyin
    "/image/hero2.jpeg",
    "/image/hero3.jpeg",
    // ... daha fazla resim
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Resim Galerisi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
