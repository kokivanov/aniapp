package api

type Title struct {
	Romaji        string `json:"romaji"`
	English       string `json:"english"`
	Native        string `json:"native"`
	UserPreferred string `json:"userPreferred"`
}
type CoverImage struct {
	ExtraLarge string `json:"extraLarge"`
	Large      string `json:"large"`
	Medium     string `json:"medium"`
	Color      string `json:"color"`
}
type Node struct {
	AiringAt int `json:"airingAt"`
	Episode  int `json:"episode"`
}
type Edges struct {
	Node Node `json:"node"`
}
type AiringSchedule struct {
	Edges []Edges `json:"edges"`
}
type NextAiringEpisode struct {
	AiringAt int `json:"airingAt"`
	Episode  int `json:"episode"`
}
type StartDate struct {
	Year  int `json:"year"`
	Month int `json:"month"`
	Day   int `json:"day"`
}
type EndDate struct {
	Year  int `json:"year"`
	Month int `json:"month"`
	Day   int `json:"day"`
}
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
type Page struct {
	Media []Anime `json:"media"`
}
type AnimeData struct {
	Page Page `json:"Page"`
}
