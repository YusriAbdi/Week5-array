const Mahasiswa = [
 { nama: "Abdi", nim: "F1D02310098", umur: 20, hobi: "Rebahan" },
 { nama: "yusri", nim: "F1D02310098", umur: 21, hobi: "nonton" },
 { nama: "Izzat", nim: "F1D02310114", umur: 21, hobi: "menyanyi" },
 { nama: "nufa", nim: "F1D02310052", umur: 21, hobi: "Menulis" },
 { nama: "fadila", nim: "F1D02310048", umur: 21, hobi: "Membaca" },
 { nama: "Wahyu", nim: "F1D02310123", umur: 20, hobi: "Belajar" },
 { nama: "Fia", nim: "F1D02310042", umur: 21, hobi: "Begadang" },
 { nama: "Uci", nim: "F1D02310138", umur: 21, hobi: "Berlari" },
 { nama: "Khair", nim: "F1D02310001", umur: 21, hobi: "Mandi" },
 { nama: "Ganisa", nim: "F1D02310146", umur: 21, hobi: "Traveling" }
];
console.log("Semua Data:");
console.table(Mahasiswa);
console.log("\n");

const NamaUpperCase = Mahasiswa.map(m =>  m.nama.toUpperCase());
console.log("Hasil Map UpperCase Semua Huruf:");
console.table(NamaUpperCase);
console.log("\n");

const NamaLebih5 = Mahasiswa.filter(m =>  m.nama.length > 5);
console.log("Hasil Nama Lebih Dari 5 Huruf:");
console.table(NamaLebih5);
console.log("\n");

const NamaJumlahNama = Mahasiswa.reduce((jumlah, m) => jumlah + m.nama.length, 0);
console.log("Hasil Total Jumlah Nama:", NamaJumlahNama);
console.log("\n");

const HurufDepanSama = Mahasiswa.find(m =>  m.nama[0] == "A");
console.log("Hasil Nama Sama Dengan Huruf Depan A:");
console.table([HurufDepanSama]);
console.log("\n");

const NamaPanjang10 = Mahasiswa.some(m =>  m.nama.length > 10);
console.log("Apakah Ada Nama Lebih Dari 10 Huruf?:");
console.log(NamaPanjang10);
console.log("\n");

const NamaAwal3 = Mahasiswa.every(m =>  m.nama > 3);
console.log("Apakah Semua Nama Lebih Dari 3 Huruf?:");
console.log(NamaPanjang10);
console.log("\n");