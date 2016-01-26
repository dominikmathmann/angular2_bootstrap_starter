System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var DateDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            DateDirective = (function (_super) {
                __extends(DateDirective, _super);
                function DateDirective(model, el, renderer) {
                    _super.call(this, renderer, el);
                    this.model = model;
                    this.el = el;
                    this.renderer = renderer;
                    model.valueAccessor = this;
                    this.onChange = this.onChanges;
                }
                DateDirective.prototype.writeValue = function (obj) {
                    if (obj) {
                        _super.prototype.writeValue.call(this, this.formatDate(obj));
                    }
                };
                DateDirective.prototype.onChanges = function (value) {
                    this.onChange(this.parseDate(value));
                };
                DateDirective.prototype.formatDate = function (inputDate) {
                    return moment(inputDate).format("DD.MM.YYYY HH:mm");
                };
                DateDirective.prototype.parseDate = function (inputString) {
                    return moment(inputString, "DD.MM.YYYY HH:mm").toDate();
                };
                DateDirective = __decorate([
                    core_1.Directive({
                        selector: '[tsdate]',
                        host: {
                            '(change)': 'onChanges($event.target.value)'
                        }
                    }), 
                    __metadata('design:paramtypes', [common_1.NgModel, core_1.ElementRef, core_1.Renderer])
                ], DateDirective);
                return DateDirective;
            })(common_1.DefaultValueAccessor);
            exports_1("DateDirective", DateDirective);
        }
    }
});
//# sourceMappingURL=timesheet.date.directive.js.map