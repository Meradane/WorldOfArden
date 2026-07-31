Hooks.once("init", () => {
  CONFIG.DND5E.languages.standard.children.arden = {
    label: "Arden",
    selectable: false,
    children: {
      alderian: "Alderian",
      balenish: "Balenish",
      eldoran: "Eldoran",
      nivaren: "Nivaren",
      troyan: "Troyan",
      visian: "Visian"
    }
  }
});
