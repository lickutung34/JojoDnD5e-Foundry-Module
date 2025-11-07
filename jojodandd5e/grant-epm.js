Hooks.on("updateItem", async (item, changes, options, userId) => {
  if (!changes?.system?.uses?.max) return;

  const actor = item.actor;
  if (!actor) return;

  const itemName = "EPM Essence Counter";
  if (item.name !== itemName) return;

  const usesMax = getProperty(item, "system.uses.max");

  const thresholds = [
    [50, ["Menacing Aura"]],
    [100, ["Ghoul Creation"]],
    [200, ["Custom Bodily Ability", "Greater Undead Senses"]],
    [300, ["Flesh Grafting", "Spider Climb", "Flight"]],
    [400, ["Vampire Creation"]],
    [500, ["Controlled Veins"]],
    [600, ["Cellular Phasing"]],
    [700, ["EPM Dormancy"]],
    [800, ["Body Evacuation"]],
    [900, ["Enhanced Bodily Ability"]]
  ];

  for (let [value, reward] of thresholds) {
    const flag = `jojodandd5e-${value}`;
    if (usesMax >= value && !actor.getFlag("jojodandd5e", flag)) {
      for (const feature of reward) {
        await grantFeature(actor, feature);
      }
      await actor.setFlag("jojodandd5e", flag, true);
    }
  }
});

async function grantFeature(actor, itemName) {
  if (actor.items.find(i => i.name === itemName)) return;
  const item = game.items.getName(itemName);
  if (item) await actor.createEmbeddedDocuments("Item", [item.toObject()]);
}