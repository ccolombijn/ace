const DOM = (()=>{
  
  return {
  /**
   * 
   * @param {*} args 
   * @param {*} callback 
   */
    create( args, callback ){
      const isArray = ( arr ) => Array.isArray(arr);
      let name = args[0],
          attributes = args[1],
          element = document.createElement( name ),
          start = 1;
      if ( !isArray( args ) ) 
        return create.call( this, Array.prototype.slice.call( arguments ) );
      if ( typeof attributes === 'object' && attributes !== null && !isArray( attributes ) ) { 
        attributes.forEach(  attribute => element.setAttribute( attribute ,attributes[ attribute ] ));
        start = 2;
      }
      //for ( let index = start; index < tag.length; index++ ) {
      tag.forEach( ( tagElement, tagIndex )=>{
        if( isArray( tagElement ) )
          element.appendChild( create( tagElement ) );
        else 
          element.appendChild( document.createTextNode( tagElement ) );
      });
      if( typeof callback === 'function') callback(element);
      return element;
    },
    /**
     * 
     * @param {*} args 
     * @param {*} callback 
     */
    get( args, callback ){
      let element;
      if( typeof args === 'string' ){
        if( args.includes('#') || args.includes('.'))
          element = document.querySelector( args );
        else
          element = document.getElementsByTagName( args )
        
      }else if( typeof args === 'object' ){
        if(args.el){
          if( typeof args.el === 'string' ){
            if( args.el.includes('#') || args.el.includes('.')){
              element = document.querySelector( args.el );
            }
          }
        }
      }
      if( typeof callback === 'function' ) callback();
      return element;
    },
    /**
     * 
     * @param {HTMLElement} element 
     */
    shadow( element, attachMode = 'open' ){
      element.attachShadow( { mode : attachMode } );
      element.shadowRoot.appendChild( template.content.cloneNode( true ) );
    }
  }
})();
export default DOM;