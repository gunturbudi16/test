function treeHeight(height, year) {
  for (let i = 0; i < year; i++) {
    var height = height * 2 + 1;
  }
  return console.log("Tree's height: ", height);
}

treeHeight(3, 2);
