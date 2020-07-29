---
title: Pixi.js
permalink: /notes/pixijs
hide: false
---

[Pixi.js](https://www.pixijs.com/) is a javascript graphics library that makes
it easier to work with 2D WebGL with a canvas fallback.

Code snippits:

## Creating a sprite from a generated texture

```typescript
// Draw something
const graphics = new PIXI.Graphics();
graphics.beginFill(0xff0000, 1);
graphics.lineStyle(2, 0xff0000, 1);
graphics.drawCircle(0, 0, PLAYER_VISIBILITY_RADIUS_PX);

// Convert it to a texture
const renderer = this.renderState.renderer;
const texture = renderer.generateTexture(graphics, PIXI.SCALE_MODES.NEAREST, 1);

// Use the texture to create a sprite.
const sprite = new PIXI.Sprite(texture);
sprite.anchor.x = 0.5;
sprite.anchor.y = 0.5;
```
