import { View } from "react-native";

const FlexWrap = () => {
  return (
    // Try playing with the flexWrap property 'wrap', 'nowrap', 'wrap-reverse'
    <View
      style={[
        { flexDirection: "column", flexWrap: "wrap" },
        styles.elementsContainer,
      ]}
    >
      <View style={styles.red} />
      <View style={styles.yellow} />
      <View style={styles.green} />
      <View style={styles.blue} />
      <View style={styles.cyan} />
      <View style={styles.purple} />
      <View style={styles.violet} />
    </View>
  );
};

const green = "#32B76C";
const yellow = "#FAA030";
const red = "#EE2C38";
const blue = "#4196E0";
const cyan = "#32BABC";
const purple = "#A0138E";
const violet = "#733CA6";

const height = 100;
const width = 200;

const styles = {
  yellow: {
    backgroundColor: yellow,
    height: height,
    width: width,
  },
  red: {
    backgroundColor: red,
    height: height,
    width: width,
  },
  green: {
    backgroundColor: green,
    height: height,
    width: width,
  },
  blue: {
    backgroundColor: blue,
    height: height,
    width: width,
  },
  cyan: {
    backgroundColor: cyan,
    height: height,
    width: width,
  },
  purple: {
    backgroundColor: purple,
    height: height,
    width: width,
  },
  violet: {
    backgroundColor: violet,
    height: height,
    width: width,
  },
  elementsContainer: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    marginLeft: 24,
    marginRight: 24,
    marginBottom: 24,
  },
};

export default FlexWrap;
