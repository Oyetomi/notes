package main

import (
	"context"
	"fmt"
	"log"
	"time"
)

func main() {
	start := time.Now()
	ctx := context.WithValue(context.Background(), "username", "abiodun")
	userID, err := fetchUserID(ctx)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("the response took %v -> %+v\n", time.Since(start), userID)
}

func fetchUserID(ctx context.Context) (string, error) {
	ctx, cancel := context.WithTimeout(ctx, time.Millisecond*100)
	defer cancel()
	val := ctx.Value("username")
	fmt.Println("the value = ", val)
	type result struct {
		userID string
		err    error
	}
	resultChan := make(chan result, 1)
	go func() {
		res, err := thirdPartyHTTPCall()
		resultChan <- result{
			userID: res,
			err:    err,
		}
	}()
	select {
	// context timeout is exceeded or the context has been manually cancelled
	case <-ctx.Done():
		return "", ctx.Err()
	case res := <-resultChan:
		return res.userID, res.err
	}
}

func thirdPartyHTTPCall() (string, error) {
	time.Sleep(time.Millisecond * 500)
	return "user id 1", nil
}
