package main

import "fmt"

type NumberStorer interface {
	GetAll() ([]int, error)
	Put(int) error
}

type PostgresNumberStore struct {
}

type MongoDBNumberStore struct {
}

func (p PostgresNumberStore) GetAll() ([]int, error) {
	return []int{1, 2, 3, 4}, nil
}

func (p PostgresNumberStore) Put(number int) error {
	fmt.Println("store the number into the postgres database")
	return nil
}

func (m MongoDBNumberStore) GetAll() ([]int, error) {
	return []int{1, 2, 3, 4}, nil
}

func (m MongoDBNumberStore) Put(number int) error {
	fmt.Println("store the number into the mongo database")
	return nil
}

type ApiServer struct {
	numberStore NumberStorer
}

func main() {
	apiServer := ApiServer{numberStore: PostgresNumberStore{}}

	// logic
	if err := apiServer.numberStore.Put(1); err != nil {
		panic(err)
	}
	numbers, err := apiServer.numberStore.GetAll()
	if err != nil {
		return
	}
	fmt.Println(numbers)
}
