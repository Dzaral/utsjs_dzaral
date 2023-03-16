class Karnivora {
    constructor(nama, kaki, asal, umur) {
        this.nama = nama;
        this.kaki = kaki;
        this.asal = asal;
        this.umur = umur;
    }
    makan () {
   return "hewan " + this.nama + " yang berkaki " + this.kaki + ' sedang makan'
    }
    tidur(tempat){
        return "di " + tempat + "sang " + this.nama + "sedang tidur"
    }
}

var hewanKarnivora = new Karnivora ('harimau', 4, 'taman safari', 6 +' tahun')
console.log(hewanKarnivora.nama);
console.log(hewanKarnivora.kaki);
console.log(hewanKarnivora.asal);
console.log(hewanKarnivora.umur);

console.log(hewanKarnivora.makan());
console.log(hewanKarnivora.tidur("kandang"));


const buton1 = document.querySelector(".buton1")
const button = document.querySelector("button")
const newText = document.createElement("h1")
newText.textContent = "Berhasil"

button.addEventListener("click", function () {
    buton1.append(newText)
})
 button.addEventListener("dblclick",function () {
    buton1 = alert("tombol diklik 2 kali")
 })


const newText1 = document.createElement("h1")
newText1.textContent = "X RPL"
newText1.style.color = "blue"
const mouse = document.querySelector(".mouse")

function mouseIn () {
    mouse.append(newText1)
}

function mouseOut () {
    newText1.style.color = "red"
}

const remove = document.querySelector(".remove")

function hapus() {
    remove.removeChild(remove.firstElementChild)
}
