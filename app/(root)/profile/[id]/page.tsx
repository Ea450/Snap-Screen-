import { redirect } from "next/navigation";

import { getAllVideosByUser } from "@/lib/actions/video";
import VideoCard from "@/components/VideoCard";
import Image from "next/image";
import Header from "@/components/Header";


const ProfilePage = async ({ params, searchParams }: ParamsWithSearch) => {
    const { id } = await params;
    const { query, filter } = await searchParams;

    const { user, videos } = await getAllVideosByUser(id, query, filter);
    if (!user) redirect("/404");

    return (
        <main className="wrapper page">
            <Header title={user.name} subHeader={user.email} userImg={user.image || ""} />
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
    );
};

export default ProfilePage;