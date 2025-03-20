"use client";

import ImageUpload from "../../components/ImageUpload";
import ImageList from "../../components/ImageList";

const Admin = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Admin Paneli</h1>
      <ImageUpload />
      <ImageList />
    </main>
  );
};

export default Admin;
