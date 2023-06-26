import { useState } from 'react';
import { Container, Typography, TextField, IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import axios from 'axios';
import ChatBubble from '../components/ChatBubble';
import Footer from '../components/Footer';


const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage) return;

    const sentMessage = {
      id: messages.length + 1,
      sender: 'You',
      message: newMessage,
    };

    setMessages((prevMessages) => [...prevMessages, sentMessage]);
    setNewMessage('');

    try {
      const response = await axios.post('http://127.0.0.1:5001/chat', { message: newMessage });

      const receivedMessage = {
        id: messages.length + 2,
        sender: 'OpenAI',
        message: response.data.response,
      };

      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div style={{ background: '#f0f0f0', minHeight: '100vh', padding: '5px 0' }}>
        <Typography variant="h4" align="center" sx={{ marginBottom: '24px', fontFamily: 'Comic Sans MS', color: '#9933ff' }}>
          CustomGPT
        </Typography>
      <Container maxWidth="sm" sx={{ background: 'white', borderRadius: '4px', padding: '15px' }}>
        
        <div
          style={{
            border: '1px solid lightgrey',
            borderRadius: '4px',
            padding: '16px',
            height: '375px',
            overflow: 'auto',
          }}
        >
          {messages.map((message) => (
            <ChatBubble key={message.id} sender={message.sender} message={message.message} />
          ))}
        </div>
        <form onSubmit={sendMessage} style={{ marginTop: '16px' }}>
          <TextField
            label="New Message"
            variant="outlined"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            InputProps={{
              endAdornment: (
                <IconButton type="submit">
                  <Send />
                </IconButton>
              ),
            }}
          />
        </form>
      </Container>
    <Footer sx={{ mt: 8, mb: 4 }} />
    </div>
  );
};

export default ChatPage;
