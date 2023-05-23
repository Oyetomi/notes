package main

import (
	"fmt"
	"mygoproject/types"
	"mygoproject/types/util"
)

// entry function package main
func main() {
	user := &types.User{
		Username: util.GetName(),
		Age:      util.GetAge(),
	}
	fmt.Printf("the user is %+v\n", user)
}
