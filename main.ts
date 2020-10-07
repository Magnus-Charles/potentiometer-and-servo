let potentiometer = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . # # # .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    robotbit.Servo(robotbit.Servos.S1, potentiometer)
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(100)
})
