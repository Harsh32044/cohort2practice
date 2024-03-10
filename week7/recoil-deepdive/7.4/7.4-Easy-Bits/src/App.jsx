import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotifCountSelector } from "./atoms";
import { useEffect } from "react";
import axios from 'axios'

function App() {
  return (
    
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>

  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotifCount = useRecoilValue(totalNotifCountSelector)

  useEffect(() => {
    //fetch
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])
  return (
    <div>
      <button>Home</button><br />

      <button>My Network {networkCount.network > 99 ? "99+": networkCount.network}</button><br />
      <button>Jobs {networkCount.jobs > 99 ? "99+": networkCount.jobs}</button><br />
      <button>Messaging {networkCount.messaging > 99 ? "99+": networkCount.messaging}</button><br />
      <button>Notifications {networkCount.notifications > 99 ? "99+": networkCount.notifications}</button><br />

      <button>Me {totalNotifCount}</button><br />
    </div>
  );
}

export default App;