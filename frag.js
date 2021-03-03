const frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;

uniform sampler2D displacement;
varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b) {
return vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}


void main(void)
{
    vec2 uv = v_texcoord;
    
    vec2 point = fract(uv * 0.1 + u_time * 0.05);
    
   vec4 dispColor = texture2D(displacement, point);
    
   vec4 tl = rgb(0.0, 102.0, 245.0);
   vec4 tr = rgb(156.0, 10.0, 35.0);
   vec4 br = rgb(156.0, 10.0, 235.0);
   vec4 bl = rgb(177.0, 248.0, 252.0);
    
    float dispX = mix(-0.5, 0.5, dispColor.r);
    float dispY = mix(-0.5, 0.5, dispColor.r);
    
    vec4 color = mix(
    mix(tl, tr, uv.x + dispX)
    , 
    mix(bl, br, uv.x - dispX)
    , uv.y + dispY);
    
    gl_FragColor = color;
}`;
