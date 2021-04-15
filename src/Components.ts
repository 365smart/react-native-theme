import withStyledSystem from './functions/withStyledSystem'

const reactNative = require('react-native')

enum ElementsEnum {
  ActivityIndicator,
  ActivityIndicatorIOS,
  ART,
  Button,
  DatePickerIOS,
  DrawerLayoutAndroid,
  Image,
  ImageBackground,
  ImageEditor,
  ImageStore,
  KeyboardAvoidingView,
  ListView,
  MapView,
  Modal,
  NavigatorIOS,
  Picker,
  PickerIOS,
  ProgressBarAndroid,
  ProgressViewIOS,
  ScrollView,
  SegmentedControlIOS,
  Slider,
  SliderIOS,
  SnapshotViewIOS,
  Switch,
  RecyclerViewBackedScrollView,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  SwipeableListView,
  SwitchAndroid,
  SwitchIOS,
  TabBarIOS,
  Text,
  TextInput,
  ToastAndroid,
  ToolbarAndroid,
  Touchable,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewPagerAndroid,
  WebView,
  FlatList,
  SectionList,
  VirtualizedList,
  Pressable,
}

const component = withStyledSystem(reactNative.View)

type EnumKeys = keyof typeof ElementsEnum
type ComponentsType = {
  [key in EnumKeys]: typeof component
}

const Components = {}

Object.keys(ElementsEnum).forEach((element) => {
  Object.defineProperty(Components, element, {
    enumerable: true,
    configurable: false,
    get() {
      return withStyledSystem(reactNative[element])
    },
  })
})

export default Components as ComponentsType
