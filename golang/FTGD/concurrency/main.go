package main

import (
	"fmt"
	"time"
)

func main() {
	// 1 unbuffered channel
	// --> unbuffered channel ... a channel in golang always blocks if it's full
	// 2 buffered channel
	resultChan := make(chan string)
	go func() {
		result := <-resultChan
		fmt.Println(result)
	}()
	resultChan <- "foo"

}

func fetchResource(n int) string {
	time.Sleep(time.Second * 2)
	return fmt.Sprintf("result %d", n)
}
