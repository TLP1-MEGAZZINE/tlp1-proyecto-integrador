import dayjs from "dayjs";
import { useFetchData } from "../hooks/useFetchGet";


export const Posteos = ({ selectedRubro }) => {
    const url = 'http://localhost:5000/findAllPosts'
    
    const posts = useFetchData(url)

    console.log(posts);

    return (
        <>
            {
                selectedRubro == 0 ? (

                    posts.map((post, id_post) => (

                        <div key={id_post} className="text-muted pt-3 mx-5">
                            <div className="d-flex ">

                                <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Placeholder</title>
                                    <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                        dy=".3em">32x32</text>
                                </svg>
                                <p className="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong className="d-block text-gray-dark">{post.user.user_name}</strong>
                                    <strong className="d-block text-gray-dark">{post.user.user_email}</strong>
                                    <strong className="d-block text-gray-dark">{post.post_title}</strong>
                                    {post.post_content}
                                    <br />
                                    <span>Rubro: {post.rubro.desc_rubro}</span><br />
                                    <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span><br />
                                    <span>Localidad: {post.id_local}</span>
                                </p>

                            </div>
                        </div>
                    )))
                    :

                    selectedRubro > 0 ? (

                        posts.filter(post => post.rubro.id_rubro == selectedRubro)
                            .map((post, id_post) => (

                                <div key={id_post} className="d-flex text-muted pt-3">
                                    <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                        xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                        preserveAspectRatio="xMidYMid slice" focusable="false">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff"
                                            dy=".3em">32x32</text>
                                    </svg>
                                    <p className="pb-3 mb-0 small lh-sm border-bottom">
                                        <strong className="d-block text-gray-dark">{post.user.user_name}</strong>
                                        <strong className="d-block text-gray-dark">{post.user.user_email}</strong>
                                        <strong className="d-block text-gray-dark">{post.post_title}</strong>
                                        {post.post_content}
                                        <br />
                                        <span>Rubro: {post.rubro.desc_rubro}</span><br />
                                        <span>Fecha: {dayjs(post.updatedAt).format('DD/MM/YYYY hh:mm')}</span><br />
                                        <span>Localidad: {post.id_local}</span>

                                    </p>
                                </div>
                            ))) : <div></div>
            }
        </>
    )


}