const MyInfos = {
  ttl: "Bandung, 24 September 2003",
  gender: "Perempuan",
  tinggiBadan: "158 cm",
  beratBadan: "48 kg",
  statusPernikahan: "Belum Menikah",
  whatsapp: "083104028554",
  email: "tiaraherdiana129@.com"
};

export default function MyApp() {
  return (
    <div className="container mx-auto p-2 text-center pt-10">
      <h2 className="text-[#505050] font-bold">INFORMASI PRIBADI</h2>
      <div className="border-2 border-[#556B2F] rounded-lg bg-white text-[#505050] p-4 my-5">
        <div className="container mx-auto">
          <div className="flex flex-col space-y-2">
            <div className="text-center"><strong>TTL:</strong> {MyInfos.ttl}</div>
            <div className="text-center"><strong>Gender:</strong> {MyInfos.gender}</div>
            <div className="text-center"><strong>Tinggi Badan:</strong> {MyInfos.tinggiBadan}</div>
            <div className="text-center"><strong>Berat Badan:</strong> {MyInfos.beratBadan}</div>
            <div className="text-center"><strong>Status Pernikahan:</strong> {MyInfos.statusPernikahan}</div>
            <div className="text-center"><strong>Whatsapp:</strong> {MyInfos.whatsapp}</div>
            <div className="text-center"><strong>Email:</strong> {MyInfos.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
