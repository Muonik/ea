let iChar = 0;
let textEl = document.getElementById("typingg");
let delay = 8; 
let content = "it welcomes me with open arms, enveloping me in a white flame. all of it is transmitted to me through bone conduction, through cellular telepathy, through viral infection, through parasitic possession, through screams, through whispers."

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

