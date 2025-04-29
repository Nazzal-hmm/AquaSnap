import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Text, Surface } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';

const leaderboardData = [
  { 
    rank: 1, 
    name: 'Alice Johnson', 
    points: 12500, 
    level: 25,
    avatar: 'https://i.pravatar.cc/150?img=1',
    progress: 75,
    badge: '🌊 Water Champion'
  },
  { 
    rank: 2, 
    name: 'Bob Smith', 
    points: 10800, 
    level: 22,
    avatar: 'https://i.pravatar.cc/150?img=2',
    progress: 60,
    badge: '💧 Water Guardian'
  },
  { 
    rank: 3, 
    name: 'Charlie Davis', 
    points: 9200, 
    level: 20,
    avatar: 'https://i.pravatar.cc/150?img=3',
    progress: 45,
    badge: '🌿 Eco Warrior'
  },
  { 
    rank: 4, 
    name: 'Diana Wilson', 
    points: 8500, 
    level: 18,
    avatar: 'https://i.pravatar.cc/150?img=4',
    progress: 30,
    badge: '🌱 Rising Star'
  },
  { 
    rank: 5, 
    name: 'Edward Brown', 
    points: 7800, 
    level: 16,
    avatar: 'https://i.pravatar.cc/150?img=5',
    progress: 25,
    badge: '⭐ Contributor'
  },
  { 
    rank: 6, 
    name: 'Fiona Green', 
    points: 7200, 
    level: 15,
    avatar: 'https://i.pravatar.cc/150?img=6',
    progress: 80,
    badge: '💧 Water Guardian'
  },
  { 
    rank: 7, 
    name: 'George Martinez', 
    points: 6500, 
    level: 14,
    avatar: 'https://i.pravatar.cc/150?img=7',
    progress: 65,
    badge: '🌿 Eco Warrior'
  },
  { 
    rank: 8, 
    name: 'Hannah Lee', 
    points: 5900, 
    level: 13,
    avatar: 'https://i.pravatar.cc/150?img=8',
    progress: 55,
    badge: '🌱 Rising Star'
  },
  { 
    rank: 9, 
    name: 'Ian Clark', 
    points: 5200, 
    level: 12,
    avatar: 'https://i.pravatar.cc/150?img=9',
    progress: 40,
    badge: '⭐ Contributor'
  },
  { 
    rank: 10, 
    name: 'Julia Adams', 
    points: 4800, 
    level: 11,
    avatar: 'https://i.pravatar.cc/150?img=10',
    progress: 90,
    badge: '🌱 Rising Star'
  }
];

const getRankColor = (rank) => {
  switch (rank) {
    case 1: return '#FFD700'; // Gold
    case 2: return '#C0C0C0'; // Silver
    case 3: return '#CD7F32'; // Bronze
    default: return '#2196F3'; // Blue
  }
};

export default function Leaderboard() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top Water Savers</Text>
        <Text style={styles.subtitle}>Leading the way in water conservation</Text>
      </View>

      {leaderboardData.map((user) => (
        <Surface key={user.rank} style={styles.userCard} elevation={2}>
          <View style={[styles.rankBadge, { backgroundColor: getRankColor(user.rank) }]}>
            <Text style={styles.rankText}>{user.rank}</Text>
            {user.rank <= 3 && (
              <MaterialIcons name="emoji-events" size={20} color="white" />
            )}
          </View>

          <View style={styles.userInfo}>
            <View style={styles.avatarContainer}>
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
              <View style={styles.levelBadge}>
                <Text style={styles.levelText}>{user.level}</Text>
              </View>
            </View>

            <View style={styles.details}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.badge}>{user.badge}</Text>
              <View style={styles.statsContainer}>
                <Text style={styles.points}>{user.points.toLocaleString()} Points</Text>
                <Text style={styles.level}>Level {user.level}</Text>
              </View>
            </View>

            <View style={styles.progressContainer}>
              <Text style={styles.progressText}>Progress</Text>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${user.progress}%` }]} />
              </View>
              <Text style={styles.progressPercent}>{user.progress}%</Text>
            </View>
          </View>
        </Surface>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>Keep saving water to climb the ranks!</Text>
        <MaterialIcons name="water-drop" size={24} color="#2196F3" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  userCard: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  rankBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  rankText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  userInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  levelBadge: {
    position: 'absolute',
    right: -5,
    top: -5,
    backgroundColor: '#2196F3',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  levelText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  details: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  badge: {
    fontSize: 12,
    color: '#2196F3',
    marginBottom: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  points: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: 'bold',
    marginRight: 10,
  },
  level: {
    fontSize: 14,
    color: '#666',
  },
  progressContainer: {
    width: 80,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#2196F3',
  },
  progressPercent: {
    fontSize: 12,
    color: '#2196F3',
    marginTop: 4,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
  },
});