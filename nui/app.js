$(document).ready(function () {
	window.addEventListener("message", function (event) {
		if (event.data.hud == true) {
			$("#hudDisplay").css("display", "block");
		}

		if (event.data.hud == false) {
			$("#hudDisplay").css("display", "none");
		}

		if (event.data.movie == true) {
			$("#movieTop").css("display", "block");
			$("#movieBottom").css("display", "block");
		}

		if (event.data.movie == false) {
			$("#movieTop").css("display", "none");
			$("#movieBottom").css("display", "none");
		}

		$(".infosBack").html(event.data.day + "</b>, <b>" + event.data.month + "</b>  :  " + event.data.street);

		if (event.data.talking == true) {
			$(".fa-microphone").css("filter", "drop-shadow(0.3px 0.3px 4px rgba(255, 255, 255, 0.8))");
		} else {
			$(".fa-microphone").css("color", "rgba(255,255,255,0.9)");
			$(".fa-microphone").css("filter", "drop-shadow(0px 0px 0px rgba(255, 255, 255, 0.4))");

		}

		if (event.data.voice == 1){
			$(".micBack").css("border","0.5px solid  rgb(19, 241, 208)");
			$(".micBack").css("filter","drop-shadow(0.5px 0.5px 3px #13f1d0)");
		}

		if (event.data.voice == 2){
			$(".micBack").css("border","0.5px solid  rgb(238, 216, 14)");
			$(".micBack").css("filter","drop-shadow(0.5px 0.5px 3px rgba(238, 216, 14, 1)");
		}

		if (event.data.voice == 3){
			$(".micBack").css("border","0.5px solid  rgb(238, 12, 12)");
			$(".micBack").css("filter","drop-shadow(0.5px 0.5px 3px #ee0303)");
		}

		if (event.data.health <= 1) {
			$(".healthDisplay").css("width", "0");
		} else {
			$(".healthDisplay").css("width", event.data.health + "%");
		}


		$(".armourBack").css("display", "block");
		$(".armourDisplay").css("width", event.data.armour + "%");

		$(".thirstDisplay").css("width",100-event.data.thirst + "%");
		$(".hungerDisplay").css("width",100-event.data.hunger + "%");
		$(".staminaDisplay").css("width",100-event.data.stamina +"%");


		$(".hudText").html(event.data.hour + "<br>" + event.data.minute);

		if (event.data.car == true) {
			var mph = event.data.seatbelt == true ? "<s>KMH</s>" : "<b>KMH</b>"
			$("#fuelBack").css("display", "block");
			$("#carDisplay").css("display","block");
			$("#carDisplay").html( mph + " " + event.data.speed);
			$(".fuelDisplay").css("width",event.data.fuel + "%");
		} else {
			$("#carDisplay").css("display", "none");
			$("#fuelBack").css("display", "none");
		}
	})
});