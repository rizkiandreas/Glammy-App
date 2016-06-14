var GroceryListViewModel = require("../../shared/view-models/grocery-list-view-model");
var dialogsModule = require("ui/dialogs");
var Observable = require("data/observable").Observable;
var ObservableArray = require("data/observable-array").ObservableArray;
var viewModule = require("ui/core/view");
var page;

var groceryList = new GroceryListViewModel([]);
var pageData = new Observable({
    groceryList: groceryList
});

exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;

    groceryList.empty();
    groceryList.load();
};