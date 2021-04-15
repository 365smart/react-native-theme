export enum ColorsEnum {
  primary,
  primary2,
  primary3,
  primary4,
  primary5,
  primary6,
  greyscale1,
  greyscale2,
  greyscale3,
  greyscale4,
  greyscale5,
  greyscale6,
  white,
  black,
  danger,
  success,
  success1,
  success2,
  success3,
  waring,
  warning1,
  warning2,
  warning3,
  google,
  cherry025,
  cherry050,
  cherry075,
  cherry100,
  grey025,
  grey050,
  grey075,
  grey100,
  cream025,
  cream050,
  cream075,
  cream100,
  navy025,
  navy050,
  navy075,
  navy100,
  white075,
  white100,
  black100,
  dark,
  negative,
  light,
  bg1,
  bg2,
  bg3,
  text1,
  text2,
  text3,
  background,
  card,
  text,
  border,
  notification,
}

type Colors = keyof typeof ColorsEnum

export type ColorsType = {
  [key in Colors | string]: string
}

const Colors: any = {}

// constant colors
Colors.primary = '#2555D9'
Colors.primary2 = '#4C73DF'
Colors.primary3 = '#7492E6'
Colors.primary4 = '#9BB1ED'
Colors.primary5 = '#C3D0F4'
Colors.primary6 = '#EBEFF8'
Colors.greyscale1 = '#212121'
Colors.greyscale2 = '#424242'
Colors.greyscale3 = '#757575'
Colors.greyscale4 = '#9e9e9e'
Colors.greyscale5 = '#bdbdbd'
Colors.greyscale6 = '#eeeeee'
Colors.white = '#fafafa'
Colors.black = '#050505'
Colors.danger = '#f44336'
Colors.success = '#81c784'
Colors.success1 = '#A5D6A7'
Colors.success2 = '#C8E6C9'
Colors.success3 = '#E8F5E9'
Colors.warning = '#FFEE58'
Colors.warning1 = '#FFF176'
Colors.warning2 = '#FFF59D'
Colors.warning3 = '#FFFDE7'
Colors.google = '#db3236'

// stockwell colors
Colors.cherry025 = '#FBE5E4'
Colors.cherry050 = '#EC9593'
Colors.cherry075 = '#E3605D'
Colors.cherry100 = '#DA291C'
Colors.cream025 = '#FBFAF8'
Colors.cream050 = '#F7F4F1'
Colors.cream075 = '#F3EFEB'
Colors.cream100 = '#EFE9E4'
Colors.grey025 = '#F4F4F4'
Colors.grey050 = '#EBEBEB'
Colors.grey075 = '#E0E1E2'
Colors.grey100 = '#D7D7D7'
Colors.navy025 = '#CACBCD'
Colors.navy050 = '#807D85'
Colors.navy075 = '#54545C'
Colors.navy100 = '#2F333D'
Colors.white075 = '#F1F1F1'
Colors.white100 = '#FFFFFF'
Colors.black100 = '#000000'

// variable colors
Colors.dark = Colors.greyscale1
Colors.negative = Colors.greyscale3
Colors.light = Colors.greyscale6
Colors.bg1 = Colors.white
Colors.bg2 = Colors.greyscale6
Colors.bg3 = Colors.greyscale5
Colors.text1 = Colors.greyscale1
Colors.text2 = Colors.greyscale4
Colors.text3 = Colors.greyscale2

// react navigation colors
Colors.background = Colors.bg1
Colors.card = Colors.bg1
Colors.text = Colors.text1
Colors.border = Colors.negative
Colors.notification = Colors.danger

export default Colors as ColorsType
