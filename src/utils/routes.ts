export const ApiRoutes = {
  root: "/api",
  getResume: (username: string) => `${ApiRoutes.root}/resume/${username}`,
  saveResume: () => `${ApiRoutes.root}/save-resume`,
  SaveCodeBlocks: () => `${ApiRoutes.root}/challenge/test`,
};
