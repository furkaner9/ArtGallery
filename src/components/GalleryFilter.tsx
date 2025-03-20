"use client";

import { useState } from "react";

interface GalleryFilterProps {
  onFilter: (tags: string[]) => void;
}

const GalleryFilter = ({ onFilter }: GalleryFilterProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const tags = ["manzara", "sanat", "doğa", "soyut"]; // Örnek etiketler

  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    onFilter(selectedTags);
  };

  return (
    <div className="flex space-x-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagToggle(tag)}
          className={`px-4 py-2 rounded-md ${
            selectedTags.includes(tag)
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default GalleryFilter;
