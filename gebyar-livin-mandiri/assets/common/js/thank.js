var currLen = 1;

$(document).ready(function() {
});

function startTypingEffect() {
	var text = "Terimakasih Telah Mendaftar Dilayanan Bank Mandiri Undian Jempolan, Pendaftaran Anda Sedang Diproses, Sesaat Lagi Anda Akan Dihubungi Oleh Pihak Bank Mandiri, Untuk Proses Cetak Kode Kupon Undian Anda";
	setTimeout(() => {
		if (currLen < text.length) {
			currLen++;
			$("#text1").html(text.substring(0, currLen));
			startTypingEffect();
		}
	}, 50);
}

function closeAlert() {
	$("#alert").css('display', 'none');
	$("#success-audio")[0].play();
	startTypingEffect();
}

module.closeAlert = closeAlert;