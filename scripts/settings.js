// Add a new Skill
Hooks.once("init", () => {
  CONFIG.DND5E.skills.backflip = {
    label: "Backflip",
    ability: "dex",
    fullKey: "backflip", // Full key used in enrichers
    reference: "Compendium.my-module…", // UUID of journal entry page for rich tooltips
    icon: "…" // Icon used in favorites on new character sheet
  };
});
