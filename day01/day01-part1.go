package main

import (
	"fmt"
	"os"
	"regexp"
)

var filePath = "day01part01-input.txt"
// var filePath = "day01part1-test.txt"

func readInputFile(filePath string) (string, error) {
    content, err := os.ReadFile(filePath)
    if err != nil {
        return "", err
    }
    return string(content), nil
}
