import { useEffect, useState } from 'react';
//styles
import './App.css'
//contexts
import { ThemeContext } from './AllContexts';
//components
import SideBar from './components/SideBar.jsx';
import AppBody from './components/AppBody.jsx';
import { updateByLikeDislike } from './functions/function.jsx';
//assets
import likeOutlinedIcon from "./assets/like-outline-black.svg";
import dislikeOutlinedIcon from "./assets/dislike-outline-black.svg";
import likeFilledIcon from "./assets/like-filled-black.svg";
import dislikeFilledIcon from "./assets/dislike-filled-black.svg";


function App() {
  //states
  const [theme, setTheme] = useState("light");
  const [sidebarON, setSideBarON] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [pastConvo, setPastConvo] = useState(false);

  //variables
  const iconsData = {likeOutlinedIcon, dislikeOutlinedIcon, likeFilledIcon, dislikeFilledIcon};
  //functions
  const handleSideBar = () => setSideBarON(!sidebarON);
  const newChatClick = () => {
    //save current chat to pastConversations
    //setCurrentChat to empty []
    setCurrentChat([]);
    setPastConvo(false);
  }
  const addChatMsg = (userMsg, botReply) => {
    setCurrentChat([...currentChat, userMsg, botReply]);
  }
  const clearCurrentChat = () => setCurrentChat([]);
  const handlePastConvo = () => setPastConvo(!pastConvo);
  const likeDislikeReply = (chatCardId, reaction) => setCurrentChat(updateByLikeDislike(chatCardId, reaction, currentChat, iconsData));
  
  return (
    <>
    <ThemeContext.Provider value={[theme, setTheme]}>
      <main>
        <SideBar newChatClick={newChatClick} handleSideBar={handleSideBar} sidebarON={sidebarON} handlePastConvo={handlePastConvo}/>
        <AppBody likeDislikeReply={likeDislikeReply} pastConvo={pastConvo} clearCurrentChat={clearCurrentChat} addChatMsg={addChatMsg} currentChat={currentChat} handleSideBar={handleSideBar} sidebarON={sidebarON}/>
      </main>
    </ThemeContext.Provider>
    </>
  )
}

export default App;
