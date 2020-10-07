basic.showLeds(`
    # . . . #
    . # . # .
    . # # # .
    . # . # .
    # . . . #
    `)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
