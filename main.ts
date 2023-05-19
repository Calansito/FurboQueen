radio.onReceivedString(function (receivedString) {
    if (receivedString == "derecha") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 70)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (receivedString == "izquierda") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 70)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (receivedString == "atras") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 70)
    } else if (receivedString == "adelante") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 70)
    }
})
radio.setGroup(1)
basic.forever(function () {
    if (input.acceleration(Dimension.X) >= 200) {
        radio.sendString("derecha")
        basic.showArrow(ArrowNames.East)
    } else if (input.acceleration(Dimension.X) <= -200) {
        radio.sendString("izquierda")
        basic.showArrow(ArrowNames.West)
    } else if (input.acceleration(Dimension.Y) >= 200) {
        radio.sendString("atras")
        basic.showArrow(ArrowNames.South)
    } else if (input.acceleration(Dimension.Y) <= -200) {
        radio.sendString("adelate")
        basic.showArrow(ArrowNames.North)
    }
})
