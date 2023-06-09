package main

import "fmt"

type PPosition struct {
	x, y int
}

func (p *PPosition) Move(val int) {
	fmt.Println("The position is moved by:", val)
}

type Player struct {
	PPosition
}

const (
	ColorBlue Color = iota + 1
	ColorBlack
	ColorYellow
	ColorPink
)

type Color int

func (c Color) String() string {
	switch c {
	case ColorBlue:
		return "BLUE"
	case ColorBlack:
		return "BLACK"
	case ColorYellow:
		return "YELLOW"
	case ColorPink:
		return "PINK"
	default:
		panic("color does not exist")
	}
}

type Position struct {
	x, y int
}

type Entity struct {
	name, id, version string
	Position
}

type SpecialEntity struct {
	Entity
	specialField float64
}

func main() {
	p := Player{}
	p.Move(1000)
	e := Entity{
		name:    "my entity",
		id:      "id 1",
		version: "version 1.1",
		Position: Position{
			x: 100,
			y: 200,
		},
	}
	s := SpecialEntity{
		Entity:       e,
		specialField: 007,
	}
	fmt.Printf("%+v\n", e)
	fmt.Printf("%+v\n", s)
	fmt.Println("the color is:", ColorPink)
}
