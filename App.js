import React, { useEffect } from 'react'
import Navigation from './src/Navigation'
import * as ScreenOrientation from 'expo-screen-orientation';

export default function App() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  }, [])
  return (
    <Navigation />
  )
}