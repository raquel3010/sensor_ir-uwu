let medida = 0
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
basic.forever(function () {
    medida = maqueen.Ultrasonic(PingUnit.Centimeters)
    if (medida < 10) {
        if (medida < 5) {
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
            basic.pause(200)
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        } else {
            music.playTone(262, music.beat(BeatFraction.Sixteenth))
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (medida > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    basic.pause(200)
})
control.inBackground(function () {
    basic.showNumber(medida)
})
