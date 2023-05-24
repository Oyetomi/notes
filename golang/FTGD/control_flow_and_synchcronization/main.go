package main

import (
	"fmt"
	"time"
)

type Server struct {
	quitchan chan struct{}
	msgchan  chan string
}

func newServer() *Server {
	return &Server{quitchan: make(chan struct{}), msgchan: make(chan string, 128)}
}

func (s *Server) start() {
	fmt.Println("server starting...")
	s.loop()
}

func (s *Server) sendMessage(msg string) {
	s.msgchan <- msg
}

func (s *Server) quit() {
	s.quitchan <- struct{}{}
}

func (s *Server) loop() {
mainloop:
	for {
		select {
		case <-s.quitchan:
			fmt.Println("Server is shutting down gracefully")
			break mainloop
		case msg := <-s.msgchan:
			s.handleMessage(msg)
		}
	}
}

func (s *Server) handleMessage(msg string) {
	fmt.Println("we received message: ", msg)
}

func main() {
	server := newServer()
	go func() {
		time.Sleep(time.Second * 5)
		server.quit()
	}()
	server.start()

}
