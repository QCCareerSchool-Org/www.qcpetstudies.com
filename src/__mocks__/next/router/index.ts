type Router = {
  push: () => Promise<void>;
};

export const useRouter = (): Router => ({
  push: async () => Promise.resolve(),
});
