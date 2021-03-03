const canvas = document.querySelector("canvas");
const sandbox = new GlslCanvas(canvas);

// alert("work");

// sandbox.load("void main() {
// gl_FragColor = vec4(1.0, 0.0, 0.0,1.0);}")

// sandbox.load("void main() {
//     gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);} ")

// const string_frag_code = "main(){\ngl_FragColor = vec4(1.0);\n}\n";
sandbox.load(frag);

sandbox.setUniform("displacement", "displacement1.jpg");
