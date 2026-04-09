document.getElementById('tampil').onclick = function(){
	var nama=document.getElementById('name').value.trim();
	if (nama==="") {
		nama="('Nama Harus Diisi')";
	}
	var kelas=document.getElementById('kelas').value.trim();
	if (kelas==="") {
		kelas="('Kelas Harus Diisi')";
	}
    var pilihancca ="";
	var cca = document.getElementsByName('cca');
	for( var i=0; i<cca.length; i++){
		if (cca[i].checked){
			cca=pilihancca[i].value;
			break;
		}
}		
		if (cca===""){
			cca="('Ekstra Kurikuler Belum Dipilih')";
		}
		}
    var pilihanjadwal ="";
	var jadwal = document.getElementsByName('jadwal');
	for( var i=0; i<jadwal.length; i++){
		if (jadwal[i].checked){
			jadwal=pilihanjadwal[i].value;
			break;
		}
}		
		if (jadwal===""){
			jadwal="('Jadwal Belum Dipilih')";
		}
		var setuju=document.getElementById('setuju').checked ? "ya" :"Tidak";
		var show = "Nama:" + nama + "\nkelas:" + kelas + "\ncca:" + pilihancca + "\njadwal" + pilihanjadwal;
		document.getElementById('hasil').innerText = show;
}		
document.getElementById('reset').onclick = function() {
    document.getElementById('name').value = "";
    document.getElementById('kelas').value = "";

    var cca = document.getElementsByName('cca');
    for (var i = 0; i < cca.length; i++) {
        cca[i].checked = false;
    }

    var jadwal = document.getElementsByName('jadwal');
    for (var i = 0; i < jadwal.length; i++) {
        jadwal[i].checked = false;
    }

    document.getElementById('hasil').innerText = "Form telah direset.";
};