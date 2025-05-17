import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const mockData = [
  {
    school: "UBC",
    emoji: "🌊", // Ocean/mountains representing Vancouver
    majors: [
      { name: "CS", swipes: 502 },
      { name: "Sauder", swipes: 305 },
    ],
  },
  {
    school: "SFU",
    emoji: "⛰️", // Mountain for Burnaby mountain
    majors: [
      { name: "CS", swipes: 430 },
      { name: "Psych", swipes: 212 },
    ],
  },
];

// Calculate total swipes across all schools
const totalSwipes = mockData.reduce(
  (total, school) =>
    total + school.majors.reduce((acc, major) => acc + major.swipes, 0),
  0
);

// Simplified schoolAssets to just have background images
const schoolAssets = {
  UBC: {
    background: require("../../images/schools/campus/ubc_campus.jpg"),
  },
  SFU: {
    background: require("../../images/schools/campus/sfu_campus.jpg"),
  },
};

const LeaderboardPage = () => {
  const [expandedSchool, setExpandedSchool] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <Text style={styles.subHeader}>
        Schools ranked by how many times their students were swiped right on
      </Text>

      <FlatList
        data={mockData}
        keyExtractor={(item) => item.school}
        renderItem={({ item, index }) => {
          const schoolKey = item.school as keyof typeof schoolAssets;
          const isExpanded = expandedSchool === item.school;
          return (
            <View style={styles.schoolCardWrapper}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "stretch",
                  width: "100%",
                }}
              >
                {/* Rank number */}
                <View style={styles.rankNumberContainer}>
                  <Text style={styles.rankNumber}>{index + 1}.</Text>
                </View>
                {/* School Card */}
                <View style={[styles.schoolCard, { flex: 1 }]}>
                  <Image
                    source={schoolAssets[schoolKey]?.background}
                    style={styles.schoolBackground}
                    resizeMode="cover"
                    blurRadius={3}
                  />
                  <View style={styles.schoolCardContent}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.schoolName}>{item.school}</Text>
                      {/* Percentage instead of total swipes */}
                      <Text style={styles.totalSwipes}>
                        {(
                          (item.majors.reduce((acc, m) => acc + m.swipes, 0) /
                            totalSwipes) *
                          100
                        ).toFixed(1)}
                        % match rate
                      </Text>
                    </View>
                    <Text style={styles.schoolEmoji}>{item.emoji}</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.triangleButton}
                    onPress={() =>
                      setExpandedSchool((prev) =>
                        prev === item.school ? null : item.school
                      )
                    }
                  >
                    <Ionicons
                      name="chevron-down"
                      size={32}
                      color="#888"
                      style={{
                        transform: [{ rotate: isExpanded ? "180deg" : "0deg" }],
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {isExpanded && (
                <View style={styles.expandedStatsContainer}>
                  <View style={styles.expandedStatsCard}>
                    {item.majors.map((major) => (
                      <Text key={major.name} style={styles.majorItem}>
                        {major.name} —{" "}
                        {((major.swipes / totalSwipes) * 100).toFixed(1)}%
                      </Text>
                    ))}
                  </View>
                </View>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default LeaderboardPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF9",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
    fontFamily: "PlayfairDisplay-Bold",
    color: "#212529",
  },
  subHeader: {
    fontSize: 16,
    color: "#6C757D",
    fontFamily: "Inter_18pt-Regular",
    marginBottom: 20,
    marginTop: 0,
    textAlign: "left",
  },
  schoolCardWrapper: {
    marginBottom: 32,
    alignItems: "stretch", // Make wrapper stretch to full width
    width: "100%", // Ensure wrapper is full width
  },
  schoolCard: {
    backgroundColor: "#FDF6EC",
    borderRadius: 16,
    padding: 24,
    marginBottom: 0, // Remove margin between card and expanded card
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
    minHeight: 180,
    overflow: "hidden",
    position: "relative",
    width: "100%", // Ensure card is full width
  },
  schoolBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    opacity: 0.25,
  },
  schoolCardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
  schoolEmoji: {
    fontSize: 40,
    marginLeft: 10,
  },
  expandButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  expandButtonText: {
    fontSize: 14,
    color: "#007AFF",
    marginLeft: 12,
    fontFamily: "Inter_18pt-Regular",
    fontWeight: "bold",
  },
  schoolName: {
    fontSize: 28, // Bigger text
    fontWeight: "bold",
    color: "#2C3E50",
    fontFamily: "PlayfairDisplay-Regular",
  },
  triangleButton: {
    position: "absolute",
    left: 18,
    bottom: 18,
    zIndex: 2,
    padding: 4,
  },
  majorList: {
    marginTop: 10,
  },
  majorItem: {
    fontSize: 16,
    color: "#2C3E50",
    fontFamily: "Inter_18pt-Regular",
    marginVertical: 4,
  },
  expandedStatsContainer: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: -12,
    marginBottom: 8,
    paddingLeft: 32,
  },
  expandedStatsCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    minWidth: 180,
    maxWidth: 260,
    minHeight: 40,
    maxHeight: 120,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    borderTopLeftRadius: 0,
    marginTop: 0,
  },
  rankNumberContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 36,
    marginRight: 8,
  },
  rankNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#B08D57",
    fontFamily: "PlayfairDisplay-Bold",
  },
  totalSwipes: {
    fontSize: 16,
    color: "#6C757D",
    fontFamily: "Inter_18pt-Regular",
    marginTop: 2,
    fontWeight: "600",
  },
});
