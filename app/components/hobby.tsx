import React from 'react';
import hobby1 from "./assets/1pic.jpg";
import hobby2 from "./assets/2pic.jpg";
import hobby3 from "./assets/3pic.jpg";
import hobby4 from "./assets/4pic.jpg";

const Hobbies = [
  { id: 1, name: "Design", image: hobby1 },
  { id: 2, name: "Menjahit", image: hobby2 },
  { id: 3, name: "Makeup", image: hobby3 },
  { id: 4, name: "Traveling", image: hobby4 },
];

export default function MyGallery() {
  return (
    <section className="container mx-auto p-4 text-center">
      <h2 className="text-[#505050] font-bold">MY GALLERY</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-5">
        {Hobbies.map((hobby) => (
          <div key={hobby.id} className="border-2 border-[#556B2F] rounded-lg bg-white text-[#505050] p-4">
            <img src={hobby.image.src} alt={hobby.name} className="w-full h-auto rounded-md" />
            <div className="mt-2">{hobby.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
