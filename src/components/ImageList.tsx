"use client";

import { useState, useEffect } from "react";
import galleryData from "../../public/data/gallery.json";

interface GalleryItemType {
  id: number;
  src: string;
  title: string;
  tags: string[];
}

const ImageList = () => {
  const [images, setImages] = useState<GalleryItemType[]>(galleryData);

  const handleImageDelete = (id: number) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
    // Burada silme işlemini API'ye gönderebilirsiniz.
    console.log("Resim silindi:", id);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Resim Listesi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <img src={image.src} alt={image.title} className="w-full h-auto" />
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                onClick={() => handleImageDelete(image.id)}
                className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md text-white"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
