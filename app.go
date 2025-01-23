package main

import (
	"anitorrent/modules/api"
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) SafeQuit(p int, pp int) {
	a.ctx.Done()
}

func (a *App) GetTrendingList(p int, pp int) []api.ParialAnime {
	return api.ReqestTrending(p, pp)
}

func (a *App) GetFiltered(p int, pp int, req *string, year *int16, genres *[]string, isAdult *bool, statusIn *[]string, tags *[]string) []api.ParialAnime {
	return api.ReqestSearch(p, pp, req, year, genres, isAdult, statusIn, tags)
}

func (a *App) GetFullInfo(id int) api.FullAnime {
	return api.ReqestFullInfo(id)
}
