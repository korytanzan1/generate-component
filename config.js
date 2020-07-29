const path = require("path");
module.exports = {
  description: "CLI generator component for react-native",
  prompts: [
    {
      type: "list",
      name: "action",
      message: "Select language code:",
      choices: () => [
        {
          name: "With javascript",
          value: "js",
        },
        {
          name: "With typescript",
          value: "ts",
        },
      ],
    },
    { type: "input", name: "name", message: "Component Name:" },
    { type: "input", name: "route", message: "Component Path:" },
  ],
  actions: (data) => {
    const route = data.route;
    const _path = path.join(__dirname, `/`);
    let actions = [];
    if (data.action === "ts") {
      actions = [
        ...actions,
        {
          type: "add",
          path: `${_path}${route}/{{properCase name}}.tsx`,
          templateFile: "templates/Component.ts.hbs",
        },
      ];
    }
    if (data.action === "js") {
      actions = [
        ...actions,
        {
          type: "add",
          path: `${_path}${route}/{{properCase name}}.js`,
          templateFile: "templates/Component.js.hbs",
        },
      ];
    }
    return actions;
  },
};
