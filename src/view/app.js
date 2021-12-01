window.onload = function () {
  let form = document.getElementById("message-form")
  let messageFieldA = document.getElementById("valueA")
  let messageFieldB = document.getElementById("valueB")
  let messagesList = document.getElementById("messages")
  let socketStatus = document.getElementById("status")
  let sumBtn = document.getElementById("sumBtn")
  let subBtn = document.getElementById("subBtn")
  let divBtn = document.getElementById("divBtn")
  let multiBtn = document.getElementById("multiBtn")
  let sumClicked = false
  let subClicked = false
  let divClicked = false
  let multiClicked = false

  let socket = new WebSocket("ws://localhost:9898")

  socket.onerror = function (error) {
    console.log("WebSocket Error: ", error)
  }

  socket.onopen = function (event) {
    socketStatus.innerHTML =
      "Conectado ao servidor: " + event.currentTarget.url
    socketStatus.className = "open"
  }

  socket.onmessage = function (event) {
    let message = event.data
    messagesList.innerHTML +=
      '<li class="received"><span>Recebido:</span>' + message + "</li>"
  }

  socket.onclose = function (event) {
    socketStatus.innerHTML = "Websocket desconectado."
    socketStatus.className = "closed"
  }

  form.onsubmit = function (e) {
    e.preventDefault()

    let message;
    let a = +messageFieldA.value
    let b = +messageFieldB.value

    if (sumClicked)
      message = a + b

    if (subClicked)
      message = a - b

    if (divClicked)
      message = a / b

    if (multiClicked)
      message = a * b

    socket.send(message)

    messagesList.innerHTML +=
      '<li class="sent"><span>Enviado!!</span></li>'

    return false
  }

  sumBtn.onclick = function (e) {
    sumClicked = true
    subClicked = false
    divClicked = false
    multiClicked = false
  }

  subBtn.onclick = function (e) {
    sumClicked = false
    subClicked = true
    divClicked = false
    multiClicked = false
  }

  divBtn.onclick = function (e) {
    sumClicked = false
    subClicked = false
    divClicked = true
    multiClicked = false
  }

  multiBtn.onclick = function (e) {
    sumClicked = false
    subClicked = false
    divClicked = false
    multiClicked = true
  }
}
