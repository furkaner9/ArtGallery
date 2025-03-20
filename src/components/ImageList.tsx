"use client";

import { useState, useEffect } from "react";

const ImageList = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Burada resim listesini API'den çekebilirsiniz.
    // Örnek olarak, fetch API ile bir GET isteği gönderebilirsiniz.
    // fetch('/api/images')
    //   .then((response) => response.json())
    //   .then((data) => setImages(data));
    // Simüle edilmiş resim listesi
    setImages([
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
    ]);
  }, []);

  const handleImageDelete = async (imageUrl: string) => {
    try {
      // Burada resim silme işlemini yapacak API'ye istek gönderebilirsiniz.
      // Örnek olarak, fetch API ile bir DELETE isteği gönderebilirsiniz.
      // const response = await fetch(`/api/images/${imageUrl}`, {
      //   method: 'DELETE',
      // });
      // if (response.ok) {
      //   setImages(images.filter((image) => image !== imageUrl));
      // } else {
      //   console.error('Resim silinirken bir hata oluştu.');
      // }
      console.log("Resim silme işlemi simüle edildi.", imageUrl);
      setImages(images.filter((image) => image !== imageUrl));
    } catch (error) {
      console.error("Resim silinirken bir hata oluştu:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Resim Listesi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto"
            />
            <button
              onClick={() => handleImageDelete(image)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md text-white"
            >
              Sil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
