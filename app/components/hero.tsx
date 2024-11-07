import foto from "../tiara.jpeg";

export default function Hero() {
    return(
        <div className="container mx-auto p-2 text-center">
      <h1 className="text-[#505050] font-bold"> CV ONLINE</h1>
      <h1 className="text-[#505050] text-3xl">Tiara Herdiana</h1>
      <Profile/>
      <p className="text-[#505050]">
      Tiara Herdiana Adalah seorang mahasiswa dari fakultas komputer jurusan sistem informasi semester 5. saya lahir di bandung pada tanggal 24 september 2003. sebelum masuk kuliah pada tahun 2022 saya gapyear selama satu tahun. saya memiliki hobi desain, menjahit, dan bikin program yang simple.
      </p>
    </div>
    )
}

function Profile() {
    return <img src={foto.src} alt="Tiara Herdiana Profile" className="fotoku" />;
  }