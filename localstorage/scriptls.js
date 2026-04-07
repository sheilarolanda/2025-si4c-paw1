let npm = document.getElementById("npm");
let nama = document.getElementById("nama");
let imageurl = document.getElementById("imageurl");

function simpan() {
    console.log(npm.value);
    console.log(nama.value);
    console.log(imageurl.value);

    // localStorage.setItem("npm", npm.value)
    // localStorage.setItem("nama", nama.value)

    // cek apakah local storage belum ada isi/value
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
        nama: nama.value,
        imageurl: imageurl.value
    });
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
    hasil.forEach(element => { 
        //console.log(Element)
        let imgTag = element.imageurl ? `<img src="${element.imageurl}" alt="Gambar Mahasiswa" 
        style="width:50px; height:auto;" onerror="this.style.display='none';">` : '';  
        document.getElementById("list-mhs").
        innerHTML += `<div class="col-lg-4 col-md-6"><h4 class="text-primary">${element.nama}</h4> <h6 class="text-danger">${element.npm}</h6></div>
         <img src="${element.imageurl}" alt="test">`
    });
}

//jalankan function tampil()
tampil()