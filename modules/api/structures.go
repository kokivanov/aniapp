package api

type AnimeTitle struct {
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
type AiringNode struct {
	AiringAt int `json:"airingAt"`
	Episode  int `json:"episode"`
}
type AiringEdges struct {
	Node AiringNode `json:"node"`
}
type AiringSchedule struct {
	Edges []AiringEdges `json:"edges"`
}
type NextAiringEpisode struct {
	AiringAt int `json:"airingAt"`
	Episode  int `json:"episode"`
}
type Date struct {
	Year  int `json:"year"`
	Month int `json:"month"`
	Day   int `json:"day"`
}
type PartialAnimePage struct {
	Media []ParialAnime `json:"media"`
}
type PartialAnimeData struct {
	Page PartialAnimePage `json:"Page"`
}
type FullAnimeData struct {
	Media FullAnime `json:"Media"`
}
type AnimeTag struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
	Rank int    `json:"rank"`
}
type AnimeRank struct {
	Rank    int    `json:"rank"`
	Year    any    `json:"year"`
	Context string `json:"context"`
	Type    string `json:"type"`
	AllTime bool   `json:"allTime"`
}
type Trailer struct {
	Thumbnail string `json:"thumbnail"`
	Site      string `json:"site"`
}
type AnimeReviews struct {
	Nodes []ReviewNode `json:"nodes"`
}
type User struct {
	Name string `json:"name"`
}
type ReviewNode struct {
	User    User   `json:"user"`
	Body    string `json:"body"`
	Score   int    `json:"score"`
	SiteURL string `json:"siteUrl"`
}
type Characters struct {
	Nodes []CharacterNode `json:"nodes"`
}
type Name struct {
	Full          string `json:"full"`
	Native        string `json:"native"`
	UserPreferred string `json:"userPreferred"`
}
type Image struct {
	Large  string `json:"large"`
	Medium string `json:"medium"`
}
type CharacterNode struct {
	Name    Name   `json:"name"`
	SiteURL string `json:"siteUrl"`
	Image   Image  `json:"image"`
}
type Recommendations struct {
	Nodes []RecommendationNode `json:"nodes"`
}
type RecommendationTitle struct {
	Romaji        string `json:"romaji"`
	English       string `json:"english"`
	Native        string `json:"native"`
	UserPreferred string `json:"userPreferred"`
}
type MediaRecommendation struct {
	ID         int                 `json:"id"`
	IDMal      int                 `json:"idMal"`
	IsAdult    bool                `json:"isAdult"`
	Title      RecommendationTitle `json:"title"`
	CoverImage CoverImage          `json:"coverImage"`
}
type RecommendationNode struct {
	MediaRecommendation MediaRecommendation `json:"mediaRecommendation"`
}
type Relations struct {
	Edges []RelationEdge `json:"edges"`
}
type Title struct {
	Romaji        string `json:"romaji"`
	English       string `json:"english"`
	Native        string `json:"native"`
	UserPreferred string `json:"userPreferred"`
}
type RelationNode struct {
	ID         int        `json:"id"`
	IDMal      int        `json:"idMal"`
	IsAdult    bool       `json:"isAdult"`
	Title      Title      `json:"title"`
	CoverImage CoverImage `json:"coverImage"`
}
type RelationEdge struct {
	RelationType string       `json:"relationType"`
	Node         RelationNode `json:"node"`
}
