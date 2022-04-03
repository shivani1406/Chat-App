
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID="9aacb93e-d46a-4391-b40b-cdca47a8ce04"
      userName="shivani"
      userSecret="Chat123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
      
  );
}

export default App;
