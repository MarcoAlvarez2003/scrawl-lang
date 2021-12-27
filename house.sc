canvas {
    w: 900
    h: 800
    background: #111
}

fill_rect {
    x: 0
    y: 0
    w: 900
    h: 800
    background: white
}

"Creando el trazado del tejado"
begin_path {
    ignore {}

    line {
        x: 100
        y: 200
        w: 300
        h: 100
    }

    line {
        x: 300
        y: 100
        w: 500
        h: 200
    }

    line {
        x: 500
        y: 200
        w: 100
        h: 200
    }

    stroke {}

}

"Dibujando la puerta de la casa"
stroke_rect {
    x: 150
    y: 200
    w: 300
    h: 250
}

stroke_rect {
    x: 280
    y: 350
    w:  50
    h: 100
}

"Dibujano la ventana del tejado"
elipse {
    x: 300
    y: 160
    w: 75
    h: 25

    ignore {}
    stroke {}
}

"Dibujando los barrotes de la ventana del tejado"
begin_path {
    ignore {}

    line {
        x: 225
        y: 160
        w: 375
        h: 160
    }

    stroke {}
}

begin_path {
    ignore {}

    line {
        x: 300
        y: 135
        w: 300
        h: 185
    }

    stroke {}
}