package api

type Anime struct {
	ID                int               `json:"id"`
	IDMal             int               `json:"idMal"`
	Description       string            `json:"description"`
	Title             Title             `json:"title"`
	Season            string            `json:"season"`
	SeasonYear        int               `json:"seasonYear"`
	CoverImage        CoverImage        `json:"coverImage"`
	AiringSchedule    AiringSchedule    `json:"airingSchedule"`
	NextAiringEpisode NextAiringEpisode `json:"nextAiringEpisode"`
	BannerImage       string            `json:"bannerImage"`
	Episodes          int               `json:"episodes"`
	Status            string            `json:"status"`
	StartDate         StartDate         `json:"startDate"`
	EndDate           EndDate           `json:"endDate"`
	IsAdult           bool              `json:"isAdult"`
	Genres            []string          `json:"genres"`
	Popularity        int               `json:"popularity"`
}
