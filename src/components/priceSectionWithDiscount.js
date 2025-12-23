'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceSectionWithDiscount = void 0;
var big_js_1 = require("big.js");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var bar_1 = require("./bar");
var guaranteeModal_1 = require("./guaranteeModal");
var priceSection_1 = require("./priceSection");
var useToggle_1 = require("@/hooks/useToggle");
var formatPrice_1 = require("@/lib/formatPrice");
var iconSize = 24;
var PriceSectionWithDiscount = function (_a) {
    var courses = _a.courses, price = _a.price, doubleGuarantee = _a.doubleGuarantee, _b = _a.variant, variant = _b === void 0 ? 'dark' : _b, _c = _a.id, id = _c === void 0 ? 'tuition' : _c, _d = _a.enrollPath, enrollPath = _d === void 0 ? '/' : _d, message = _a.message;
    var _e = (0, useToggle_1.useToggle)(), popup = _e[0], toggle = _e[1];
    var handleClick = function () {
        toggle();
    };
    var enrollLink = "https://enroll.qcpetstudies.com".concat(enrollPath, "?").concat(courses.map(function (c) { return "c=".concat(encodeURIComponent(c)); }).join('&'));
    var _f = (0, react_1.useMemo)(function () {
        if (price.promoDiscount === 0) {
            return [price.plans.full.total, price.plans.part.total];
        }
        return [
            parseFloat((0, big_js_1.Big)(price.plans.full.discount).plus(price.promoDiscount).toFixed(2)),
            parseFloat((0, big_js_1.Big)(price.plans.part.total).plus(price.promoDiscount).toFixed(2)),
        ];
    }, [price]), newFullDiscount = _f[0], originalPartTotal = _f[1];
    if (price.promoDiscount === 0) {
        return <priceSection_1.PriceSection courses={courses} price={price} doubleGuarantee={doubleGuarantee} variant={variant} id={id} enrollPath={enrollPath} message={message}/>;
    }
    return (<>
      <div id={id} className="sectionAnchor"/>
      <section className={variant === 'dark' ? 'bg-navy' : 'bg-light'}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <h2 className="mb-3">Tuition &amp; Payment Plans</h2>
              <p className="lead">{message !== null && message !== void 0 ? message : 'Includes everything you need to get started!'}</p>
              <hr className="my-4"/>
              <ul className="list-style-none">
                <li className="mb-3 d-flex align-items-center"><fa_1.FaStar size={iconSize} className="text-primary me-2"/>Certification upon graduation</li>
                <li className="mb-3 d-flex align-items-center"><fa_1.FaLock size={iconSize} className="text-primary me-2"/>21-day money-back guarantee</li>
                <li className="d-flex align-items-center"><fa_1.FaClock size={iconSize} className="text-primary me-2"/>Lifetime access</li>
              </ul>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 mb-4 mb-md-0 d-flex">
              <div className="card shadow text-center bg-light flex-fill">
                <div className="card-body d-flex flex-column justify-content-around py-4 px-1">
                  <h4 className="text-muted mb-3">Installment Plan</h4>
                  <bar_1.Bar variant="secondary"/>
                  {price.courses.length > 0
            ? (<>
                        <p className="mb-3">Pay a Low Deposit of Only<br /><span className="h2 font-family-open-sans">{price.currency.symbol}{(0, formatPrice_1.formatPrice)(price.plans.part.deposit)}</span></p>
                        <p className="mb-3"><span className="lead">Total cost: <span className="text-secondary text-decoration-line-through">{price.currency.symbol}{(0, formatPrice_1.formatPrice)(originalPartTotal)}</span> {price.currency.symbol}{(0, formatPrice_1.formatPrice)(price.plans.part.total)}</span><br /><small>{price.plans.part.installments} monthly payments of {price.currency.symbol}{(0, formatPrice_1.formatPrice)(price.plans.part.installmentSize)}</small></p>
                        <p className="mb-0"><a href={enrollLink} className="btn btn-outline-dark">Enroll Now</a></p>
                      </>)
            : <Loader />}
                </div>
              </div>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-0 col-lg-4 d-flex">
              <div className="card shadow text-center bg-white flex-fill">
                <div className="card-body d-flex flex-column justify-content-around py-4 px-1">
                  <h4 className="text-muted mb-3">Pay in Full</h4>
                  <bar_1.Bar variant="secondary"/>
                  {price.courses.length > 0
            ? (<>
                        <p className="mb-3">One-Time Payment<br /><span className="h2 font-family-open-sans">{price.currency.symbol}{(0, formatPrice_1.formatPrice)(price.plans.full.total)}</span></p>
                        {price.plans.full.discount > 0
                    ? <p className="mb-3"><span className="lead">SAVE <span className="text-secondary text-decoration-line-through">{price.currency.symbol}{(0, formatPrice_1.formatPrice)(price.plans.full.discount)}</span> {price.currency.symbol}{(0, formatPrice_1.formatPrice)(newFullDiscount)}</span><br /><small>When you pay in full</small></p>
                    : <p className="mb-3"><span className="lead">SAVE {price.currency.symbol}{(0, formatPrice_1.formatPrice)(price.promoDiscount)}</span><br /><small>&nbsp;</small></p>}
                        <p className="mb-0"><a href={enrollLink} className="btn btn-secondary">Enroll Now</a></p>
                      </>)
            : <Loader />}
                </div>
              </div>
            </div>
            <div className="col-10 offset-1 col-sm-8 offset-sm-2 col-md-12 offset-md-0">
              <p className="mt-3 mb-0 text-end small fst-italic">Prices are listed in {price.currency.name}.</p>
            </div>
          </div>
        </div>
        <guaranteeModal_1.GuaranteeModal show={popup} doubleGuarantee={doubleGuarantee} onToggle={handleClick}/>
      </section>
    </>);
};
exports.PriceSectionWithDiscount = PriceSectionWithDiscount;
var Loader = function () { return (<div className="d-flex justify-content-center align-items-center" style={{ height: 186 }}>
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>); };
