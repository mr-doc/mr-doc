/// <reference path="../../typings/fs-extra/fs-extra" />
/// <reference path="../../typings/lodash/lodash" />

import ICompiler = require('../interface');
import Option = require('../option');
import Stringify = require('json-stringify-safe');
import File = require('fs-extra');
import _ = require('lodash');
import Path = require('path');

class JSON implements ICompiler {
 private path: string;
 private file: any;
 private config: Option.Compiler;
 constructor(config: Option.Compiler) {
  this.config = config;
}
 public compile(result: any[], path?: string) {
  this.path = path;
  this.file = result.length > 0 ? result[0].context.file : {};
  this.walk(result, function (comments: any) {
    delete comments.errors;
  });

  return Stringify(result, null, 2);
 }
 private walk(comments: any, fn: Function, options?: any) {
  let name: string = _.isEmpty(this.file.name) ? '' : this.file.name;
   comments.forEach(function (comment: any) {
     fn(comment, options);
     for (let scope in comment.members) {
      if (comment.members.hasOwnProperty(scope)) {
       this.walk(comment.members[scope], fn, options);
      }
     }
   });
   return _.isEmpty(this.path) ? comments : File.writeJSONSync(Path.join(this.path, name + '.json'), comments);
 }
}


export = JSON;
