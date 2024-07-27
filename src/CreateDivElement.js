export function CreateDivElement(inputClass, parentElement){
    const parentElementHolder = parentElement;
    const element = document.createElement("div");
    element.classList.add(inputClass);
    parentElementHolder.appendChild(element);

    return element;
}