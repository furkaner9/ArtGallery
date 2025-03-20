import Image from "next/image";

interface GalleryItemProps {
  image: {
    id: number;
    src: string;
    title: string;
  };
}

const GalleryItem = ({ image }: GalleryItemProps) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image
        src={image.src}
        alt={image.title}
        width={500}
        height={300}
        layout="responsive"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{image.title}</h3>
      </div>
    </div>
  );
};

export default GalleryItem;
