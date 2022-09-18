import { config } from "process";
import { build, Plugin } from "vite";
export interface Options {}

export default function TestPlugin(_options: Options = {}): Plugin {
  return {
    name: "vite-plugin-test",
    // enforce: "pre",
    buildStart(options) {
      console.log("@buildStart");
    },
    options(options) {
      console.log("@options");
    },
    resolveId(source) {
      console.log("@resolveId", source);
      if (source == "virtual-module") return source;
    },
    transform(code, id) {
      console.log("@transform: ", idParser(id));
    },
    load(id) {
      console.log("@load: ", idParser(id));
      if (id == "virtual-module") {
        return 'export default "This is virtual-module!"';
      }
    },
    buildEnd() {
      console.log("@buildEnd");
    },
    config(config) {
      console.log("@config:");
    },
    configResolved(config) {
      console.log("@configResolved");
    },
    configureServer(server) {
      console.log("@configureServer", typeof server);
    },
    configurePreviewServer(server) {
      console.log("@configurePreviewServer");
    },
    transformIndexHtml(html) {
      console.log("@transformIndexHtml");
    },
  };
}
function idParser(id:string){
  const sites=id.split('/');
  return `.../${sites[sites.length-2]}/${sites[sites.length-1]}`
}