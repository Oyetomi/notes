package main

import (
	"sync"
)

type State struct {
	mu    sync.RWMutex
	count int
}

func (s *State) setState(i int) {
	s.mu.Lock()
	defer s.mu.Unlock()
	s.count = i

}

func main() {
}
