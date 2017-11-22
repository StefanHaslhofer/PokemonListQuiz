var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var currentOffset = 0;
$(document).ready(function () {
    $('#infos').hide();
    //$('#pokemons').hide();
    (function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switchPage(0);
                return [2 /*return*/];
            });
        });
    })();
});
function switchPage(i) {
    return __awaiter(this, void 0, void 0, function () {
        var pokelist, html, _i, _a, pokemon;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(currentOffset + i < 0)) {
                        currentOffset = currentOffset + i;
                    }
                    return [4 /*yield*/, $.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=' + currentOffset)];
                case 1:
                    pokelist = _b.sent();
                    html = '';
                    for (_i = 0, _a = pokelist.results; _i < _a.length; _i++) {
                        pokemon = _a[_i];
                        html += "<table class=\"table table-striped\"><tr><td>" + pokemon.name + "</td>";
                        html += "<td><button id=\"btnDetails\" onclick=\"details('" + pokemon.url + "')\" href=\"info.html\">Details</button></td>";
                        html += "</tr></table>";
                    }
                    $('#pokemons')[0].innerHTML = html;
                    return [2 /*return*/];
            }
        });
    });
}
function details(pokemonUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var pokemon, abilityList, i, html;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, $.get(pokemonUrl)];
                case 1:
                    pokemon = _a.sent();
                    abilityList = pokemon.abilities;
                    i = 0;
                    html = '';
                    html += "<table class=\"table table-striped\"><tr><td>" + pokemon.name + "</td>";
                    html += "<td><img src='" + pokemon.sprites.front_default + "'></td></tr>";
                    html += "<tr><td>Gewicht:</td><td>" + pokemon.weight + "kg</td></tr><tr>";
                    html += "<td>Attacken:</td><td>";
                    for (i = 0; i < abilityList.length; i++) {
                        html += '' + abilityList[i].ability.name + '</br>';
                    }
                    html += "</td></tr><tr><button id=\"goBack\" onclick=\"goBack()\" class=\"btn btn-primary\">Go back</button>";
                    html += "</tr></table>";
                    $('#infos')[0].innerHTML = html;
                    $('#pokemons').hide();
                    $('#previousPage').hide();
                    $('#nextPage').hide();
                    $('#infos').show();
                    return [2 /*return*/];
            }
        });
    });
}
function goBack() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            $('#infos').hide();
            $('#pokemons').show();
            $('#previousPage').show();
            $('#nextPage').show();
            return [2 /*return*/];
        });
    });
}
