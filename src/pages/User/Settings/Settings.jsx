import Layout from "../../../components/User/Layout/Layout"
import SettingsCard from "../../../components/User/Settings/SettingsCard"
const Settings = () => {
  return (
    <div>
        <Layout>
        <h2 className="text-6xl mb-4 text-heavy-metal-500 opacity-40">Settings</h2>
            <SettingsCard />
        </Layout>
    </div>
  )
}

export default Settings