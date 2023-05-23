package main

import "fmt"

func main() {
	//users := map[string]int{
	//	"foo":   1,
	//	"bar":   2,
	//	"baz":   3,
	//	"Alice": 33,
	//}
	//for key, val := range users {
	//	fmt.Println(key, val)
	//}
	////numbers := []int{1, 2, 3, 4, 5, 6, 7}
	//names := []string{"a", "b", "c", "d"}
	////for i := 0; i < len(numbers); i++ {
	////	fmt.Println(numbers[i])
	////}
	//for _, name := range names {
	//	fmt.Println(name)
	//}

	name := "foo"
	switch name {
	case "Alice":
		fmt.Println("The name is Alice")
	case "Bob":
		fmt.Println("The name is Bob")
	default:
		fmt.Println("the name is default =>", name)
	}
}
