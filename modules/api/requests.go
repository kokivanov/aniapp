package api

const (
	TRENDING = `query ($page: Int = 1, $perPage: Int = 1) {
					Page(page: $page, perPage: $perPage) {
						media(sort: TRENDING_DESC) {
						id
						idMal
						description
						title {
							romaji
							english
							native
							userPreferred
						}
								season
						seasonYear
						coverImage {
							extraLarge
							large
							medium
							color
						}
						airingSchedule {
							edges {
							node {
								airingAt
								episode
							}
							}
						}
						nextAiringEpisode {
							airingAt
							episode
						}
						bannerImage
						episodes
						status
						startDate {
							year
							month
							day
						}
						endDate {
							year
							month
							day
						}
						isAdult
						genres
						popularity
						}
					}
				}`
)
