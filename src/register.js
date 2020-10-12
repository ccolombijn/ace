import DOM from './dom'
export default class Register{
  constructor(){
    this.DOMelements = document.getElementsByTagName('*');
    this.customElements = new Array;
  }
  HTMLElementObject(element) {
    if(element)
     
      return DOM.create(element.toUpperCase()).toString();
  }
  add(){
    for(let element in this.DOMelements){
      if(typeof this.DOMelements[element] === 'object'){
        if(HTMLElementObject(this.DOMelements[element].tagName) === '[object HTMLElement]'){
          const propName = (DOMelements[element].tagName.toLowerCase().split('-').map((item, index) => index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item.toLowerCase())).join('');
          if(!window[propName]) {
            //customElements.push(DOMelements[element].tagName);
            console.log(shadow(DOMelements[element].tagName));

            //window[propName] = new Object({ elements : [DOMelements[element]] });
            window[propName] = new Array([ DOMelements[element] ]);
          }else{
            window[propName].push(DOMelements[element])
          }
        }
      }
    }
  }
}