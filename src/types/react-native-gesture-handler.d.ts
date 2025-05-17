declare module 'react-native-gesture-handler' {
  import { ComponentType } from 'react';
  import { ViewProps } from 'react-native';

  export const GestureHandlerRootView: ComponentType<ViewProps>;
  export * from 'react-native-gesture-handler/lib/commonjs';
} 