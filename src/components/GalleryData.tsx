"use client";

import { useState, useEffect } from "react";
import galleryData from "../../public/data/gallery.json"; // Veri dosyasının yolu

interface GalleryItemType {
  id: number;
  src: string;
  title: string;
  tags: string[];
}

const GalleryData = () => {
  const [images, setImages] = useState<GalleryItemType[]>(galleryData);
  const [editImage, setEditImage] = useState<GalleryItemType | null>(null);
  const [updatedImage, setUpdatedImage] = useState<GalleryItemType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState<string | null>(null);

  useEffect(() => {
    if (editImage) {
      setUpdatedImage({ ...editImage });
    }
  }, [editImage]);

  const handleEdit = (image: GalleryItemType) => {
    setEditImage(image);
  };

  const handleUpdate = async () => {
    if (!updatedImage) return;

    setIsLoading(true);
    setUpdateMessage("Güncelleniyor...");

    const updatedImages = images.map((image) =>
      image.id === updatedImage.id ? updatedImage : image
    );
    setImages(updatedImages);
    setEditImage(null);
    setUpdatedImage(null);

    try {
      // Burada güncellenmiş verileri API'ye gönderebilirsiniz.
      // Örnek olarak, fetch API ile bir PUT isteği gönderebilirsiniz.
      // const response = await fetch(`/api/images/${updatedImage.id}`, {
      //   method: 'PUT',
      //   body: JSON.stringify(updatedImage),
      // });
      // if (response.ok) {
      //   setUpdateMessage('Resim başarıyla güncellendi.');
      // } else {
      //   setUpdateMessage('Resim güncellenirken bir hata oluştu.');
      // }
      console.log("Güncellenmiş galeri verisi:", updatedImages);
      setUpdateMessage("Resim başarıyla güncellendi.");
    } catch (error) {
      console.error("Resim güncellenirken bir hata oluştu:", error);
      setUpdateMessage("Resim güncellenirken bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = (id: number) => {
    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);

    // Burada silinmiş verileri API'ye gönderebilirsiniz.
    console.log("Silinmiş galeri verisi:", id);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!updatedImage) return;

    const { name, value } = event.target;
    setUpdatedImage({ ...updatedImage, [name]: value });
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!updatedImage) return;

    const { value } = event.target;
    const tags = value.split(",").map((tag) => tag.trim());
    setUpdatedImage({ ...updatedImage, tags });
  };

  return (
    <div>
      {/* ... Resim listesi ve silme işlemleri ... */}

      {editImage && updatedImage && (
        <div className="mt-8 border p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-4">Resim Düzenle</h3>
          {/* ... Giriş alanları ... */}
          <button
            onClick={handleUpdate}
            disabled={isLoading}
            className={`bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-white ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Güncelleniyor..." : "Güncelle"}
          </button>
          {updateMessage && <p className="mt-2">{updateMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default GalleryData;
