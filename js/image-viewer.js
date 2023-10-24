// get a DOM reference to the main image
let heroImage = document.getElementById("hero-image");
// get a DOM ref to the collection of menu items
let links = document.getElementsByClassName("menu-item");
// set the initial selection index
let selectedIndex = 0;
// load the initial image into heroImage (the main image)
heroImage.src = links[selectedIndex].dataset.image;
// listen to the transition end
heroImage.ontransitionend = onTransitionEnd;
// loop through all of the menu items 
for (let i = 0; i < links.length; i++) {
    // assign the cklick handler
    links[i].onclick = handleClick;
}
// click handler
function handleClick(event) {
    // get the index of the clicked item
    let newIndex = returnItemIndex(links, event.currentTarget)
    // if the index is different from the exisiting selection 
    // != means does not equal
    if (newIndex != selectedIndex) {
        // update the index selection
        selectedIndex = newIndex;
        // fade out the heroImage (requires CSS transition)
        heroImage.style.opacity = 0;
    }
}
// handle end of transition
function onTransitionEnd() {
    // update the heroImage with the newly selectd image
    // dataset.image is how we acess the custom HTML attribute - 'data-image'
    heroImage.src = links[selectedIndex].dataset.image;
    // revert the opacity of the heroImage to make it visible
    heroImage.style.opacity = 1;
}
// find the index of an item in a given collection
function returnItemIndex(collection, item) {
    // loop through the collection
    for (let i = 0; i < collection.length; i++) {
        // if the current item  == the item we are looking for - a match was found!

        if (collection[i] == item) {
            // pass back the index of the found item
            return i;
        }
        // the loop will only run until the index is found
    }
    // if the item was not found, the next oline will execute
    console.error("cannot find item in collection")
}