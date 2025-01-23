package api

const (
	SHORT_INFO = `query ($page: Int = 1, $perPage: Int = 1, $sort: [MediaSort] = [TRENDING_DESC]) {
					Page(page: $page, perPage: $perPage) {
						media(sort: $sort, type: ANIME) {
						id
						idMal
						title {
							romaji
							english
							native
							userPreferred
						}
						season
						seasonYear
						averageScore
						startDate {
							year
							month
							day
						}	
						coverImage {
							extraLarge
							large
							medium
							color
						}
						bannerImage
						episodes
						status
						isAdult
						genres
						popularity
						}
					}
				}`

	ANIME_FULL = `query ($id: Int = 1 ){
					Media (id: $id, type: ANIME) {
					id
					idMal
					coverImage {
						extraLarge
						large
						medium
						color
					}
						averageScore
					bannerImage
					episodes
						isRecommendationBlocked
						episodes
					status
						countryOfOrigin
						isLicensed
						popularity
						tags {
						id
						name
						rank
						}
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
					rankings {
						rank
						year
						context
						type
						allTime
					}
					genres
					trailer {
						thumbnail
						site
					}
					
					description
					popularity
					title {
						romaji
						english
						native
						userPreferred
					}
					reviews {
						nodes {
							user {
							name
							}
							body
							score
							siteUrl
						}
						
					}
						characters {
						nodes {
						name {
							full
							native
							userPreferred
						}
						siteUrl
						image {
							large
							medium
						}
						}
					}
						recommendations {
						nodes {
						mediaRecommendation {
							id
							idMal
							isAdult
							title {
							romaji
							english
							native
							userPreferred
							}
							coverImage {
							extraLarge
							large
							medium
							color
							}
						}
						}
					}
						relations {
						edges {
						relationType
						node {
							id
							idMal
							isAdult
							title {
							romaji
							english
							native
							userPreferred
							}
							coverImage {
							extraLarge
							large
							medium
							color
							}
						}
						}
					}
					}
				}`
)
