function myFunction() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores ab accusamus vero culpa quae impedit amet aut libero quasi deserunt vel repellat placeat deleniti, tempore sapiente cumque soluta labore dicta sint dignissimos quibusdam facilis mollitia? Eum voluptates ex officiis fugit aut, laudantium dolor impedit necessitatibus cumque voluptatum iusto officia");
    node.appendChild(textnode);
    document.getElementById("project").appendChild(node);
  }
