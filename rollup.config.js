import babel from "rollup-plugin-babel";
import includePaths from "rollup-plugin-includepaths";

let includePathOptions = {
  include: {},
  paths: ["src/"],
  external: [],
  extensions: [".js", ".json", ".html"]
};

export default [
  {
    input: "src/components/Login/index.js",
    output: {
      name: "login-form-teambt",
      file: "dist/index.js",
      format: "cjs"
    },
    external: [
      "react",
      "@material-ui/core",
      "@material-ui/icons",
      "prop-types",
      "material-ui-phone-number",
      "@bit/lgdelacruz92.team-bt.validate-password",
      "@bit/lgdelacruz92.team-bt.validate-email"
    ],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      }),
      includePaths(includePathOptions)
    ]
  }
];
