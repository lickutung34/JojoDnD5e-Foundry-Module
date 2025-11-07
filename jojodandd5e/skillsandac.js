Hooks.once("init", () => {
  console.log("Test message from my shared compendium module.");

  CONFIG.DND5E.skills.athletics = {
    label: "Athletics Str/Wis",
    ability: "str",
    fullkey: "athletics",
    referance: "",
    icon: "",
  };

  CONFIG.DND5E.skills.acrobatics = {
    label: "Acrobatics",
    ability: "dex",
    fullkey: "acrobatics",
    referance: "",
    icon: "",
  };

  CONFIG.DND5E.skills.care = {
    label: "Care",
    ability: "wis",
    fullkey: "care",
    referance: "",
    icon: "",
  };

  CONFIG.DND5E.skills.supernatural = {
    label: "Supernatural",
    ability: "int",
    fullKey: "supernatural",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.bluff = {
    label: "Bluff",
    ability: "cha",
    fullKey: "bluff",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.knowledge = {
    label: "Knowledge",
    ability: "int",
    fullKey: "knowledge",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.vibe = {
    label: "Vibe",
    ability: "wis",
    fullKey: "vibe",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.intimidate = {
    label: "Intimidate",
    ability: "str",
    fullKey: "intimidate",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.survival = {
    label: "Survival",
    ability: "int",
    fullKey: "survival",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.presence = {
    label: "Presence",
    ability: "cha",
    fullKey: "presence",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.diplomacy = {
    label: "Diplomacy",
    ability: "cha",
    fullKey: "diplomacy",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.finesse = {
    label: "Finesse",
    ability: "dex",
    fullKey: "finesse",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.sneak = {
    label: "Sneak",
    ability: "dex",
    fullKey: "sneak",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.science = {
    label: "Science",
    ability: "int",
    fullKey: "science",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.skills.grit = {
    label: "Grit",
    ability: "con",
    fullKey: "grit",
    reference: "",
    icon: "",
  };

  CONFIG.DND5E.armorClasses.jojoacdexcon = {
    label: "Jojo ac Dex Con",
    formula: "10 + @abilities.dex.mod + @abilities.con.mod",
  };

  CONFIG.DND5E.armorClasses.jojoacdexwis = {
    label: "Jojo ac Dex Wis",
    formula: "10 + @abilities.dex.mod + @abilities.wis.mod",
  };

  CONFIG.DND5E.armorClasses.jojoacwiscon = {
    label: "Jojo ac Wis Con",
    formula: "10 + @abilities.wis.mod + @abilities.con.mod",
  };

  delete CONFIG.DND5E.skills.ani;

  delete CONFIG.DND5E.skills.ath;

  delete CONFIG.DND5E.skills.acr;

  delete CONFIG.DND5E.skills.arc;

  delete CONFIG.DND5E.skills.rel;

  delete CONFIG.DND5E.skills.ste;

  delete CONFIG.DND5E.skills.slt;

  delete CONFIG.DND5E.skills.per;

  delete CONFIG.DND5E.skills.prf;

  delete CONFIG.DND5E.skills.nat;

  delete CONFIG.DND5E.skills.sur;

  delete CONFIG.DND5E.skills.itm;

  delete CONFIG.DND5E.skills.ins;

  delete CONFIG.DND5E.skills.his;

  delete CONFIG.DND5E.skills.dec;

  delete CONFIG.DND5E.languages.druidic;

  delete CONFIG.DND5E.languages.standard.children.dwarvish;

  delete CONFIG.DND5E.languages.standard.children.common;

  delete CONFIG.DND5E.languages.standard.children.elvish;

  delete CONFIG.DND5E.languages.standard.children.giant;

  delete CONFIG.DND5E.languages.standard.children.gnomish;

  delete CONFIG.DND5E.languages.standard.children.goblin;

  delete CONFIG.DND5E.languages.standard.children.halfling;

  delete CONFIG.DND5E.languages.standard.children.orc;

  delete CONFIG.DND5E.languages.exotic.children.aarakocra;

  delete CONFIG.DND5E.languages.exotic.children.primordial.children.aquan;

  delete CONFIG.DND5E.languages.exotic.children.abyssal;

  delete CONFIG.DND5E.languages.exotic.children.celestial;

  delete CONFIG.DND5E.languages.exotic.children.deep;

  delete CONFIG.DND5E.languages.exotic.children.draconic;

  delete CONFIG.DND5E.languages.exotic.children.gith;

  delete CONFIG.DND5E.languages.exotic.children.gnoll;

  delete CONFIG.DND5E.languages.exotic.children.infernal;

  delete CONFIG.DND5E.languages.exotic.children.primordial.children.auran;

  delete CONFIG.DND5E.languages.exotic.children.primordial.children.ignan;

  delete CONFIG.DND5E.languages.exotic.children.primordial.children.terran;

  delete CONFIG.DND5E.languages.exotic.children.primordial;

  delete CONFIG.DND5E.languages.exotic.children.sylvan;

  delete CONFIG.DND5E.languages.exotic.children.undercommon;

  delete CONFIG.DND5E.languages.cant;

  CONFIG.DND5E.languages.english = "English";

  CONFIG.DND5E.languages.spanish = "Spanish";

  CONFIG.DND5E.languages.japanese = "Japanese";

  CONFIG.DND5E.languages.chinese = "Chinese";

  CONFIG.DND5E.languages.italian = "Italian";

  CONFIG.DND5E.languages.german = "German";

  CONFIG.DND5E.languages.Swedish = "Swedish";

});