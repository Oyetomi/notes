package main

import "fmt"

type CustomMap[K comparable, V any] struct {
	data map[K]V
}

func (m *CustomMap[K, V]) Insert(k K, v V) error {
	m.data[k] = v
	return nil
}

func NewCustomMap[K comparable, V any]() *CustomMap[K, V] {
	return &CustomMap[K, V]{data: make(map[K]V)}
}

func foo[T any](val T) {
	fmt.Println(val)
}

func main() {
	m1 := NewCustomMap[string, int]()
	m1.Insert("foo", 1)
	m1.Insert("bar", 2)
	fmt.Println(m1)

	foo[int](1)
	foo[string]("hello")
}
