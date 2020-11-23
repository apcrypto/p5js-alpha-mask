var fg, bg, maskImage, maskBrush, mask;

function preload() {
  bg = loadImage('assets/TexturesCom_Gravel0160_1_seamless_S.jpg');
  fg = loadImage('assets/TexturesCom_Ice0034_1_seamless_S.jpg');
  msk = createGraphics(400, 400);
}

function setup() {
  canvas = createCanvas(400, 400);
}

function draw() {
  msk.clear();
  msk.ellipse(mouseX / 3, mouseY / 3, 50, 50);
  masked = bg.get();
  masked.mask(msk.get());
  image(fg, 0, 0);
  image(masked, 0, 0);
}
