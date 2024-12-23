package handlers

import (
	"dashboard-backend/data"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetProducts(c *gin.Context) {
	c.JSON(http.StatusOK, data.Products)
}

func GetPopularProducts(c *gin.Context) {
	var popular []data.Product
	for _, product := range data.Products {
		if product.Sold > 30 {
			popular = append(popular, product)
		}
	}
	c.JSON(http.StatusOK, popular)
}

func GetOutOfStockProducts(c *gin.Context) {
	var outOfStock []data.Product
	for _, product := range data.Products {
		if product.Stock == 0 {
			outOfStock = append(outOfStock, product)
		}
	}
	c.JSON(http.StatusOK, outOfStock)
}
