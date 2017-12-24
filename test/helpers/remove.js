"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
function remove(obj, property) {
    var result = _.transform(obj, function (result, value, key) {
        result[key] = _.isObject(value) && property in value ? _.omit(value, 'reach') : value;
    });
    return result;
    // for (let prop in obj) {
    //   if (prop === property) delete obj[prop];
    //   else if (typeof obj[prop] === 'object')
    //     remove(obj[prop], property);
    // }
}
exports.default = remove;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVtb3ZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTRCO0FBRTVCLGdCQUErQixHQUFHLEVBQUUsUUFBZ0I7SUFDbEQsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBUyxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUc7UUFDdkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUN4RixDQUFDLENBQUMsQ0FBQztJQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDZCwwQkFBMEI7SUFDMUIsNkNBQTZDO0lBQzdDLDRDQUE0QztJQUM1QyxtQ0FBbUM7SUFDbkMsSUFBSTtBQUNOLENBQUM7QUFWRCx5QkFVQyJ9