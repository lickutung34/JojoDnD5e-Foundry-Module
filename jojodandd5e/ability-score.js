Hooks.once('init', () => {
    // Add new ability to CONFIG
    CONFIG.DND5E.abilities.pow = {
      label: "Power",
      abbreviation: "Pow"
    };
    CONFIG.DND5E.abilities.pre = {
        label: "Precision",
        abbreviation: "Pre"
    };
    CONFIG.DND5E.abilities.dur = {
        label: "Durability",
        abbreviation: "Dur"
    };
    CONFIG.DND5E.abilities.rag = {
        label: "Range",
        abbreviation: "Rag"
    };
    CONFIG.DND5E.abilities.spe = {
        label: "Speed",
        abbreviation: "Spe"
    };
    CONFIG.DND5E.abilities.seg = {
      label: "Stand Energy",
      abbreviation: "Seg"
    };
    CONFIG.DND5E.abilities.sac = {
      label: "Stand AC",
      abbreviation: "Sac"
    };  
  });
  Hooks.on("preCreateActor", (actor, options, userId) => {
    if (actor.type !== "character") return;
  
    const existing = foundry.utils.getProperty(actor._source, "system.abilities") || {};
    if (!existing["pow"]) {
      existing["pow"] = {
        value: 10,
        proficient: 0,
        mod: 0
      };
      actor.updateSource({ "system.abilities": existing });
    }
    if (!existing["dur"]) {
        existing["dur"] = {
          value: 10,
          proficient: 0,
          mod: 0
        };
        actor.updateSource({ "system.abilities": existing });
    }
    if (!existing["pre"]) {
        existing["pre"] = {
          value: 10,
          proficient: 0,
          mod: 0
        };
        actor.updateSource({ "system.abilities": existing });
    }
    if (!existing["rag"]) {
        existing["rag"] = {
          value: 10,
          proficient: 0,
          mod: 0
        };
        actor.updateSource({ "system.abilities": existing });
    }
    if (!existing["spe"]) {
        existing["spe"] = {
          value: 10,
          proficient: 0,
          mod: 0
        };
        actor.updateSource({ "system.abilities": existing });
    }
    if (!existing["seg"]) {
        existing["seg"] = {
          value: 10,
          proficient: 0,
          mod: 0
        };
        actor.updateSource({ "system.abilities": existing });
    }
    if (!existing["sac"]) {
        existing["sac"] = {
          value: 10,
         proficient: 0,
          mod: 0
        };
        actor.updateSource({ "system.abilities": existing });
    }
  });