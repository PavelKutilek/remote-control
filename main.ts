let Tlacitko = 0
let Tlacraw = 0
radio.setGroup(1)
basic.showString("MB remote")
basic.showNumber(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showArrow(ArrowNames.East)
        radio.sendValue("S", 1)
    } else if (pins.analogReadPin(AnalogPin.P0) < 400) {
        basic.showArrow(ArrowNames.West)
        radio.sendValue("S", 2)
    } else {
        radio.sendValue("S", 0)
    }
    if (pins.analogReadPin(AnalogPin.P1) > 600) {
        basic.showArrow(ArrowNames.North)
        radio.sendValue("D", 1)
    } else if (pins.analogReadPin(AnalogPin.P1) < 400) {
        basic.showArrow(ArrowNames.South)
        radio.sendValue("D", 2)
    } else {
        radio.sendValue("D", 2)
    }
    Tlacraw = pins.analogReadPin(AnalogPin.P2)
    if (Tlacraw < 256) {
        Tlacitko = 1
    } else if (Tlacraw < 597) {
        Tlacitko = 2
    } else if (Tlacraw < 725) {
        Tlacitko = 3
    } else if (Tlacraw < 793) {
        Tlacitko = 4
    } else if (Tlacraw < 836) {
        Tlacitko = 5
    } else if (Tlacraw < 938) {
        Tlacitko = 6
    } else {
        Tlacitko = 0
    }
    basic.showString("" + (Tlacitko))
    radio.sendValue("T", Tlacitko)
})
