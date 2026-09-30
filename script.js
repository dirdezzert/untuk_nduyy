function submitFeeling() {

    let feeling = document.querySelector(
        'input[name="feeling"]:checked'
    );

    let result = document.getElementById("feelingResult");


    // kalau belum pilih feeling
    if (!feeling) {

        result.innerHTML =
        "hehe pilih salah satu duluu 🥺<br>" +
        "atau kalau belum mau cerita juga gapapaa.";

        return;
    }


    // kalau pilih masih sedih
    if (feeling.value === "sad") {

        result.innerHTML =
        "sini duluu 🫂💗<br><br>" +
        "nggak apa-apa kalau hari ini masih sedih." +
        "<br>" +
        "pelan-pelan aja yaa nduy." +
        "<br><br>" +
        "kalau mau nangis, nangis aja. " +
        "nggak harus selalu kuat.";

    }


    // kalau sudah agak mendingan
    else if (feeling.value === "better") {

        result.innerHTML =
        "yayyy 🥺🌷<br><br>" +
        "seneng dengernya kamu udah agak mendingan." +
        "<br>" +
        "sedikit-sedikit aja yaa." +
        "<br><br>" +
        "hari ini udah cukup baik kalau kamu udah bisa sampai sini 🫂";

    }


    // kalau sudah okay
    else if (feeling.value === "okay") {

        result.innerHTML =
        "GOODDDD 💗<br><br>" +
        "seneng kamu udah okay hari ini." +
        "<br>" +
        "tapi tetep jangan lupa makan, minum, sama istirahat yaa 😭";
    }


    // kalau ada tulisan tambahan
    let message = document.getElementById("feelingText").value;

    if (message.trim() !== "") {

        result.innerHTML +=
        "<br><br>" +
        "makasih udah cerita juga yaa 🥺💗" +
        "<br>" +
        "aku baca kok.";

    }

}
