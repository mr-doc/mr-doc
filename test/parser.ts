import xdoc from "../src/tom/index";
import { AnnotationsContext, DocumentationContext, BodyContext, TagContext } from "../src/tom/TomParser";

var result = xdoc(`@param x: Number`);

var annotations = result.body().annotations();


parseAnnotations(annotations);

function parseAnnotations(node: AnnotationsContext) {
  node.tag().forEach((tag: TagContext) => {
    
  });
}