let iChar = 0;
let textEl = document.getElementById("bg");
let delay = 8; 
let content = "i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy i burrow into your phosphorus body like an earthworm, my lungs curl up in ecstasy"


function typeChar() 
{
	console.log(content.length);
	if(iChar < content.length) 
	{
		textEl.textContent += content.charAt(iChar);
		iChar++;
		setTimeout(typeChar, delay);
	}
}

