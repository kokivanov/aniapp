export namespace api {
	
	export class AnimeRank {
	    rank: number;
	    year: any;
	    context: string;
	    type: string;
	    allTime: boolean;
	
	    static createFrom(source: any = {}) {
	        return new AnimeRank(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.rank = source["rank"];
	        this.year = source["year"];
	        this.context = source["context"];
	        this.type = source["type"];
	        this.allTime = source["allTime"];
	    }
	}
	export class User {
	    name: string;
	
	    static createFrom(source: any = {}) {
	        return new User(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	    }
	}
	export class ReviewNode {
	    user: User;
	    body: string;
	    score: number;
	    siteUrl: string;
	
	    static createFrom(source: any = {}) {
	        return new ReviewNode(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.user = this.convertValues(source["user"], User);
	        this.body = source["body"];
	        this.score = source["score"];
	        this.siteUrl = source["siteUrl"];
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
	export class AnimeReviews {
	    nodes: ReviewNode[];
	
	    static createFrom(source: any = {}) {
	        return new AnimeReviews(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.nodes = this.convertValues(source["nodes"], ReviewNode);
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
	export class AnimeTag {
	    id: number;
	    name: string;
	    rank: number;
	
	    static createFrom(source: any = {}) {
	        return new AnimeTag(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.name = source["name"];
	        this.rank = source["rank"];
	    }
	}
	export class AnimeTitle {
	    romaji: string;
	    english: string;
	    native: string;
	    userPreferred: string;
	
	    static createFrom(source: any = {}) {
	        return new AnimeTitle(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.romaji = source["romaji"];
	        this.english = source["english"];
	        this.native = source["native"];
	        this.userPreferred = source["userPreferred"];
	    }
	}
	export class Image {
	    large: string;
	    medium: string;
	
	    static createFrom(source: any = {}) {
	        return new Image(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.large = source["large"];
	        this.medium = source["medium"];
	    }
	}
	export class Name {
	    full: string;
	    native: string;
	    userPreferred: string;
	
	    static createFrom(source: any = {}) {
	        return new Name(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.full = source["full"];
	        this.native = source["native"];
	        this.userPreferred = source["userPreferred"];
	    }
	}
	export class CharacterNode {
	    name: Name;
	    siteUrl: string;
	    image: Image;
	
	    static createFrom(source: any = {}) {
	        return new CharacterNode(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = this.convertValues(source["name"], Name);
	        this.siteUrl = source["siteUrl"];
	        this.image = this.convertValues(source["image"], Image);
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
	export class Characters {
	    nodes: CharacterNode[];
	
	    static createFrom(source: any = {}) {
	        return new Characters(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.nodes = this.convertValues(source["nodes"], CharacterNode);
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
	export class Date {
	    year: number;
	    month: number;
	    day: number;
	
	    static createFrom(source: any = {}) {
	        return new Date(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.year = source["year"];
	        this.month = source["month"];
	        this.day = source["day"];
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
	export class RelationNode {
	    id: number;
	    idMal: number;
	    isAdult: boolean;
	    title: Title;
	    coverImage: CoverImage;
	
	    static createFrom(source: any = {}) {
	        return new RelationNode(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.idMal = source["idMal"];
	        this.isAdult = source["isAdult"];
	        this.title = this.convertValues(source["title"], Title);
	        this.coverImage = this.convertValues(source["coverImage"], CoverImage);
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
	export class RelationEdge {
	    relationType: string;
	    node: RelationNode;
	
	    static createFrom(source: any = {}) {
	        return new RelationEdge(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.relationType = source["relationType"];
	        this.node = this.convertValues(source["node"], RelationNode);
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
	export class Relations {
	    edges: RelationEdge[];
	
	    static createFrom(source: any = {}) {
	        return new Relations(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.edges = this.convertValues(source["edges"], RelationEdge);
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
	export class RecommendationTitle {
	    romaji: string;
	    english: string;
	    native: string;
	    userPreferred: string;
	
	    static createFrom(source: any = {}) {
	        return new RecommendationTitle(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.romaji = source["romaji"];
	        this.english = source["english"];
	        this.native = source["native"];
	        this.userPreferred = source["userPreferred"];
	    }
	}
	export class MediaRecommendation {
	    id: number;
	    idMal: number;
	    isAdult: boolean;
	    title: RecommendationTitle;
	    coverImage: CoverImage;
	
	    static createFrom(source: any = {}) {
	        return new MediaRecommendation(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.idMal = source["idMal"];
	        this.isAdult = source["isAdult"];
	        this.title = this.convertValues(source["title"], RecommendationTitle);
	        this.coverImage = this.convertValues(source["coverImage"], CoverImage);
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
	export class RecommendationNode {
	    mediaRecommendation: MediaRecommendation;
	
	    static createFrom(source: any = {}) {
	        return new RecommendationNode(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.mediaRecommendation = this.convertValues(source["mediaRecommendation"], MediaRecommendation);
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
	export class Recommendations {
	    nodes: RecommendationNode[];
	
	    static createFrom(source: any = {}) {
	        return new Recommendations(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.nodes = this.convertValues(source["nodes"], RecommendationNode);
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
	export class Trailer {
	    thumbnail: string;
	    site: string;
	
	    static createFrom(source: any = {}) {
	        return new Trailer(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.thumbnail = source["thumbnail"];
	        this.site = source["site"];
	    }
	}
	export class FullAnime {
	    id: number;
	    idMal: number;
	    coverImage: CoverImage;
	    averageScore: number;
	    bannerImage: string;
	    episodes: number;
	    season: string;
	    seasonYear: number;
	    isRecommendationBlocked: boolean;
	    status: string;
	    countryOfOrigin: string;
	    isLicensed: boolean;
	    popularity: number;
	    tags: AnimeTag[];
	    startDate: Date;
	    endDate: Date;
	    isAdult: boolean;
	    rankings: AnimeRank[];
	    genres: string[];
	    trailer: Trailer;
	    description: string;
	    title: AnimeTitle;
	    reviews: AnimeReviews;
	    characters: Characters;
	    recommendations: Recommendations;
	    relations: Relations;
	
	    static createFrom(source: any = {}) {
	        return new FullAnime(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.idMal = source["idMal"];
	        this.coverImage = this.convertValues(source["coverImage"], CoverImage);
	        this.averageScore = source["averageScore"];
	        this.bannerImage = source["bannerImage"];
	        this.episodes = source["episodes"];
	        this.season = source["season"];
	        this.seasonYear = source["seasonYear"];
	        this.isRecommendationBlocked = source["isRecommendationBlocked"];
	        this.status = source["status"];
	        this.countryOfOrigin = source["countryOfOrigin"];
	        this.isLicensed = source["isLicensed"];
	        this.popularity = source["popularity"];
	        this.tags = this.convertValues(source["tags"], AnimeTag);
	        this.startDate = this.convertValues(source["startDate"], Date);
	        this.endDate = this.convertValues(source["endDate"], Date);
	        this.isAdult = source["isAdult"];
	        this.rankings = this.convertValues(source["rankings"], AnimeRank);
	        this.genres = source["genres"];
	        this.trailer = this.convertValues(source["trailer"], Trailer);
	        this.description = source["description"];
	        this.title = this.convertValues(source["title"], AnimeTitle);
	        this.reviews = this.convertValues(source["reviews"], AnimeReviews);
	        this.characters = this.convertValues(source["characters"], Characters);
	        this.recommendations = this.convertValues(source["recommendations"], Recommendations);
	        this.relations = this.convertValues(source["relations"], Relations);
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
	
	
	
	export class ParialAnime {
	    id: number;
	    idMal: number;
	    startDate: Date;
	    coverImage: CoverImage;
	    season: string;
	    seasonYear: number;
	    averageScore: number;
	    bannerImage: string;
	    episodes: number;
	    isRecommendationBlocked: boolean;
	    status: string;
	    countryOfOrigin: string;
	    isLicensed: boolean;
	    popularity: number;
	    isAdult: boolean;
	    genres: string[];
	    description: string;
	    title: AnimeTitle;
	
	    static createFrom(source: any = {}) {
	        return new ParialAnime(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.idMal = source["idMal"];
	        this.startDate = this.convertValues(source["startDate"], Date);
	        this.coverImage = this.convertValues(source["coverImage"], CoverImage);
	        this.season = source["season"];
	        this.seasonYear = source["seasonYear"];
	        this.averageScore = source["averageScore"];
	        this.bannerImage = source["bannerImage"];
	        this.episodes = source["episodes"];
	        this.isRecommendationBlocked = source["isRecommendationBlocked"];
	        this.status = source["status"];
	        this.countryOfOrigin = source["countryOfOrigin"];
	        this.isLicensed = source["isLicensed"];
	        this.popularity = source["popularity"];
	        this.isAdult = source["isAdult"];
	        this.genres = source["genres"];
	        this.description = source["description"];
	        this.title = this.convertValues(source["title"], AnimeTitle);
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

