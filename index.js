const unit = {
    feet: 3.281,
    gallon: 0.264,
    pound: 2.204,
    meter: 0.304,
    liter: 4.546,
    kilogram: 0.453
}

const inputField = document.getElementById("input-field");
const convertBtn = document.getElementById("convert-btn");
const length = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");

convertBtn.addEventListener("click", () => {
    Length()
    Volume()
    Mass()
})

function Length() {
    let imperial = ""
    imperial = inputField.value * unit.feet
    imperial = Number(imperial).toFixed(3)

    let metric = ""
    metric = inputField.value * unit.meter
    metric = Number(metric).toFixed(3)

    length.textContent = `${inputField.value} meters = ${imperial} feet | ${inputField.value} feet = ${metric} meters`
}

function Volume() {
    let imperial = ""
    imperial = inputField.value * unit.gallon
    imperial = Number(imperial).toFixed(3)

    let metric = ""
    metric = inputField.value * unit.liter
    metric = Number(metric).toFixed(3)

    volume.textContent = `${inputField.value} liters = ${imperial} gallons | ${inputField.value} gallons = ${metric} liters`
}

function Mass() {
    let imperial = ""
    imperial = inputField.value * unit.pound
    imperial = Number(imperial).toFixed(3)

    let metric = ""
    metric = inputField.value * unit.kilogram
    metric = Number(metric).toFixed(3)

    mass.textContent = `${inputField.value} kilos = ${imperial} pounds | ${inputField.value} pounds = ${metric} kilos`
}

// DARK MODE SWITCHER

const switcher = document.getElementById("switcher")

switcher.addEventListener("click", () => {
    const styleMode = document.getElementById("css-file")

    if (switcher.innerHTML == '🌙') {
        styleMode.setAttribute('href', 'dark-mode.css')
        switcher.innerHTML = '🔆'
    } else {
        styleMode.setAttribute('href', 'index.css')
        switcher.innerHTML = '🌙'
    }
   
})


