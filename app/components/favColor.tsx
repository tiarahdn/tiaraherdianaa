import { useState } from "react";

type FavColorProps = {
  onColorChange: (color: string) => void;
};

export default function FavColor({ onColorChange }: FavColorProps) {
  const [warna, setWarna] = useState("-");

  const handleClick = (newColor: string, bgColor: string) => {
    setWarna(newColor);
    onColorChange(bgColor);
  };

  return (
    <div className="container mx-auto p-6 text-center text-gray-800 bg-white shadow-lg rounded-lg max-w-md mt-10">
      <h1 className="text-2xl font-bold mb-4">
        Warna Favorit Saya adalah{" "}
        <span className="text-[#A3423C] capitalize">{warna}</span>
      </h1>
      <hr className="my-8 border-[#A3423C]" />
      <p className="text-lg font-medium text-[#333333] mb-4">Ubah tema ke warna:</p>

      <div className="flex justify-center space-x-4">
        <button
          className="bg-[#B8C5A2] hover:bg-[#B8C5A2] text-black font-bold py-2 px-6 rounded-full transition transform hover:scale-105 shadow-md"
          onClick={() => handleClick("Sage Green", "bg-[#B8C5A2]")}
        >
          Sage Green
        </button>

        <button
          className="bg-black hover:bg-black text-white font-bold py-2 px-6 rounded-full transition transform hover:scale-105 shadow-md"
          onClick={() => handleClick("Gelap", "bg-black")}
        >
          Gelap
        </button>

        <button
          className="bg-[#FFF7F0] hover:bg-[#F2D7D5] text-[#333333] font-bold py-2 px-6 rounded-full border border-[#A3423C] transition transform hover:scale-105 shadow-md"
          onClick={() => handleClick("Terang", "bg-[#FFF7F0]")}
        >
          Terang
        </button>
      </div>
    </div>
  );
}
