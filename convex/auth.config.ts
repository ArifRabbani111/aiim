const authConfig = {
  providers: [
    {
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
      domain: "https://faithful-blowfish-41.clerk.accounts.dev",
      applicationID: "convex",
    },
  ]
};
export default authConfig;