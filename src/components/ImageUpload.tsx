"use client";

import { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleImageUpload = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    setUploadMessage("Resim yükleniyor...");

    const formData = new FormData();
    formData.append("image", selectedImage);
    formData.append("title", title);
    formData.append("tags", tags);

    try {
      // Burada resim yükleme işlemini yapacak API'ye istek gönderebilirsiniz.
      // Örnek olarak, fetch API ile bir POST isteği gönderebilirsiniz.
      // const response = await fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // });
      // if (response.ok) {
      //   setUploadMessage('Resim başarıyla yüklendi.');
      // } else {
      //   setUploadMessage('Resim yüklenirken bir hata oluştu.');
      // }
      console.log(
        "Resim yükleme işlemi simüle edildi.",
        selectedImage,
        title,
        tags
      );
      setUploadMessage("Resim başarıyla yüklendi.");
    } catch (error) {
      console.error("Resim yüklenirken bir hata oluştu:", error);
      setUploadMessage("Resim yüklenirken bir hata oluştu.");
    } finally {
      setIsLoading(false);
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
      <input
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border rounded-md px-4 py-2 mb-2 w-full"
      />
      <input
        type="text"
        placeholder="Etiketler (virgülle ayırın)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="border rounded-md px-4 py-2 mb-4 w-full"
      />
      <button
        onClick={handleImageUpload}
        disabled={isLoading}
        className={`bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Yükleniyor..." : "Yükle"}
      </button>
      {uploadMessage && <p className="mt-2">{uploadMessage}</p>}
    </div>
  );
};

export default ImageUpload;
