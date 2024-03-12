package main

//Importaciones de librerias

import (
	"github.com/gin-gonic/gin"
)

func main() {

	//Mantener este puerto
	puerto := ":4444"
	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "funciona",
		})
		c.JSON(404, gin.H{
			"message": "eror",
		})
	})
	r.Run(puerto) // listen and serve on 0.0.0.0:8080
}
