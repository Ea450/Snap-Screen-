import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { getAllVideos } from "@/lib/actions/video";
import Image from "next/image";

const Home = async ({ searchParams }: SearchParams) => {

  const { query, filter, page } = await searchParams;

  const { videos } = await getAllVideos(query, filter, Number(page) || 1)

  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard key={video.id} {...video} userImg={user?.image || ""}
              thumbnail={video.thumbnailUrl}
              username={user?.name || 'Guest'} />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <figure>
            <Image src='/assets/icons/video.svg' alt="icon" width={46} height={46} />
          </figure>
          <article>
            <h1>No videos Found</h1>
            <p>Try adjusting your search</p>
          </article>
        </section>
      )}

    </main>
  )
}

export default Home;