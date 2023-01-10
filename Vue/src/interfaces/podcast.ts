interface Podcast {
    id: string,
    title: string,
    publisher: string,
    category?: string,
    image: string,
    thumbnail: string,
    listennotes_url: string,
    total_episodes: number,
    explicit_content?: boolean,
    description: string,
    itunes_id: number,
    rss: string,
    language: string,
    country: string,
    website: any,
    is_claimed: boolean,
    type: string,
    genre_ids: any,
}

export default Podcast