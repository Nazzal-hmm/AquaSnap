import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Text, Surface, Button } from '@react-native-material/core';
import { MaterialIcons } from '@expo/vector-icons';

const posts = [
  {
    id: 1,
    title: 'Broken Sprinkler Wasting Water - What Should I Do?',
    content: 'I noticed a broken sprinkler in my neighborhood that\'s been spraying water continuously for the past day. Should I report this to the authorities or is there something else I can do?',
    author: 'WaterSaver123',
    upvotes: 1234,
    commentCount: 45,
    timePosted: '2 hours ago',
    image: 'https://www.pro-sprinkler.com/wp-content/uploads/2014/10/broken-irrigation-pipe.jpg',
    comments: [
      {
        id: 1,
        author: 'EcoWarrior',
        content: 'You can seal it with plumber\'s tape temporarily. Here\'s what I did when I encountered a similar issue...',
        upvotes: 89,
        timePosted: '1 hour ago',
        replies: [
          {
            id: 2,
            author: 'PlumberPro',
            content: 'Great suggestion! Just make sure to also report it to the local water department.',
            upvotes: 45,
            timePosted: '45 minutes ago',
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'DIY Fix for Leaky Pipes!',
    content: 'Here\'s a quick guide on how to temporarily fix a leaky pipe using materials you probably have at home. Remember, this is just a temporary solution until a professional can help!',
    author: 'EcoWarrior',
    upvotes: 856,
    commentCount: 23,
    timePosted: '4 hours ago',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=800',
    comments: []
  },
  {
    id: 3,
    title: 'Same Problem Here - Found Professional Solution',
    content: 'Just dealt with a similar sprinkler issue last week. Called Green Earth Irrigation and they replaced the broken head and adjusted the whole system. Total cost was $150 but they also gave me tips on preventing future breaks. Worth every penny!',
    author: 'GardenGuru',
    upvotes: 567,
    commentCount: 32,
    timePosted: '5 hours ago',
    image: 'https://smartearthsprinklers.com/wp-content/uploads/2019/12/Why-Leaks-in-Your-Sprinkler-System-are-More-Expensive-Than-You-Might-Think.jpg',
    comments: [
      {
        id: 3,
        author: 'WaterPro',
        content: 'Great recommendation! I work in irrigation and it\'s always better to get a professional fix rather than risking further damage.',
        upvotes: 123,
        timePosted: '3 hours ago',
        replies: []
      }
    ]
  },
  {
    id: 4,
    title: 'Extra Irrigation Parts Available - Farm Upgrade Leftovers',
    content: 'Just upgraded our farm\'s irrigation system and have extra parts that might help someone with repairs. I have several sprinkler heads, connectors, and some PVC pipes. All professional grade equipment. Located in Green Valley area. DM if interested!',
    author: 'FarmerJoe',
    upvotes: 445,
    commentCount: 28,
    timePosted: '6 hours ago',
    image: 'https://i.redd.it/5o90lfm520c71.jpg',
    comments: [
      {
        id: 4,
        author: 'WaterSaver123',
        content: 'Would love to grab some parts! Just sent you a DM. This could really help with my sprinkler issue.',
        upvotes: 67,
        timePosted: '4 hours ago',
        replies: [
          {
            id: 5,
            author: 'FarmerJoe',
            content: 'Got your message! I\'ll set aside some parts for you. They\'re commercial grade, so they should last longer than regular residential parts.',
            upvotes: 34,
            timePosted: '3 hours ago',
          }
        ]
      }
    ]
  }
];

const Comment = ({ comment, depth = 0 }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [showReplyField, setShowReplyField] = useState(false);

  return (
    <View style={[styles.commentContainer, { marginLeft: depth * 20 }]}>
      <Surface style={styles.commentCard} elevation={1}>
        <View style={styles.commentHeader}>
          <View style={styles.avatarSmall}>
            <Text style={styles.avatarText}>{comment.author[0]}</Text>
          </View>
          <Text style={styles.commentAuthor}>{comment.author}</Text>
          <Text style={styles.timeText}>{comment.timePosted}</Text>
        </View>
        
        <Text style={styles.commentContent}>{comment.content}</Text>
        
        <View style={styles.commentActions}>
          <TouchableOpacity 
            style={styles.voteButton} 
            onPress={() => setUpvoted(!upvoted)}
          >
            <MaterialIcons 
              name="arrow-upward" 
              size={16} 
              color={upvoted ? '#2196F3' : '#666'} 
            />
            <Text style={styles.voteCount}>{comment.upvotes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.replyButton}
            onPress={() => setShowReplyField(!showReplyField)}
          >
            <Text style={styles.replyButtonText}>Reply</Text>
          </TouchableOpacity>
        </View>

        {showReplyField && (
          <View style={styles.replyField}>
            <TextInput
              style={styles.replyInput}
              multiline
              placeholder="Write a reply..."
            />
            <View style={styles.replyButtons}>
              <Button 
                title="Reply"
                style={styles.submitButton}
                tintColor="#2196F3"
              />
              <Button 
                title="Cancel"
                onPress={() => setShowReplyField(false)}
                style={styles.cancelButton}
              />
            </View>
          </View>
        )}
      </Surface>
      
      {comment.replies?.map(reply => (
        <Comment key={reply.id} comment={reply} depth={depth + 1} />
      ))}
    </View>
  );
};

const Post = ({ post }) => {
  const [upvoted, setUpvoted] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <Surface style={styles.postCard} elevation={2}>
      <View style={styles.postContainer}>
        <View style={styles.voteContainer}>
          <TouchableOpacity onPress={() => setUpvoted(!upvoted)}>
            <MaterialIcons 
              name="arrow-upward" 
              size={24} 
              color={upvoted ? '#2196F3' : '#666'} 
            />
          </TouchableOpacity>
          <Text style={styles.voteCount}>{post.upvotes}</Text>
          <TouchableOpacity>
            <MaterialIcons name="arrow-downward" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.postContent}>
          <View style={styles.postHeader}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{post.author[0]}</Text>
            </View>
            <Text style={styles.authorText}>Posted by {post.author}</Text>
            <Text style={styles.timeText}>{post.timePosted}</Text>
          </View>

          <Text style={styles.postTitle}>{post.title}</Text>
          
          {post.image && (
            <Image
              source={{ uri: post.image }}
              style={styles.postImage}
            />
          )}
          
          <Text style={styles.postText}>{post.content}</Text>

          <View style={styles.postActions}>
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => setShowComments(!showComments)}
            >
              <MaterialIcons name="chat-bubble-outline" size={20} color="#666" />
              <Text style={styles.actionText}>{post.commentCount} Comments</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <MaterialIcons name="share" size={20} color="#666" />
              <Text style={styles.actionText}>Share</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <MaterialIcons name="bookmark-border" size={20} color="#666" />
              <Text style={styles.actionText}>Save</Text>
            </TouchableOpacity>
          </View>

          {showComments && (
            <View style={styles.commentsSection}>
              <TextInput
                style={styles.commentInput}
                multiline
                placeholder="What are your thoughts?"
              />
              <Button 
                title="Comment"
                style={styles.commentButton}
                tintColor="#2196F3"
              />
              {post.comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </View>
          )}
        </View>
      </View>
    </Surface>
  );
};

export default function Community() {
  return (
    <ScrollView style={styles.container}>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  postCard: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  postContainer: {
    flexDirection: 'row',
  },
  voteContainer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  postContent: {
    flex: 1,
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarSmall: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
  },
  authorText: {
    fontSize: 12,
    marginRight: 8,
  },
  timeText: {
    fontSize: 12,
    color: '#666',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  postActions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  actionText: {
    marginLeft: 5,
    color: '#666',
  },
  voteCount: {
    marginVertical: 5,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  commentsSection: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    minHeight: 80,
  },
  commentButton: {
    marginBottom: 10,
  },
  commentContainer: {
    marginVertical: 5,
  },
  commentCard: {
    padding: 10,
    borderRadius: 4,
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  commentAuthor: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  commentContent: {
    marginBottom: 5,
  },
  commentActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  replyButton: {
    marginRight: 15,
  },
  replyButtonText: {
    color: '#2196F3',
  },
  replyField: {
    marginTop: 10,
  },
  replyInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    minHeight: 60,
  },
  replyButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  submitButton: {
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
  },
});