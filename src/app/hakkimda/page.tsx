import Image from "next/image";

const hakkimizda = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Hakkımızda</h1>
        <p className="text-lg text-gray-700">
          Modern Resim Galerisi, sanatın ve teknolojinin buluştuğu bir
          platformdur. Amacımız, sanatseverlere en güzel ve çeşitli eserleri
          sunmak, sanatçıları desteklemek ve sanatı daha geniş kitlelere
          ulaştırmaktır.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Misyonumuz</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Sanatı herkes için erişilebilir kılmak, sanatçıların eserlerini
          sergileyebilecekleri bir platform sağlamak ve sanatseverlere ilham
          vermek.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Vizyonumuz</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Sanat ve teknolojiyi bir araya getirerek, dijital sanatın öncüsü olmak
          ve sanat dünyasına yeni bir soluk getirmek.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Ekibimiz</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center border p-6 rounded-md">
            <Image
              src="/image/taha.jpg"
              alt="Ekip Üyesi 1"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ahmet Yılmaz
            </h3>
            <p className="text-gray-600">Kurucu & CEO</p>
          </div>
          <div className="text-center border p-6 rounded-md">
            <Image
              src="/image/haaa.jpg"
              alt="Ekip Üyesi 2"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Ayşe Kaya
            </h3>
            <p className="text-gray-600">Sanat Direktörü</p>
          </div>
          <div className="text-center border p-6 rounded-md border-radius">
            <Image
              src="/image/zfs.jpg"
              alt="Ekip Üyesi 3"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Furkan Eriç
            </h3>
            <p className="text-gray-600">Teknoloji Uzmanı</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default hakkimizda;
