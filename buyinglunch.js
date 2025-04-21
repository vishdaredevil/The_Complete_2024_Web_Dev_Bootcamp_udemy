function whosPaying(names) {
    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex];
    return randomName + " is going to buy lunch today!";
}
