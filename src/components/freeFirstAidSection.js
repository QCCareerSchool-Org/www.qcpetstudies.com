"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeFirstAidSection = void 0;
var image_1 = require("next/image");
var course_materials_first_aid_jpg_1 = require("./course-materials-first-aid.jpg");
var first_aid_logo_svg_1 = require("@/images/first-aid-logo.svg");
var FreeFirstAidSection = function (_a) {
    var className = _a.className;
    return (<section className={className}>
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-lg-start">
          <div className="text-center mb-2">
            <image_1.default src={first_aid_logo_svg_1.default} alt="First Aid plus Logo" style={{ maxWidth: '100%', height: 'auto' }}/>
          </div>
          <h2>Get a <strong>FREE</strong> First Aid Course</h2>
          <p className="lead">Enroll in Dog Grooming &amp; receive the First Aid for Dog Groomers course to take your career to the next level!</p>
          <p className="mb-0">Learn from first aid experts who will guide you through the course. You'll learn how to keep yourself and your furry clients out of harm's way.</p>
        </div>
        <div className="col-12 col-lg-6">
          <div style={{ maxWidth: 431, margin: '0 auto' }}>
            <image_1.default src={course_materials_first_aid_jpg_1.default} alt="Dog grooming first aid book" sizes="100vw" style={{ width: '100%', height: 'auto' }}/>
          </div>
        </div>
      </div>
    </div>
  </section>);
};
exports.FreeFirstAidSection = FreeFirstAidSection;
