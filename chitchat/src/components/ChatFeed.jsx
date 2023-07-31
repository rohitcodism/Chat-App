import MessageForm from "./MessageForm";
import MyMessage from "./Mymessage";
import TheirMessage from "./TheirMessage";

const ChatFeed =  ()=> {
    const { chats, activeChat, userName, messages } = props;
    
    const chat = chats && chats[activeChat]

    const renderMessages = () => {
        const keys = Object.keys(messages);
        console.log(keys);
    }
    return(
        <div>
            ChatFeed
        </div>
    );
}

export default ChatFeed;