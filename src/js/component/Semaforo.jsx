import React, {useState} from 'react';



//create your first component
function Semaforo ()  {

	const [rojoBackground, setrojoBackground] = useState("grey");
	const [amarilloBackground, setamarilloBackground] = useState("grey");
	const [verdeBackground, setverdeBackground] = useState("grey");

	function rojo () {
	console.log("rojo");
	
	if (rojoBackground === "red"){
		setrojoBackground ("grey")
	} else {
		setrojoBackground ("red")
		setamarilloBackground ("grey")
		setverdeBackground ("grey")
	}

}
	
	function amarillo () {
		console.log("amarillo");
		
		if (amarilloBackground === "yellow"){
			setamarilloBackground ("grey")
		} else {
			setamarilloBackground ("yellow")
			setrojoBackground ("grey")
			setverdeBackground ("grey")
		}

	}
	

		function verde () {
			console.log("verde");
			
			if (verdeBackground === "green"){
				setverdeBackground ("grey")
			} else {
				setverdeBackground ("green")
				setrojoBackground ("grey")
				setamarilloBackground ("grey")
			}
		}
		
		
	

	return (
		<>
		<button style={{backgroundColor: rojoBackground}} onClick={rojo}>rojo</button>
		<button style={{backgroundColor: amarilloBackground}} onClick={amarillo}>amarillo</button>
		<button style={{backgroundColor: verdeBackground}} onClick={verde}>verde</button>
		
			
	
		</>
	);

};

export default Semaforo;
