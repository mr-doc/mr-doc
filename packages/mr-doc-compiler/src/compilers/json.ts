/// <reference path="../../typings/fs-extra/fs-extra" />
/// <reference path="../../typings/lodash/lodash" />

import ICompiler = require('../interface');
import Option = require('../option');
import Stringify = require('json-stringify-safe');
import Promise = require('bluebird');

class JSON implements ICompiler {
 public options: Option.Compiler;
 constructor(config: Option.Compiler) {
  this.options = config;
}
public compile(result: any[], path?: string) {
  this.walk(result, function (comments: any) {
    delete comments.errors;
  });
  return Stringify(result, null, 2);
}
 public compileAsync(result: any[], path?: string) {
  return new Promise((resolve: Function) => {
    this.walk(result, function (comments: any) {
      delete comments.errors;
    });
    resolve(Stringify(result, null, 2));
  });
 }
 private walk(comments: any, fn: Function, options?: any) {
   comments.forEach(function (comment: any) {
     fn(comment, options);
     for (let scope in comment.members) {
      if (comment.members.hasOwnProperty(scope)) {
       this.walk(comment.members[scope], fn, options);
      }
     }
   });
 }
}

export = JSON;
