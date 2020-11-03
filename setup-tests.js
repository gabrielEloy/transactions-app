import MockAsyncStorage from 'mock-async-storage';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

const mockImpl = new MockAsyncStorage();
jest.mock('@react-native-community/async-storage', () => mockImpl);
