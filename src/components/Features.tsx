import { FaCamera, FaPalette, FaHeart } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaCamera />,
      title: "Yüksek Çözünürlüklü Resimler",
      description: "En net ve canlı resimlerle görsel bir şölen yaşayın.",
    },
    {
      icon: <FaPalette />,
      title: "Çeşitli Sanat Eserleri",
      description: "Farklı tarzlarda ve temalarda sanat eserlerini keşfedin.",
    },
    {
      icon: <FaHeart />,
      title: "Favorilerinizi Kaydedin",
      description:
        "Beğendiğiniz resimleri favorilerinize ekleyin ve istediğiniz zaman erişin.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Özellikler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
