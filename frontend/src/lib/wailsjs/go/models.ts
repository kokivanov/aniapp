export namespace api {
	
	export class Node {
	    airingAt: number;
	    episode: number;
	
	    static createFrom(source: any = {}) {
	        return new Node(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.airingAt = source["airingAt"];
	        this.episode = source["episode"];
	    }
	}
	export class Edges {
	    node: Node;
	
	    static createFrom(source: any = {}) {
	        return new Edges(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.node = this.convertValues(source["node"], Node);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class AiringSchedule {
	    edges: Edges[];
	
	    static createFrom(source: any = {}) {
	        return new AiringSchedule(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.edges = this.convertValues(source["edges"], Edges);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class EndDate {
	    year: number;
	    month: number;
	    day: number;
	
	    static createFrom(source: any = {}) {
	        return new EndDate(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.year = source["year"];
	        this.month = source["month"];
	        this.day = source["day"];
	    }
	}
	export class StartDate {
	    year: number;
	    month: number;
	    day: number;
	
	    static createFrom(source: any = {}) {
	        return new StartDate(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.year = source["year"];
	        this.month = source["month"];
	        this.day = source["day"];
	    }
	}
	export class NextAiringEpisode {
	    airingAt: number;
	    episode: number;
	
	    static createFrom(source: any = {}) {
	        return new NextAiringEpisode(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.airingAt = source["airingAt"];
	        this.episode = source["episode"];
	    }
	}
	export class CoverImage {
	    extraLarge: string;
	    large: string;
	    medium: string;
	    color: string;
	
	    static createFrom(source: any = {}) {
	        return new CoverImage(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.extraLarge = source["extraLarge"];
	        this.large = source["large"];
	        this.medium = source["medium"];
	        this.color = source["color"];
	    }
	}
	export class Title {
	    romaji: string;
	    english: string;
	    native: string;
	    userPreferred: string;
	
	    static createFrom(source: any = {}) {
	        return new Title(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.romaji = source["romaji"];
	        this.english = source["english"];
	        this.native = source["native"];
	        this.userPreferred = source["userPreferred"];
	    }
	}
	export class Anime {
	    id: number;
	    idMal: number;
	    description: string;
	    title: Title;
	    season: string;
	    seasonYear: number;
	    coverImage: CoverImage;
	    airingSchedule: AiringSchedule;
	    nextAiringEpisode: NextAiringEpisode;
	    bannerImage: string;
	    episodes: number;
	    status: string;
	    startDate: StartDate;
	    endDate: EndDate;
	    isAdult: boolean;
	    genres: string[];
	    popularity: number;
	
	    static createFrom(source: any = {}) {
	        return new Anime(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.idMal = source["idMal"];
	        this.description = source["description"];
	        this.title = this.convertValues(source["title"], Title);
	        this.season = source["season"];
	        this.seasonYear = source["seasonYear"];
	        this.coverImage = this.convertValues(source["coverImage"], CoverImage);
	        this.airingSchedule = this.convertValues(source["airingSchedule"], AiringSchedule);
	        this.nextAiringEpisode = this.convertValues(source["nextAiringEpisode"], NextAiringEpisode);
	        this.bannerImage = source["bannerImage"];
	        this.episodes = source["episodes"];
	        this.status = source["status"];
	        this.startDate = this.convertValues(source["startDate"], StartDate);
	        this.endDate = this.convertValues(source["endDate"], EndDate);
	        this.isAdult = source["isAdult"];
	        this.genres = source["genres"];
	        this.popularity = source["popularity"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	
	
	
	
	

}

