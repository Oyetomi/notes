package main

import (
	"fmt"
	"time"
)

func main() {
	msgChan := make(chan string, 128)
	msgChan <- "A"
	msgChan <- "B"
	msgChan <- "C"
	close(msgChan)

	for {
		msg, closed := <-msgChan
		if !closed {
			break
		}
		fmt.Println("the message ->", msg)
	}

	// this piece of code is our consumer
	for msg := range msgChan {
		fmt.Println(msg)
	}

	// 1 unbuffered channel
	// --> unbuffered channel ... a channel in golang always blocks if it's full
	// 2 buffered channel
	//resultChan := make(chan string)
	//go func() {
	//	result := <-resultChan
	//	fmt.Println(result)
	//}()
	//resultChan <- "foo"

}

func fetchResource(n int) string {
	time.Sleep(time.Second * 2)
	return fmt.Sprintf("result %d", n)
}
