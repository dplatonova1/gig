export const loadState = () => {
  try {
    const contacts = localStorage.getItem("contacts");
    return contacts === null ? undefined : JSON.parse(contacts);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const contacts = JSON.stringify(state);
    localStorage.setItem("contacts", contacts);
  } catch (err) {
    return undefined;
  }
};
