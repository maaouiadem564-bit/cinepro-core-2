import { BaseProvider } from '@omss/framework';

export default class SuperEmbedProvider extends BaseProvider {
    readonly id = 'superembed';
    readonly name = 'SuperEmbed';
    readonly enabled = true;
    readonly BASE_URL = 'https://multiembed.mov';
    
    readonly capabilities = {
        supportedContentTypes: ['movies', 'tv']
    };

    async getMovieSources(media) {
        return {
            sources: [{
                url: `${this.BASE_URL}/?video_id=${media.tmdbId}&tmdb=1`,
                type: 'iframe',
                quality: 'auto',
                provider: { id: this.id, name: this.name }
            }],
            subtitles: [],
            diagnostics: []
        };
    }

    async getTVSources(media) {
        const { tmdbId, season, episode } = media;
        return {
            sources: [{
                url: `${this.BASE_URL}/?video_id=${tmdbId}&tmdb=1&s=${season}&e=${episode}`,
                type: 'iframe',
                quality: 'auto',
                provider: { id: this.id, name: this.name }
            }],
            subtitles: [],
            diagnostics: []
        };
    }
}
