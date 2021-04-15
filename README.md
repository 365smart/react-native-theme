# React Native Theme
Themed React Native components using [styled-components](https://github.com/styled-components/styled-components) and [styled-system](https://github.com/styled-system/styled-system) 

## Installation
```
yarn add @365smart/react-native-theme
```

## Usage
```
import Components, { ThemeProvider } from '@365smart/react-native-theme'
import React from 'react'

const { View, Text } = Components

export default function App() {
  return (
    <ThemeProvider theme='dark'>
      <View bg='bg1' flex={1} alignItems='center' justifyContent='center'>
        <Text color='text1'>Open up App.js to start working on your app!</Text>
      </View>
    </ThemeProvider>
  )
}
```
Here is a more complex example showing how to provide custom themes and how to use the `withStyledSystem` function to connect props to the theme.
```
import {
  Button,
  Input,
  Text,
  ThemeProvider,
  View,
  withStyledSystem,
} from '@365smart/react-native-theme'
import React from 'react'
import { Image } from 'react-native'

const lightTheme = {
  colors: {
    bg: 'white',
    text: 'black',
    myFavColor: 'purple',
  },
  images: {
    main: 'https://shorturl.at/iAFW6',
  },
}

const darkTheme = {
  colors: {
    bg: 'black',
    text: 'white',
    myFavColor: 'purple',
  },
  images: {
    main: 'https://bit.ly/3scFTQY',
  },
}

const MyImage = withStyledSystem(Image, (p) => ({
  source: p.name ? { uri: p.theme.images[p.name] } : p.source,
}))

export default function App() {
  const [info, setInfo] = React.useState('')
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <View flex={1} bg='bg' alignItems='center' justifyContent='center'>
        <View bg='primary' borderRadius='xl' p='md'>
          <Text color='myFavColor'>React Native Theme</Text>
          <MyImage
            alignSelf='center'
            name='main'
            width='xl5'
            height='xl5'
            my='sm'
          />
          <Input
            bg='bg'
            color='text'
            placeholderTextColor='negative'
            placeholder='Enter Info'
            value={info}
            onChangeText={setInfo}
          />
          <Button
            p='xs'
            mt='xs'
            bg='myFavColor'
            color='white'
            onPress={toggleTheme}
          >
            Toggle Theme
          </Button>
        </View>
      </View>
    </ThemeProvider>
  )
}
```

## Run Example
```
git clone git@github.com:mattreiss/react-native-theme.git
cd react-native-theme
yarn
yarn ios
```