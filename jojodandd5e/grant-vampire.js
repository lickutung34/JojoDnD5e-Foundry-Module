Hooks.on("updateItem", async (item, updates, options, userId) => {
  if (!updates?.system?.uses?.max) return;

  const actor = item.actor;
  if (!actor) return;

  const itemName = "Vampire Essence Counter";
  if (item.name !== itemName) return;

  const usesMax = foundry.utils.getProperty(item, "system.uses.max");

  const thresholds = [
    [20, ["Primal Charm"]],
    [60, ["Menacing Aura", "Brutality"]],
    [80, ["Custom Bodily Ability", "Greater Undead Senses"]],
    [120, ["Ghoul Creation"]],
    [160, ["Flesh Grafting", "Spider Climb", "Flight"]],
    [200, ["Hypnosis"]],
    [220, ["Controlled Veins", "Freezing Touch"]],
    [260, ["Vampiric Body Control", "Vampiric Dormancy"]],
    [280, ["Space Ripper Stingy Eyes"]],
    [320, ["Body Evacuation"]],
    [340, ["Flesh Bud"]],
    [380, ["Vampire Creation"]]
  ];

  for (let [value, reward] of thresholds) {
    const flag = `jojodandd5e-${value}`;
    if (usesMax >= value && !actor.getFlag("jojodandd5e", flag)) {
      if (value === 60) {
        const choice = await promptSingleSelect(`Choose Feature at ${value}`, "Select one:", reward);
        if (choice) await grantFeature(actor, choice);
      } else if (Array.isArray(reward)) {
        for (const feature of reward) {
          await grantFeature(actor, feature);
        }
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

async function promptSingleSelect(title, content, options) {
  return new Promise((resolve) => {
    const opts = options.map(o => `<option value="${o}">${o}</option>`).join("");
    const html = `<form><div class="form-group"><select id="choice">${opts}</select></div></form>`;
    new Dialog({
      title, content: content + html,
      buttons: {
        ok: {
          label: "Confirm",
          callback: (html) => {
            const choice = html[0].querySelector("#choice").value;
            resolve(choice);
          }
        },
        cancel: {
          label: "Cancel",
          callback: () => resolve(null)
        }
      }
    }).render(true);
  });
}