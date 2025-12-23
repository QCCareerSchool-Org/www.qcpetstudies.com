'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitStats = void 0;
var bs_1 = require("react-icons/bs");
var AssignmentsIcon = function () { return (<div className="me-2"><bs_1.BsPencilSquare title="Assignments"/></div>); };
var ReadingsIcon = function () { return (<div className="me-2"><bs_1.BsBookHalf title="Readings"/></div>); };
var VideosIcon = function () { return (<div className="me-2"><bs_1.BsPlayCircle title="Videos"/></div>); };
var UnitStats = function (props) { return (<div className="d-flex flex-column flex-sm-row mb-3">
    {props.assignmentsCount && <div className="d-flex mb-2 mb-sm-0 me-sm-4"><AssignmentsIcon />{props.assignmentsCount}{props.assignmentsTime && <> ({props.assignmentsTime})</>}</div>}
    {props.readingsTime && <div className="d-flex mb-2 mb-sm-0 me-sm-4"><ReadingsIcon />{props.readingsTime}</div>}
    {props.videosCount && <div className="d-flex"><VideosIcon />{props.videosCount}{props.videosTime && <> ({props.videosTime})</>}</div>}
  </div>); };
exports.UnitStats = UnitStats;
