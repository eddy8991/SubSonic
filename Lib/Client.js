import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 'vs28hw36',
    dataset: 'production',
    apiVersion: '2023-02-22',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);