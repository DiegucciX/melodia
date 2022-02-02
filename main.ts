input.onButtonPressed(Button.A, function () {
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(523, music.beat(BeatFraction.Eighth))
    music.playTone(466, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(330, music.beat(BeatFraction.Eighth))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Whole))
})
basic.showLeds(`
    . # # # #
    . # . . #
    . # . . #
    # # . # #
    # # . # #
    `)
basic.forever(function () {
	
})
