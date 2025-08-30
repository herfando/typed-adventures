function cetak(id: string | number) {
  if (typeof id === "string") {
    console.log("Huruf:", id);
  } else {
    console.log("Angka:", id);
  }
}
