"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSectionDisabled = void 0;
var PriceSectionDisabled = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'dark' : _b, _c = _a.id, id = _c === void 0 ? 'tuition' : _c;
    return (<>
    <div id={id} className="sectionAnchor"/>
    <section className={variant === 'dark' ? 'bg-navy' : 'bg-light'}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
            <p>Unfortunately the Dog Grooming and First Aid for Groomers courses are not available in Ontario</p>
          </div>
        </div>
      </div>
    </section>
  </>);
};
exports.PriceSectionDisabled = PriceSectionDisabled;
