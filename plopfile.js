module.exports = (plop) => {
  plop.setGenerator("component", {
    description: "Create New Component",
    prompts: [
      { type: "input", name: "name", message: "Component Name:" },
      { type: "input", name: "route", message: "Component Path:" },
    ],
    actions: (data) => {
      const route = data.route
      let actions = [
        {
          type: "add",
          path: `src/${route}/{{properCase name}}.js`,
          templateFile: "templates/Component.js.hbs",
        },
      ];
      return actions;
    },
  });
};
