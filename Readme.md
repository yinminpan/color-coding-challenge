# Education Horizons Coding Challenge

## Languages

- `JavaScript`

## Prerequisites

- `npm`
- `Chrome (v80 or over)`

## Context and requirement

For this challenge, we would like to see an application that will produce an image in which each colour occurs exactly once — with no repition and no unused colours. For the purpose of this challenge; colours are made up of three components — red, green, and blue. We require you to break each colour component into 32 steps — 8, 16, 24 .. 256 — this means when combined, you will have 32,768 discrete colours to utilise.

Criteria of Acceptance

- There should be no reuse and or repition of a single colour.
- Each colour component should have 32 steps.
- Your colour pallette should be made up of 32,768 unique colours. You are required to use all 32,768 unique colours.
- Do not make use of existing graphics or files.

## Dev files

The dev files can be found in `index.html`, `app/` and the `src/` folder.

## Instructions

### Installation

```bash
npm install
```

### Run program

```bash
npm start
```

```bash
visit on: http://127.0.0.1:8080
```

## Implementation process

The implementation follows `Object-Oriented Programming (OOP)` method around the interconnection of three main component types: `Model`, `View`, and `Controller`. In this task, models include `app/models/color.js` and `app/models/point.js`, controllers include `app/models/image.js`, and `index.html` is considered as a view.
&nbsp;

1. Get color codes in 32 steps for (red, green, blue), and save their combinations in `Color[]`, and its length is 32,768 which represents 32,768 unique colors.
   &nbsp;
2. Colors are shuffled for the image generation to be more interesting.
   &nbsp;
3. Set `Point(x, y, Color)` for each color in `Color[]` and add `Point` to `Point[x][y]` with `x` and `y` - which represents the coordinates of the color pixel in the grid of image.
   &nbsp;
4. Display pixels with their coordinates and color on the web page (`index.html`). We see a randomly generated image with 32,768 unique colors, and the image changes with every refresh.

## Nice to have

1. The `width` is implemented as an optional input with default value of `256`, which allows changing the width and height of an image, e.g. 64, 128, 512.
   &nbsp;
2. The `steps` is implemented as optional input with default value of `32`, which allows changing the color steps but need to make sure the number is divisible by 256. But the total number of colors would change accordingly because it equals to `steps^3`.
