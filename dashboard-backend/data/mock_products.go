package data

type Product struct {
	ID         int    `json:"id"`
	Name       string `json:"name"`
	Category   string `json:"category"`
	Price      float64 `json:"price"`
	Stock      int    `json:"stock"`
	Sold       int    `json:"sold"`
}

var Products = []Product{
	{ID: 1, Name: "Produto A", Category: "Eletrônicos", Price: 120.99, Stock: 10, Sold: 50},
	{ID: 2, Name: "Produto B", Category: "Roupas", Price: 49.99, Stock: 0, Sold: 30},
	{ID: 3, Name: "Produto C", Category: "Livros", Price: 19.99, Stock: 5, Sold: 100},
	{ID: 4, Name: "Produto D", Category: "Eletrônicos", Price: 999.99, Stock: 2, Sold: 10},
	{ID: 5, Name: "Produto E", Category: "Móveis", Price: 399.99, Stock: 0, Sold: 20},
}
