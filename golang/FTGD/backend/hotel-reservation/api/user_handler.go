package api

import (
	"github.com/Oyetomi/hotel-reservation/types"
	"github.com/gofiber/fiber/v2"
)

func HandleGetUsers(c *fiber.Ctx) error {
	u := types.User{
		ID:        "",
		FirstName: "James",
		LastName:  "Carpenter",
	}
	return c.JSON(u)
}

func HandleGetUser(c *fiber.Ctx) error {
	return c.JSON("James")
}
