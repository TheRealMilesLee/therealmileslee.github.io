import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/70 backdrop-blur-md shadow-md flex justify-between items-center px-6 py-4">
      <div className="flex items-center space-x-3">
        <img
          src="/images/avatar.jpg"
          alt="My Logo"
          className="w-10 h-10 rounded-full border border-gray-300 shadow"
        />
        <h1 className="text-2xl font-bold text-white">Hengyi Li</h1>
      </div>
      <ul className="flex space-x-6 text-sm font-medium text-gray-200">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/#projects" className="hover:text-white">Projects</a></li>
        <li><a href="/photography" className="hover:text-white">Photography</a></li>
        <li><a href="/#about" className="hover:text-white">About me</a></li>
        <li><a href="/#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </nav>
  );
}

export default function PhotographyPage() {
  const [images, setImages] = useState<{ imagePath: string, description: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<{ imagePath: string, description: string }>({ imagePath: "", description: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/imageList.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data);
        setSelectedImage(data[0]);  // 默认选中第一张图片
      })
      .catch((err) => console.error("Failed to load image list:", err));
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollSpeed = 1;
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

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24">
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-10 text-center">Photography</h1>

        {selectedImage.imagePath && (
          <section className="flex flex-col items-center p-12">
            <img
              src={selectedImage.imagePath}
              alt="Selected"
              className="rounded-xl shadow-lg max-h-[80vh] object-contain"
            />
            <p className="mt-4 text-gray-400 italic">{selectedImage.description}</p>
          </section>
        )}

        <section className="py-10">
          <div
            ref={scrollRef}
            className="overflow-x-auto whitespace-nowrap px-6 scrollbar-hide"
          >
            <div className="flex space-x-4">
              {images.map((image, i) => (
                <ThumbnailCard
                  key={i}
                  src={image.imagePath}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ThumbnailCard({ src, onClick }: { src: string; onClick: () => void }) {
  return (
    <div
      className="w-64 flex-shrink-0 rounded-2xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <img
        src={src}
        alt=""
        className="w-full h-40 object-cover"
      />
    </div>
  );
}
