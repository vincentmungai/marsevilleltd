import { useSanityClient, groq } from "astro-sanity";

export async function allArticles() {
    const query = groq`
        *[_type == "blogPost"]{
            title,
            "slug": slug.current,
            "coverImage": coverImage.asset->url,
            date,
            author,
            excerpt,
            content
        }
    `;
    const articles = await useSanityClient().fetch(query);
    return articles;
}
