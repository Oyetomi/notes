package main

import (
	"fmt"
	"log"
	"sync"
	"time"
)

type UserProfile struct {
	ID       int
	Comments []string
	Likes    int
	Friends  []int
}

func main() {
	start := time.Now()
	userProfile, err := handleGetUserProfile(10)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(userProfile)
	fmt.Println("fetching the user profile took ", time.Since(start))
}

type Response struct {
	data any
	err  error
}

func handleGetUserProfile(id int) (*UserProfile, error) {
	var (
		wg       = &sync.WaitGroup{}
		respChan = make(chan Response, 3)
	)
	go getComments(id, respChan, wg)
	go getLikes(id, respChan, wg)
	go getFriends(id, respChan, wg)
	wg.Add(3)
	wg.Wait()
	close(respChan)
	userProfile := &UserProfile{}
	for resp := range respChan {
		if resp.err != nil {
			return nil, resp.err
		}
		switch msg := resp.data.(type) {
		case int:
			userProfile.Likes = msg
		case []int:
			userProfile.Friends = msg
		case []string:
			userProfile.Comments = msg

		}
	}
	return userProfile, nil
}

func getComments(id int, respChan chan Response, wg *sync.WaitGroup) {
	time.Sleep(time.Millisecond * 200)
	comments := []string{
		"Hey, that was great",
		"Yeah Buddy!",
		"Oh i didnt know that",
	}
	respChan <- Response{
		data: comments,
		err:  nil,
	}
	wg.Done()
}

func getLikes(id int, respChan chan Response, wg *sync.WaitGroup) {
	time.Sleep(time.Millisecond * 200)
	respChan <- Response{
		data: 11,
		err:  nil,
	}
	wg.Done()
}

func getFriends(id int, respChan chan Response, wg *sync.WaitGroup) {
	time.Sleep(time.Millisecond * 100)
	friends := []int{11, 36, 114, 354}
	respChan <- Response{
		data: friends,
		err:  nil,
	}
	wg.Done()
}
