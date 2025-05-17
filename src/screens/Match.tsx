import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height: screenHeight } = Dimensions.get("window");

const SwipeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Project F</Text>

      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../images/KyleMori.jpg")}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.overlayTextContainer}>
            <View style={styles.overlayHeader}>
              <Text style={styles.overlayName}>Sam</Text>
              <Text style={styles.overlayAge}>18</Text>
            </View>
            <Text style={styles.overlaySchool}>BCIT</Text>
          </View>
          {/* Overlay buttons, half on image, half off */}
          <View style={styles.overlayButtonContainer}>
            <TouchableOpacity style={styles.rejectButton}>
              <Ionicons name="close" size={40} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <Ionicons name="book" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Ionicons name="heart" size={40} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* Move bio and major below the image/buttons */}
        <View style={styles.profileDetailsContainer}>
          <Text style={styles.bio}>
            BioBIOBIOBIOBOIOBIOIBIBOIBOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIOBIBIBIOBIOB
          </Text>
          <Text style={styles.major}>Major: Rizzeology</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.rejectButton}>
          <Ionicons name="close" size={40} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.infoButton}>
          <Ionicons name="book" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.acceptButton}>
          <Ionicons name="heart" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#212529",
    fontFamily: "PlayfairDisplay", // Use Playfair Display for app name
    // 3D effect
    textShadowColor: "#bfa76a",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 8,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  card: {
    backgroundColor: "#FDF6EC",
    borderRadius: 5,
    padding: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 10,
    marginTop: -40,
    marginBottom: 10, // Reduced to give more space for buttons
    maxHeight: screenHeight * 0.85, // Reduce card height to allow more space for buttons and tab bar
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    height: screenHeight * 0.63, // Make image smaller
    borderRadius: 20,
    backgroundColor: "#EEE",
  },
  overlayTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    padding: 16,
  },
  overlayHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  overlayName: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: "PlayfairDisplay-Bold", // Use Playfair Display for user name
  },
  overlayAge: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: "PlayfairDisplay-Bold", // Use Playfair Display for age
  },
  overlaySchool: {
    fontSize: 23,
    color: "#fff",
    marginTop: 4,
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: "PlayfairDisplay-Regular", // Use Playfair Display for school
  },
  bio: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 15,
    color: "#2C3E50",
    fontFamily: "Inter_18pt-Regular",
  },
  major: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#2C3E50",
    fontFamily: "Inter_18pt-Regular",
  },
  buttonContainer: {
    display: "none", // Hide the old button row
  },
  overlayButtonContainer: {
    position: "absolute",
    left: 0,
    bottom: -32, // Half of button height off the image
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 2,
    paddingHorizontal: 24,
    gap: 18,
  },
  profileDetailsContainer: {
    marginTop: 40, // Add space below buttons
    alignItems: "flex-start",
    width: "100%",
  },
  rejectButton: {
    backgroundColor: "#E74C3C",
    padding: 15,
    borderRadius: 40,
    // 3D effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: "#c0392b",
  },
  acceptButton: {
    backgroundColor: "#2ECC71",
    padding: 15,
    borderRadius: 40,
    // 3D effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: "#229954",
  },
  infoButton: {
    backgroundColor: "#2986cc",
    padding: 10,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    // 3D effect
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: "#1c5a99",
  },
});
