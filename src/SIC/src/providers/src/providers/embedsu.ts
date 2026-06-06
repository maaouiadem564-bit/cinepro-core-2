import { BaseProvider } from '@omss/framework';

export default class EmbedSuProvider extends BaseProvider {
    readonly id = 'embedsu';
    readonly name = 'Embed.su';
    readonly enabled = true;
    readonly BASE_URL = 'https://embed.su';
    
    readonly capabilities = {
        supportedContentTypes: ['movies', 'tv']
    };

    async getMovieSources(media) {
        return {
            sources: [{
                url: `${this.BASE_URL}/embed/movie/${media.tmdbId}`,
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
                url: `${this.BASE_URL}/embed/tv/${tmdbId}/${season}/${episode}`,
                type: 'iframe',
                quality: 'auto',
                provider: { id: this.id, name: this.name }
            }],
            subtitles: [],
            diagnostics: []
        };
    }
}
