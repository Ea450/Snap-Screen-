import Image from "next/image"
import Link from "next/link"

const VideoCard = ({ id, title, thumbnail, username, createdAt, views, visibility, userImg }: VideoCardProps) => {
    return (
        <Link href={`/video/${id}`} className="video-card">
            <Image src={thumbnail} alt="thumbnail" width={290} height={160} className="thumbnail" />
            <article>
                <div>
                    <figure>
                        <Image src={userImg || ''} alt="avatar" width={34} height={34} className="rounded-full aspect-square" />
                        <figcaption>
                            <h3>{username}</h3>
                            <p>{visibility}</p>
                        </figcaption>
                    </figure>
                    <aside>
                        <Image src={userImg || ''} alt="views" width={16} height={16} />
                        <span>{views}</span>
                    </aside>
                </div>
                <h2>{title} -{' '} {createdAt.toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}</h2>
            </article>
        </Link>
    )
}

export default VideoCard