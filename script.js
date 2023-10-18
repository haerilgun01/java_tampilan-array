// tugas pertemuan 7 js

const muhajirin = {
  nama: "muhajirin",
  status: "swasta",
  jumlah_siswa: "200",
  kota: "praya",
};

const hamidi = {
  nama: "hamidi",
  status: "negeri",
  jumlah_siswa: "238",
  kota: "praya",
};

const nurulhidayah = {
  nama: "jnurulhidayah",
  status: "swasta",
  jumlah_siswa: "350",
  kota: "jonggat",
};

const maarif = {
  nama: "maarif",
  status: "swasta",
  jimlah_siswa: "400",
  kota: "pujut",
};

const pancor = {
  nama: "pancor",
  status: "negeri",
  jumlah_siswa: "310",
  kota: "batukeliang",
};

const bio_sekolah = [muhajirin, hamidi, nurulhidayah, maarif, pancor];

for (bio of bio_sekolah) {
  console.log(bio.nama);
}

for (bio in muhajirin) {
  console.log(bio + "=" + muhajirin[bio]);
}

for (bio in hamidi) {
  console.log(bio + "=" + hamidi[bio]);
}

for (bio in nurulhidayah) {
  console.log(bio + "=" + nurulhidayah[bio]);
}

for (bio in maarif) {
  console.log(bio + "=" + maarif[bio]);
}

for (bio in pancor) {
  console.log(bio + "=" + pancor[bio]);
}
