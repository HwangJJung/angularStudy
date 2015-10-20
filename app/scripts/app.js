'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */

var todoList = [
  {done : true, title : "Angular 독서"},
  {done : false , title : "Angular 공부하기"},
  {done : false, title  :"개인 프로젝트 구성"}
  ];

angular
  .module('angularApp', []);
