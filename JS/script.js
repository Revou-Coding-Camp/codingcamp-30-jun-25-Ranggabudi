

        const toggleButton = document.getElementById('menu-toggle');
        const navMenu = document.querySelector('.menu');

        toggleButton.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });



  const form = document.getElementById("message-form");
  const output = document.getElementById("output");
   const labelNamaHome = document.getElementById("output");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const tanggalLahir = document.getElementById("tanggal-lahir").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("pesan").value;

    const currentTime = new Date();

    output.innerHTML = `
      <p><strong>Current time</strong> : ${currentTime}</p>
      <p><strong>Nama</strong> : ${nama}</p>
      <p><strong>Tanggal Lahir</strong> : ${tanggalLahir}</p>
      <p><strong>Jenis Kelamin</strong> : ${gender}</p>
      <p><strong>Pesan</strong> : ${pesan}</p>
    `;

    // untuk menampilkan nama di section home
    document.getElementById("welcome").innerText = `Halo, ${nama}! Selamat datang di website saya.`;
    form.reset();
  });
