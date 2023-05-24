package main

import "sync/atomic"

type State struct {
	count int32
}

func (s *State) setState(i int) {
	atomic.AddInt32(&s.count, 1)
}
