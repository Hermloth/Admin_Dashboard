export function CreateDivDomElement(elementType, inputClass, parentElement){
    const parentElementHolder = parentElement;
    const element = document.createElement(elementType);
    element.classList.add(inputClass);
    parentElementHolder.appendChild(element);
}