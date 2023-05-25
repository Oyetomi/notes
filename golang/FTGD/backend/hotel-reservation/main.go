package main

import (
	"flag"
	"github.com/Oyetomi/hotel-reservation/api"
	"github.com/gofiber/fiber/v2"
)

func main() {
	listenAddr := flag.String("listenAddr", ":9000", "The listen address to of the API server")
	flag.Parse()

	app := fiber.New()
	apiv1 := app.Group("/api/v1")

	apiv1.Get("/user", api.HandleGetUsers)
	apiv1.Get("/user/:id", api.HandleGetUser)
	err := app.Listen(*listenAddr)
	if err != nil {
		return
	}
}

func handleFoo(c *fiber.Ctx) error {
	return c.JSON(map[string]string{"message": "working just fine"})
}
