
import Link from "next/link";
import Image from "next/legacy/image";
import Layout from "../../../components/layout";
import Seo from "../../../components/seo";
import Pagination from "../../../components/pagination";
import * as styles from "../../../styles/blog.module.scss"
import { getAllBlogs, blogsPerPage } from "../../../utils/mdQueries";

const PaginationPage = ({ blogs, numberPages }) => {
    return (
        <Layout>
            <Seo title="ブログ" description="これはブログページです" />
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <h1>Blog</h1>
                    {blogs.map((blog, index) => {
                        const { title, date, excerpt, image } = blog.frontmatter
                        return (
                            <div key={index} className={styles.blogCard}>
                                <div className={styles.textContainer}>
                                    <h3>{title}</h3>
                                    <p>{excerpt}</p>
                                    <p>{date}</p>
                                    <Link href={`/blog/${blog.slug}`}>Read More</Link>
                                </div>
                                <div className={styles.cardImg}>
                                    <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} />
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
                <Pagination numberPages={numberPages} />
            </div>
        </Layout>
    )
}

export default PaginationPage

export async function getStaticPaths() {
    const { numberPages } = await getAllBlogs()

    let paths = []
    Array.from({ length: numberPages }).slice(0, 1).forEach((_, i) => paths.push(`/blog/page/${i + 2}`))

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { orderedBlogs, numberPages } = await getAllBlogs()
    const currentPage = context.params.pagination
    const limitedBlogs = orderedBlogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage)
    return {
        props: {
            blogs: limitedBlogs,
            numberPages: numberPages,
        }
    }
}