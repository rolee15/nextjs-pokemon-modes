
// Force revalidation of a static page by calling /api/revalidate
export default async function handler(req, res) {
    // revalidate all urls in the array found in body
    for (const url of req.body) {
        await res.unstable_revalidate(url);
    }
    res.status(200).json({ revalidate: true })
}