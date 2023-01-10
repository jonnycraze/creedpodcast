interface PodcastCategory {
    has_next: boolean;
    has_previous: boolean;
    id: number;
    listennotes_url: string;
    name: string;
    next_page_number: number;
    page_number: number;
    podcasts: [];
    previous_page_number: number;
    total: number;
}

export default PodcastCategory;