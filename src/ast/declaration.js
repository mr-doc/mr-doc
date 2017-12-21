"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Declaration {
}
exports.Declaration = Declaration;
class ParameterDeclaration {
    constructor(identifier, value, optional = false) {
        this.identifier = identifier;
        this.value = value;
        this.optional = optional;
    }
    accept(visitor) {
        return visitor.visitParameter(this);
    }
}
exports.ParameterDeclaration = ParameterDeclaration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWNsYXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBO0NBRUM7QUFGRCxrQ0FFQztBQUVEO0lBSUUsWUFBWSxVQUFpQixFQUFFLEtBQWlCLEVBQUUsV0FBb0IsS0FBSztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0lBQ00sTUFBTSxDQUFJLE9BQThCO1FBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FDRjtBQVpELG9EQVlDIn0=