import fetch from "isomorphic-fetch";

const getAbility = async url => {
  console.log('url FN', url);

  const result = await fetch(url).then(async ability => {
    const { effect_entries } = await ability.json();
    console.log('effect_entries', effect_entries);

    return effect_entries;
  });

  return result;
}

export default getAbility;