let npm = document.getElementById("npm");
let nama = document.getElementById("nama");

function simpan() {
    console.log(npm.value)
    console.log(nama.value)

    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    if (localStorage.getItem("mahasiswa") == null) {
        // simpan array kosong []
        localStorage.setItem("mahasiswa", "[]")
    }


    // panggil local stogare (konversi string => object)
    let data = JSON.parse(localStorage.getItem("mahasiswa"))
    console.log(data)

    // simpan value npm dan nama ke dalam object data
    data.push({
        npm: npm.value,
        nama: nama.value
    })
    console.log(data)

    //simpan data terbaru ke dalam localstorage
    //konversi dari object menjadi string
    localStorage.setItem("mahasiswa", JSON.stringify(data))

    //pangill tampil
    tampil()
}
function tampil(){
    //panggil dulu local storage
    let hasil = JSON.parse(localStorage.getItem("mahasiswa"))

    //clear element ul id=list=mhs
    document.getElementById("list-mhs").innerHTML=""
    //lakukan perulangan (forEach)
    hasil.forEach(Element => { 
        //console.log(Element)
        document.getElementById("list-mhs").
        innerHTML += `<li>${Element.npm}${Element.nama}</li>`
    });
}

//jalankan function tampil()
tampil()