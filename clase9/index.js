const form = document.querySelector('form');
const nombre = document.querySelector('#nombre');
const submit = document.querySelector(".submit");
const div = document.querySelector(".div");

const apellido = document.querySelector('#apellido')

const mail = document.querySelector('#email');



const labelName = document.querySelector(".labelName")
submit.setAttribute("disabled", true);
/**
 * Validar que el nombre ingresado posea un mínimo de 2 caracteres*
 * Validar que el nombre no tenga números*
 * Validar que no tenga simbolos @ # /
 * Validar que el número máximo 15
 */

const arrayOfSymbols = ["@", "#", "/", "!"]

const showError = (elemento) => {
    submit.setAttribute("disabled", true);
    elemento.style.border = "1px solid red"
}

const hideError = (elemento) => {
    submit.removeAttribute("disabled")
    elemento.style.border = "1px solid green"
}

const doesStringHasNumber = (string) => {
    let myNewArray = string.split("")
    let myNumberFlag = false
    myNewArray.forEach(element => {
        if (!isNaN(element)) {
            myNumberFlag = true
        }
    })
    return myNumberFlag
}

const stringWithOddSymbols = (string) => {
    let myOddFlag = false
    const newString = string.split("")
    newString.forEach(element => {
        arrayOfSymbols.forEach(anotherElement => {
            if (element === anotherElement) return myOddFlag = true
        })
    })
    return myOddFlag
}

nombre.addEventListener("input", (event) => {
    const value = event.target.value

    if (value.length >= 2 && !doesStringHasNumber(value) && !stringWithOddSymbols(value) && value.length <= 15) {
        hideError(nombre)
        labelName.innerHTML = ""
    } else {
        labelName.innerHTML = '<i style="color:red, textAlign:left"></i>'
        showError(nombre)
        if (value.length < 2) {
            labelName.innerHTML = '<i style="color:red, textAlign:left">Ingresa más de 2 caracteres</i>'
        } else if (doesStringHasNumber(value)) {
            labelName.innerHTML = '<i style="color:red, textAlign:left">Elimina los numeros</i>'

        } else if (stringWithOddSymbols(value)) {
            labelName.innerHTML = '<i style="color:red, textAlign:left">Elimina los caracteres especiales</i>'
        } else if (value.length <= 15) {
            labelName.innerHTML = '<i style="color:red, textAlign:left">Por favor escribe menos de 15 caracteres</i>'
        }
    }
})

form.addEventListener("submit", (event, values) => {
    event.preventDefault()
    console.log(nombre.value).trim()
})


div.addEventListener("click", () => {
    console.log("value del campo nombre >> ", nombre.value)
})

/**
 * Validar que el apellido ingresado posea un mínimo de 2 caracteres*
 * Validar que el apellido no tenga números*
 * Validar que el apellido no tenga simbolos @ # /
 */

 const labelApellido = document.querySelector(".labelApellido")
 submit.setAttribute("disabled", true);




 apellido.addEventListener("input", (event) => {
    const value = event.target.value

    if (value.length >= 2 && !doesStringHasNumber(value) && !stringWithOddSymbols(value) && value.length <= 15) {
        hideError(apellido)
        labelApellido.innerHTML = ""
    } else {
        labelApellido.innerHTML = '<i style="color:red, textAlign:left"></i>'
        showError(apellido)
        if (value.length < 2) {
            labelApellido.innerHTML = '<i style="color:red, textAlign:left">Ingresa más de 2 caracteres</i>'
        } else if (doesStringHasNumber(value)) {
            labelApellido.innerHTML = '<i style="color:red, textAlign:left">Elimina los numeros</i>'

        } else if (stringWithOddSymbols(value)) {
            labelApellido.innerHTML = '<i style="color:red, textAlign:left">Elimina los caracteres especiales</i>'
        } else if (value.length <= 15) {
            labelApellido.innerHTML = '<i style="color:red, textAlign:left">Por favor escribe menos de 15 caracteres</i>'
        }
    }
})



form.addEventListener("submit", (event, values) => {
    event.preventDefault()
    console.log(apellido.value).trim()
})


div.addEventListener("click", () => {
    console.log("value del campo apellido >> ", apellido.value)
})


/**
 * Validar que el mail tenga 3 caracteres minimo*
 * Validar que el mail tenga el simbolo @ no al principio y . *
 */

 const arraySymbolsEmail = ["@", "."]

 const validateSimbolInEmail = (string) => {
    let myFlagArroba = false
    const newString = string.split("")
    newString.forEach(element => {
        arraySymbolsEmail.forEach(anotherElement => {
            if (element === anotherElement && element.index !== 0) {}return myFlagArroba = true
        })
    })
    return myFlagArroba
}
 mail.addEventListener("input", (event) => {
    const value = event.target.value

    if (value.length >= 2 && !doesStringHasNumber(value) && validateSimbolInEmail(value) && value.length <= 15) {
        hideError(mail)
        labelMail.innerHTML = ""
    } else {
        labelMail.innerHTML = '<i style="color:red, textAlign:left"></i>'
        showError(mail)
        if (value.length < 2) {
            labelMail.innerHTML = '<i style="color:red, textAlign:left">Ingresa más de 2 caracteres</i>'
        } else if (doesStringHasNumber(value)) {
            labelMail.innerHTML = '<i style="color:red, textAlign:left">Elimina los numeros</i>'

        } else if (stringWithOddSymbols(value)) {
            labelMail.innerHTML = '<i style="color:red, textAlign:left">Elimina los caracteres especiales</i>'
        } else if (value.length <= 15) {
            labelMail.innerHTML = '<i style="color:red, textAlign:left">Por favor escribe menos de 15 caracteres</i>'
        }
    }
})