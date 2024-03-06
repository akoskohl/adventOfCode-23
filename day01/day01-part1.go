package main

import (
	"fmt"
	"os"
	"regexp"
	"strconv"
	"strings"
)

var filePath = "day01part01-input.txt"
// var filePath = "day01part1-test.txt"

func main() {
    var sum int = 0
    content, err := readInputFile(filePath)
    if err != nil {
        fmt.Println(err)
    }

    lines := strings.Split(content, "\n")
    for _, line := range lines {
        firstInt, _ := getFirstInt(line)
        lastInt, _ := getLastInt(line)
    }
    println(sum)
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
    match := re.FindString(content)
    var firstInt int
    _, err := fmt.Sscanf(match, "%d", &firstInt)
    if err != nil {
        return 0, err
    }
    return firstInt, nil
}

func getLastInt(content string) (int, error) {
    re := regexp.MustCompile(`\d`)
    matches := re.FindAllString(content, -1)
    lastMatch := matches[len(matches)-1]
    var lastInt int
    _, err := fmt.Sscanf(lastMatch, "%d", &lastInt)
    if err != nil {
        return 0, err
    }
    return lastInt, nil
}