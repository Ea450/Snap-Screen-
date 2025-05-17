import Header from "@/components/Header"
import VideoCard from "@/components/VideoCard"
import { dummyCards } from "@/constants"

const ProfileId = async ({ params }: ParamsWithSearch) => {
    const { id } = await params
    return (
        <div className="wrapper page">
            <Header title="Eslam Next JS"
                subHeader="ea450@gmail.com" userImg="/assets/images/dummy.jpg" />
            <section className="video-grid">
                {dummyCards.map((card) => (
                    <VideoCard {...card} key={card.id} />
                ))}
            </section>
        </div>
    )
}

export default ProfileId