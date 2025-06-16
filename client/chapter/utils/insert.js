function insertBegin(parent, child) {
    if(isString(parent)) parent = getNode(parent);

    parent.insertAdjacentHTML('beforebegin', child);
}

function insertFirst(parent, child) {
    if(isString(parent)) parent = getNode(parent);

    parent.insertAdjacentHTML('afterbegin', child);
}

function insertLast(parent, child) {
    if(isString(parent)) parent = getNode(parent);

    parent.insertAdjacentHTML('beforeend', child);
}

function insertAfter(parent, child) {
    if(isString(parent)) parent = getNode(parent);

    parent.insertAdjacentHTML('afterend', child);
}