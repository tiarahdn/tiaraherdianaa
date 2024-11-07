export default function MyApp() {
  return (
<div className="container mx-auto p-2 text-center pt-15">
          <h2 className="text-[#505050] font-bold">RIWAYAT PENDIDIKAN </h2>
         <RowRiwayat jenjang="SD" sekolah="SDN Narawita 02" tahun="2009-2015" />
         <RowRiwayat jenjang="SMP" sekolah="SMPN 02 Cicalengka" tahun="2015-2018" />
         <RowRiwayat jenjang="SMK" sekolah="SMK Ma'arif Terpadu Cicalengka" tahun="2018-2021" />
         <RowRiwayat jenjang="S1" sekolah="Universitas Ma'soem" tahun="2022 - 2026" />
        </div>
);
}
interface RowRiwayatProps {
  jenjang: string;
  sekolah: string;
  tahun: string;
}
function RowRiwayat(props: RowRiwayatProps) {
  return (
    <div className="border-2 border-[#556B2F] rounded-lg bg-white text-[#505050] p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 ">{props.jenjang}</div>
          <div className="col-span-12 md:col-span-4">{props.sekolah}</div>
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          
        </div>
      </div>
    </div>
  )
}
