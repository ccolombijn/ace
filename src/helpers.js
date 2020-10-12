export const helper = (()=>{
  return {
    /**
     * 
     * @param {*} args 
     * @param {*} type 
     * @param {*} callback 
     */
    withType( args, type, callback ){
      if( type ){
        let typeCondition = typeof args === type;
        if(type === 'array' ) typeCondition = Array.isArray( args );
        if( typeCondition && typeof callback === 'function' ) callback(args);
        return typeCondition;
      }else{
        return typeof args;
      }
    },
    isNode( object ){
      return (
        typeof Node === 'object' ? object instanceof Node : 
        object && typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'
      );
    },
    isElement( object ){
      return (
        typeof HTMLElement === 'object' ? object instanceof HTMLElement : //DOM2
        object && typeof object === 'object' && object !== null && object.nodeType === 1 && typeof object.nodeName === 'string'
      );
    }
  }
})();