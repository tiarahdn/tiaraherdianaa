export default function MyApp() {
  return (
        <div className="container mx-auto p-2 text-center pt-10">
          <h2 className="text-[#505050] font-bold">RIWAYAT PEKERJAAN</h2>
         <RowRiwayatKerja tahun="2011-2015" instansi="BANK BRI CICALENGKA" bekerja="COSTUMER SERVICE" />
         <RowRiwayatKerja tahun="2016-1017" instansi="CV EXECOM" bekerja="OPERATOR DESIGN" />
         <RowRiwayatKerja tahun="2018-2020" instansi="TELKOM INDONESIA " bekerja="UI UX DESIGN" />
         <RowRiwayatKerja tahun="2021 - SEKARANG" instansi="UNIVERSITAS PADJAJARAN " bekerja="DOSEN" />
        </div>
  );
}
interface RowRiwayatKerjaProps {
  tahun: string;
  instansi: string;
  bekerja: string;
}

function RowRiwayatKerja(props: RowRiwayatKerjaProps) {
  return (
    <div className="border-2 border-[#556B2F] rounded-lg bg-white text-[#505050] p-2 my-5">
      <div className="container mx-auto ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12 md:col-span-4 ">{props.tahun}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.bekerja}</div>
        </div>
      </div>
    </div>
  )
}