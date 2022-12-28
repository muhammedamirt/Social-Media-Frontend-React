import Sidebar from "../../components/Navigationbar/Sidenavbar"
import PostCard from "../../components/PostCard/PostCard"
import Story from "../../components/Story/Story"

const Home = () => {
  return (
    <div className="flex max-w-6xl mt-4 mx-auto gap-6">
      <div className="w-3/12">
        <Sidebar />
      </div>
      <div className="w-8/12">
        <Story />
        <PostCard />
      </div>
    </div>
  )
}

export default Home