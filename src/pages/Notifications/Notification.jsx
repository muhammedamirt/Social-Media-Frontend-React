import Layout from "../../components/Layout/Layout"
import NotificationCard from "../../components/Notification/NotificationCard"

const Notification = () => {
  return (
    <div>
        <Layout>
            <h2 className="text-6xl mb-4 text-heavy-metal-500 opacity-40">Notifications</h2>
            <NotificationCard />
        </Layout>
    </div>
  )
}

export default Notification