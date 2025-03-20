"use client";

import { useState } from "react";

interface GallerySearchProps {
  onSearch: (term: string) => void;
}

const GallerySearch = ({ onSearch }: GallerySearchProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Ara..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="border rounded-md px-4 py-2"
    />
  );
};

export default GallerySearch;
