"use client";
import { useEffect, useState, useRef } from "react";
import { NavBar } from "./NavBarPhotagraphy";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';

export default function PhotographyPage() {
  const [images, setImages] = useState<{ imagePath: string, description: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ imagePath: string, description: string } | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 添加加载状态
    setLoading(true);
    fetch("/imageList.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch images: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Loaded image data:", data); // 调试日志
        if (Array.isArray(data) && data.length > 0) {
          setImages(data);
          setSelectedImage(data[0]);
          setSelectedIndex(0);
        } else {
          setError("No images found or invalid data format");
        }
      })
      .catch((err) => {
        console.error("Failed to load image list:", err);
        setError("Failed to load images. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || images.length === 0) return;

    const scrollSpeed = 1;
    let intervalId: NodeJS.Timeout;

    const startScroll = () => {
      intervalId = setInterval(() => {
        if (!scrollContainer) return;
        scrollContainer.scrollLeft += scrollSpeed;
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }, 20);
    };

    startScroll();
    return () => clearInterval(intervalId);
  }, [images]);

  // Function to navigate to the previous image
  const goToPrevious = () => {
    if (images.length === 0) return;
    const newIndex = selectedIndex <= 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
    scrollToThumbnail(newIndex);
  };

  // Function to navigate to the next image
  const goToNext = () => {
    if (images.length === 0) return;
    const newIndex = selectedIndex >= images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
    scrollToThumbnail(newIndex);
  };

  // Function to scroll the thumbnail into view
  const scrollToThumbnail = (index: number) => {
    if (!scrollRef.current) return;

    const thumbnailWidth = 256; // w-64 = 16rem = 256px
    const spacing = 16; // space-x-4 = 1rem = 16px
    const scrollPosition = (thumbnailWidth + spacing) * index;

    scrollRef.current.scrollLeft = scrollPosition - scrollRef.current.clientWidth / 2 + thumbnailWidth / 2;
  };

  // Select image by index
  const selectImage = (image: { imagePath: string, description: string }, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, images]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Photography</h1>

        {loading && (
          <div className="text-center py-20">
            <p className="text-xl">Loading images...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-400">
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && selectedImage && (
          <section className="flex flex-col items-center p-12">
            <div className="relative w-full max-w-4xl">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 z-10 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <Image
                src={selectedImage.imagePath}
                alt="Selected photograph"
                className="rounded-xl shadow-lg max-h-[80vh] mx-auto object-contain"
                onError={(e) => {
                  console.error("Image failed to load:", selectedImage.imagePath);
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder-image.jpg"; // 替换为一个占位图像
                  target.alt = "Image could not be loaded";
                }}
              />

              {/* Next Button */}
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 z-10 transition-all"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <p className="mt-4 text-gray-400 italic text-center max-w-2xl">
              {selectedImage.description || "No description available"}
            </p>
            <div className="mt-4 text-sm">
              <span>{selectedIndex + 1} / {images.length}</span>
            </div>
          </section>
        )}

        {!loading && !error && images.length > 0 && (
          <section className="py-10">
            <h2 className="text-2xl font-semibold mb-4">Browse Gallery</h2>
            <div
              ref={scrollRef}
              className="overflow-x-auto whitespace-nowrap px-6 pb-4 scrollbar-hide"
            >
              <div className="flex space-x-4">
                {images.map((image, i) => (
                  <ThumbnailCard
                    key={i}
                    src={image.imagePath}
                    isSelected={selectedIndex === i}
                    onClick={() => selectImage(image, i)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function ThumbnailCard({
  src,
  isSelected = false,
  onClick
}: {
  src: string;
  isSelected?: boolean;
  onClick: () => void
}) {
  return (
    <div
      className={`w-64 flex-shrink-0 rounded-2xl shadow transition cursor-pointer overflow-hidden
        ${isSelected ? 'ring-4 ring-blue-500' : 'hover:shadow-lg'}`}
      onClick={onClick}
    >
      <div className="relative w-full h-40">
        <Image
          src={src}
          alt=""
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error("Thumbnail failed to load:", src);
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder-image.jpg"; // 替换为一个占位图像
          }}
        />
      </div>
    </div>
  );
}
