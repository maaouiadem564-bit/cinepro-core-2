import { BaseProvider } from '@omss/framework';

export default class VidSrcProvider extends BaseProvider {
    readonly id = 'vidsrc';
    readonly name = 'VidSrc';
    readonly enabled = true;
    readonly BASE_URL = 'https://vidsrc.to';
    
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
