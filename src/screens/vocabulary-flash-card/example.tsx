import { AntDesign } from "@expo/vector-icons";
import React, { useCallback, useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  type ImageSourcePropType,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Swiper, type SwiperCardRefType } from "rn-swiper-list";

const IMAGES: string[] = ["asdasd", "asdaasd"];

const ICON_SIZE = 24;

const App = () => {
  const ref = useRef<SwiperCardRefType>(null);

  const renderCard = useCallback((image: ImageSourcePropType) => {
    return (
      <View style={styles.renderCardContainer}>
        <Text>asdasdasdkjh</Text>
      </View>
    );
  }, []);
  const renderFlippedCard = useCallback(
    (_: ImageSourcePropType, index: number) => {
      return (
        <View style={styles.renderFlippedCardContainer}>
          <Text style={styles.text}>Flipped content 🚀 {index}</Text>
        </View>
      );
    },
    []
  );
  const OverlayLabelRight = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "green",
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelLeft = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "red",
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelTop = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "blue",
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelBottom = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: "orange",
          },
        ]}
      />
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          data={IMAGES as ImageSourcePropType[]}
          cardStyle={styles.cardStyle}
          overlayLabelContainerStyle={styles.overlayLabelContainerStyle}
          renderCard={renderCard}
          onIndexChange={(index) => {
            console.log("Current Active index", index);
          }}
          onSwipeRight={(cardIndex) => {
            console.log("cardIndex", cardIndex);
          }}
          onPress={() => {
            console.log("onPress");
          }}
          onSwipedAll={() => {
            console.log("onSwipedAll");
          }}
          FlippedContent={renderFlippedCard}
          onSwipeLeft={(cardIndex) => {
            console.log("onSwipeLeft", cardIndex);
          }}
          onSwipeTop={(cardIndex) => {
            console.log("onSwipeTop", cardIndex);
          }}
          onSwipeBottom={(cardIndex) => {
            console.log("onSwipeBottom", cardIndex);
          }}
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
          OverlayLabelTop={OverlayLabelTop}
          OverlayLabelBottom={OverlayLabelBottom}
          onSwipeActive={() => {
            console.log("onSwipeActive");
          }}
          onSwipeStart={() => {
            console.log("onSwipeStart");
          }}
          onSwipeEnd={() => {
            console.log("onSwipeEnd");
          }}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ref.current?.flipCard();
          }}
        >
          <AntDesign name="sync" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ref.current?.swipeBack();
          }}
        >
          <AntDesign name="reload1" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ref.current?.swipeLeft();
          }}
        >
          <AntDesign name="close" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ref.current?.swipeBottom();
          }}
        >
          <AntDesign name="arrowdown" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ref.current?.swipeTop();
          }}
        >
          <AntDesign name="arrowup" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            ref.current?.swipeRight();
          }}
        >
          <AntDesign name="heart" size={ICON_SIZE} color="white" />
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    bottom: 34,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  button: {
    height: 50,
    borderRadius: 40,
    aspectRatio: 1,
    backgroundColor: "#3A3D45",
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  renderCardContainer: {
    borderRadius: 15,
    width: "100%",
    height: "100%",
  },
  renderFlippedCardContainer: {
    borderRadius: 15,
    backgroundColor: "#baeee5",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardStyle: {
    width: "90%",
    height: "90%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  renderCardImage: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlayLabelContainer: {
    borderRadius: 15,
    height: "90%",
    width: "90%",
  },
  text: {
    color: "#001a72",
  },
  overlayLabelContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
});
