const makananData = [
    {
        id: 1,
        nama: 'Smoothies Mangga',
        deskripsi: 'Minuman Highclass',
        harga: '10.000',
        gambar: 'gambar/minuman1.jpg',
    },
    
    {
        id: 2,
        nama: 'Smoothies Alpukad',
        deskripsi: 'Minuman Highclass',
        harga: '10.000',
        gambar: 'gambar/minuman2.jpg',
    },

    {
        id: 3,
        nama: 'Smoothies Jeruk',
        deskripsi: 'Minuman Highclass',
        harga: '10.000',
        gambar: 'gambar/minuman3.jpg',
    },
    
    // ... item lainnya
];

const minumanData = [
    {
        id: 1,
        nama: 'Smoothies Mangga',
        deskripsi: 'Minuman Highclass',
        harga: '10.000',
        gambar: 'gambar/minuman1.jpg',
    },
    
    {
        id: 2,
        nama: 'Smoothies Alpukad',
        deskripsi: 'Minuman Highclass',
        harga: '10.000',
        gambar: 'gambar/minuman2.jpg',
    },

    {
        id: 3,
        nama: 'Smoothies Jeruk',
        deskripsi: 'Minuman Highclass',
        harga: '10.000',
        gambar: 'gambar/minuman3.jpg',
    },

    // ... item lainnya
];

function tampilkanInformasi(data) {
    const mainElement = document.querySelector('main');
    
    mainElement.innerHTML = ''; // Bersihkan konten sebelum menambahkan yang baru

    data.forEach(item => {
        const informasiElement = document.createElement('div');
        informasiElement.classList.add('informasiElement'); // Tambahkan kelas informasiElement
        informasiElement.innerHTML = `
            <h2>${item.nama}</h2>
            <img src="${item.gambar}" alt="${item.nama}">
            <p>${item.deskripsi}</p>
            <p>Harga: Rp ${item.harga}</p>
            <button class="whatsapp-button" onclick="pesan('${item.nama}', '${item.deskripsi}', ${item.harga}, 'Owner')">Order Via Owner</button>
            <button class="whatsapp-button" onclick="pesan('${item.nama}', '${item.deskripsi}', ${item.harga}, 'Delivery')">Order Via Delivery</button>
        `;
        mainElement.appendChild(informasiElement);
    });
}


const tombolMakanan = document.getElementById('makanan');
const tombolMinuman = document.getElementById('minuman');

tombolMakanan.addEventListener('click', () => tampilkanInformasi(makananData));
tombolMinuman.addEventListener('click', () => tampilkanInformasi(minumanData));

function pesan(namaItem, deskripsi, harga) {
    const nomorWhatsApp = '+6281396974488'; 
    const nomordelivery = '+6281396974488';
    // Ganti dengan nomor WhatsApp yang diinginkan
    const pesan = `Saya ingin memesan ${namaItem} dengan rincian:\nDeskripsi: ${deskripsi}\nHarga: Rp ${harga}.`;
    
    const pesanan = `Saya ingin memesan ${namaItem} dengan rincian:\nDeskripsi: ${deskripsi}\nHarga: Rp ${harga}.`;

    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(pesan)}`;
    window.open(urlWhatsApp, '_blank');
    
    const urlWa = `https://api.whatsapp.com/send?phone=${nomordelivery}&text=${encodeURIComponent(pesanan)}`;
    window.open(urlWa, '_blank');
}

// ... (untuk slider) ...
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function tampilkanSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function gantiSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        tampilkanSlide(currentSlide);
    }

    setInterval(gantiSlide, 1000); // Ganti slide setiap 3 detik
});
// ... (selesai) ...

