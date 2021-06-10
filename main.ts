/**
 * Voici quelques suggestions:
 * 
 * Tu peux modifier ce code pour partir d'une valeur fixe et faire diminuer le décompte.
 * 
 * Ajoute un beep à chaque fois que ton nombre change.
 */
input.onButtonPressed(Button.A, function () {
    nombre += 1
    basic.showNumber(nombre)
})
input.onButtonPressed(Button.B, function () {
    nombre = 0
    basic.showNumber(nombre)
})
let nombre = 0
basic.showNumber(0)
nombre = 0
