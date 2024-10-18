import { nanoid } from 'npm:nanoid@5.0.7'

/**
 *  Database Functions For Short URL
 */
const kv = await Deno.openKv();
export async function generateShortURL(url: string) {
    const randomId = nanoid(10);
    await kv.set([randomId], url);
    return randomId;
}

export async function getLongURL(randomId: string) {
    const longURL = await kv.get([randomId]);
    return longURL.value;
}