function onload () {
	alert("Pasajero, se le recuerda que para abordar el avión debe tener en su mano su pasaporte y su boleto de embarque. Manténgase atento a los avisos mediante esta plataforma.")
}

function getToday () {
	let today = new Date()
	const dd = String(today.getDate()).padStart(2, '0')
	const mm = String(today.getMonth() + 1).padStart(2, '0')
	const yyyy = today.getFullYear()

	return `${mm}-${dd}-${yyyy}`
}

window.addEventListener("load", () => {
	let time = document.getElementById("insertTime")
	let date = document.getElementById("insertDate")
	let flightNumber = document.getElementById("flightNumber")
	let terminalNumber = document.getElementById("terminalNumber")

	let newTime = new Date(Date.now() + 0 * 60 * 60 * 1000).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' })
	let newDate = getToday()
	let newFlightNumber = Math.floor(Math.random() * (10000 - 1) + 1)
	let newTerminalNumber = Math.floor(Math.random() * (30 - 1) + 1)


	time.innerHTML = newTime.split(' ')[0]
	date.innerHTML = newDate
	flightNumber.innerHTML = newFlightNumber
	terminalNumber.innerHTML = newTerminalNumber

	onload()
})