package main

import (
	"fmt"
	"os"
	"regexp"
)

var filePath = "day01part01-input.txt"
// var filePath = "day01part1-test.txt"

func main() {
    content, err := readInputFile(filePath)
    if err != nil {
        fmt.Println(err)
    }

func readInputFile(filePath string) (string, error) {
    content, err := os.ReadFile(filePath)
    if err != nil {
        return "", err
    }
    return string(content), nil
}

func getFirstInt(content string) (int, error) {
    re := regexp.MustCompile(`\d`)
    if err != nil {
        return 0, err
    }
    return firstInt, nil
}
