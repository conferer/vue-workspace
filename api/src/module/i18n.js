const messages = Object.fromEntries(
  Object.entries(import.meta.globEager("../../locales/*.ts")).map(
    ([key, value]) => {
      const yaml = key.endsWith(".ts");
      console.log(5, yaml);
      return [key.slice(14, -3), value.default];
    }
  )
);
export default messages;
