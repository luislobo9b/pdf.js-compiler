import nodeResolve from "@rollup/plugin-node-resolve"
import replace from "@rollup/plugin-replace"

export default [{
	input: "pdfjs-dist/build/pdf.min.mjs",
	output: {
		file: "dist/pdf.iife.min.js",
		name: "pdfjsLib",
		format: "iife" // for browsers
	},
	plugins: [
		nodeResolve(),
		replace({
			preventAssignment: true,
			delimiters: ["", ""],
			values: {
				"warn(\"Setting up fake worker.\");": ""
			}
		})
	]
}, {
	input: "pdfjs-dist/legacy/build/pdf.worker.min.mjs",
	output: {
		file: "dist/pdf.worker.iife.min.js",
		name: "PDFWorker",
		format: "iife" // for browsers
	},
	plugins: [
		nodeResolve()
	]
}]