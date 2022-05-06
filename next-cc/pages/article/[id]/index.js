import Meta from '../../../components/Meta'
import {server} from '../../../config'
import Link from "next/link"
//import { useRouter } from "next/router"

const article = ({article}) => {
// Nested routing
// const router = useRouter() //going to contain any parameters that are in the route
// const {id} = router.query

  return (
    <>
        <Meta title={article.title} description={article.excerpt}/>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br/>
        <Link href="/">Go back</Link>
    </>
  )
}

//can pass in context to get the id of whatever is within the url

// getServerSideProps()
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return{
//         props: {
//             article
//         }
//     }
// }

// getStaticPaths()

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return{
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const articles = await res.json()

//     const ids = articles.map(article => article.id)

//     const paths = ids.map(id => ({params: {id: id.toString()}}))

//     return{
//         paths,
//         fallback: false //if you go to something that does not exist in the data it is going to return a 404 page
//     }

// }

//fetch from API
export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return{
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params: {id: id.toString()}}))

    return{
        paths,
        fallback: false //if you go to something that does not exist in the data it is going to return a 404 page
    }

}

export default article