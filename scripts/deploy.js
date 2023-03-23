const flightplan = require("flightplan");


const sysName = "fcl-storybook";
const flagPrefix = "--fig-";

/**
 * Extract named arguments
 **/
const extractArgs = () => process.argv.reduce((acc, value) => {
  if (!value.startsWith(flagPrefix)) {
    return acc;
  }

  const [argName, ...argValue] = value.split("=");

  return {
    ...acc,
    [argName.substring(flagPrefix.length)]: argValue.join("=") || true,
  };
}, {});

/**
 * Build filters
 *
 * @param e: environment
 * @param id: target
 **/
const buildFilters = (e, id) => {
  const gID = id !== "all" ? `and G@id:${id}` : "";

  return `-C "G@environment:${e} and G@roles:${sysName} ${gID}"`;
};

const { env, target, rev, md5, pem, host } = extractArgs();

flightplan.target("saltmaster", {
  host,
  username: "deployer",
  agent: process.env.SSH_AUTH_SOCK,
  privateKey: pem,
});

flightplan.remote((remote) => {
  remote.sudo(`salt ${buildFilters(env, target)} test.ping`, { user: "root" });
});

flightplan.remote((remote) => {
  const pillar = `{storybook_code_archive: ${rev}, mode_deploy: True, storybook_code_md5: ${md5}}`;

  remote.sudo(
    `salt ${buildFilters(env, target)} state.sls subsystems.${sysName} saltenv=${env} pillar="${pillar}"`,
    { user: "root" }
  );
});
