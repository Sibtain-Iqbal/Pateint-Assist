// src/utils/profileCompletion.ts
export const calculateCompletion = (profile: Record<string, any>, requiredFields: string[]) => {
  let filled = 0;

  requiredFields.forEach((field) => {
    if (profile[field] && profile[field].toString().trim() !== "") {
      filled++;
    }
  });

  return Math.round((filled / requiredFields.length) * 100);
};
