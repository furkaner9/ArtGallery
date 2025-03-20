"use client";

import { useState } from "react";

const Iletisim = () => {
  const [formData, setFormData] = useState({
    ad: "",
    email: "",
    mesaj: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada form verilerini gönderme işlemini yapabilirsiniz.
    console.log("Form verileri:", formData);
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">İletişim</h1>
        <p className="text-lg text-gray-700">
          Bizimle iletişime geçmek için aşağıdaki formu doldurabilir veya
          iletişim bilgilerimizi kullanabilirsiniz.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            İletişim Formu
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="ad"
                className="block text-gray-700 font-semibold mb-2"
              >
                Adınız
              </label>
              <input
                type="text"
                id="ad"
                name="ad"
                value={formData.ad}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                E-posta Adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="mesaj"
                className="block text-gray-700 font-semibold mb-2"
              >
                Mesajınız
              </label>
              <textarea
                id="mesaj"
                name="mesaj"
                value={formData.mesaj}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded-md text-white font-semibold"
            >
              Gönder
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            İletişim Bilgileri
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Adres:</span> Örnek Mah. Örnek Cad.
            No:123 Örnek Şehir
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Telefon:</span> 0 (123) 456 7890
          </p>
          <p className="text-gray-700 mb-6">
            <span className="font-semibold">E-posta:</span> info@ornekgaleri.com
          </p>

          <div className="mt-8">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Konumumuz</h2>
            {/* Burada Google Haritalar'ı entegre edebilirsiniz. */}
            <div className="w-full h-64 bg-gray-200 rounded-md">
              {/* Harita */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Iletisim;
