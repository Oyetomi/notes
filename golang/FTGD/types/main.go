package main

var (
	floatVar32 float32 = 0.1
	floatVar64 float64 = 0.1
	name       string  = "Foo"
	intVar32   int32   = 1
	intVar64   int64   = 7373
	intVar     int     = 10
	uintVar    uint    = 1
	uint32Var  uint32  = 1
	uint64Var  uint64  = 1
	uint8Var   uint8   = 100
	byteVar    byte    = 0x3
	runVar     rune    = 'a'
)

type Player struct {
	name        string
	health      int
	attackPower float64
}

func (Player Player) getHealth() int {
	return Player.health
}

type version int

type Weapon string

func getWeapon(weapon Weapon) string {
	return string(weapon)
}

func main() {
	//numbers := []int{1, 2, 3}        //array
	//otherNumbers := make([]int, 100) //slice
	//numbers = append(numbers, 4)
	//fmt.Println(numbers)
	//fmt.Println(otherNumbers)
	//users := map[string]int{} // empty map
	//users := make(map[string]int)
	//users["foo"] = 10
	//users["bar"] = 11
	//for k, v := range users {
	//	fmt.Printf("the key %s and the value %d\n", k, v)
	//}
	//delete(users, "foo")
	//fmt.Println(users)
	//age, ok := users["bar"]
	//if !ok {
	//	fmt.Println("baz not exist in the map")
	//} else {
	//	fmt.Println("bar exists in the map: ", age)
	//}
	//player := Player{
	//	name:        "Captain Jack",
	//	health:      100,
	//	attackPower: 45.1,
	//}
	//fmt.Printf("health %d\n", player.getHealth())
	//fmt.Printf("%d\n", age)
}
