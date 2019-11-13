const calendarButton = document.querySelector(".button-test");
const calendarContainer = document.querySelector(".container");

const calendarDays = 24;

const openDoor = (pdf, event) => {
	event.target.style.opacity = "0"
	window.open(pdf, '_blank', 'fullscreen=yes'); 
}

const createCalendar = () => {
	for(let i = 0; i < calendarDays; i++){
		const calendarDoor = document.createElement("div");
		const calendarDoorDoc = document.createElement("a");
		
		
		num = i+1
		let path = `./doors/door${num}.png`
		
		calendarDoor.classList.add("image")
		calendarDoor.style.gridArea = "door" + (i + 1);
		calendarDoor.style.backgroundImage = `url(${path})`
		calendarContainer.appendChild(calendarDoor);
		
		var today = new Date();
		if (today.getDate() > i ){
			pdf_path = `./${num}.pdf`
			pdf_path = './docs/test.pdf'
			calendarDoor.addEventListener("click", openDoor.bind(null,pdf_path))
		}
	}
}

function save(){
	var object = new ActiveXObject("Scripting.FileSystemObject");
	var file = object.CreateTextFile("C:\\Hello.txt", false);
	file.WriteLine('Hello World');
	file.WriteLine('Hope is a thing with feathers, that perches on the soul.'); 
	file.Close();
}


createCalendar()
save()
