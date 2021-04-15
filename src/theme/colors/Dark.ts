import Light from './Light'

// start with default colors
const Colors = { ...Light }

// variable colors
Colors.dark = Colors.greyscale1
Colors.light = Colors.greyscale2
Colors.bg1 = Colors.black
Colors.bg2 = Colors.greyscale1
Colors.bg3 = Colors.greyscale2
Colors.text1 = Colors.greyscale6
Colors.text2 = Colors.greyscale3
Colors.text3 = Colors.greyscale4

// react navigation colors
Colors.background = Colors.bg1
Colors.card = Colors.bg1
Colors.text = Colors.text1
Colors.border = Colors.negative
Colors.notification = Colors.danger

export default Colors
