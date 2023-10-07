"use strict";
class Component {
    onInit() {
        console.log("Called from Component");
    }
}
class ReactComponent extends Component {
    onInit() {
        console.log("Called from React Component");
    }
}
const c = new ReactComponent();
// c.onInit();
// c.super.onInit();
