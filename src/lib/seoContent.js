import { useSanityClient, groq } from "astro-sanity";

export async function allCompanyInformation() {
    const query = groq`
        *[_type == "companyInformation"] {
            "companyName": companyName,
            "companyAddress": companyAddress,
            "companyPhone": companyPhone,
            "companyEmail": companyEmail,
            "companyWebsite": companyWebsite,
            "mainImage": mainImage.asset->url,
            publishedAt,
            body,
            seoTitle,
            seoDescription,
            seoKeywords
        }
    `;
    const companyInfo = await useSanityClient().fetch(query);
    return companyInfo;
}
