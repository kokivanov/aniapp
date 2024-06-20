package api

type ParialAnime struct {
	ID                      int        `json:"id"`
	IDMal                   int        `json:"idMal"`
	StartDate               Date       `json:"startDate"`
	CoverImage              CoverImage `json:"coverImage"`
	Season                  string     `json:"season"`
	SeasonYear              int        `json:"seasonYear"`
	AverageScore            int        `json:"averageScore"`
	BannerImage             string     `json:"bannerImage"`
	Episodes                int        `json:"episodes"`
	IsRecommendationBlocked bool       `json:"isRecommendationBlocked"`
	Status                  string     `json:"status"`
	CountryOfOrigin         string     `json:"countryOfOrigin"`
	IsLicensed              bool       `json:"isLicensed"`
	Popularity              int        `json:"popularity"`
	IsAdult                 bool       `json:"isAdult"`
	Genres                  []string   `json:"genres"`
	Description             string     `json:"description"`
	Title                   AnimeTitle `json:"title"`
}

type FullAnime struct {
	ID                      int             `json:"id"`
	IDMal                   int             `json:"idMal"`
	CoverImage              CoverImage      `json:"coverImage"`
	AverageScore            int             `json:"averageScore"`
	BannerImage             string          `json:"bannerImage"`
	Episodes                int             `json:"episodes"`
	Season                  string          `json:"season"`
	SeasonYear              int             `json:"seasonYear"`
	IsRecommendationBlocked bool            `json:"isRecommendationBlocked"`
	Status                  string          `json:"status"`
	CountryOfOrigin         string          `json:"countryOfOrigin"`
	IsLicensed              bool            `json:"isLicensed"`
	Popularity              int             `json:"popularity"`
	Tags                    []AnimeTag      `json:"tags"`
	StartDate               Date            `json:"startDate"`
	EndDate                 Date            `json:"endDate"`
	IsAdult                 bool            `json:"isAdult"`
	Rankings                []AnimeRank     `json:"rankings"`
	Genres                  []string        `json:"genres"`
	Trailer                 Trailer         `json:"trailer"`
	Description             string          `json:"description"`
	Title                   AnimeTitle      `json:"title"`
	Reviews                 AnimeReviews    `json:"reviews"`
	Characters              Characters      `json:"characters"`
	Recommendations         Recommendations `json:"recommendations"`
	Relations               Relations       `json:"relations"`
}
