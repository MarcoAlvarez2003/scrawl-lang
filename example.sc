"Bienvenido a esta prueba de Scrawl Lang o Scribble tambien llamable"
"En este video se haran demostraiones de los libraria shape (aun incompleta)"
"Bueno sin mas que decir, es hora de escribir"

"Comenzados definiendo el canvas, esto se puede hacer dentro del archivo pero tambien por fuera de este"

canvas {
    w: 800
    h: 900
}

"por ahora solo configurar el canvas no muestra nada"
"Dibujemos un circulo :)"

circle {
    x: 100
    y: 100
    r: 50
}

"El circulo por ahora es invisible, vamos a comprobarlo"
"Bien para hacer que este se muestre hay que especificar el como"
"para esto temenos dos opciones: fill y stroke, probemos stroke"

"ahora fill, agreguemosle color"

fill {
    background: "#572"
}

"No se nota mucho, pongamos otro"
"Genial no"

"Dibujemos un ovalo"

elipse {
    x: 200
    y: 200
    w: 50
    h: 150
}

"Al igual que con el circulo, se necesita definir el como se mostrara"

stroke {}

elipse {
    x: 200
    y: 500
    w: 50
    h: 150
}

fill {}

"Bueno hasta aqui dejamos esto, hay bastantes cosas por ahora pero se alargaria mucho el video"
"Aqui esta el codigo fuente"
"Bueno, adios vaquero"
