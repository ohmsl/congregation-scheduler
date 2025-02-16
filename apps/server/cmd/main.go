package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
)

func main() {
	pbApp := pocketbase.New()

	pbApp.OnServe().BindFunc(func(se *core.ServeEvent) error {
		se.Router.GET("/hello", func(e *core.RequestEvent) error {
			name := e.Request.PathValue("name")

			return e.String(http.StatusOK, "Hello "+name)
		})

		// se.Router.GET("/api/devices", handlers.ListDevicesHandler(pbApp))
		// se.Router.GET("/api/devices/:id", handlers.GetDeviceHandler(pbApp))
		// se.Router.POST("/api/devices", handlers.CreateDeviceHandler(pbApp))
		// se.Router.DELETE("/api/devices/:id", handlers.DeleteDeviceHandler(pbApp))

		return se.Next()
	})

	pbApp.OnBootstrap().BindFunc(func(e *core.BootstrapEvent) error {
		err := e.Next()
		if err != nil {
			return err
		}

		// do some bootstrapping here

		return nil
	})

	pbApp.OnRecordCreateRequest("messages").BindFunc(func(e *core.RecordRequestEvent) error {
		err := e.Next()
		if err != nil {
			return err
		}

		col, err := pbApp.FindCollectionByNameOrId("chat_rooms")
		if err != nil {
			return err
		}

		room_id := e.Record.GetString("room_id")
		fmt.Printf("pbApp: %v\n", pbApp)

		room, err := pbApp.FindRecordById(col, room_id)
		fmt.Printf("room: %v\n", room)
		if err != nil {
			return err
		}

		room.Set("last_message", e.Record.Get("message"))

		return nil
	})

	// Must start PocketBase before doing any queries
	err := pbApp.Start()
	if err != nil {
		log.Fatalf("Failed to start PocketBase: %v", err)
	}
}
