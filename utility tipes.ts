interface Siswa {
  nama: string;
  umur: number;
  alamat: string;
}
type SiswaOpsional = Partial<Siswa>; // semua jadi boleh kosong
