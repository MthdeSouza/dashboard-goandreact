package main

import (
	"dashboard-backend/handlers"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Content-Type", "Authorization"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.GET("/products", handlers.GetProducts)
	router.GET("/products/popular", handlers.GetPopularProducts)
	router.GET("/products/out-of-stock", handlers.GetOutOfStockProducts)

	router.Run(":8080")
}
