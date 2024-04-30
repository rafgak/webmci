const products = [
    { name: 'Pendant Iron Man', image: 'kalung.jpg', price: 1800000, description: 'Pendant terbaru Kolaborasi MCI dengan brand Dunia Marvel Comics, Pendant Iron Man Series. mengusung tema karakter hero favorit dari Marvel Comic dengan design yang iconik yang tebal. dengan motif laba-laba yang kental akan hero Marvel ini membuatnya menjadi salah satu Best Selling pendant dari MCI.' },
    { name: 'Tasbih', image: 'tasbih.jpg', price: 1650000, description: 'New Launching! Millionaire tasbih dari MCI dengan tampilan 2 warna yaitu coklat dan hitam, Millionaire tasbih ini tentunya memiliki manfaat untuk kesehatan. Karena Millionaire tasbih memiliki kandungan batu germanium. Selain itu, Millionaire tasbih juga memiliki desain yang mudah untuk dibawa kemana saja dan kapanpun loh! Jadi tunggu apalagi?' },
    { name: 'Gelang', image: 'gelang.jpg', price: 1650000, description: 'Gelang pendant MCI juga diklaim mampu memperlancar aliran darah, meningkatkan sirkulasi mikro, mengaktifkan molekul air dalam tubuh, serta meningkatkan metabolisme tubuh' },
    { name: 'Mealionaire', image: 'Mealionaire.jpg', price: 250000, description: 'Mealionaire Mix merupakan produk minuman premium dari MCI yang bermanfaat untuk kesehatan tubuh. ' },
    { name: 'Glucola', image: 'sakura.jpg', price: 500000, description: 'Glucola sakura adalah varian minuman terbaru dari glucola sakura. Dilengkapi dengan ekstrak bunga sakura, sehingga bagus untuk meremajakan kulit. Mengandung l-glutathione, collagen, dan ekstrak bunga sakura' },
    { name: 'Magic Stick Fold', image: 'magic.jpg', price: 250000, description: 'Magic Stick Fold merupakan suatu produk alat kecantikan yang mengandung batu germanium, bermanfaat untuk mengencangkan kulit dengan cara menghilangkan kerutan dan lipatan pada wajah. Selain untuk mengencangkan kulit magic stick juga bermanfaat untuk melakukan terapi pijat, agar mengurangi ketegangan otot dan kelelahan tubuh.' },
    { name: 'Myviber Mango (2 Box)', image: '2L.jpg', price: 650000, description: 'Dapat Menurunkan berat badan' },
    { name: 'Nano V4 Red Carbon + 2 Biomini', image: 'nano.jpg', price: 4400000, description: 'Nano Dan Biomini' },
    { name: 'Kaos Kaki Pendek', image: 'premium.jpg', price: 650000, description: '650.000.00 isi 3 ' },
    { name: 'Nuvit', image: 'nuvit.jpg', price: 1650000, description: 'Salah satu produk unggulan dari MCI dengan menggunakan bahan alami yang aman. Nuvit juga telah mendapatkan Noble Prize. Nu vit hadir sebagai supplement harian anda untuk melengkapi asupan gizi anda dan dipercaya dapat membantu menjaga imunitas tubuh di masa pandemi ini. Tetap konsultasikan ke dokter pribadi anda, apabila ada masalah tertentu' },
    { name: 'HDL', image: 'HDL.jpg', price: 550000, description: 'HDL SOP merupakan minuman kesehatan dari MCI dengan bahan-bahan pilihan terbaik.' },
    { name: 'Excoden', image: 'exo.jpg', price: 850000, description: 'EXODEN adalah produk perawatan gigi profesional yang terbuat dari kombinasi bentonite clay dan 96% bahan alami dan bermanfaat untuk membersihkan dan melindungi kesehatan mulut dan gusi. EXODEN memiliki efek far-infrared radiation, mampu menghilangkan zat asing, mengembalikan gigi ke keadaan semula, dan mengeliminasi bau mulut.' },
    { name: 'Kaos Kaki Panjang', image: 'kaos.jpg', price: 1000000, description: 'Premium Long Socks hadir dengan ukuran yang lebih panjang, menambah kenyamanan pada saat digunakan. bergaya dan cocok di gunakan dengan outfit apa saja' },
    { name: 'Myviber', image: 'my.jpg', price: 350000, description: 'Myviber minuman serbuk rasa kiwi yang berfungsi untuk detoks dan meningkatkan fungsi pencernaan usus Anda. Jadi, Anda bisa mengontrol berat badan tanpa mengkhawatirkan kesehatan Anda. Lebih Ramping, Lebih Sehat, MyViber!' },
    { name: 'Pendant Captain America', image: 'capt1.jpg', price: 1800000, description: 'Pendant terbaru Kolaborasi MCI dengan brand Dunia Marvel Comics, Pendant Captain America Series. mengusung tema karakter hero favorit dari Marvel Comic dengan design yang iconik yang tebal. dengan motif Captain America Shield yang kental akan hero Marvel ini membuatnya menjadi salah satu Best Selling pendant dari MCI.' },
    { name: 'ESENSE NEW SIZE 20ML', image: 'ess.jpg', price: 500000, description: 'New Product!! Esense dari MCI adalah essential oil yang dihasilkan dari berbagai bagian dari tumbuhan seperti batang, daun, bunga, buah, biji, kulit, dan sebagainya. Esense dari MCI dengan kualitas terbaik,yang dapat digunakan sebagai parfum, kosmetik, antibiotik, antioksidan, imunostimulan, mengurangi stress, dan terapi untuk berbagai penyakit ringan.' },
];

let cartItems = []; // Menyimpan produk yang ditambahkan ke keranjang

function renderProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    // Render existing products
    products.forEach(product => {
        renderProduct(product, productContainer);
    });
}

function renderProduct(product, container) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('details');

    const name = document.createElement('h2');
    name.textContent = product.name;
    details.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `Rp ${product.price.toLocaleString()}`; // Menggunakan toLocaleString() untuk format harga
    details.appendChild(price);

    const description = document.createElement('p');
    description.textContent = product.description;
    details.appendChild(description);

    const addButton = document.createElement('button');
    addButton.textContent = 'Tambah ke Keranjang';
    addButton.onclick = function() {
        addToCart(product);
    };
    details.appendChild(addButton);

    card.appendChild(details);
    container.appendChild(card);
}

function addToCart(product) {
    cartItems.push(product);
    renderCart();
}

function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = '';

    let totalPrice = 0;
    cartItems.forEach(item => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        const priceCell = document.createElement('td');
        priceCell.textContent = `Rp ${item.price.toLocaleString()}`;
        const minusButtonCell = document.createElement('td');
        const minusButton = document.createElement('button');
        minusButton.textContent = '-';
        minusButton.onclick = function() {
            removeFromCart(item);
        };
        minusButtonCell.appendChild(minusButton);
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        row.appendChild(minusButtonCell);
        cartItemsElement.appendChild(row);
        totalPrice += item.price;
    });

    document.getElementById('total-price').textContent = `Rp ${totalPrice.toLocaleString()}`; // Update total harga
}

function removeFromCart(product) {
    const index = cartItems.findIndex(item => item.name === product.name);
    if (index !== -1) {
        cartItems.splice(index, 1);
        renderCart();
    }
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.classList.toggle('show');
}

function checkoutViaWhatsApp() {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    const message = encodeURIComponent(`Halo, saya ingin memesan barang dengan total harga Rp ${totalPrice.toLocaleString()}.\n\nDaftar Barang:\n${cartItems.map(item => `- ${item.name} - Rp ${item.price.toLocaleString()}`).join('\n')}\n\nSilakan konfirmasi pesanan ini. Terima kasih!`);
    const whatsappLink = `https://wa.me/6289504486280?text=${message}`;
    window.open(whatsappLink, '_blank');
}

// Render produk saat halaman dimuat
renderProducts();

// JavaScript untuk animasi perubahan waktu
$("#switch").click(function () {
    if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
    } else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");
    }
});

// JavaScript lainnya disini
