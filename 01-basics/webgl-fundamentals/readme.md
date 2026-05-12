# WebGL and Three.js – A Clear Introduction

This repository introduces WebGL and Three.js, explaining what they are, why raw WebGL can feel difficult, and how Three.js makes 3D development on the web far more approachable.

It is written for:

- Beginners who are new to 3D graphics in the browser
- Developers who want a clean, concise refresher on WebGL fundamentals

---

## What is WebGL?

WebGL is a JavaScript API that allows you to render graphics directly inside an HTML `<canvas>` element — at very high speed.

It works in almost all modern browsers without requiring any plugins.

At its core, WebGL renders triangles. While it can also be used for 2D graphics, triangles are the fundamental building blocks of all 3D models, which is why most WebGL projects focus on 3D rendering.

The reason WebGL is so fast is simple:

👉 It runs on the GPU (Graphics Processing Unit) instead of the CPU.

---

## Why the GPU Makes Rendering Fast

Consider a simple 3D model made up of 1,000 triangles.

That means:

- 3,000 vertices (points) in total

To render this model, the GPU must:

### 1. Position the vertices

Each vertex must be transformed based on:

- Position
- Rotation
- Scale
- Camera angle
- Perspective

The GPU can perform thousands of these calculations in parallel, so all vertices are processed almost instantly.

### 2. Draw the pixels

After positioning the vertices, the GPU fills in every visible pixel inside those triangles — often hundreds of thousands of pixels per frame.

Once again, the GPU performs these pixel calculations in parallel, which is why real-time 3D graphics can run smoothly in the browser.

---

## Shaders and the Data They Need

The instructions used by the GPU are written in small programs called shaders (written in GLSL):

- Vertex shaders decide where points are placed
- Fragment shaders decide the color of each pixel

Shaders are extremely powerful — and also notoriously hard to master.

You must also send data to these shaders, such as:

- Transformation and camera matrices
- Lighting information (so faces pointing toward a light appear brighter)

---

## Why Native WebGL Feels Hard

Even rendering a single triangle with perspective usually requires:

- Writing vertex and fragment shaders
- Creating and binding buffers
- Managing attributes and uniforms
- Handling canvas resizing
- Creating an animation loop with `requestAnimationFrame`

This can easily reach 100–200 lines of code just to draw one triangle.

Adding models, lighting, textures, shadows, or animation quickly leads to thousands of lines of low-level code.

Native WebGL offers:

- Maximum performance
- Full control over the GPU

But the amount of boilerplate and complexity is very high.

---

## Three.js to the Rescue

Three.js is a popular open‑source JavaScript library (MIT license) built directly on top of WebGL.

Its main goal is to remove most of the low-level complexity so you can focus on:

- Building scenes
- Adding animation
- Creating interactive 3D experiences

With Three.js, you can create a fully lit, animated 3D scene in just a few dozen lines of code, without writing shaders or managing matrices manually.

Because Three.js is still very close to WebGL, you can drop down to raw shaders and low-level control whenever you need it — especially for advanced effects.

---

## Who Created and Maintains Three.js?

Three.js was created by Ricardo Cabello, also known as Mr.doob.

He remains the main developer, supported by a large and active open‑source community.

Useful links:

- Contributors: [https://github.com/mrdoob/three.js/graphs/contributors](https://github.com/mrdoob/three.js/graphs/contributors)
- Releases (updated roughly monthly): [https://github.com/mrdoob/three.js/releases](https://github.com/mrdoob/three.js/releases)

---

## Great Places to Explore Three.js

- 🌐 Official website & showcase: [https://threejs.org/](https://threejs.org/)
- 📘 Documentation: [https://threejs.org/docs/](https://threejs.org/docs/)
  - Start here: [https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)

- 🧪 Live examples with source code: [https://threejs.org/examples/](https://threejs.org/examples/)

Follow updates and new experiments:

- Mr.doob on X: [https://twitter.com/mrdoob](https://twitter.com/mrdoob)
- Three.js on X: [https://twitter.com/threejs](https://twitter.com/threejs)

---

## What About Other Libraries?

Three.js is currently the most popular WebGL library, and for good reasons:

- Very stable
- Feature‑rich
- Excellent documentation
- Active monthly updates
- Still close to raw WebGL when needed

For most developers — especially beginners — Three.js is the best place to start.

That said, many other high‑quality WebGL and 3D libraries exist, each with unique strengths.

Be curious. Try small experiments with different tools.

You’ll often learn concepts that make you an even better Three.js developer.

---

✨ Happy coding — and welcome to 3D on the web!
