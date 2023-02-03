import { useDispatch } from "react-redux"
import Layout from "../../../components/User/Layout/Layout"
import SettingsCard from "../../../components/User/Settings/SettingsCard"
import { routeChanged } from "../../../redux/topLoadingBar"
const Settings = () => {
  const dispatch = useDispatch()
  dispatch(routeChanged())
  return (
    <div>
      <Layout>
        <h2 className="text-2xl underline mb-4 text-heavy-metal-500 opacity-40">Settings</h2>
        <SettingsCard />
      </Layout>
    </div>
  )
}

export default Settings