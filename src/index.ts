import { config } from 'process';
import { build, Plugin } from 'vite'
export interface Options{

}

export default function (_options:Options ={}): Plugin {
  return {
    name: 'vite-plugin-test',
    enforce:'pre',
    buildStart(options){
      console.log('@options');   
    },
    resolveId(source){
      if(source=='virtual-module')return source
      console.log('@resolveId',source);
    },
    transform(code, id) {
       console.log('@transform: ',id);
    },
    load(id){
      if(id=='virtual-module'){
        return 'export default "This is virtual-module!"'
      }
      console.log('@load: ',id);
    },
    buildEnd(){
      console.log('@buildEnd');
    },
    config(cfg){
      console.log('@config:',cfg);
    }
  }
}
