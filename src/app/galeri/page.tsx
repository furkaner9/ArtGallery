"use client";

import { useState, useEffect } from "react";
import GalleryFilter from "../../components/GalleryFilter";
import GallerySearch from "../../components/GallerySearch";
import GalleryItem from "../../components/GalleryItem";
import galleryData from "../../../public/data/gallery.json"; // Veri dosyasının yolu

interface GalleryItemType {
  id: number;
  src: string;
  title: string;
  tags: string[];
}

const Galeri = () => {
  const [images, setImages] = useState<GalleryItemType[]>(galleryData);
  const [filteredImages, setFilteredImages] =
    useState<GalleryItemType[]>(galleryData);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    let filtered = images;

    if (searchTerm) {
      filtered = filtered.filter((image) =>
        image.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTags.length > 0) {
      filtered = filtered.filter((image) =>
        selectedTags.every((tag) => image.tags.includes(tag))
      );
    }

    setFilteredImages(filtered);
  }, [searchTerm, selectedTags, images]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilter = (tags: string[]) => {
    setSelectedTags(tags);
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Galeri</h1>
      <div className="flex justify-between mb-8">
        <GallerySearch onSearch={handleSearch} />
        <GalleryFilter onFilter={handleFilter} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredImages.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </main>
  );
};

export default Galeri;
