# Introduction

This README walks through setting up a local development environment for a Three.js project using Vite. It explains why a local server is needed, how to configure the project step by step, and how to render your very first 3D object using Three.js.

The goal is clarity and practicality — no unnecessary styling, just clean explanations you can follow and revisit later.

---

## Local Server and Build Tools

To run a Three.js website properly, we need a local server.

You might think of creating an HTML file and opening it directly by double-clicking it. However, modern browsers restrict many features for security reasons when files are opened this way. As a result, loading Three.js, models, textures, or other assets will fail.

The simplest and most reliable solution is to use a build tool (also called a bundler).

---

## Vite

Vite is a modern build tool that lets you write standard web code (HTML, CSS, JavaScript) and handles everything needed to run and build the final website.

What Vite does for us:

- Runs a fast local development server
- Bundles and optimizes files
- Handles cache busting and source maps
- Manages dependencies

Vite also supports plugins, which allow advanced features such as:

- Importing GLSL shader files
- Using frameworks like React

Vite was created by Evan You (the creator of Vue.js) and is actively maintained by a large community.

To create a new Vite project:

npm create vite@latest

---

## Terminal Basics

We will run commands using a terminal.

You can use:

- Terminal on macOS
- Command Prompt or PowerShell on Windows
- The integrated terminal in VS Code (recommended)

To open the VS Code terminal:

- macOS: CMD + J
- Windows: CTRL + J

Useful commands:

- cd folder-name → move into a folder
- ls → list files (macOS / Linux)
- pwd → show current directory

---

## Node.js

Vite requires Node.js to run.

Node.js allows JavaScript to run outside the browser and is commonly used for development tools like Vite.

To check if Node.js is installed:

node -v

If Node.js is not installed, download and install the LTS version from:

[https://nodejs.org/en/](https://nodejs.org/en/)

After installation, restart your terminal and run node -v again to confirm.

---

## Create a Node.js Project

1. Create a new folder for your project
2. Open that folder in VS Code
3. Open the integrated terminal
4. Run:

npm init -y

This creates a package.json file, which stores project information and dependencies.

---

## Add Dependencies

For now, we only install Vite. Three.js will be added later.

Run:

npm install vite

---

## Create a Basic Website

Inside the project folder, create an index.html file:

<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>First Three.js Project</title>
</head>
<body>
  <h1>Soon to be a Three.js website</h1>
</body>
</html>

Do not open this file directly in the browser.

---

## Configure Scripts

In package.json, replace the scripts section with:

"scripts": {
"dev": "vite",
"build": "vite build"
}

Run the development server:

npm run dev

Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## Add JavaScript

Create a script.js file:

console.log('JavaScript is working')

Update index.html:

<script type="module" src="./script.js"></script>

Check the browser console to confirm the script is running.

---

## Install Three.js

Stop the Vite server:

CTRL + C

Install Three.js:

npm install three

Restart the server:

npm run dev

---

## Import and Use Three.js

In script.js:

import \* as THREE from 'three'

Create the core elements needed for a scene:

- Scene
- Object
- Camera
- Renderer

---

## First Scene

Create a scene:

const scene = new THREE.Scene()

Create a red cube:

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

---

## Camera

const sizes = {
width: 800,
height: 600
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

---

## Renderer

Add a canvas to index.html:

<canvas class="webgl"></canvas>

Create the renderer:

const canvas = document.querySelector('canvas.webgl')

const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)

---

## First Render

renderer.render(scene, camera)

You should now see your first 3D object.

---

## Dependencies and Running the Project

Do not commit the node_modules folder.

To install dependencies from package.json:

npm install

To run the server:

npm run dev

If the site does not open automatically, try the URLs shown in the terminal.

---

This repository is intended as a clean learning reference. Keep it simple, experiment freely, and build from here.
