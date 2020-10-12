import DOM from './dom.js'
export default class Component {
  constructor(){
    this.config = new Object({});
    this.attributes = new String('');
    this.added = new Array([]);
  }
  /**
   * A
   * @param {object} args
   * @param {function} callback 
   * @example 
   * const component = new Component;
   * component.create({
   *   element : 'custom-element',
   *   html : '<div>content of component : <slot></slot></div>',
   *   mount(){
   *     // do something after component is mounted
   *   }
   * })
   */
  create( args, callback ){
    let element;
    const componentElement = args.element,
          templateHTML = args.html,
          templateElement = DOM.create([ 'template', templateHTML ]);
    window.customElements.define( componentElement, class extends HTMLElement {
      constructor(){
        super();
        this.attributes = args.attributes;
        DOM.attach( templateElement.content.cloneNode( true ) );
        element = this;
      }
      connectedCallback() {
        if( typeof args.mount === 'function' ) args.mount( this );
      }
      disconnectedCallback() {
        if( typeof args.unmount === 'function' ) args.unmount( this );
      }
      attributeChangedCallback( attrName, oldVal, newVal) {
      }
    });
    if(typeof callback === 'function' ) callback(element);
  }
  /**
   * 
   * @param {*} args 
   * @param {*} callback 
   */
  get( args, callback ){

    
  }
  /**
   * 
   * @param {*} args 
   * @param {*} callback 
   */
  attach( args, callback ){
    const argsIsObject = typeof args === 'object',
          componentName = argsIsObject && args.component ? args.component : args,
          isKebabCase = ( args ) => componentName.includes('-'),
          template = DOM.create('template'),
          templateHTML = '';
          
  }
}