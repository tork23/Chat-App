// Making the constants for path as mistake proofing
// Easy to change the route
// PATH_DASHBOARD.general.app => "/" + "app"

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, "app"),
  },
};
