import axios from 'axios'
import { atom, selector } from 'recoil'

export const notifications  = atom({
    key: "notifications",
    default: selector({
        key: "asyncDataQuerySelector",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})


export const totalNotifCountSelector = selector({
    key: "totalNotifCountSelector",
    get: ({get}) => {
        const allData = get(notifications)
        return allData.network + allData.jobs + allData.messaging + allData.notifications
    }
})