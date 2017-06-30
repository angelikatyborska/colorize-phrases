function hashToColor(hash) {
  var maxHue = 360;
  var baseSaturation = 70;
  var baseLightness = 65;
  var lightnessDelta = 10;

  var hue = hash % maxHue;
  var saturation = baseSaturation + (hash % 30);
  var lightnessHueCorrection = Math.sin(Math.PI * hue / (maxHue / 2));
  var lightness = baseLightness + -1 * Math.round(lightnessDelta * lightnessHueCorrection);
  return 'hsl(' + hue + ', ' + saturation + '%, ' + lightness + '%)';
}