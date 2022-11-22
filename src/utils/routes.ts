export const ApiRoutes = {
  root: "/api",
  getResume: (username: string) => `${ApiRoutes.root}/resume/${username}`,
  getAllResumes: (username: string) =>
    `${ApiRoutes.root}/get-resumes/${username}`,
  saveResume: () => `${ApiRoutes.root}/save-resume`,
  createEmptyResume: () => `${ApiRoutes.root}/create-empty-resume`,
  saveCodeBlocks: () => `${ApiRoutes.root}/challenge/test`,
  getCodeBlocks: (username: string, challengeId: string) =>
    `${ApiRoutes.root}/sandbox/${username}/${challengeId}`,
  username: () => `${ApiRoutes.root}/user/username`,
};
