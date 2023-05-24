package main

import "fmt"

type Database struct {
	user string
}

type Server struct {
	db *Database //uitprt -> 8 bytes long
}

func (s *Server) GetUserFromDatabase() string {
	// it's going to look up the memory address of the pointer
	if s.db == nil {
		panic("database == nil hence, is not initialized")
	}
	return s.db.user
}

type BigData struct {
	// 1gb of memory
	//..
	//..
	//..
}

func doSomethingWithData(data *BigData) {
	// manipulate the data
}

type Player struct {
	HP int
}

func TakeDamage(player *Player, amount int) {
	player.HP -= amount
	fmt.Println("player is taking damage. New HP =>", amount)

}

// TakeDamage function receiver
func (p *Player) TakeDamage(amount int) {
	p.HP -= amount
	fmt.Println("player is taking damage. New HP =>", amount)
}

func main() {
	s := &Server{db: &Database{}}
	s.GetUserFromDatabase()
	data := &BigData{}
	//copy 8bytes of pointer
	doSomethingWithData(data)
	player := &Player{HP: 100}
	player.TakeDamage(10)
	fmt.Printf("%+v\n", player)
}
