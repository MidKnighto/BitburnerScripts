/** @param {NS} ns */

export async function main(ns) {

  const server = ns.args[0];

  // @ts-ignore
  ns.tprint("Server max money: " + ns.getServerMaxMoney(server));
  // @ts-ignore
  ns.tprint("Your hacking level: " + ns.getHackingLevel(server));
  // @ts-ignore
  ns.tprint("Server money available: " + ns.getServerMoneyAvailable(server));
  // @ts-ignore
  ns.tprint("Server min security level: " + ns.getServerMinSecurityLevel(server))
  // @ts-ignore
  ns.tprint("Server base security level: " + ns.getServerBaseSecurityLevel(server));
  // @ts-ignore
  ns.tprint("Server required hacking level: " + ns.getServerRequiredHackingLevel(server));
  // @ts-ignore
  ns.tprint("Server growth rate: " + ns.getServerGrowth(server));
  // @ts-ignore
  ns.tprint("Server number of open ports required: " + ns.getServerNumPortsRequired(server));
  // @ts-ignore
  ns.tprint("Server has admin rights: " + ns.hasRootAccess(server));
  // @ts-ignore
  ns.tprint("Server RAM: " + ns.getServerMaxRam(server));
  // @ts-ignore
  ns.tprint("Hack chance: " + ns.hackAnalyzeChance(server));
}

