export const findingTeam = (group, index, finals, list) =>
  list.find(
    (item) => item.group === group && item.index === index && item[finals]
  );

export const mata_mata_Handler = (firstTeam, secondTeam, type, procedure) => {
  if (!firstTeam || !secondTeam) return;
  procedure({ type, payload: { firstTeam, secondTeam } });
};

export const filteringByIndex = (list, index) =>
  list.filter((country) => country.index <= index);
