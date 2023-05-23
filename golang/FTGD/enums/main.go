package main

import "fmt"

// weapon type
// axes
// sword
// wooden stick
// knife

type WeaponType int

func (w WeaponType) String() string {
	switch w {
	case Sword:
		return "SWORD"
	case Axe:
		return "AXE"
	}
	return ""
}

const (
	Axe WeaponType = iota + 1
	Sword
	WoodStick
	Knife
)

func getDamage(weaponType WeaponType) int {
	switch weaponType {
	case Axe:
		return 100
	case Sword:
		return 90
	case WoodStick:
		return 1
	case Knife:
		return 40
	default:
		panic("weaponType not supported")
	}
}

func main() {
	fmt.Printf("damage of weapon (%s) (%d):\n", Axe, getDamage(Axe))
}
