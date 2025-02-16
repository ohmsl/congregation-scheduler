package pocketbase

import (
	"github.com/pocketbase/pocketbase"
)

/*
NewPocketBaseApp creates and returns a new PocketBase instance.
*/
func NewPocketBaseApp() *pocketbase.PocketBase {
	app := pocketbase.New()
	return app
}
