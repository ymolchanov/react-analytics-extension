function traverseParents(el, cb) {
  cb(el);

  if (el.nodeName === "BODY") {
    return;
  }

  return traverseParents(el.parentElement, cb);
}

const findZones = (acc) => (el) => {
  const { zoneName } = el.dataset;

  if (zoneName) {
    acc.push(zoneName);
  }
};

document.body.addEventListener("mouseover", (event) => {
  const zoneNames = [];

  traverseParents(event.target, findZones(zoneNames));

  console.log(zoneNames.reverse().join("_"));
});
