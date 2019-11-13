const calendarButton = document.querySelector(".button-test");
const calendarContainer = document.querySelector(".container");
const firstLine = document.querySelector(".sentence")

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
		if (today.getDate() > i && today.getMonth() == 11){
			pdf_path = `./${num}.pdf`
			pdf_path = './docs/test.pdf'
			calendarDoor.addEventListener("click", openDoor.bind(null,pdf_path))
		}
	}
}

const createFirstLine = () => {
	today=new Date();
	var cmas=new Date(today.getFullYear(), 11, 24);
	if (today.getMonth()==11 && today.getDate()>24) 
	{
		cmas.setFullYear(cmas.getFullYear()+1); 
	}  
	var one_day=1000*60*60*24;
	n = Math.ceil((cmas.getTime()-today.getTime())/(one_day))
	firstLine.innerHTML = "Noch <div style=\"display: inline\", class=\"number\">" + n + "</div> Tage bis Weihnachten"
}

function save(){
	var object = new ActiveXObject("Scripting.FileSystemObject");
	var file = object.CreateTextFile("C:/Users/IBM_ADMIN/Desktop/Test/Hello.txt", false);
	file.WriteLine('Hello World');
	file.WriteLine('Hope is a thing with feathers, that perches on the soul.'); 
	file.Close();
}

createFirstLine()
createCalendar()
