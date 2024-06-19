package api

import (
	"bytes"
	"encoding/json"
	"io"
	"log"
	"net/http"
)

type graphQLRequest struct {
	Query     string                 `json:"query"`
	Variables map[string]interface{} `json:"variables"`
}

func makeRequest(query string, variables map[string]interface{}, target interface{}) error {

	// Create the request payload
	requestPayload := graphQLRequest{
		Query:     query,
		Variables: variables,
	}

	// Marshal the payload into JSON
	jsonData, err := json.Marshal(requestPayload)
	if err != nil {
		return err
	}

	// Make the HTTP request
	url := "https://graphql.anilist.co/"
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	if err != nil {
		return err
	}

	// Set the content type
	req.Header.Set("Content-Type", "application/json")

	// Use the default HTTP client to perform the request
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return err
	}
	defer resp.Body.Close()

	// Read the raw response body
	rawBody, err := io.ReadAll(resp.Body)
	if err != nil {
		return err
	}

	if err := json.Unmarshal(rawBody, &target); err != nil {
		return err
	}

	return nil
}

func ReqestTrending(p int, pp int) []Anime {

	var dataResponse AnimeDataRepsonse
	variables := map[string]interface{}{
		"page":    p,
		"perPage": pp,
	}
	err := makeRequest(TRENDING, variables, &dataResponse)
	if err != nil {
		log.Fatal(err.Error())
	}

	return dataResponse.Data.Page.Media
}

func ReqestTitle(id int) {

}
