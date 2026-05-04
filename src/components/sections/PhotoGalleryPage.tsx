"use client";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

const ITEMS_PER_PAGE = 12;

const photos = [
  "/assets/Image/GalleryImage/ (1).jpeg",
  "/assets/Image/GalleryImage/ (1).jpg",
  "/assets/Image/GalleryImage/ (2).jpg",
  "/assets/Image/GalleryImage/ (2).jpeg",
  "/assets/Image/GalleryImage/ (3).jpeg",
  "/assets/Image/GalleryImage/ (3).JPG",
  "/assets/Image/GalleryImage/ (4).jpeg",
  "/assets/Image/GalleryImage/ (4).JPG",
  "/assets/Image/GalleryImage/ (5).jpeg",
  "/assets/Image/GalleryImage/ (5).JPG",
  "/assets/Image/GalleryImage/ (6).jpeg",
  "/assets/Image/GalleryImage/ (6).JPG",
  "/assets/Image/GalleryImage/ (7).jpeg",
  "/assets/Image/GalleryImage/ (7).JPG",
  "/assets/Image/GalleryImage/ (8).jpeg",
  "/assets/Image/GalleryImage/ (8).JPG",
  "/assets/Image/GalleryImage/ (9).jpeg",
  "/assets/Image/GalleryImage/ (9).JPG",
  "/assets/Image/GalleryImage/ (10).jpeg",
  "/assets/Image/GalleryImage/ (10).JPG",
  "/assets/Image/GalleryImage/ (11).JPG",
  "/assets/Image/GalleryImage/ (12).JPG",
  "/assets/Image/GalleryImage/ (13).JPG",
  "/assets/Image/GalleryImage/ (14).JPG",
  "/assets/Image/GalleryImage/ (15).JPG",
  "/assets/Image/GalleryImage/ (16).jpg",
  "/assets/Image/GalleryImage/ (17).jpg",
  "/assets/Image/GalleryImage/ (18).JPG",
  "/assets/Image/GalleryImage/ (19).JPG",
  "/assets/Image/GalleryImage/ (20).JPG",
  "/assets/Image/GalleryImage/ (21).JPG",
  "/assets/Image/GalleryImage/ (22).jpg",
  "/assets/Image/GalleryImage/ (23).jpg",
  "/assets/Image/GalleryImage/ (24).JPG",
  "/assets/Image/GalleryImage/ (25).jpg",
  "/assets/Image/GalleryImage/ (26).jpg",
  "/assets/Image/GalleryImage/ (27).JPG",
  "/assets/Image/GalleryImage/ (28).jpg",
  "/assets/Image/GalleryImage/ (29).jpg",
  "/assets/Image/GalleryImage/ (30).JPG",
  "/assets/Image/GalleryImage/ (31).jpg",
  "/assets/Image/GalleryImage/ (32).JPG",
  "/assets/Image/GalleryImage/ (33).jpg",
  "/assets/Image/GalleryImage/ (34).jpg",
  "/assets/Image/GalleryImage/ (35).jpg",
  "/assets/Image/GalleryImage/ (36).jpg",
  "/assets/Image/GalleryImage/ (37).jpg",
  "/assets/Image/GalleryImage/ (38).jpg",
  "/assets/Image/GalleryImage/ (39).jpg",
  "/assets/Image/GalleryImage/ (40).jpg",
  "/assets/Image/GalleryImage/ (41).jpg",
  "/assets/Image/GalleryImage/ (42).jpg",
  "/assets/Image/GalleryImage/ (43).jpg",
  "/assets/Image/GalleryImage/ (44).jpg",
  "/assets/Image/GalleryImage/ (45).jpg",
  "/assets/Image/GalleryImage/ (46).jpg",
  "/assets/Image/GalleryImage/ (47).jpg",
  "/assets/Image/GalleryImage/ (48).jpg",
  "/assets/Image/GalleryImage/ (49).jpg",
  "/assets/Image/GalleryImage/ (50).jpg",
  "/assets/Image/GalleryImage/ (51).jpg",
  "/assets/Image/GalleryImage/ (52).jpg",
  "/assets/Image/GalleryImage/ (53).jpg",
  "/assets/Image/GalleryImage/ (54).jpg",
  "/assets/Image/GalleryImage/ (55).jpg",
  "/assets/Image/GalleryImage/ (56).jpg",
  "/assets/Image/GalleryImage/ (57).jpg",
  "/assets/Image/GalleryImage/ (58).jpg",
  "/assets/Image/GalleryImage/ (59).jpg",
  "/assets/Image/GalleryImage/ (60).jpg",
];

const Spinner = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <div className="h-12 w-12 rounded-full border-4 border-black/20 border-t-black animate-spin mb-4" />
    <p className="text-sm text-gray-600">Loading images...</p>
  </div>
);

const GalleryCard = ({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-xl shadow-md bg-white group"
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      <img
        src={src}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-64 object-cover transition-transform duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } group-hover:scale-110`}
      />

      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
        <span className="text-white text-lg">View</span>
      </div>
    </div>
  );
};

const PhotoGalleryPage = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [pageLoading, setPageLoading] = useState(true);

  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);

  const paginatedPhotos = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return photos.slice(start, start + ITEMS_PER_PAGE);
  }, [page]);

  // Fake loader on page change (UX)
  useEffect(() => {
    setPageLoading(true);
    const t = setTimeout(() => setPageLoading(false), 600);
    return () => clearTimeout(t);
  }, [page]);

  return (
    <div className="bg-[#F7F8F6] min-h-screen">
      {/* Header */}
      <div className="h-[40vh] flex items-center justify-center bg-[#123751] text-white">
        <h1 className="text-5xl font-extrabold">Photo Gallery</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {pageLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedPhotos.map((src, i) => (
              <GalleryCard
                key={`${src}-${i}`}
                src={src}
                onClick={() => setSelected(src)}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-14">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-5 py-2 rounded-lg border bg-white disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-5 py-2 rounded-lg border bg-white disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {/* Fullscreen Viewer */}
      {selected && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelected(null)}
          >
            <X size={36} />
          </button>
          <img
            src={selected}
            className="max-h-[90vh] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default PhotoGalleryPage;
