import React , {useState} from 'react';
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai';
import InstalledApplication from '../../CompositeComponents/InstalledApplication';

const InstallApplicationSection = () => {
    const [searchTerm,setSearchTerm] = useState('');
    

  return (
    <div className='application-container'>
       <div className = "search-workflow">
        <div>
            <AiOutlineSearch height = "100%" size={20}/>
            <input type = "text" placeholder = "Search" value = {searchTerm} onChange = {(e) => setSearchTerm(e.target.value)}/>
            <BsThreeDots className = "three-dots-icon"/>
        </div>

       </div>
       <div className = "Installed-Application">
        <InstalledApplication title = "chatGPT" caption = "Chatbot" image = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png" />
        <InstalledApplication title = "Midjourney" caption = "Create Illustrations" image = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/600px-Midjourney_Emblem.png?20230211175835" />
        <InstalledApplication title = "OpenAI helper" caption = "Act as Content writer" image = "https://img.freepik.com/premium-vector/artificial-intelligence-ai-robot-chat-bot-logo-vector-template_8169-533.jpg" active = {true} />
        <InstalledApplication title = "Spotify Mini Player" caption = "Find artist, play songs" image = "https://play-lh.googleusercontent.com/P2VMEenhpIsubG2oWbvuLGrs0GyyzLiDosGTg8bi8htRXg9Uf0eUtHiUjC28p1jgHzo" />
        <InstalledApplication title = "Notion" caption = "Engineering wiki" image = "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" />
        <InstalledApplication title = "Shortcuts" caption = "Run Installed Shortcuts" image = "https://help.apple.com/assets/63A24242BFFB1C67B5512B26/63A24245BFFB1C67B5512B35/en_US/d230a25cb974f8908871af04caad89a1.png" />
        <InstalledApplication title = "Github" caption = "Find repository" image = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
        <InstalledApplication title = "LastPass" caption = "Search for your logins" image = "https://cdn.iconscout.com/icon/free/png-256/free-lastpass-2752138-2284955.png" />
        <InstalledApplication title = "Slack" caption = "Open channel,user" image = "https://www.pngkey.com/png/full/984-9844126_slack-new-slack-logo-png.png" />
       </div>
    </div>
  )
}

export default InstallApplicationSection