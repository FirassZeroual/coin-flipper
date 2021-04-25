input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
    } else {
        basic.showIcon(IconNames.No)
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    }
})
basic.forever(function () {
	
})
