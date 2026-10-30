let selectedDevice = "Android";
document.querySelectorAll(".device").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".device").forEach(x => x.classList.remove("selected"));
  btn.classList.add("selected"); selectedDevice = btn.dataset.device;
}));
document.getElementById("scan").addEventListener("click", () => {
  const problem = document.getElementById("problem").value.trim();
  const connection = document.getElementById("connection").value;
  if (!problem) { alert("Please describe the device problem first."); return; }
  const lower = problem.toLowerCase();
  let category = "General software / configuration issue";
  let steps = ["Record the exact model and operating-system version.","Back up important files before making changes.","Collect error messages or diagnostic logs using a supported tool.","Apply only device-specific, documented repair steps.","Restart and repeat the original test to verify the result."];
  if (/boot|logo|start|stuck|restart/.test(lower)) {
    category = "Boot / startup problem";
    steps = ["Check power, charging cable and battery state.","Record the exact model and whether recovery/boot menu is accessible.","For Android, use an authorized ADB connection only if USB debugging was already enabled.","For Windows/Linux, inspect startup logs using the relevant recovery environment.","Avoid factory reset or firmware flashing until data is backed up and the exact model firmware is verified."];
  } else if (/charge|charging|battery|usb/.test(lower)) {
    category = "Charging / power problem";
    steps = ["Try a known-good certified cable and power adapter.","Inspect the port for debris or physical damage; do not insert metal objects.","Check battery and charging diagnostics available on the device.","If heat, swelling, smell or liquid damage is present, stop charging and seek hardware service.","Retest with a known-good accessory."];
  } else if (/wifi|internet|network|bluetooth/.test(lower)) {
    category = "Network / connectivity problem";
    steps = ["Toggle the affected radio and restart the device.","Check whether other devices can use the same network/accessory.","Forget and rejoin the network or re-pair the accessory.","Check router, DHCP and device software updates.","Retest connection stability."];
  } else if (/slow|hang|freeze|lag|storage/.test(lower)) {
    category = "Performance / storage problem";
    steps = ["Check free storage and running applications.","Restart and note whether the issue returns.","Review system resource and error logs using supported tools.","Update apps and operating system from official sources.","Retest performance before considering a reset."];
  }
  document.getElementById("report").innerHTML = `<strong>Device:</strong> ${escapeHtml(selectedDevice)}<br><strong>Connection:</strong> ${escapeHtml(connection)}<br><strong>Likely category:</strong> ${category}<br><strong>Problem reported:</strong> ${escapeHtml(problem)}<br><br><strong>Result:</strong> Initial rule-based guidance generated. A real AI diagnosis needs a connected diagnostic agent and device logs.`;
  document.getElementById("steps").innerHTML = steps.map(s => `<li>${escapeHtml(s)}</li>`).join("");
  document.getElementById("results").hidden = false;
  document.getElementById("verification").hidden = true;
  document.getElementById("reportTag").textContent = "GUIDANCE";
  document.getElementById("results").scrollIntoView({behavior:"smooth"});
});
document.getElementById("test").addEventListener("click", () => {
  const box = document.getElementById("verification");
  box.innerHTML = "<b>Verification checklist ready</b><br>1. Reproduce the original problem.<br>2. Confirm the device starts and core functions work.<br>3. Check for new warnings or errors.<br>4. Confirm user data is present.<br><br>This is a manual checklist; no device test was run by this demo.";
  box.hidden = false;
});
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("./sw.js").catch(()=>{});
