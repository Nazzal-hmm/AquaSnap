import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Surface } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';

const faqs = [
  {
    question: 'What is AquaSnap?',
    answer: 'AquaSnap is a community-driven platform that helps identify and report water-related issues in your area. Users can share photos, discuss water conservation, and earn points for their contributions.'
  },
  {
    question: 'How do I report a water issue?',
    answer: 'To report a water issue, tap the "Snap Photo" tab, take a picture of the problem, add a description, and submit it to the community. Your contribution will help create awareness and facilitate solutions.'
  },
  {
    question: 'How does the point system work?',
    answer: 'You earn points through various activities: posting reports, receiving upvotes, commenting on other posts, and having your reports marked as helpful. These points contribute to your level and ranking on the leaderboard.'
  },
  {
    question: 'What are the different badges?',
    answer: '🌊 Water Champion: Top contributor\n💧 Water Guardian: Regular contributor\n🌿 Eco Warrior: Active community member\n🌱 Rising Star: New but active member\n⭐ Contributor: Getting started'
  },
  {
    question: 'How can I improve my ranking?',
    answer: 'Stay active in the community by:\n- Posting quality reports\n- Engaging in discussions\n- Providing helpful comments\n- Verifying other users\' reports'
  }
];

export default function Help() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Help Center</Text>
        <Text style={styles.subtitle}>Frequently Asked Questions</Text>
      </View>

      {faqs.map((faq, index) => (
        <Surface key={index} style={styles.faqCard} elevation={2}>
          <TouchableOpacity
            style={styles.questionContainer}
            onPress={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <View style={styles.questionRow}>
              <Text style={styles.question}>{faq.question}</Text>
              <MaterialIcons
                name={expandedIndex === index ? 'expand-less' : 'expand-more'}
                size={24}
                color="#2196F3"
              />
            </View>
            
            {expandedIndex === index && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </TouchableOpacity>
        </Surface>
      ))}

      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Still need help?</Text>
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={() => alert('Support will contact you soon!')}
        >
          <MaterialIcons name="email" size={20} color="white" />
          <Text style={styles.contactButtonText}>Contact Support</Text>
        </TouchableOpacity>
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
  faqCard: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  questionContainer: {
    padding: 15,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 10,
  },
  answer: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactSection: {
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  contactButton: {
    flexDirection: 'row',
    backgroundColor: '#2196F3',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});