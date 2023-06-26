import { Avatar, Box, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { SmartToy } from '@mui/icons-material';

const ChatBubble = ({ sender, message }) => {
  const isCurrentUser = sender === 'You';
  const alignRight = isCurrentUser ? 'flex-end' : 'flex-start';
  const bubbleColor = isCurrentUser ? '#DCF8C6' : '#E8E8E8';
  const textColor = isCurrentUser ? 'black' : 'inherit';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: alignRight,
        mb: 2,
      }}
    >
      {!isCurrentUser && (
        <Avatar sx={{ mr: 2 }}>
          <SmartToy/>
        </Avatar>
      )}
      <Box
        sx={{
          backgroundColor: bubbleColor,
          color: textColor,
          borderRadius: '10px',
          py: 1,
          px: 2,
        }}
      >
        {!isCurrentUser && (
          <Typography variant="body1" fontWeight="bold">
            {sender}
          </Typography>
        )}
        <Typography variant="body2">{message}</Typography>
      </Box>
      {isCurrentUser && (
        <Avatar sx={{ ml: 2 }}>
          <AccountCircle />
        </Avatar>
      )}
    </Box>
  );
};

export default ChatBubble;
