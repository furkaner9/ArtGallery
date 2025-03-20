"use client";

import { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      // Burada resim yükleme işlemini yapacak API'ye istek gönderebilirsiniz.
      // Örnek olarak, fetch API ile bir POST isteği gönderebilirsiniz.
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // });
      // if (response.ok) {
      //   console.log('Resim başarıyla yüklendi.');
      // } else {
      //   console.error('Resim yüklenirken bir hata oluştu.');
      // }
      console.log("Resim yükleme işlemi simüle edildi.", selectedImage);
    } catch (error) {
      console.error("Resim yüklenirken bir hata oluştu:", error);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Resim Yükle</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <button
        onClick={handleImageUpload}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
      >
        Yükle
      </button>
    </div>
  );
};

export default ImageUpload;
