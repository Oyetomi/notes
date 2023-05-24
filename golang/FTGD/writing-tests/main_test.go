package main

import (
	"reflect"
	"testing"
)

func TestEqualPlayers(t *testing.T) {
	expected := Player{
		name: "Mark",
		hp:   100,
	}
	got := Player{
		name: "Alice",
		hp:   101,
	}
	if !reflect.DeepEqual(expected, got) {
		t.Errorf("expected %+v, got %+v", expected, got)
	}
}

func TestCalculateValues(t *testing.T) {
	var (
		expected = 10
		a        = 5
		b        = 5
	)
	got := CalculateValues(a, b)
	if got != expected {
		t.Errorf("expected %v, got %v", expected, got)
	}
}
