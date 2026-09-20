let changeTagName = function (nodeName, newTagname) {

        if (!(nodeName instanceof Element)) {
                console.error("Invalid Tag");
                return null;
        }
        let newEle = document.createElement(`${newTagname}`);
        newEle.innerText = nodeName.innerText;

        for (const attr of nodeName.attributes) {
                newEle.setAttribute(attr.name, attr.value);
        }
        nodeName.after(newEle)

        nodeName.replaceWith(newEle);
}

changeTagName(div, "p");