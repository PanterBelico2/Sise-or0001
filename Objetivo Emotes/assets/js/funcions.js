const form = document.querySelector('form');
const userInput = document.querySelector('#user-input');
const btnSend = document.querySelector('#btn-send');
const imgs = document.querySelectorAll('.list-images img');
const imgs2 = document.querySelectorAll('.list-images2 img');
const alertSuccess = document.querySelector('.alert-success');
const time = document.querySelector('#time');

setTimeout(function () {
    location.reaload();
}, 2 * 60 * 100000);


// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// });

document.addEventListener('keydown', function (e) {
    if (e.key === 'F12') {
        e.preventDefault();
    }
});

document.addEventListener('keydown', function (e) {
    if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
    }
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
})

userInput.addEventListener('input', (e) => {
    if (e.target.value.length > 5) {
        btnSend.classList.remove('disabled');
    } else {
        btnSend.classList.add('disabled');
    }
})

imgs.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('selected');
    })
})

imgs2.forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('selected');
    })
})

btnSend.addEventListener('click', (e) => {
    let userInputText = document.getElementById("user-input").value; // Obtener el texto ingresado por el usuario
    userInput.value = "";
    btnSend.classList.add('disabled');
    removeSelected();

    let hours = Math.floor(Math.random() * 3) + 1;
   
    swal({
        title: "Conectando ID Jugador.",
        text: ` ID: ${userInputText}.`,
        icon: "assets/imgs/skin/reload.gif",
        buttons: false,
        closeOnClickOutside: false,
        timer: 4000,
    }).then(() => {
        swal("Enviado con exito!", `Espera ${hours} Hora para recibirlo ID:${userInputText}!`, "success");
        if (alertSuccess.classList.contains('d-none')) {
            alertSuccess.classList.remove('d-none')
            alertSuccess.classList.add('d-flex')
        }
    });
})

function removeSelected() {
    imgs.forEach(img => {
        img.classList.remove('selected');
    })
}

fetch('http://ip-api.com/json/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        userIP(data.query)
    })

function userIP(ip) {
    const userIP = document.querySelector("#userIP");
    userIP.innerHTML = ip
}

function adblock() {
    const adblock = document.querySelector('.adblock')
    adblock.classList.toggle('d-none')
}
