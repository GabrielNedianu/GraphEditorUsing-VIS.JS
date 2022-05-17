var nodes, edges, network;

// convenience method to stringify a JSON object
function toJSON(obj) {
  return JSON.stringify(obj, null, 4);
}

function addNode() {
  try {
    nodes.add({
      id: document.getElementById("node-id").value,
      label: document.getElementById("node-label").value
    });
  } catch (err) {
    alert(err);
  }
  document.getElementById("node-id").value = "",
  document.getElementById("node-label").value = ""
}

function updateNode() {
  try {
    nodes.update({
      id: document.getElementById("node-id").value,
      label: document.getElementById("node-label").value
    });
  } catch (err) {
    alert(err);
  }
  document.getElementById("node-id").value = "",
  document.getElementById("node-label").value = ""
}
function removeNode() {
  try {
    nodes.remove({ id: document.getElementById("node-id").value });
  } catch (err) {
    alert(err);
  }
  document.getElementById("node-id").value = "",
  document.getElementById("node-label").value = ""
}

function addEdge() {
  try {
    edges.add({
      id: document.getElementById("edge-id").value,
      label: document.getElementById("edge-label").value,
      from: document.getElementById("edge-from").value,
      to: document.getElementById("edge-to").value
    });
  } catch (err) {
    alert(err);
  }
  document.getElementById("edge-id").value = "",
  document.getElementById("edge-label").value = "",
  document.getElementById("edge-from").value = "",
  document.getElementById("edge-to").value = ""
}
function updateEdge() {
  try {
    edges.update({
      id: document.getElementById("edge-id").value,
      label: document.getElementById("edge-label").value,
      from: document.getElementById("edge-from").value,
      to: document.getElementById("edge-to").value
    });
  } catch (err) {
    alert(err);
  }
  document.getElementById("edge-id").value = "",
  document.getElementById("edge-label").value = "",
  document.getElementById("edge-from").value = "",
  document.getElementById("edge-to").value = ""
}
function removeEdge() {
  try {
    edges.remove({ id: document.getElementById("edge-id").value });
  } catch (err) {
    alert(err);
  }
  document.getElementById("edge-id").value = "",
  document.getElementById("edge-label").value = "",
  document.getElementById("edge-from").value = "",
  document.getElementById("edge-to").value = ""
}

function draw() {
  // se creaza nodurile
  nodes = new vis.DataSet();
  nodes.on("*", function () {
    document.getElementById("noduri").innerText = JSON.stringify(
      nodes.get(),
      null,
      4
    );
  });
  nodes.add([
    { id: "1", label: "Matei" },
    { id: "2", label: "Andrei" },
    { id: "3", label: "Nicoleta" },
    { id: "4", label: "Ionela" }
  ]);

  // se adauga muchiile intre noduri
  edges = new vis.DataSet();
  edges.on("*", function () {
    document.getElementById("muchii").innerText = JSON.stringify(
      edges.get(),
      null,
      4
    );
  });
  edges.add([
    { id: "1", label: "prieteni", from: "1", to: "2" },
    { id: "2", label: "prieteni buni", from: "1", to: "3" },
    { id: "3", label: "amici", from: "2", to: "4" },
    { id: "4", label: "dusmani", from: "2", to: "3" }
  ]);

  // se creaza reteaua
  var container = document.getElementById("retea");
  var data = {
    nodes: nodes,
    edges: edges
  };
  var options = {};
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});
