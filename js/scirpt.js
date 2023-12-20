function replaceName(){
    let name = prompt("masukan nama anda...", "");
    document.getElementById('nama').innerHTML = name;
}
replaceName();


function validateForm(){
    const nama  = document.forms['form']['nama'].value;
    const tanggal = document.forms['form']['tanggal'].value;
    const jk = document.forms['form']['jk'].value;
    const pesan = document.forms['form']['pesan'].value;
    

    if(nama == ''){
        document.getElementById('errorNama').innerHTML = "nama tidak boleh kosong";
    }
    if(tanggal == ''){
        document.getElementById('errorTanggal').innerHTML = "tanggal tidak boleh kosong";
    }if(jk == ''){
        document.getElementById('errorJk').innerHTML = "jenis kelamain tidak boleh kosong";
    }if(pesan == ''){
        document.getElementById('errorPesan').innerHTML = "pesan tidak boleh kosong"; 

        return false;
    }

   setData(nama, tanggal, jk, pesan);
}

function setData(nama, tanggal, jk, pesan){
    document.getElementById('namaData').innerHTML = nama;
    document.getElementById('errorNama').innerHTML = "";

    document.getElementById('tanggalData').innerHTML = tanggal;
    document.getElementById('errorTanggal').innerHTML = "";

    document.getElementById('jkData').innerHTML = jk;
    document.getElementById('errorJk').innerHTML = "";

    document.getElementById('pesanData').innerHTML = pesan;
    document.getElementById('errorPesan').innerHTML = "";
}

