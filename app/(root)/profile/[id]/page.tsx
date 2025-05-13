import Header from "@/components/Header"

const ProfileId = async ({ params }: ParamsWithSearch) => {
    const { id } = await params
    return (
        <div className="wrapper page">
            <Header title="Eslam Next JS"
                subHeader="ea450@gmail.com" userImg="/assets/images/dummy.jpg" />
            <h1 className="text-2xl font-karla">user id :{id}</h1>
        </div>
    )
}

export default ProfileId