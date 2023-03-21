import fetch from "isomorphic-fetch";

const getAbility = async (url) => {
  const result = await fetch(url).then(async (ability) => {
    const { effect_entries } = await ability.json();

    const newEntries = effect_entries.filter(
      (item) => item.language.name == "en" || item.language.name == "es"
    );

    const effect = newEntries[0]?.effect || "Can not recover this info :(";

    return effect;
  });

  return result;
};

export default getAbility;
