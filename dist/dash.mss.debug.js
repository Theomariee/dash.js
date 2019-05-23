(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ErrorsBase = (function () {
    function ErrorsBase() {
        _classCallCheck(this, ErrorsBase);
    }

    _createClass(ErrorsBase, [{
        key: 'extend',
        value: function extend(errors, config) {
            if (!errors) return;

            var override = config ? config.override : false;
            var publicOnly = config ? config.publicOnly : false;

            for (var err in errors) {
                if (!errors.hasOwnProperty(err) || this[err] && !override) continue;
                if (publicOnly && errors[err].indexOf('public_') === -1) continue;
                this[err] = errors[err];
            }
        }
    }]);

    return ErrorsBase;
})();

exports['default'] = ErrorsBase;
module.exports = exports['default'];

},{}],2:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var EventsBase = (function () {
    function EventsBase() {
        _classCallCheck(this, EventsBase);
    }

    _createClass(EventsBase, [{
        key: 'extend',
        value: function extend(events, config) {
            if (!events) return;

            var override = config ? config.override : false;
            var publicOnly = config ? config.publicOnly : false;

            for (var evt in events) {
                if (!events.hasOwnProperty(evt) || this[evt] && !override) continue;
                if (publicOnly && events[evt].indexOf('public_') === -1) continue;
                this[evt] = events[evt];
            }
        }
    }]);

    return EventsBase;
})();

exports['default'] = EventsBase;
module.exports = exports['default'];

},{}],3:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreEventsEventsBase = _dereq_('../core/events/EventsBase');

var _coreEventsEventsBase2 = _interopRequireDefault(_coreEventsEventsBase);

var MssEvents = (function (_EventsBase) {
    _inherits(MssEvents, _EventsBase);

    function MssEvents() {
        _classCallCheck(this, MssEvents);

        _get(Object.getPrototypeOf(MssEvents.prototype), 'constructor', this).call(this);

        this.FRAGMENT_INFO_LOADING_COMPLETED = 'fragmentInfoLoadingCompleted';
    }

    return MssEvents;
})(_coreEventsEventsBase2['default']);

var mssEvents = new MssEvents();
exports['default'] = mssEvents;
module.exports = exports['default'];

},{"../core/events/EventsBase":2}],4:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssEvents = _dereq_('./MssEvents');

var _MssEvents2 = _interopRequireDefault(_MssEvents);

var _MssFragmentMoofProcessor = _dereq_('./MssFragmentMoofProcessor');

var _MssFragmentMoofProcessor2 = _interopRequireDefault(_MssFragmentMoofProcessor);

var _streamingVoFragmentRequest = _dereq_('../streaming/vo/FragmentRequest');

var _streamingVoFragmentRequest2 = _interopRequireDefault(_streamingVoFragmentRequest);

function MssFragmentInfoController(config) {

    config = config || {};
    var context = this.context;

    var instance = undefined,
        logger = undefined,
        fragmentModel = undefined,
        started = undefined,
        type = undefined,
        bufferTimeout = undefined,
        startTime = undefined,
        startFragmentTime = undefined,
        index = undefined;

    var streamProcessor = config.streamProcessor;
    var eventBus = config.eventBus;
    var dashMetrics = config.dashMetrics;
    var playbackController = config.playbackController;
    var ISOBoxer = config.ISOBoxer;
    var baseURLController = config.baseURLController;
    var debug = config.debug;
    var controllerType = 'MssFragmentInfoController';

    function setup() {
        logger = debug.getLogger(instance);
    }

    function initialize() {
        started = false;

        startTime = null;
        startFragmentTime = null;

        // Register to StreamProcessor as external controller
        streamProcessor.registerExternalController(instance);
        type = streamProcessor.getType();
        fragmentModel = streamProcessor.getFragmentModel();
    }

    function doStart() {
        if (started === true) {
            return;
        }

        logger.debug('Do start');

        eventBus.on(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, onFragmentInfoLoadedCompleted, instance);

        started = true;
        startTime = new Date().getTime();
        index = 0;

        loadNextFragmentInfo();
    }

    function doStop() {
        if (!started) {
            return;
        }
        logger.debug('Do stop');

        eventBus.off(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, onFragmentInfoLoadedCompleted, instance);

        // Stop buffering process
        clearTimeout(bufferTimeout);
        started = false;

        startTime = null;
        startFragmentTime = null;
    }

    function reset() {
        doStop();
        streamProcessor.unregisterExternalController(instance);
    }

    function loadNextFragmentInfo() {
        // Check if running state
        if (!started) {
            return;
        }

        // Get last segment from SegmentTimeline
        var representation = getCurrentRepresentation();
        var manifest = representation.adaptation.period.mpd.manifest;
        var adaptation = manifest.Period_asArray[representation.adaptation.period.index].AdaptationSet_asArray[representation.adaptation.index];
        var segments = adaptation.SegmentTemplate.SegmentTimeline.S_asArray;
        var segment = segments[segments.length - 1];

        logger.debug('Last fragment time: ' + segment.t / adaptation.SegmentTemplate.timescale);

        // Generate segment request
        var request = getRequestForSegment(adaptation, representation, segment);

        // Send segment request
        requestFragment.call(this, request);
    }

    function delayLoadNextFragmentInfo(delay) {
        clearTimeout(bufferTimeout);
        bufferTimeout = setTimeout(function () {
            bufferTimeout = null;
            loadNextFragmentInfo();
        }, delay * 1000);
    }

    function getRequestForSegment(adaptation, representation, segment) {
        var timescale = adaptation.SegmentTemplate.timescale;
        var request = new _streamingVoFragmentRequest2['default']();

        request.mediaType = type;
        request.type = 'FragmentInfoSegment';
        // request.range = segment.mediaRange;
        request.startTime = segment.t / timescale;
        request.duration = segment.d / timescale;
        request.timescale = timescale;
        // request.availabilityStartTime = segment.availabilityStartTime;
        // request.availabilityEndTime = segment.availabilityEndTime;
        // request.wallStartTime = segment.wallStartTime;
        request.quality = representation.index;
        request.index = index++;
        request.mediaInfo = streamProcessor.getMediaInfo();
        request.adaptationIndex = representation.adaptation.index;
        request.representationId = representation.id;
        request.url = baseURLController.resolve(representation.path).url + adaptation.SegmentTemplate.media;
        request.url = request.url.replace('$Bandwidth$', representation.bandwidth);
        request.url = request.url.replace('$Time$', segment.tManifest ? segment.tManifest : segment.t);
        request.url = request.url.replace('/Fragments(', '/FragmentInfo(');

        return request;
    }

    function getCurrentRepresentation() {
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();

        return representation;
    }

    function requestFragment(request) {

        logger.debug('Load fragment for time: ' + request.startTime);
        if (streamProcessor.getFragmentModel().isFragmentLoadedOrPending(request)) {
            // We may have reached end of timeline in case of start-over streams
            logger.debug('No more fragments');
            return;
        }

        fragmentModel.executeRequest(request);
    }

    function onFragmentInfoLoadedCompleted(e) {
        if (e.streamProcessor !== streamProcessor) {
            return;
        }

        var request = e.fragmentInfo.request;
        if (!e.fragmentInfo.response) {
            logger.error('Load error', request.url);
            return;
        }

        var deltaFragmentTime = undefined,
            deltaTime = undefined;

        logger.debug('FragmentInfo loaded: ', request.url);

        if (!startFragmentTime) {
            startFragmentTime = request.startTime;
        }

        try {
            // Process FramgentInfo in order to update segment timeline (DVR window)
            var mssFragmentMoofProcessor = (0, _MssFragmentMoofProcessor2['default'])(context).create({
                dashMetrics: dashMetrics,
                playbackController: playbackController,
                ISOBoxer: ISOBoxer,
                eventBus: eventBus,
                debug: debug
            });
            mssFragmentMoofProcessor.updateSegmentList(e.fragmentInfo, streamProcessor);

            deltaTime = (new Date().getTime() - startTime) / 1000;
            deltaFragmentTime = request.startTime + request.duration - startFragmentTime;
            delayLoadNextFragmentInfo(Math.max(0, deltaFragmentTime - deltaTime));
        } catch (e) {
            logger.fatal('Internal error while processing fragment info segment ');
        }
    }

    function getType() {
        return type;
    }

    instance = {
        initialize: initialize,
        controllerType: controllerType,
        start: doStart,
        getType: getType,
        reset: reset
    };

    setup();

    return instance;
}

MssFragmentInfoController.__dashjs_factory_name = 'MssFragmentInfoController';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentInfoController);
/* jshint ignore:line */
module.exports = exports['default'];

},{"../streaming/vo/FragmentRequest":15,"./MssEvents":3,"./MssFragmentMoofProcessor":5}],5:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _streamingVoDashJSError = _dereq_('../streaming/vo/DashJSError');

var _streamingVoDashJSError2 = _interopRequireDefault(_streamingVoDashJSError);

var _errorsMssErrors = _dereq_('./errors/MssErrors');

var _errorsMssErrors2 = _interopRequireDefault(_errorsMssErrors);

var _streamingMediaPlayerEvents = _dereq_('../streaming/MediaPlayerEvents');

var _streamingMediaPlayerEvents2 = _interopRequireDefault(_streamingMediaPlayerEvents);

/**
 * @module MssFragmentMoovProcessor
 * @param {Object} config object
 */
function MssFragmentMoofProcessor(config) {

    config = config || {};
    var instance = undefined,
        type = undefined,
        logger = undefined;
    var dashMetrics = config.dashMetrics;
    var playbackController = config.playbackController;
    var errorHandler = config.errHandler;
    var eventBus = config.eventBus;
    var ISOBoxer = config.ISOBoxer;
    var debug = config.debug;

    function setup() {
        logger = debug.getLogger(instance);
        type = '';
    }

    function processTfrf(request, tfrf, tfdt, streamProcessor) {
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();
        var indexHandler = streamProcessor.getIndexHandler();

        var manifest = representation.adaptation.period.mpd.manifest;
        var adaptation = manifest.Period_asArray[representation.adaptation.period.index].AdaptationSet_asArray[representation.adaptation.index];
        var timescale = adaptation.SegmentTemplate.timescale;

        type = streamProcessor.getType();

        if (manifest.type !== 'dynamic' && !manifest.timeShiftBufferDepth) {
            return;
        }

        if (!tfrf) {
            errorHandler.error(new _streamingVoDashJSError2['default'](_errorsMssErrors2['default'].MSS_NO_TFRF_CODE, _errorsMssErrors2['default'].MSS_NO_TFRF_MESSAGE));
            return;
        }

        // Get adaptation's segment timeline (always a SegmentTimeline in Smooth Streaming use case)
        var segments = adaptation.SegmentTemplate.SegmentTimeline.S;
        var entries = tfrf.entry;
        var entry = undefined,
            segmentTime = undefined,
            range = undefined;
        var segment = null;
        var t = 0;
        var availabilityStartTime = null;

        if (entries.length === 0) {
            return;
        }

        // Consider only first tfrf entry (to avoid pre-condition failure on fragment info requests)
        entry = entries[0];

        // In case of start-over streams, check if we have reached end of original manifest duration (set in timeShiftBufferDepth)
        // => then do not update anymore timeline
        if (manifest.type === 'static') {
            // Get first segment time
            segmentTime = segments[0].tManifest ? parseFloat(segments[0].tManifest) : segments[0].t;
            if (entry.fragment_absolute_time > segmentTime + manifest.timeShiftBufferDepth * timescale) {
                return;
            }
        }

        logger.debug('entry - t = ', entry.fragment_absolute_time / timescale);

        // Get last segment time
        segmentTime = segments[segments.length - 1].tManifest ? parseFloat(segments[segments.length - 1].tManifest) : segments[segments.length - 1].t;
        logger.debug('Last segment - t = ', segmentTime / timescale);

        // Check if we have to append new segment to timeline
        if (entry.fragment_absolute_time <= segmentTime) {
            // Update DVR window range
            // => set range end to end time of current segment
            range = {
                start: segments[0].t / timescale,
                end: tfdt.baseMediaDecodeTime / timescale + request.duration
            };

            updateDVR(request.mediaType, range, streamProcessor.getStreamInfo().manifestInfo);
            return;
        }

        logger.debug('Add new segment - t = ', entry.fragment_absolute_time / timescale);
        segment = {};
        segment.t = entry.fragment_absolute_time;
        segment.d = entry.fragment_duration;
        // If timestamps starts at 0 relative to 1st segment (dynamic to static) then update segment time
        if (segments[0].tManifest) {
            segment.t -= parseFloat(segments[0].tManifest) - segments[0].t;
            segment.tManifest = entry.fragment_absolute_time;
        }
        segments.push(segment);

        // In case of static start-over streams, update content duration
        if (manifest.type === 'static') {
            if (type === 'video') {
                segment = segments[segments.length - 1];
                var end = (segment.t + segment.d) / timescale;
                if (end > representation.adaptation.period.duration) {
                    eventBus.trigger(_streamingMediaPlayerEvents2['default'].MANIFEST_VALIDITY_CHANGED, { sender: this, newDuration: end });
                }
            }
            return;
        }
        // In case of live streams, update segment timeline according to DVR window
        else if (manifest.timeShiftBufferDepth && manifest.timeShiftBufferDepth > 0) {
                // Get timestamp of the last segment
                segment = segments[segments.length - 1];
                t = segment.t;

                // Determine the segments' availability start time
                availabilityStartTime = Math.round((t - manifest.timeShiftBufferDepth * timescale) / timescale);

                // Remove segments prior to availability start time
                segment = segments[0];
                while (Math.round(segment.t / timescale) < availabilityStartTime) {
                    logger.debug('Remove segment  - t = ' + segment.t / timescale);
                    segments.splice(0, 1);
                    segment = segments[0];
                }

                // Update DVR window range => set range end to end time of current segment
                range = {
                    start: segments[0].t / timescale,
                    end: tfdt.baseMediaDecodeTime / timescale + request.duration
                };

                updateDVR(type, range, streamProcessor.getStreamInfo().manifestInfo);
            }

        indexHandler.updateSegmentList(representation);
    }

    function updateDVR(type, range, manifestInfo) {
        var dvrInfos = dashMetrics.getCurrentDVRInfo(type);
        if (!dvrInfos || range.end > dvrInfos.range.end) {
            logger.debug('Update DVR Infos [' + range.start + ' - ' + range.end + ']');
            dashMetrics.addDVRInfo(type, playbackController.getTime(), manifestInfo, range);
        }
    }

    // This function returns the offset of the 1st byte of a child box within a container box
    function getBoxOffset(parent, type) {
        var offset = 8;
        var i = 0;

        for (i = 0; i < parent.boxes.length; i++) {
            if (parent.boxes[i].type === type) {
                return offset;
            }
            offset += parent.boxes[i].size;
        }
        return offset;
    }

    function convertFragment(e, sp) {
        var i = undefined;

        // e.request contains request description object
        // e.response contains fragment bytes
        var isoFile = ISOBoxer.parseBuffer(e.response);
        // Update track_Id in tfhd box
        var tfhd = isoFile.fetch('tfhd');
        tfhd.track_ID = e.request.mediaInfo.index + 1;

        // Add tfdt box
        var tfdt = isoFile.fetch('tfdt');
        var traf = isoFile.fetch('traf');
        if (tfdt === null) {
            tfdt = ISOBoxer.createFullBox('tfdt', traf, tfhd);
            tfdt.version = 1;
            tfdt.flags = 0;
            tfdt.baseMediaDecodeTime = Math.floor(e.request.startTime * e.request.timescale);
        }

        var trun = isoFile.fetch('trun');

        // Process tfxd boxes
        // This box provide absolute timestamp but we take the segment start time for tfdt
        var tfxd = isoFile.fetch('tfxd');
        if (tfxd) {
            tfxd._parent.boxes.splice(tfxd._parent.boxes.indexOf(tfxd), 1);
            tfxd = null;
        }
        var tfrf = isoFile.fetch('tfrf');
        processTfrf(e.request, tfrf, tfdt, sp);
        if (tfrf) {
            tfrf._parent.boxes.splice(tfrf._parent.boxes.indexOf(tfrf), 1);
            tfrf = null;
        }

        // If protected content in PIFF1.1 format (sepiff box = Sample Encryption PIFF)
        // => convert sepiff box it into a senc box
        // => create saio and saiz boxes (if not already present)
        var sepiff = isoFile.fetch('sepiff');
        if (sepiff !== null) {
            sepiff.type = 'senc';
            sepiff.usertype = undefined;

            var _saio = isoFile.fetch('saio');
            if (_saio === null) {
                // Create Sample Auxiliary Information Offsets Box box (saio)
                _saio = ISOBoxer.createFullBox('saio', traf);
                _saio.version = 0;
                _saio.flags = 0;
                _saio.entry_count = 1;
                _saio.offset = [0];

                var saiz = ISOBoxer.createFullBox('saiz', traf);
                saiz.version = 0;
                saiz.flags = 0;
                saiz.sample_count = sepiff.sample_count;
                saiz.default_sample_info_size = 0;
                saiz.sample_info_size = [];

                if (sepiff.flags & 0x02) {
                    // Sub-sample encryption => set sample_info_size for each sample
                    for (i = 0; i < sepiff.sample_count; i += 1) {
                        // 10 = 8 (InitializationVector field size) + 2 (subsample_count field size)
                        // 6 = 2 (BytesOfClearData field size) + 4 (BytesOfEncryptedData field size)
                        saiz.sample_info_size[i] = 10 + 6 * sepiff.entry[i].NumberOfEntries;
                    }
                } else {
                    // No sub-sample encryption => set default sample_info_size = InitializationVector field size (8)
                    saiz.default_sample_info_size = 8;
                }
            }
        }

        tfhd.flags &= 0xFFFFFE; // set tfhd.base-data-offset-present to false
        tfhd.flags |= 0x020000; // set tfhd.default-base-is-moof to true
        trun.flags |= 0x000001; // set trun.data-offset-present to true

        // Update trun.data_offset field that corresponds to first data byte (inside mdat box)
        var moof = isoFile.fetch('moof');
        var length = moof.getLength();
        trun.data_offset = length + 8;

        // Update saio box offset field according to new senc box offset
        var saio = isoFile.fetch('saio');
        if (saio !== null) {
            var trafPosInMoof = getBoxOffset(moof, 'traf');
            var sencPosInTraf = getBoxOffset(traf, 'senc');
            // Set offset from begin fragment to the first IV field in senc box
            saio.offset[0] = trafPosInMoof + sencPosInTraf + 16; // 16 = box header (12) + sample_count field size (4)
        }

        // Write transformed/processed fragment into request reponse data
        e.response = isoFile.write();
    }

    function updateSegmentList(e, sp) {
        // e.request contains request description object
        // e.response contains fragment bytes
        if (!e.response) {
            throw new Error('e.response parameter is missing');
        }

        var isoFile = ISOBoxer.parseBuffer(e.response);
        // Update track_Id in tfhd box
        var tfhd = isoFile.fetch('tfhd');
        tfhd.track_ID = e.request.mediaInfo.index + 1;

        // Add tfdt box
        var tfdt = isoFile.fetch('tfdt');
        var traf = isoFile.fetch('traf');
        if (tfdt === null) {
            tfdt = ISOBoxer.createFullBox('tfdt', traf, tfhd);
            tfdt.version = 1;
            tfdt.flags = 0;
            tfdt.baseMediaDecodeTime = Math.floor(e.request.startTime * e.request.timescale);
        }

        var tfrf = isoFile.fetch('tfrf');
        processTfrf(e.request, tfrf, tfdt, sp);
        if (tfrf) {
            tfrf._parent.boxes.splice(tfrf._parent.boxes.indexOf(tfrf), 1);
            tfrf = null;
        }
    }

    function getType() {
        return type;
    }

    instance = {
        convertFragment: convertFragment,
        updateSegmentList: updateSegmentList,
        getType: getType
    };

    setup();
    return instance;
}

MssFragmentMoofProcessor.__dashjs_factory_name = 'MssFragmentMoofProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentMoofProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{"../streaming/MediaPlayerEvents":12,"../streaming/vo/DashJSError":13,"./errors/MssErrors":9}],6:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
        value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _errorsMssErrors = _dereq_('./errors/MssErrors');

var _errorsMssErrors2 = _interopRequireDefault(_errorsMssErrors);

/**
 * @module MssFragmentMoovProcessor
 * @param {Object} config object
 */
function MssFragmentMoovProcessor(config) {
        config = config || {};
        var NALUTYPE_SPS = 7;
        var NALUTYPE_PPS = 8;
        var constants = config.constants;
        var ISOBoxer = config.ISOBoxer;

        var protectionController = config.protectionController;
        var instance = undefined,
            period = undefined,
            adaptationSet = undefined,
            representation = undefined,
            contentProtection = undefined,
            timescale = undefined,
            trackId = undefined;

        function createFtypBox(isoFile) {
                var ftyp = ISOBoxer.createBox('ftyp', isoFile);
                ftyp.major_brand = 'iso6';
                ftyp.minor_version = 1; // is an informative integer for the minor version of the major brand
                ftyp.compatible_brands = []; //is a list, to the end of the box, of brands isom, iso6 and msdh
                ftyp.compatible_brands[0] = 'isom'; // => decimal ASCII value for isom
                ftyp.compatible_brands[1] = 'iso6'; // => decimal ASCII value for iso6
                ftyp.compatible_brands[2] = 'msdh'; // => decimal ASCII value for msdh

                return ftyp;
        }

        function createMoovBox(isoFile) {

                // moov box
                var moov = ISOBoxer.createBox('moov', isoFile);

                // moov/mvhd
                createMvhdBox(moov);

                // moov/trak
                var trak = ISOBoxer.createBox('trak', moov);

                // moov/trak/tkhd
                createTkhdBox(trak);

                // moov/trak/mdia
                var mdia = ISOBoxer.createBox('mdia', trak);

                // moov/trak/mdia/mdhd
                createMdhdBox(mdia);

                // moov/trak/mdia/hdlr
                createHdlrBox(mdia);

                // moov/trak/mdia/minf
                var minf = ISOBoxer.createBox('minf', mdia);

                switch (adaptationSet.type) {
                        case constants.VIDEO:
                                // moov/trak/mdia/minf/vmhd
                                createVmhdBox(minf);
                                break;
                        case constants.AUDIO:
                                // moov/trak/mdia/minf/smhd
                                createSmhdBox(minf);
                                break;
                        default:
                                break;
                }

                // moov/trak/mdia/minf/dinf
                var dinf = ISOBoxer.createBox('dinf', minf);

                // moov/trak/mdia/minf/dinf/dref
                createDrefBox(dinf);

                // moov/trak/mdia/minf/stbl
                var stbl = ISOBoxer.createBox('stbl', minf);

                // Create empty stts, stsc, stco and stsz boxes
                // Use data field as for codem-isoboxer unknown boxes for setting fields value

                // moov/trak/mdia/minf/stbl/stts
                var stts = ISOBoxer.createFullBox('stts', stbl);
                stts._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

                // moov/trak/mdia/minf/stbl/stsc
                var stsc = ISOBoxer.createFullBox('stsc', stbl);
                stsc._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

                // moov/trak/mdia/minf/stbl/stco
                var stco = ISOBoxer.createFullBox('stco', stbl);
                stco._data = [0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, entry_count = 0

                // moov/trak/mdia/minf/stbl/stsz
                var stsz = ISOBoxer.createFullBox('stsz', stbl);
                stsz._data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // version = 0, flags = 0, sample_size = 0, sample_count = 0

                // moov/trak/mdia/minf/stbl/stsd
                createStsdBox(stbl);

                // moov/mvex
                var mvex = ISOBoxer.createBox('mvex', moov);

                // moov/mvex/trex
                createTrexBox(mvex);

                if (contentProtection && protectionController) {
                        var supportedKS = protectionController.getSupportedKeySystemsFromContentProtection(contentProtection);
                        createProtectionSystemSpecificHeaderBox(moov, supportedKS);
                }
        }

        function createMvhdBox(moov) {

                var mvhd = ISOBoxer.createFullBox('mvhd', moov);

                mvhd.version = 1; // version = 1  in order to have 64bits duration value

                mvhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
                mvhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
                mvhd.timescale = timescale; // the time-scale for the entire presentation => 10000000 for MSS
                mvhd.duration = Math.round(period.duration * timescale); // the length of the presentation (in the indicated timescale) =>  take duration of period
                mvhd.rate = 1.0; // 16.16 number, '1.0' = normal playback
                mvhd.volume = 1.0; // 8.8 number, '1.0' = full volume
                mvhd.reserved1 = 0;
                mvhd.reserved2 = [0x0, 0x0];
                mvhd.matrix = [1, 0, 0, // provides a transformation matrix for the video;
                0, 1, 0, // (u,v,w) are restricted here to (0,0,1)
                0, 0, 16384];
                mvhd.pre_defined = [0, 0, 0, 0, 0, 0];
                mvhd.next_track_ID = trackId + 1; // indicates a value to use for the track ID of the next track to be added to this presentation

                return mvhd;
        }

        function createTkhdBox(trak) {

                var tkhd = ISOBoxer.createFullBox('tkhd', trak);

                tkhd.version = 1; // version = 1  in order to have 64bits duration value
                tkhd.flags = 0x1 | // Track_enabled (0x000001): Indicates that the track is enabled
                0x2 | // Track_in_movie (0x000002):  Indicates that the track is used in the presentation
                0x4; // Track_in_preview (0x000004):  Indicates that the track is used when previewing the presentation

                tkhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
                tkhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
                tkhd.track_ID = trackId; // uniquely identifies this track over the entire life-time of this presentation
                tkhd.reserved1 = 0;
                tkhd.duration = Math.round(period.duration * timescale); // the duration of this track (in the timescale indicated in the Movie Header Box) =>  take duration of period
                tkhd.reserved2 = [0x0, 0x0];
                tkhd.layer = 0; // specifies the front-to-back ordering of video tracks; tracks with lower numbers are closer to the viewer => 0 since only one video track
                tkhd.alternate_group = 0; // specifies a group or collection of tracks => ignore
                tkhd.volume = 1.0; // '1.0' = full volume
                tkhd.reserved3 = 0;
                tkhd.matrix = [1, 0, 0, // provides a transformation matrix for the video;
                0, 1, 0, // (u,v,w) are restricted here to (0,0,1)
                0, 0, 16384];
                tkhd.width = representation.width; // visual presentation width
                tkhd.height = representation.height; // visual presentation height

                return tkhd;
        }

        function createMdhdBox(mdia) {

                var mdhd = ISOBoxer.createFullBox('mdhd', mdia);

                mdhd.version = 1; // version = 1  in order to have 64bits duration value

                mdhd.creation_time = 0; // the creation time of the presentation => ignore (set to 0)
                mdhd.modification_time = 0; // the most recent time the presentation was modified => ignore (set to 0)
                mdhd.timescale = timescale; // the time-scale for the entire presentation
                mdhd.duration = Math.round(period.duration * timescale); // the duration of this media (in the scale of the timescale). If the duration cannot be determined then duration is set to all 1s.
                mdhd.language = adaptationSet.lang || 'und'; // declares the language code for this media (see getLanguageCode())
                mdhd.pre_defined = 0;

                return mdhd;
        }

        function createHdlrBox(mdia) {

                var hdlr = ISOBoxer.createFullBox('hdlr', mdia);

                hdlr.pre_defined = 0;
                switch (adaptationSet.type) {
                        case constants.VIDEO:
                                hdlr.handler_type = 'vide';
                                break;
                        case constants.AUDIO:
                                hdlr.handler_type = 'soun';
                                break;
                        default:
                                hdlr.handler_type = 'meta';
                                break;
                }
                hdlr.name = representation.id;
                hdlr.reserved = [0, 0, 0];

                return hdlr;
        }

        function createVmhdBox(minf) {

                var vmhd = ISOBoxer.createFullBox('vmhd', minf);

                vmhd.flags = 1;

                vmhd.graphicsmode = 0; // specifies a composition mode for this video track, from the following enumerated set, which may be extended by derived specifications: copy = 0 copy over the existing image
                vmhd.opcolor = [0, 0, 0]; // is a set of 3 colour values (red, green, blue) available for use by graphics modes

                return vmhd;
        }

        function createSmhdBox(minf) {

                var smhd = ISOBoxer.createFullBox('smhd', minf);

                smhd.flags = 1;

                smhd.balance = 0; // is a fixed-point 8.8 number that places mono audio tracks in a stereo space; 0 is centre (the normal value); full left is -1.0 and full right is 1.0.
                smhd.reserved = 0;

                return smhd;
        }

        function createDrefBox(dinf) {

                var dref = ISOBoxer.createFullBox('dref', dinf);

                dref.entry_count = 1;
                dref.entries = [];

                var url = ISOBoxer.createFullBox('url ', dref, false);
                url.location = '';
                url.flags = 1;

                dref.entries.push(url);

                return dref;
        }

        function createStsdBox(stbl) {

                var stsd = ISOBoxer.createFullBox('stsd', stbl);

                stsd.entries = [];
                switch (adaptationSet.type) {
                        case constants.VIDEO:
                        case constants.AUDIO:
                                stsd.entries.push(createSampleEntry(stsd));
                                break;
                        default:
                                break;
                }

                stsd.entry_count = stsd.entries.length; // is an integer that counts the actual entries
                return stsd;
        }

        function createSampleEntry(stsd) {
                var codec = representation.codecs.substring(0, representation.codecs.indexOf('.'));

                switch (codec) {
                        case 'avc1':
                                return createAVCVisualSampleEntry(stsd, codec);
                        case 'mp4a':
                                return createMP4AudioSampleEntry(stsd, codec);
                        default:
                                throw {
                                        code: _errorsMssErrors2['default'].MSS_UNSUPPORTED_CODEC_CODE,
                                        message: _errorsMssErrors2['default'].MSS_UNSUPPORTED_CODEC_MESSAGE,
                                        data: {
                                                codec: codec
                                        }
                                };
                }
        }

        function createAVCVisualSampleEntry(stsd, codec) {
                var avc1 = undefined;

                if (contentProtection) {
                        avc1 = ISOBoxer.createBox('encv', stsd, false);
                } else {
                        avc1 = ISOBoxer.createBox('avc1', stsd, false);
                }

                // SampleEntry fields
                avc1.reserved1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
                avc1.data_reference_index = 1;

                // VisualSampleEntry fields
                avc1.pre_defined1 = 0;
                avc1.reserved2 = 0;
                avc1.pre_defined2 = [0, 0, 0];
                avc1.height = representation.height;
                avc1.width = representation.width;
                avc1.horizresolution = 72; // 72 dpi
                avc1.vertresolution = 72; // 72 dpi
                avc1.reserved3 = 0;
                avc1.frame_count = 1; // 1 compressed video frame per sample
                avc1.compressorname = [0x0A, 0x41, 0x56, 0x43, 0x20, 0x43, 0x6F, 0x64, // = 'AVC Coding';
                0x69, 0x6E, 0x67, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00];
                avc1.depth = 0x0018; // 0x0018 – images are in colour with no alpha.
                avc1.pre_defined3 = 65535;
                avc1.config = createAVC1ConfigurationRecord();
                if (contentProtection) {
                        // Create and add Protection Scheme Info Box
                        var sinf = ISOBoxer.createBox('sinf', avc1);

                        // Create and add Original Format Box => indicate codec type of the encrypted content
                        createOriginalFormatBox(sinf, codec);

                        // Create and add Scheme Type box
                        createSchemeTypeBox(sinf);

                        // Create and add Scheme Information Box
                        createSchemeInformationBox(sinf);
                }

                return avc1;
        }

        function createAVC1ConfigurationRecord() {

                var avcC = null;
                var avcCLength = 15; // length = 15 by default (0 SPS and 0 PPS)

                // First get all SPS and PPS from codecPrivateData
                var sps = [];
                var pps = [];
                var AVCProfileIndication = 0;
                var AVCLevelIndication = 0;
                var profile_compatibility = 0;

                var nalus = representation.codecPrivateData.split('00000001').slice(1);
                var naluBytes = undefined,
                    naluType = undefined;

                for (var _i = 0; _i < nalus.length; _i++) {
                        naluBytes = hexStringtoBuffer(nalus[_i]);

                        naluType = naluBytes[0] & 0x1F;

                        switch (naluType) {
                                case NALUTYPE_SPS:
                                        sps.push(naluBytes);
                                        avcCLength += naluBytes.length + 2; // 2 = sequenceParameterSetLength field length
                                        break;
                                case NALUTYPE_PPS:
                                        pps.push(naluBytes);
                                        avcCLength += naluBytes.length + 2; // 2 = pictureParameterSetLength field length
                                        break;
                                default:
                                        break;
                        }
                }

                // Get profile and level from SPS
                if (sps.length > 0) {
                        AVCProfileIndication = sps[0][1];
                        profile_compatibility = sps[0][2];
                        AVCLevelIndication = sps[0][3];
                }

                // Generate avcC buffer
                avcC = new Uint8Array(avcCLength);

                var i = 0;
                // length
                avcC[i++] = (avcCLength & 0xFF000000) >> 24;
                avcC[i++] = (avcCLength & 0x00FF0000) >> 16;
                avcC[i++] = (avcCLength & 0x0000FF00) >> 8;
                avcC[i++] = avcCLength & 0x000000FF;
                avcC.set([0x61, 0x76, 0x63, 0x43], i); // type = 'avcC'
                i += 4;
                avcC[i++] = 1; // configurationVersion = 1
                avcC[i++] = AVCProfileIndication;
                avcC[i++] = profile_compatibility;
                avcC[i++] = AVCLevelIndication;
                avcC[i++] = 0xFF; // '11111' + lengthSizeMinusOne = 3
                avcC[i++] = 0xE0 | sps.length; // '111' + numOfSequenceParameterSets
                for (var n = 0; n < sps.length; n++) {
                        avcC[i++] = (sps[n].length & 0xFF00) >> 8;
                        avcC[i++] = sps[n].length & 0x00FF;
                        avcC.set(sps[n], i);
                        i += sps[n].length;
                }
                avcC[i++] = pps.length; // numOfPictureParameterSets
                for (var n = 0; n < pps.length; n++) {
                        avcC[i++] = (pps[n].length & 0xFF00) >> 8;
                        avcC[i++] = pps[n].length & 0x00FF;
                        avcC.set(pps[n], i);
                        i += pps[n].length;
                }

                return avcC;
        }

        function createMP4AudioSampleEntry(stsd, codec) {
                var mp4a = undefined;

                if (contentProtection) {
                        mp4a = ISOBoxer.createBox('enca', stsd, false);
                } else {
                        mp4a = ISOBoxer.createBox('mp4a', stsd, false);
                }

                // SampleEntry fields
                mp4a.reserved1 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
                mp4a.data_reference_index = 1;

                // AudioSampleEntry fields
                mp4a.reserved2 = [0x0, 0x0];
                mp4a.channelcount = representation.audioChannels;
                mp4a.samplesize = 16;
                mp4a.pre_defined = 0;
                mp4a.reserved_3 = 0;
                mp4a.samplerate = representation.audioSamplingRate << 16;

                mp4a.esds = createMPEG4AACESDescriptor();

                if (contentProtection) {
                        // Create and add Protection Scheme Info Box
                        var sinf = ISOBoxer.createBox('sinf', mp4a);

                        // Create and add Original Format Box => indicate codec type of the encrypted content
                        createOriginalFormatBox(sinf, codec);

                        // Create and add Scheme Type box
                        createSchemeTypeBox(sinf);

                        // Create and add Scheme Information Box
                        createSchemeInformationBox(sinf);
                }

                return mp4a;
        }

        function createMPEG4AACESDescriptor() {

                // AudioSpecificConfig (see ISO/IEC 14496-3, subpart 1) => corresponds to hex bytes contained in 'codecPrivateData' field
                var audioSpecificConfig = hexStringtoBuffer(representation.codecPrivateData);

                // ESDS length = esds box header length (= 12) +
                //               ES_Descriptor header length (= 5) +
                //               DecoderConfigDescriptor header length (= 15) +
                //               decoderSpecificInfo header length (= 2) +
                //               AudioSpecificConfig length (= codecPrivateData length)
                var esdsLength = 34 + audioSpecificConfig.length;
                var esds = new Uint8Array(esdsLength);

                var i = 0;
                // esds box
                esds[i++] = (esdsLength & 0xFF000000) >> 24; // esds box length
                esds[i++] = (esdsLength & 0x00FF0000) >> 16; // ''
                esds[i++] = (esdsLength & 0x0000FF00) >> 8; // ''
                esds[i++] = esdsLength & 0x000000FF; // ''
                esds.set([0x65, 0x73, 0x64, 0x73], i); // type = 'esds'
                i += 4;
                esds.set([0, 0, 0, 0], i); // version = 0, flags = 0
                i += 4;
                // ES_Descriptor (see ISO/IEC 14496-1 (Systems))
                esds[i++] = 0x03; // tag = 0x03 (ES_DescrTag)
                esds[i++] = 20 + audioSpecificConfig.length; // size
                esds[i++] = (trackId & 0xFF00) >> 8; // ES_ID = track_id
                esds[i++] = trackId & 0x00FF; // ''
                esds[i++] = 0; // flags and streamPriority

                // DecoderConfigDescriptor (see ISO/IEC 14496-1 (Systems))
                esds[i++] = 0x04; // tag = 0x04 (DecoderConfigDescrTag)
                esds[i++] = 15 + audioSpecificConfig.length; // size
                esds[i++] = 0x40; // objectTypeIndication = 0x40 (MPEG-4 AAC)
                esds[i] = 0x05 << 2; // streamType = 0x05 (Audiostream)
                esds[i] |= 0 << 1; // upStream = 0
                esds[i++] |= 1; // reserved = 1
                esds[i++] = 0xFF; // buffersizeDB = undefined
                esds[i++] = 0xFF; // ''
                esds[i++] = 0xFF; // ''
                esds[i++] = (representation.bandwidth & 0xFF000000) >> 24; // maxBitrate
                esds[i++] = (representation.bandwidth & 0x00FF0000) >> 16; // ''
                esds[i++] = (representation.bandwidth & 0x0000FF00) >> 8; // ''
                esds[i++] = representation.bandwidth & 0x000000FF; // ''
                esds[i++] = (representation.bandwidth & 0xFF000000) >> 24; // avgbitrate
                esds[i++] = (representation.bandwidth & 0x00FF0000) >> 16; // ''
                esds[i++] = (representation.bandwidth & 0x0000FF00) >> 8; // ''
                esds[i++] = representation.bandwidth & 0x000000FF; // ''

                // DecoderSpecificInfo (see ISO/IEC 14496-1 (Systems))
                esds[i++] = 0x05; // tag = 0x05 (DecSpecificInfoTag)
                esds[i++] = audioSpecificConfig.length; // size
                esds.set(audioSpecificConfig, i); // AudioSpecificConfig bytes

                return esds;
        }

        function createOriginalFormatBox(sinf, codec) {
                var frma = ISOBoxer.createBox('frma', sinf);
                frma.data_format = stringToCharCode(codec);
        }

        function createSchemeTypeBox(sinf) {
                var schm = ISOBoxer.createFullBox('schm', sinf);

                schm.flags = 0;
                schm.version = 0;
                schm.scheme_type = 0x63656E63; // 'cenc' => common encryption
                schm.scheme_version = 0x00010000; // version set to 0x00010000 (Major version 1, Minor version 0)
        }

        function createSchemeInformationBox(sinf) {
                var schi = ISOBoxer.createBox('schi', sinf);

                // Create and add Track Encryption Box
                createTrackEncryptionBox(schi);
        }

        function createProtectionSystemSpecificHeaderBox(moov, keySystems) {
                var pssh_bytes = undefined,
                    pssh = undefined,
                    i = undefined,
                    parsedBuffer = undefined;

                for (i = 0; i < keySystems.length; i += 1) {
                        pssh_bytes = keySystems[i].initData;
                        parsedBuffer = ISOBoxer.parseBuffer(pssh_bytes);
                        pssh = parsedBuffer.fetch('pssh');
                        if (pssh) {
                                ISOBoxer.Utils.appendBox(moov, pssh);
                        }
                }
        }

        function createTrackEncryptionBox(schi) {
                var tenc = ISOBoxer.createFullBox('tenc', schi);

                tenc.flags = 0;
                tenc.version = 0;

                tenc.default_IsEncrypted = 0x1;
                tenc.default_IV_size = 8;
                tenc.default_KID = contentProtection && contentProtection.length > 0 && contentProtection[0]['cenc:default_KID'] ? contentProtection[0]['cenc:default_KID'] : [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0];
        }

        function createTrexBox(moov) {
                var trex = ISOBoxer.createFullBox('trex', moov);

                trex.track_ID = trackId;
                trex.default_sample_description_index = 1;
                trex.default_sample_duration = 0;
                trex.default_sample_size = 0;
                trex.default_sample_flags = 0;

                return trex;
        }

        function hexStringtoBuffer(str) {
                var buf = new Uint8Array(str.length / 2);
                var i = undefined;

                for (i = 0; i < str.length / 2; i += 1) {
                        buf[i] = parseInt('' + str[i * 2] + str[i * 2 + 1], 16);
                }
                return buf;
        }

        function stringToCharCode(str) {
                var code = 0;
                var i = undefined;

                for (i = 0; i < str.length; i += 1) {
                        code |= str.charCodeAt(i) << (str.length - i - 1) * 8;
                }
                return code;
        }

        function generateMoov(rep) {
                if (!rep || !rep.adaptation) {
                        return;
                }

                var isoFile = undefined,
                    arrayBuffer = undefined;

                representation = rep;
                adaptationSet = representation.adaptation;

                period = adaptationSet.period;
                trackId = adaptationSet.index + 1;
                contentProtection = period.mpd.manifest.Period_asArray[period.index].AdaptationSet_asArray[adaptationSet.index].ContentProtection;

                timescale = period.mpd.manifest.Period_asArray[period.index].AdaptationSet_asArray[adaptationSet.index].SegmentTemplate.timescale;

                isoFile = ISOBoxer.createFile();
                createFtypBox(isoFile);
                createMoovBox(isoFile);

                arrayBuffer = isoFile.write();

                return arrayBuffer;
        }

        instance = {
                generateMoov: generateMoov
        };

        return instance;
}

MssFragmentMoovProcessor.__dashjs_factory_name = 'MssFragmentMoovProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentMoovProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{"./errors/MssErrors":9}],7:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssFragmentMoofProcessor = _dereq_('./MssFragmentMoofProcessor');

var _MssFragmentMoofProcessor2 = _interopRequireDefault(_MssFragmentMoofProcessor);

var _MssFragmentMoovProcessor = _dereq_('./MssFragmentMoovProcessor');

var _MssFragmentMoovProcessor2 = _interopRequireDefault(_MssFragmentMoovProcessor);

var _MssEvents = _dereq_('./MssEvents');

var _MssEvents2 = _interopRequireDefault(_MssEvents);

// Add specific box processors not provided by codem-isoboxer library

function arrayEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(function (element, index) {
        return element === arr2[index];
    });
}

function saioProcessor() {
    this._procFullBox();
    if (this.flags & 1) {
        this._procField('aux_info_type', 'uint', 32);
        this._procField('aux_info_type_parameter', 'uint', 32);
    }
    this._procField('entry_count', 'uint', 32);
    this._procFieldArray('offset', this.entry_count, 'uint', this.version === 1 ? 64 : 32);
}

function saizProcessor() {
    this._procFullBox();
    if (this.flags & 1) {
        this._procField('aux_info_type', 'uint', 32);
        this._procField('aux_info_type_parameter', 'uint', 32);
    }
    this._procField('default_sample_info_size', 'uint', 8);
    this._procField('sample_count', 'uint', 32);
    if (this.default_sample_info_size === 0) {
        this._procFieldArray('sample_info_size', this.sample_count, 'uint', 8);
    }
}

function sencProcessor() {
    this._procFullBox();
    this._procField('sample_count', 'uint', 32);
    if (this.flags & 1) {
        this._procField('IV_size', 'uint', 8);
    }
    this._procEntries('entry', this.sample_count, function (entry) {
        this._procEntryField(entry, 'InitializationVector', 'data', 8);
        if (this.flags & 2) {
            this._procEntryField(entry, 'NumberOfEntries', 'uint', 16);
            this._procSubEntries(entry, 'clearAndCryptedData', entry.NumberOfEntries, function (clearAndCryptedData) {
                this._procEntryField(clearAndCryptedData, 'BytesOfClearData', 'uint', 16);
                this._procEntryField(clearAndCryptedData, 'BytesOfEncryptedData', 'uint', 32);
            });
        }
    });
}

function uuidProcessor() {
    var tfxdUserType = [0x6D, 0x1D, 0x9B, 0x05, 0x42, 0xD5, 0x44, 0xE6, 0x80, 0xE2, 0x14, 0x1D, 0xAF, 0xF7, 0x57, 0xB2];
    var tfrfUserType = [0xD4, 0x80, 0x7E, 0xF2, 0xCA, 0x39, 0x46, 0x95, 0x8E, 0x54, 0x26, 0xCB, 0x9E, 0x46, 0xA7, 0x9F];
    var sepiffUserType = [0xA2, 0x39, 0x4F, 0x52, 0x5A, 0x9B, 0x4f, 0x14, 0xA2, 0x44, 0x6C, 0x42, 0x7C, 0x64, 0x8D, 0xF4];

    if (arrayEqual(this.usertype, tfxdUserType)) {
        this._procFullBox();
        if (this._parsing) {
            this.type = 'tfxd';
        }
        this._procField('fragment_absolute_time', 'uint', this.version === 1 ? 64 : 32);
        this._procField('fragment_duration', 'uint', this.version === 1 ? 64 : 32);
    }

    if (arrayEqual(this.usertype, tfrfUserType)) {
        this._procFullBox();
        if (this._parsing) {
            this.type = 'tfrf';
        }
        this._procField('fragment_count', 'uint', 8);
        this._procEntries('entry', this.fragment_count, function (entry) {
            this._procEntryField(entry, 'fragment_absolute_time', 'uint', this.version === 1 ? 64 : 32);
            this._procEntryField(entry, 'fragment_duration', 'uint', this.version === 1 ? 64 : 32);
        });
    }

    if (arrayEqual(this.usertype, sepiffUserType)) {
        if (this._parsing) {
            this.type = 'sepiff';
        }
        sencProcessor.call(this);
    }
}

function MssFragmentProcessor(config) {

    config = config || {};
    var context = this.context;
    var dashMetrics = config.dashMetrics;
    var playbackController = config.playbackController;
    var eventBus = config.eventBus;
    var protectionController = config.protectionController;
    var ISOBoxer = config.ISOBoxer;
    var debug = config.debug;
    var mssFragmentMoovProcessor = undefined,
        mssFragmentMoofProcessor = undefined,
        instance = undefined;

    function setup() {
        ISOBoxer.addBoxProcessor('uuid', uuidProcessor);
        ISOBoxer.addBoxProcessor('saio', saioProcessor);
        ISOBoxer.addBoxProcessor('saiz', saizProcessor);
        ISOBoxer.addBoxProcessor('senc', sencProcessor);

        mssFragmentMoovProcessor = (0, _MssFragmentMoovProcessor2['default'])(context).create({ protectionController: protectionController,
            constants: config.constants, ISOBoxer: ISOBoxer });

        mssFragmentMoofProcessor = (0, _MssFragmentMoofProcessor2['default'])(context).create({
            dashMetrics: dashMetrics,
            playbackController: playbackController,
            ISOBoxer: ISOBoxer,
            eventBus: eventBus,
            debug: debug,
            errHandler: config.errHandler
        });
    }

    function generateMoov(rep) {
        return mssFragmentMoovProcessor.generateMoov(rep);
    }

    function processFragment(e, sp) {
        if (!e || !e.request || !e.response) {
            throw new Error('e parameter is missing or malformed');
        }

        var request = e.request;

        if (request.type === 'MediaSegment') {
            // it's a MediaSegment, let's convert fragment
            mssFragmentMoofProcessor.convertFragment(e, sp);
        } else if (request.type === 'FragmentInfoSegment') {

            // it's a FragmentInfo, ask relative fragment info controller to handle it
            eventBus.trigger(_MssEvents2['default'].FRAGMENT_INFO_LOADING_COMPLETED, {
                fragmentInfo: e,
                streamProcessor: sp
            });

            // Change the sender value to stop event to be propagated (fragment info must not be added to buffer)
            e.sender = null;
        }
    }

    instance = {
        generateMoov: generateMoov,
        processFragment: processFragment
    };

    setup();

    return instance;
}

MssFragmentProcessor.__dashjs_factory_name = 'MssFragmentProcessor';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssFragmentProcessor);
/* jshint ignore:line */
module.exports = exports['default'];

},{"./MssEvents":3,"./MssFragmentMoofProcessor":5,"./MssFragmentMoovProcessor":6}],8:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _streamingVoDataChunk = _dereq_('../streaming/vo/DataChunk');

var _streamingVoDataChunk2 = _interopRequireDefault(_streamingVoDataChunk);

var _streamingVoFragmentRequest = _dereq_('../streaming/vo/FragmentRequest');

var _streamingVoFragmentRequest2 = _interopRequireDefault(_streamingVoFragmentRequest);

var _MssFragmentInfoController = _dereq_('./MssFragmentInfoController');

var _MssFragmentInfoController2 = _interopRequireDefault(_MssFragmentInfoController);

var _MssFragmentProcessor = _dereq_('./MssFragmentProcessor');

var _MssFragmentProcessor2 = _interopRequireDefault(_MssFragmentProcessor);

var _parserMssParser = _dereq_('./parser/MssParser');

var _parserMssParser2 = _interopRequireDefault(_parserMssParser);

var _errorsMssErrors = _dereq_('./errors/MssErrors');

var _errorsMssErrors2 = _interopRequireDefault(_errorsMssErrors);

var _streamingVoDashJSError = _dereq_('../streaming/vo/DashJSError');

var _streamingVoDashJSError2 = _interopRequireDefault(_streamingVoDashJSError);

function MssHandler(config) {

    config = config || {};
    var context = this.context;
    var eventBus = config.eventBus;
    var events = config.events;
    var constants = config.constants;
    var initSegmentType = config.initSegmentType;
    var dashMetrics = config.dashMetrics;
    var playbackController = config.playbackController;
    var protectionController = config.protectionController;
    var mssFragmentProcessor = (0, _MssFragmentProcessor2['default'])(context).create({
        dashMetrics: dashMetrics,
        playbackController: playbackController,
        protectionController: protectionController,
        eventBus: eventBus,
        constants: constants,
        ISOBoxer: config.ISOBoxer,
        debug: config.debug,
        errHandler: config.errHandler
    });
    var mssParser = undefined,
        instance = undefined;

    function setup() {}

    function onInitializationRequested(e) {
        var streamProcessor = e.sender.getStreamProcessor();
        var request = new _streamingVoFragmentRequest2['default']();
        var representationController = streamProcessor.getRepresentationController();
        var representation = representationController.getCurrentRepresentation();

        request.mediaType = representation.adaptation.type;
        request.type = initSegmentType;
        request.range = representation.range;
        request.quality = representation.index;
        request.mediaInfo = streamProcessor.getMediaInfo();
        request.representationId = representation.id;

        var chunk = createDataChunk(request, streamProcessor.getStreamInfo().id, e.type !== events.FRAGMENT_LOADING_PROGRESS);

        try {
            // Generate initialization segment (moov)
            chunk.bytes = mssFragmentProcessor.generateMoov(representation);
        } catch (e) {
            config.errHandler.error(new _streamingVoDashJSError2['default'](e.code, e.message, e.data));
        }

        eventBus.trigger(events.INIT_FRAGMENT_LOADED, {
            chunk: chunk,
            fragmentModel: streamProcessor.getFragmentModel()
        });

        // Change the sender value to stop event to be propagated
        e.sender = null;
    }

    function createDataChunk(request, streamId, endFragment) {
        var chunk = new _streamingVoDataChunk2['default']();

        chunk.streamId = streamId;
        chunk.mediaInfo = request.mediaInfo;
        chunk.segmentType = request.type;
        chunk.start = request.startTime;
        chunk.duration = request.duration;
        chunk.end = chunk.start + chunk.duration;
        chunk.index = request.index;
        chunk.quality = request.quality;
        chunk.representationId = request.representationId;
        chunk.endFragment = endFragment;

        return chunk;
    }

    function startFragmentInfoControllers() {

        var streamController = playbackController.getStreamController();
        if (!streamController) {
            return;
        }

        // Create MssFragmentInfoControllers for each StreamProcessor of active stream (only for audio, video or fragmentedText)
        var processors = streamController.getActiveStreamProcessors();
        processors.forEach(function (processor) {
            if (processor.getType() === constants.VIDEO || processor.getType() === constants.AUDIO || processor.getType() === constants.FRAGMENTED_TEXT) {

                // Check MssFragmentInfoController already registered to StreamProcessor
                var i = undefined;
                var alreadyRegistered = false;
                var externalControllers = processor.getExternalControllers();
                for (i = 0; i < externalControllers.length; i++) {
                    if (externalControllers[i].controllerType && externalControllers[i].controllerType === 'MssFragmentInfoController') {
                        alreadyRegistered = true;
                    }
                }

                if (!alreadyRegistered) {
                    var fragmentInfoController = (0, _MssFragmentInfoController2['default'])(context).create({
                        streamProcessor: processor,
                        eventBus: eventBus,
                        dashMetrics: dashMetrics,
                        playbackController: playbackController,
                        baseURLController: config.baseURLController,
                        ISOBoxer: config.ISOBoxer,
                        debug: config.debug
                    });
                    fragmentInfoController.initialize();
                    fragmentInfoController.start();
                }
            }
        });
    }

    function onSegmentMediaLoaded(e) {
        if (e.error) {
            return;
        }
        // Process moof to transcode it from MSS to DASH
        var streamProcessor = e.sender.getStreamProcessor();
        mssFragmentProcessor.processFragment(e, streamProcessor);

        // Start MssFragmentInfoControllers in case of start-over streams
        var streamInfo = streamProcessor.getStreamInfo();
        if (!streamInfo.manifestInfo.isDynamic && streamInfo.manifestInfo.DVRWindowSize !== Infinity) {
            startFragmentInfoControllers();
        }
    }

    function onPlaybackPaused() {
        if (playbackController.getIsDynamic() && playbackController.getTime() !== 0) {
            startFragmentInfoControllers();
        }
    }

    function onPlaybackSeekAsked() {
        if (playbackController.getIsDynamic() && playbackController.getTime() !== 0) {
            startFragmentInfoControllers();
        }
    }

    function onTTMLPreProcess(ttmlSubtitles) {
        if (!ttmlSubtitles || !ttmlSubtitles.data) {
            return;
        }

        ttmlSubtitles.data = ttmlSubtitles.data.replace(/http:\/\/www.w3.org\/2006\/10\/ttaf1/gi, 'http://www.w3.org/ns/ttml');
    }

    function registerEvents() {
        eventBus.on(events.INIT_REQUESTED, onInitializationRequested, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.PLAYBACK_PAUSED, onPlaybackPaused, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.PLAYBACK_SEEK_ASKED, onPlaybackSeekAsked, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.FRAGMENT_LOADING_COMPLETED, onSegmentMediaLoaded, instance, dashjs.FactoryMaker.getSingletonFactoryByName(eventBus.getClassName()).EVENT_PRIORITY_HIGH); /* jshint ignore:line */
        eventBus.on(events.TTML_TO_PARSE, onTTMLPreProcess, instance);
    }

    function reset() {
        eventBus.off(events.INIT_REQUESTED, onInitializationRequested, this);
        eventBus.off(events.PLAYBACK_PAUSED, onPlaybackPaused, this);
        eventBus.off(events.PLAYBACK_SEEK_ASKED, onPlaybackSeekAsked, this);
        eventBus.off(events.FRAGMENT_LOADING_COMPLETED, onSegmentMediaLoaded, this);
        eventBus.off(events.TTML_TO_PARSE, onTTMLPreProcess, this);
    }

    function createMssParser() {
        mssParser = (0, _parserMssParser2['default'])(context).create(config);
        return mssParser;
    }

    instance = {
        reset: reset,
        createMssParser: createMssParser,
        registerEvents: registerEvents
    };

    setup();

    return instance;
}

MssHandler.__dashjs_factory_name = 'MssHandler';
var factory = dashjs.FactoryMaker.getClassFactory(MssHandler); /* jshint ignore:line */
factory.errors = _errorsMssErrors2['default'];
dashjs.FactoryMaker.updateClassFactory(MssHandler.__dashjs_factory_name, factory); /* jshint ignore:line */
exports['default'] = factory;
/* jshint ignore:line */
module.exports = exports['default'];

},{"../streaming/vo/DashJSError":13,"../streaming/vo/DataChunk":14,"../streaming/vo/FragmentRequest":15,"./MssFragmentInfoController":4,"./MssFragmentProcessor":7,"./errors/MssErrors":9,"./parser/MssParser":11}],9:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreErrorsErrorsBase = _dereq_('../../core/errors/ErrorsBase');

var _coreErrorsErrorsBase2 = _interopRequireDefault(_coreErrorsErrorsBase);

/**
 * @class
 *
 */

var MssErrors = (function (_ErrorsBase) {
  _inherits(MssErrors, _ErrorsBase);

  function MssErrors() {
    _classCallCheck(this, MssErrors);

    _get(Object.getPrototypeOf(MssErrors.prototype), 'constructor', this).call(this);
    /**
     * Error code returned when no tfrf box is detected in MSS live stream
     */
    this.MSS_NO_TFRF_CODE = 200;
    this.MSS_UNSUPPORTED_CODEC_CODE = 201;
    /**
     * Error message returned when no tfrf box is detected in MSS live stream
     */
    this.MSS_NO_TFRF_MESSAGE = 'Missing tfrf in live media segment';
    this.MSS_UNSUPPORTED_CODEC_MESSAGE = 'Unsupported codec';
  }

  return MssErrors;
})(_coreErrorsErrorsBase2['default']);

var mssErrors = new MssErrors();
exports['default'] = mssErrors;
module.exports = exports['default'];

},{"../../core/errors/ErrorsBase":1}],10:[function(_dereq_,module,exports){
(function (global){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _MssHandler = _dereq_('./MssHandler');

var _MssHandler2 = _interopRequireDefault(_MssHandler);

// Shove both of these into the global scope
var context = typeof window !== 'undefined' && window || global;

var dashjs = context.dashjs;
if (!dashjs) {
  dashjs = context.dashjs = {};
}

dashjs.MssHandler = _MssHandler2['default'];

exports['default'] = dashjs;
exports.MssHandler = _MssHandler2['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./MssHandler":8}],11:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @module MssParser
 * @param {Object} config object
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function MssParser(config) {
    config = config || {};
    var BASE64 = config.BASE64;
    var debug = config.debug;
    var constants = config.constants;
    var manifestModel = config.manifestModel;

    var DEFAULT_TIME_SCALE = 10000000.0;
    var SUPPORTED_CODECS = ['AAC', 'AACL', 'AVC1', 'H264', 'TTML', 'DFXP'];
    // MPEG-DASH Role and accessibility mapping according to ETSI TS 103 285 v1.1.1 (section 7.1.2)
    var ROLE = {
        'SUBT': 'alternate',
        'CAPT': 'alternate', // 'CAPT' is commonly equivalent to 'SUBT'
        'DESC': 'main'
    };
    var ACCESSIBILITY = {
        'DESC': '2'
    };
    var samplingFrequencyIndex = {
        96000: 0x0,
        88200: 0x1,
        64000: 0x2,
        48000: 0x3,
        44100: 0x4,
        32000: 0x5,
        24000: 0x6,
        22050: 0x7,
        16000: 0x8,
        12000: 0x9,
        11025: 0xA,
        8000: 0xB,
        7350: 0xC
    };
    var mimeTypeMap = {
        'video': 'video/mp4',
        'audio': 'audio/mp4',
        'text': 'application/mp4'
    };

    var instance = undefined,
        logger = undefined,
        mediaPlayerModel = undefined;

    function setup() {
        logger = debug.getLogger(instance);
        mediaPlayerModel = config.mediaPlayerModel;
    }

    function mapPeriod(smoothStreamingMedia, timescale) {
        var period = {};
        var streams = undefined,
            adaptation = undefined;

        // For each StreamIndex node, create an AdaptationSet element
        period.AdaptationSet_asArray = [];
        streams = smoothStreamingMedia.getElementsByTagName('StreamIndex');
        for (var i = 0; i < streams.length; i++) {
            adaptation = mapAdaptationSet(streams[i], timescale);
            if (adaptation !== null) {
                period.AdaptationSet_asArray.push(adaptation);
            }
        }

        if (period.AdaptationSet_asArray.length > 0) {
            period.AdaptationSet = period.AdaptationSet_asArray.length > 1 ? period.AdaptationSet_asArray : period.AdaptationSet_asArray[0];
        }

        return period;
    }

    function mapAdaptationSet(streamIndex, timescale) {
        var adaptationSet = {};
        var representations = [];
        var segmentTemplate = undefined;
        var qualityLevels = undefined,
            representation = undefined,
            segments = undefined,
            i = undefined;

        adaptationSet.id = streamIndex.getAttribute('Name') ? streamIndex.getAttribute('Name') : streamIndex.getAttribute('Type');
        adaptationSet.contentType = streamIndex.getAttribute('Type');
        adaptationSet.lang = streamIndex.getAttribute('Language') || 'und';
        adaptationSet.mimeType = mimeTypeMap[adaptationSet.contentType];
        adaptationSet.subType = streamIndex.getAttribute('Subtype');
        adaptationSet.maxWidth = streamIndex.getAttribute('MaxWidth');
        adaptationSet.maxHeight = streamIndex.getAttribute('MaxHeight');

        // Map subTypes to MPEG-DASH AdaptationSet role and accessibility (see ETSI TS 103 285 v1.1.1, section 7.1.2)
        if (adaptationSet.subType) {
            if (ROLE[adaptationSet.subType]) {
                var role = {
                    schemeIdUri: 'urn:mpeg:dash:role:2011',
                    value: ROLE[adaptationSet.subType]
                };
                adaptationSet.Role = role;
                adaptationSet.Role_asArray = [role];
            }
            if (ACCESSIBILITY[adaptationSet.subType]) {
                var accessibility = {
                    schemeIdUri: 'urn:tva:metadata:cs:AudioPurposeCS:2007',
                    value: ACCESSIBILITY[adaptationSet.subType]
                };
                adaptationSet.Accessibility = accessibility;
                adaptationSet.Accessibility_asArray = [accessibility];
            }
        }

        // Create a SegmentTemplate with a SegmentTimeline
        segmentTemplate = mapSegmentTemplate(streamIndex, timescale);

        qualityLevels = streamIndex.getElementsByTagName('QualityLevel');
        // For each QualityLevel node, create a Representation element
        for (i = 0; i < qualityLevels.length; i++) {
            // Propagate BaseURL and mimeType
            qualityLevels[i].BaseURL = adaptationSet.BaseURL;
            qualityLevels[i].mimeType = adaptationSet.mimeType;

            // Set quality level id
            qualityLevels[i].Id = adaptationSet.id + '_' + qualityLevels[i].getAttribute('Index');

            // Map Representation to QualityLevel
            representation = mapRepresentation(qualityLevels[i], streamIndex);

            if (representation !== null) {
                // Copy SegmentTemplate into Representation
                representation.SegmentTemplate = segmentTemplate;

                representations.push(representation);
            }
        }

        if (representations.length === 0) {
            return null;
        }

        adaptationSet.Representation = representations.length > 1 ? representations : representations[0];
        adaptationSet.Representation_asArray = representations;

        // Set SegmentTemplate
        adaptationSet.SegmentTemplate = segmentTemplate;

        segments = segmentTemplate.SegmentTimeline.S_asArray;

        return adaptationSet;
    }

    function mapRepresentation(qualityLevel, streamIndex) {
        var representation = {};
        var type = streamIndex.getAttribute('Type');
        var fourCCValue = null;

        representation.id = qualityLevel.Id;
        representation.bandwidth = parseInt(qualityLevel.getAttribute('Bitrate'), 10);
        representation.mimeType = qualityLevel.mimeType;
        representation.width = parseInt(qualityLevel.getAttribute('MaxWidth'), 10);
        representation.height = parseInt(qualityLevel.getAttribute('MaxHeight'), 10);

        fourCCValue = qualityLevel.getAttribute('FourCC');

        // If FourCC not defined at QualityLevel level, then get it from StreamIndex level
        if (fourCCValue === null || fourCCValue === '') {
            fourCCValue = streamIndex.getAttribute('FourCC');
        }

        // If still not defined (optionnal for audio stream, see https://msdn.microsoft.com/en-us/library/ff728116%28v=vs.95%29.aspx),
        // then we consider the stream is an audio AAC stream
        if (fourCCValue === null || fourCCValue === '') {
            if (type === 'audio') {
                fourCCValue = 'AAC';
            } else if (type === 'video') {
                logger.debug('FourCC is not defined whereas it is required for a QualityLevel element for a StreamIndex of type "video"');
                return null;
            }
        }

        // Check if codec is supported
        if (SUPPORTED_CODECS.indexOf(fourCCValue.toUpperCase()) === -1) {
            // Do not send warning
            logger.warn('Codec not supported: ' + fourCCValue);
            return null;
        }

        // Get codecs value according to FourCC field
        if (fourCCValue === 'H264' || fourCCValue === 'AVC1') {
            representation.codecs = getH264Codec(qualityLevel);
        } else if (fourCCValue.indexOf('AAC') >= 0) {
            representation.codecs = getAACCodec(qualityLevel, fourCCValue);
            representation.audioSamplingRate = parseInt(qualityLevel.getAttribute('SamplingRate'), 10);
            representation.audioChannels = parseInt(qualityLevel.getAttribute('Channels'), 10);
        } else if (fourCCValue.indexOf('TTML') || fourCCValue.indexOf('DFXP')) {
            representation.codecs = constants.STPP;
        }

        representation.codecPrivateData = '' + qualityLevel.getAttribute('CodecPrivateData');
        representation.BaseURL = qualityLevel.BaseURL;

        return representation;
    }

    function getH264Codec(qualityLevel) {
        var codecPrivateData = qualityLevel.getAttribute('CodecPrivateData').toString();
        var nalHeader = undefined,
            avcoti = undefined;

        // Extract from the CodecPrivateData field the hexadecimal representation of the following
        // three bytes in the sequence parameter set NAL unit.
        // => Find the SPS nal header
        nalHeader = /00000001[0-9]7/.exec(codecPrivateData);
        // => Find the 6 characters after the SPS nalHeader (if it exists)
        avcoti = nalHeader && nalHeader[0] ? codecPrivateData.substr(codecPrivateData.indexOf(nalHeader[0]) + 10, 6) : undefined;

        return 'avc1.' + avcoti;
    }

    function getAACCodec(qualityLevel, fourCCValue) {
        var samplingRate = parseInt(qualityLevel.getAttribute('SamplingRate'), 10);
        var codecPrivateData = qualityLevel.getAttribute('CodecPrivateData').toString();
        var objectType = 0;
        var codecPrivateDataHex = undefined,
            arr16 = undefined,
            indexFreq = undefined,
            extensionSamplingFrequencyIndex = undefined;

        //chrome problem, in implicit AAC HE definition, so when AACH is detected in FourCC
        //set objectType to 5 => strange, it should be 2
        if (fourCCValue === 'AACH') {
            objectType = 0x05;
        }
        //if codecPrivateData is empty, build it :
        if (codecPrivateData === undefined || codecPrivateData === '') {
            objectType = 0x02; //AAC Main Low Complexity => object Type = 2
            indexFreq = samplingFrequencyIndex[samplingRate];
            if (fourCCValue === 'AACH') {
                // 4 bytes :     XXXXX         XXXX          XXXX             XXXX                  XXXXX      XXX   XXXXXXX
                //           ' ObjectType' 'Freq Index' 'Channels value'   'Extens Sampl Freq'  'ObjectType'  'GAS' 'alignment = 0'
                objectType = 0x05; // High Efficiency AAC Profile = object Type = 5 SBR
                codecPrivateData = new Uint8Array(4);
                extensionSamplingFrequencyIndex = samplingFrequencyIndex[samplingRate * 2]; // in HE AAC Extension Sampling frequence
                // equals to SamplingRate*2
                //Freq Index is present for 3 bits in the first byte, last bit is in the second
                codecPrivateData[0] = objectType << 3 | indexFreq >> 1;
                codecPrivateData[1] = indexFreq << 7 | qualityLevel.Channels << 3 | extensionSamplingFrequencyIndex >> 1;
                codecPrivateData[2] = extensionSamplingFrequencyIndex << 7 | 0x02 << 2; // origin object type equals to 2 => AAC Main Low Complexity
                codecPrivateData[3] = 0x0; //alignment bits

                arr16 = new Uint16Array(2);
                arr16[0] = (codecPrivateData[0] << 8) + codecPrivateData[1];
                arr16[1] = (codecPrivateData[2] << 8) + codecPrivateData[3];
                //convert decimal to hex value
                codecPrivateDataHex = arr16[0].toString(16);
                codecPrivateDataHex = arr16[0].toString(16) + arr16[1].toString(16);
            } else {
                // 2 bytes :     XXXXX         XXXX          XXXX              XXX
                //           ' ObjectType' 'Freq Index' 'Channels value'   'GAS = 000'
                codecPrivateData = new Uint8Array(2);
                //Freq Index is present for 3 bits in the first byte, last bit is in the second
                codecPrivateData[0] = objectType << 3 | indexFreq >> 1;
                codecPrivateData[1] = indexFreq << 7 | parseInt(qualityLevel.getAttribute('Channels'), 10) << 3;
                // put the 2 bytes in an 16 bits array
                arr16 = new Uint16Array(1);
                arr16[0] = (codecPrivateData[0] << 8) + codecPrivateData[1];
                //convert decimal to hex value
                codecPrivateDataHex = arr16[0].toString(16);
            }

            codecPrivateData = '' + codecPrivateDataHex;
            codecPrivateData = codecPrivateData.toUpperCase();
            qualityLevel.setAttribute('CodecPrivateData', codecPrivateData);
        } else if (objectType === 0) {
            objectType = (parseInt(codecPrivateData.substr(0, 2), 16) & 0xF8) >> 3;
        }

        return 'mp4a.40.' + objectType;
    }

    function mapSegmentTemplate(streamIndex, timescale) {
        var segmentTemplate = {};
        var mediaUrl = undefined,
            streamIndexTimeScale = undefined;

        mediaUrl = streamIndex.getAttribute('Url').replace('{bitrate}', '$Bandwidth$');
        mediaUrl = mediaUrl.replace('{start time}', '$Time$');

        streamIndexTimeScale = streamIndex.getAttribute('TimeScale');
        streamIndexTimeScale = streamIndexTimeScale ? parseFloat(streamIndexTimeScale) : timescale;

        segmentTemplate.media = mediaUrl;
        segmentTemplate.timescale = streamIndexTimeScale;

        segmentTemplate.SegmentTimeline = mapSegmentTimeline(streamIndex, segmentTemplate.timescale);

        return segmentTemplate;
    }

    function mapSegmentTimeline(streamIndex, timescale) {
        var segmentTimeline = {};
        var chunks = streamIndex.getElementsByTagName('c');
        var segments = [];
        var segment = undefined,
            prevSegment = undefined,
            tManifest = undefined,
            i = undefined,
            j = undefined,
            r = undefined;
        var duration = 0;

        for (i = 0; i < chunks.length; i++) {
            segment = {};

            // Get time 't' attribute value
            tManifest = chunks[i].getAttribute('t');

            // => segment.tManifest = original timestamp value as a string (for constructing the fragment request url, see DashHandler)
            // => segment.t = number value of timestamp (maybe rounded value, but only for 0.1 microsecond)
            segment.tManifest = parseFloat(tManifest);
            segment.t = parseFloat(tManifest);

            // Get duration 'd' attribute value
            segment.d = parseFloat(chunks[i].getAttribute('d'));

            // If 't' not defined for first segment then t=0
            if (i === 0 && !segment.t) {
                segment.t = 0;
            }

            if (i > 0) {
                prevSegment = segments[segments.length - 1];
                // Update previous segment duration if not defined
                if (!prevSegment.d) {
                    if (prevSegment.tManifest) {
                        prevSegment.d = parseFloat(tManifest) - parseFloat(prevSegment.tManifest);
                    } else {
                        prevSegment.d = segment.t - prevSegment.t;
                    }
                    duration += prevSegment.d;
                }
                // Set segment absolute timestamp if not set in manifest
                if (!segment.t) {
                    if (prevSegment.tManifest) {
                        segment.tManifest = parseFloat(prevSegment.tManifest) + prevSegment.d;
                        segment.t = parseFloat(segment.tManifest);
                    } else {
                        segment.t = prevSegment.t + prevSegment.d;
                    }
                }
            }

            if (segment.d) {
                duration += segment.d;
            }

            // Create new segment
            segments.push(segment);

            // Support for 'r' attribute (i.e. "repeat" as in MPEG-DASH)
            r = parseFloat(chunks[i].getAttribute('r'));
            if (r) {

                for (j = 0; j < r - 1; j++) {
                    prevSegment = segments[segments.length - 1];
                    segment = {};
                    segment.t = prevSegment.t + prevSegment.d;
                    segment.d = prevSegment.d;
                    if (prevSegment.tManifest) {
                        segment.tManifest = parseFloat(prevSegment.tManifest) + prevSegment.d;
                    }
                    duration += segment.d;
                    segments.push(segment);
                }
            }
        }

        segmentTimeline.S = segments;
        segmentTimeline.S_asArray = segments;
        segmentTimeline.duration = duration / timescale;

        return segmentTimeline;
    }

    function getKIDFromProtectionHeader(protectionHeader) {
        var prHeader = undefined,
            wrmHeader = undefined,
            xmlReader = undefined,
            KID = undefined;

        // Get PlayReady header as byte array (base64 decoded)
        prHeader = BASE64.decodeArray(protectionHeader.firstChild.data);

        // Get Right Management header (WRMHEADER) from PlayReady header
        wrmHeader = getWRMHeaderFromPRHeader(prHeader);

        // Convert from multi-byte to unicode
        wrmHeader = new Uint16Array(wrmHeader.buffer);

        // Convert to string
        wrmHeader = String.fromCharCode.apply(null, wrmHeader);

        // Parse <WRMHeader> to get KID field value
        xmlReader = new DOMParser().parseFromString(wrmHeader, 'application/xml');
        KID = xmlReader.querySelector('KID').textContent;

        // Get KID (base64 decoded) as byte array
        KID = BASE64.decodeArray(KID);

        // Convert UUID from little-endian to big-endian
        convertUuidEndianness(KID);

        return KID;
    }

    function getWRMHeaderFromPRHeader(prHeader) {
        var length = undefined,
            recordCount = undefined,
            recordType = undefined,
            recordLength = undefined,
            recordValue = undefined;
        var i = 0;

        // Parse PlayReady header

        // Length - 32 bits (LE format)
        length = (prHeader[i + 3] << 24) + (prHeader[i + 2] << 16) + (prHeader[i + 1] << 8) + prHeader[i];
        i += 4;

        // Record count - 16 bits (LE format)
        recordCount = (prHeader[i + 1] << 8) + prHeader[i];
        i += 2;

        // Parse records
        while (i < prHeader.length) {
            // Record type - 16 bits (LE format)
            recordType = (prHeader[i + 1] << 8) + prHeader[i];
            i += 2;

            // Check if Rights Management header (record type = 0x01)
            if (recordType === 0x01) {

                // Record length - 16 bits (LE format)
                recordLength = (prHeader[i + 1] << 8) + prHeader[i];
                i += 2;

                // Record value => contains <WRMHEADER>
                recordValue = new Uint8Array(recordLength);
                recordValue.set(prHeader.subarray(i, i + recordLength));
                return recordValue;
            }
        }

        return null;
    }

    function convertUuidEndianness(uuid) {
        swapBytes(uuid, 0, 3);
        swapBytes(uuid, 1, 2);
        swapBytes(uuid, 4, 5);
        swapBytes(uuid, 6, 7);
    }

    function swapBytes(bytes, pos1, pos2) {
        var temp = bytes[pos1];
        bytes[pos1] = bytes[pos2];
        bytes[pos2] = temp;
    }

    function createPRContentProtection(protectionHeader) {
        var pro = {
            __text: protectionHeader.firstChild.data,
            __prefix: 'mspr'
        };
        return {
            schemeIdUri: 'urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95',
            value: 'com.microsoft.playready',
            pro: pro,
            pro_asArray: pro
        };
    }

    function createWidevineContentProtection(protectionHeader, KID) {
        // Create Widevine CENC header (Protocol Buffer) with KID value
        var wvCencHeader = new Uint8Array(2 + KID.length);
        wvCencHeader[0] = 0x12;
        wvCencHeader[1] = 0x10;
        wvCencHeader.set(KID, 2);

        // Create a pssh box
        var length = 12 /* box length, type, version and flags */ + 16 /* SystemID */ + 4 /* data length */ + wvCencHeader.length;
        var pssh = new Uint8Array(length);
        var i = 0;

        // Set box length value
        pssh[i++] = (length & 0xFF000000) >> 24;
        pssh[i++] = (length & 0x00FF0000) >> 16;
        pssh[i++] = (length & 0x0000FF00) >> 8;
        pssh[i++] = length & 0x000000FF;

        // Set type ('pssh'), version (0) and flags (0)
        pssh.set([0x70, 0x73, 0x73, 0x68, 0x00, 0x00, 0x00, 0x00], i);
        i += 8;

        // Set SystemID ('edef8ba9-79d6-4ace-a3c8-27dcd51d21ed')
        pssh.set([0xed, 0xef, 0x8b, 0xa9, 0x79, 0xd6, 0x4a, 0xce, 0xa3, 0xc8, 0x27, 0xdc, 0xd5, 0x1d, 0x21, 0xed], i);
        i += 16;

        // Set data length value
        pssh[i++] = (wvCencHeader.length & 0xFF000000) >> 24;
        pssh[i++] = (wvCencHeader.length & 0x00FF0000) >> 16;
        pssh[i++] = (wvCencHeader.length & 0x0000FF00) >> 8;
        pssh[i++] = wvCencHeader.length & 0x000000FF;

        // Copy Widevine CENC header
        pssh.set(wvCencHeader, i);

        // Convert to BASE64 string
        pssh = String.fromCharCode.apply(null, pssh);
        pssh = BASE64.encodeASCII(pssh);

        return {
            schemeIdUri: 'urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed',
            value: 'com.widevine.alpha',
            pssh: {
                __text: pssh
            }
        };
    }

    function processManifest(xmlDoc, manifestLoadedTime) {
        var manifest = {};
        var contentProtections = [];
        var smoothStreamingMedia = xmlDoc.getElementsByTagName('SmoothStreamingMedia')[0];
        var protection = xmlDoc.getElementsByTagName('Protection')[0];
        var protectionHeader = null;
        var period = undefined,
            adaptations = undefined,
            contentProtection = undefined,
            KID = undefined,
            timestampOffset = undefined,
            startTime = undefined,
            segments = undefined,
            timescale = undefined,
            i = undefined,
            j = undefined;

        // Set manifest node properties
        manifest.protocol = 'MSS';
        manifest.profiles = 'urn:mpeg:dash:profile:isoff-live:2011';
        manifest.type = smoothStreamingMedia.getAttribute('IsLive') === 'TRUE' ? 'dynamic' : 'static';
        timescale = smoothStreamingMedia.getAttribute('TimeScale');
        manifest.timescale = timescale ? parseFloat(timescale) : DEFAULT_TIME_SCALE;
        var dvrWindowLength = parseFloat(smoothStreamingMedia.getAttribute('DVRWindowLength'));
        if (dvrWindowLength === 0 && smoothStreamingMedia.getAttribute('CanSeek') === 'TRUE') {
            dvrWindowLength = Infinity;
        }
        if (dvrWindowLength > 0) {
            manifest.timeShiftBufferDepth = dvrWindowLength / manifest.timescale;
        }

        var duration = parseFloat(smoothStreamingMedia.getAttribute('Duration'));
        manifest.mediaPresentationDuration = duration === 0 ? Infinity : duration / manifest.timescale;
        // By default, set minBufferTime to 2 sec. (but set below according to video segment duration)
        manifest.minBufferTime = 2;
        manifest.ttmlTimeIsRelative = true;

        // Live manifest with Duration = start-over
        if (manifest.type === 'dynamic' && duration > 0) {
            manifest.type = 'static';
            // We set timeShiftBufferDepth to initial duration, to be used by MssFragmentController to update segment timeline
            manifest.timeShiftBufferDepth = duration / manifest.timescale;
            // Duration will be set according to current segment timeline duration (see below)
        }

        // In case of live streams, set availabilityStartTime property according to DVRWindowLength
        if (manifest.type === 'dynamic' && manifest.timeShiftBufferDepth < Infinity) {
            manifest.availabilityStartTime = new Date(manifestLoadedTime.getTime() - manifest.timeShiftBufferDepth * 1000);
            manifest.refreshManifestOnSwitchTrack = true;
            manifest.doNotUpdateDVRWindowOnBufferUpdated = true; // DVRWindow is update by MssFragmentMoofPocessor based on tfrf boxes
            manifest.ignorePostponeTimePeriod = true; // Never update manifest
        }

        // Map period node to manifest root node
        manifest.Period = mapPeriod(smoothStreamingMedia, manifest.timescale);
        manifest.Period_asArray = [manifest.Period];

        // Initialize period start time
        period = manifest.Period;
        period.start = 0;

        // Uncomment to test live to static manifests
        // if (manifest.type !== 'static') {
        //     manifest.type = 'static';
        //     manifest.mediaPresentationDuration = manifest.timeShiftBufferDepth;
        //     manifest.timeShiftBufferDepth = null;
        // }

        // ContentProtection node
        if (protection !== undefined) {
            protectionHeader = xmlDoc.getElementsByTagName('ProtectionHeader')[0];

            // Some packagers put newlines into the ProtectionHeader base64 string, which is not good
            // because this cannot be correctly parsed. Let's just filter out any newlines found in there.
            protectionHeader.firstChild.data = protectionHeader.firstChild.data.replace(/\n|\r/g, '');

            // Get KID (in CENC format) from protection header
            KID = getKIDFromProtectionHeader(protectionHeader);

            // Create ContentProtection for PlayReady
            contentProtection = createPRContentProtection(protectionHeader);
            contentProtection['cenc:default_KID'] = KID;
            contentProtections.push(contentProtection);

            // Create ContentProtection for Widevine (as a CENC protection)
            contentProtection = createWidevineContentProtection(protectionHeader, KID);
            contentProtection['cenc:default_KID'] = KID;
            contentProtections.push(contentProtection);

            manifest.ContentProtection = contentProtections;
            manifest.ContentProtection_asArray = contentProtections;
        }

        adaptations = period.AdaptationSet_asArray;

        for (i = 0; i < adaptations.length; i += 1) {
            adaptations[i].SegmentTemplate.initialization = '$Bandwidth$';
            // Propagate content protection information into each adaptation
            if (manifest.ContentProtection !== undefined) {
                adaptations[i].ContentProtection = manifest.ContentProtection;
                adaptations[i].ContentProtection_asArray = manifest.ContentProtection_asArray;
            }

            // Set minBufferTime
            if (adaptations[i].contentType === 'video') {
                manifest.minBufferTime = adaptations[i].SegmentTemplate.SegmentTimeline.S_asArray[0].d / adaptations[i].SegmentTemplate.timescale * 2;
            }

            if (manifest.type === 'dynamic') {
                // Set availabilityStartTime for infinite DVR Window from segment timeline duration
                if (manifest.timeShiftBufferDepth === Infinity) {
                    manifest.availabilityStartTime = new Date(manifestLoadedTime.getTime() - adaptations[i].SegmentTemplate.SegmentTimeline.duration * 1000);
                }
                // Match timeShiftBufferDepth to video segment timeline duration
                if (manifest.timeShiftBufferDepth > 0 && manifest.timeShiftBufferDepth !== Infinity && adaptations[i].contentType === 'video' && manifest.timeShiftBufferDepth > adaptations[i].SegmentTemplate.SegmentTimeline.duration) {
                    manifest.timeShiftBufferDepth = adaptations[i].SegmentTemplate.SegmentTimeline.duration;
                }
            }
        }

        if (manifest.timeShiftBufferDepth < manifest.minBufferTime) {
            manifest.minBufferTime = manifest.timeShiftBufferDepth;
        }

        // Delete Content Protection under root manifest node
        delete manifest.ContentProtection;
        delete manifest.ContentProtection_asArray;

        // In case of VOD streams, check if start time is greater than 0
        // Then determine timestamp offset according to higher audio/video start time
        // (use case = live stream delinearization)
        if (manifest.type === 'static') {
            // In case of start-over stream and manifest reloading (due to track switch)
            // we consider previous timestampOffset to keep timelines synchronized
            var prevManifest = manifestModel.getValue();
            if (prevManifest && prevManifest.timestampOffset) {
                timestampOffset = prevManifest.timestampOffset;
            } else {
                for (i = 0; i < adaptations.length; i++) {
                    if (adaptations[i].contentType === 'audio' || adaptations[i].contentType === 'video') {
                        segments = adaptations[i].SegmentTemplate.SegmentTimeline.S_asArray;
                        startTime = segments[0].t / adaptations[i].SegmentTemplate.timescale;
                        if (timestampOffset === undefined) {
                            timestampOffset = startTime;
                        }
                        timestampOffset = Math.min(timestampOffset, startTime);
                        // Correct content duration according to minimum adaptation's segment timeline duration
                        // in order to force <video> element sending 'ended' event
                        manifest.mediaPresentationDuration = Math.min(manifest.mediaPresentationDuration, adaptations[i].SegmentTemplate.SegmentTimeline.duration);
                    }
                }
            }
            // Patch segment templates timestamps and determine period start time (since audio/video should not be aligned to 0)
            if (timestampOffset > 0) {
                manifest.timestampOffset = timestampOffset;
                for (i = 0; i < adaptations.length; i++) {
                    segments = adaptations[i].SegmentTemplate.SegmentTimeline.S_asArray;
                    for (j = 0; j < segments.length; j++) {
                        if (!segments[j].tManifest) {
                            segments[j].tManifest = segments[j].t;
                        }
                        segments[j].t -= timestampOffset * adaptations[i].SegmentTemplate.timescale;
                    }
                    if (adaptations[i].contentType === 'audio' || adaptations[i].contentType === 'video') {
                        period.start = Math.max(segments[0].t, period.start);
                        adaptations[i].SegmentTemplate.presentationTimeOffset = period.start;
                    }
                }
                period.start /= manifest.timescale;
            }
        }

        // Floor the duration to get around precision differences between segments timestamps and MSE buffer timestamps
        // and the avoid 'ended' event not being raised
        manifest.mediaPresentationDuration = Math.floor(manifest.mediaPresentationDuration * 1000) / 1000;
        period.duration = manifest.mediaPresentationDuration;

        return manifest;
    }

    function parseDOM(data) {
        var xmlDoc = null;

        if (window.DOMParser) {
            var parser = new window.DOMParser();

            xmlDoc = parser.parseFromString(data, 'text/xml');
            if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
                throw new Error('parsing the manifest failed');
            }
        }

        return xmlDoc;
    }

    function getMatchers() {
        return null;
    }

    function getIron() {
        return null;
    }

    function internalParse(data) {
        var xmlDoc = null;
        var manifest = null;

        var startTime = window.performance.now();

        // Parse the MSS XML manifest
        xmlDoc = parseDOM(data);

        var xmlParseTime = window.performance.now();

        if (xmlDoc === null) {
            return null;
        }

        // Convert MSS manifest into DASH manifest
        manifest = processManifest(xmlDoc, new Date());

        var mss2dashTime = window.performance.now();

        logger.info('Parsing complete: (xmlParsing: ' + (xmlParseTime - startTime).toPrecision(3) + 'ms, mss2dash: ' + (mss2dashTime - xmlParseTime).toPrecision(3) + 'ms, total: ' + ((mss2dashTime - startTime) / 1000).toPrecision(3) + 's)');

        return manifest;
    }

    instance = {
        parse: internalParse,
        getMatchers: getMatchers,
        getIron: getIron
    };

    setup();

    return instance;
}

MssParser.__dashjs_factory_name = 'MssParser';
exports['default'] = dashjs.FactoryMaker.getClassFactory(MssParser);
/* jshint ignore:line */
module.exports = exports['default'];

},{}],12:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _coreEventsEventsBase = _dereq_('../core/events/EventsBase');

var _coreEventsEventsBase2 = _interopRequireDefault(_coreEventsEventsBase);

/**
 * @class
 *
 */

var MediaPlayerEvents = (function (_EventsBase) {
  _inherits(MediaPlayerEvents, _EventsBase);

  /**
   * @description Public facing external events to be used when developing a player that implements dash.js.
   */

  function MediaPlayerEvents() {
    _classCallCheck(this, MediaPlayerEvents);

    _get(Object.getPrototypeOf(MediaPlayerEvents.prototype), 'constructor', this).call(this);
    /**
     * Triggered when playback will not start yet
     * as the MPD's availabilityStartTime is in the future.
     * Check delay property in payload to determine time before playback will start.
     */
    this.AST_IN_FUTURE = 'astInFuture';

    /**
     * Triggered when the video element's buffer state changes to stalled.
     * Check mediaType in payload to determine type (Video, Audio, FragmentedText).
     * @event MediaPlayerEvents#BUFFER_EMPTY
     */
    this.BUFFER_EMPTY = 'bufferStalled';

    /**
     * Triggered when the video element's buffer state changes to loaded.
     * Check mediaType in payload to determine type (Video, Audio, FragmentedText).
     * @event MediaPlayerEvents#BUFFER_LOADED
     */
    this.BUFFER_LOADED = 'bufferLoaded';

    /**
     * Triggered when the video element's buffer state changes, either stalled or loaded. Check payload for state.
     * @event MediaPlayerEvents#BUFFER_LEVEL_STATE_CHANGED
     */
    this.BUFFER_LEVEL_STATE_CHANGED = 'bufferStateChanged';

    /**
     * Triggered when there is an error from the element or MSE source buffer.
     * @event MediaPlayerEvents#ERROR
     */
    this.ERROR = 'error';

    /**
     * Triggered when a fragment download has completed.
     * @event MediaPlayerEvents#FRAGMENT_LOADING_COMPLETED
     */
    this.FRAGMENT_LOADING_COMPLETED = 'fragmentLoadingCompleted';

    /**
     * Triggered when a partial fragment download has completed.
     * @event MediaPlayerEvents#FRAGMENT_LOADING_PROGRESS
     */
    this.FRAGMENT_LOADING_PROGRESS = 'fragmentLoadingProgress';
    /**
     * Triggered when a fragment download has started.
     * @event MediaPlayerEvents#FRAGMENT_LOADING_STARTED
     */
    this.FRAGMENT_LOADING_STARTED = 'fragmentLoadingStarted';

    /**
     * Triggered when a fragment download is abandoned due to detection of slow download base on the ABR abandon rule..
     * @event MediaPlayerEvents#FRAGMENT_LOADING_ABANDONED
     */
    this.FRAGMENT_LOADING_ABANDONED = 'fragmentLoadingAbandoned';

    /**
     * Triggered when {@link module:Debug} logger methods are called.
     * @event MediaPlayerEvents#LOG
     */
    this.LOG = 'log';

    //TODO refactor with internal event
    /**
     * Triggered when the manifest load is complete
     * @event MediaPlayerEvents#MANIFEST_LOADED
     */
    this.MANIFEST_LOADED = 'manifestLoaded';

    /**
     * Triggered anytime there is a change to the overall metrics.
     * @event MediaPlayerEvents#METRICS_CHANGED
     */
    this.METRICS_CHANGED = 'metricsChanged';

    /**
     * Triggered when an individual metric is added, updated or cleared.
     * @event MediaPlayerEvents#METRIC_CHANGED
     */
    this.METRIC_CHANGED = 'metricChanged';

    /**
     * Triggered every time a new metric is added.
     * @event MediaPlayerEvents#METRIC_ADDED
     */
    this.METRIC_ADDED = 'metricAdded';

    /**
     * Triggered every time a metric is updated.
     * @event MediaPlayerEvents#METRIC_UPDATED
     */
    this.METRIC_UPDATED = 'metricUpdated';

    /**
     * Triggered at the stream end of a period.
     * @event MediaPlayerEvents#PERIOD_SWITCH_COMPLETED
     */
    this.PERIOD_SWITCH_COMPLETED = 'periodSwitchCompleted';

    /**
     * Triggered when a new period starts.
     * @event MediaPlayerEvents#PERIOD_SWITCH_STARTED
     */
    this.PERIOD_SWITCH_STARTED = 'periodSwitchStarted';

    /**
     * Triggered when an ABR up /down switch is initiated; either by user in manual mode or auto mode via ABR rules.
     * @event MediaPlayerEvents#QUALITY_CHANGE_REQUESTED
     */
    this.QUALITY_CHANGE_REQUESTED = 'qualityChangeRequested';

    /**
     * Triggered when the new ABR quality is being rendered on-screen.
     * @event MediaPlayerEvents#QUALITY_CHANGE_RENDERED
     */
    this.QUALITY_CHANGE_RENDERED = 'qualityChangeRendered';

    /**
     * Triggered when the new track is being rendered.
     * @event MediaPlayerEvents#TRACK_CHANGE_RENDERED
     */
    this.TRACK_CHANGE_RENDERED = 'trackChangeRendered';

    /**
     * Triggered when the source is setup and ready.
     * @event MediaPlayerEvents#SOURCE_INITIALIZED
     */
    this.SOURCE_INITIALIZED = 'sourceInitialized';

    /**
     * Triggered when a stream (period) is loaded
     * @event MediaPlayerEvents#STREAM_INITIALIZED
     */
    this.STREAM_INITIALIZED = 'streamInitialized';

    /**
     * Triggered when the player has been reset.
     * @event MediaPlayerEvents#STREAM_TEARDOWN_COMPLETE
     */
    this.STREAM_TEARDOWN_COMPLETE = 'streamTeardownComplete';

    /**
     * Triggered once all text tracks detected in the MPD are added to the video element.
     * @event MediaPlayerEvents#TEXT_TRACKS_ADDED
     */
    this.TEXT_TRACKS_ADDED = 'allTextTracksAdded';

    /**
     * Triggered when a text track is added to the video element's TextTrackList
     * @event MediaPlayerEvents#TEXT_TRACK_ADDED
     */
    this.TEXT_TRACK_ADDED = 'textTrackAdded';

    /**
     * Triggered when a ttml chunk is parsed.
     * @event MediaPlayerEvents#TTML_PARSED
     */
    this.TTML_PARSED = 'ttmlParsed';

    /**
     * Triggered when a ttml chunk has to be parsed.
     * @event MediaPlayerEvents#TTML_TO_PARSE
     */
    this.TTML_TO_PARSE = 'ttmlToParse';

    /**
     * Triggered when a caption is rendered.
     * @event MediaPlayerEvents#CAPTION_RENDERED
     */
    this.CAPTION_RENDERED = 'captionRendered';

    /**
     * Triggered when the caption container is resized.
     * @event MediaPlayerEvents#CAPTION_CONTAINER_RESIZE
     */
    this.CAPTION_CONTAINER_RESIZE = 'captionContainerResize';

    /**
     * Sent when enough data is available that the media can be played,
     * at least for a couple of frames.  This corresponds to the
     * HAVE_ENOUGH_DATA readyState.
     * @event MediaPlayerEvents#CAN_PLAY
     */
    this.CAN_PLAY = 'canPlay';

    /**
     * Sent when playback completes.
     * @event MediaPlayerEvents#PLAYBACK_ENDED
     */
    this.PLAYBACK_ENDED = 'playbackEnded';

    /**
     * Sent when an error occurs.  The element's error
     * attribute contains more information.
     * @event MediaPlayerEvents#PLAYBACK_ERROR
     */
    this.PLAYBACK_ERROR = 'playbackError';

    /**
     * Sent when playback is not allowed (for example if user gesture is needed).
     * @event MediaPlayerEvents#PLAYBACK_NOT_ALLOWED
     */
    this.PLAYBACK_NOT_ALLOWED = 'playbackNotAllowed';

    /**
     * The media's metadata has finished loading; all attributes now
     * contain as much useful information as they're going to.
     * @event MediaPlayerEvents#PLAYBACK_METADATA_LOADED
     */
    this.PLAYBACK_METADATA_LOADED = 'playbackMetaDataLoaded';

    /**
     * Sent when playback is paused.
     * @event MediaPlayerEvents#PLAYBACK_PAUSED
     */
    this.PLAYBACK_PAUSED = 'playbackPaused';

    /**
     * Sent when the media begins to play (either for the first time, after having been paused,
     * or after ending and then restarting).
     *
     * @event MediaPlayerEvents#PLAYBACK_PLAYING
     */
    this.PLAYBACK_PLAYING = 'playbackPlaying';

    /**
     * Sent periodically to inform interested parties of progress downloading
     * the media. Information about the current amount of the media that has
     * been downloaded is available in the media element's buffered attribute.
     * @event MediaPlayerEvents#PLAYBACK_PROGRESS
     */
    this.PLAYBACK_PROGRESS = 'playbackProgress';

    /**
     * Sent when the playback speed changes.
     * @event MediaPlayerEvents#PLAYBACK_RATE_CHANGED
     */
    this.PLAYBACK_RATE_CHANGED = 'playbackRateChanged';

    /**
     * Sent when a seek operation completes.
     * @event MediaPlayerEvents#PLAYBACK_SEEKED
     */
    this.PLAYBACK_SEEKED = 'playbackSeeked';

    /**
     * Sent when a seek operation begins.
     * @event MediaPlayerEvents#PLAYBACK_SEEKING
     */
    this.PLAYBACK_SEEKING = 'playbackSeeking';

    /**
     * Sent when a seek operation has been asked.
     * @event MediaPlayerEvents#PLAYBACK_SEEK_ASKED
     */
    this.PLAYBACK_SEEK_ASKED = 'playbackSeekAsked';

    /**
     * Sent when the video element reports stalled
     * @event MediaPlayerEvents#PLAYBACK_STALLED
     */
    this.PLAYBACK_STALLED = 'playbackStalled';

    /**
     * Sent when playback of the media starts after having been paused;
     * that is, when playback is resumed after a prior pause event.
     *
     * @event MediaPlayerEvents#PLAYBACK_STARTED
     */
    this.PLAYBACK_STARTED = 'playbackStarted';

    /**
     * The time indicated by the element's currentTime attribute has changed.
     * @event MediaPlayerEvents#PLAYBACK_TIME_UPDATED
     */
    this.PLAYBACK_TIME_UPDATED = 'playbackTimeUpdated';

    /**
     * Sent when the media playback has stopped because of a temporary lack of data.
     *
     * @event MediaPlayerEvents#PLAYBACK_WAITING
     */
    this.PLAYBACK_WAITING = 'playbackWaiting';

    /**
     * Manifest validity changed - As a result of an MPD validity expiration event.
     * @event MediaPlayerEvents#MANIFEST_VALIDITY_CHANGED
     */
    this.MANIFEST_VALIDITY_CHANGED = 'manifestValidityChanged';
  }

  return MediaPlayerEvents;
})(_coreEventsEventsBase2['default']);

var mediaPlayerEvents = new MediaPlayerEvents();
exports['default'] = mediaPlayerEvents;
module.exports = exports['default'];

},{"../core/events/EventsBase":2}],13:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DashJSError = function DashJSError(code, message, data) {
  _classCallCheck(this, DashJSError);

  this.code = code || null;
  this.message = message || null;
  this.data = data || null;
};

exports["default"] = DashJSError;
module.exports = exports["default"];

},{}],14:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * @class
 * @ignore
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DataChunk =
//Represents a data structure that keep all the necessary info about a single init/media segment
function DataChunk() {
  _classCallCheck(this, DataChunk);

  this.streamId = null;
  this.mediaInfo = null;
  this.segmentType = null;
  this.quality = NaN;
  this.index = NaN;
  this.bytes = null;
  this.start = NaN;
  this.end = NaN;
  this.duration = NaN;
  this.representationId = null;
  this.endFragment = null;
};

exports["default"] = DataChunk;
module.exports = exports["default"];

},{}],15:[function(_dereq_,module,exports){
/**
 * The copyright in this software is being made available under the BSD License,
 * included below. This software may be subject to other third party and contributor
 * rights, including patent rights, and no such rights are granted under this license.
 *
 * Copyright (c) 2013, Dash Industry Forum.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright notice, this
 *  list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright notice,
 *  this list of conditions and the following disclaimer in the documentation and/or
 *  other materials provided with the distribution.
 *  * Neither the name of Dash Industry Forum nor the names of its
 *  contributors may be used to endorse or promote products derived from this software
 *  without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS AS IS AND ANY
 *  EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 *  IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 *  INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 *  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 *  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @class
 * @ignore
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FragmentRequest = function FragmentRequest() {
  _classCallCheck(this, FragmentRequest);

  this.action = FragmentRequest.ACTION_DOWNLOAD;
  this.startTime = NaN;
  this.mediaType = null;
  this.mediaInfo = null;
  this.type = null;
  this.duration = NaN;
  this.timescale = NaN;
  this.range = null;
  this.url = null;
  this.serviceLocation = null;
  this.requestStartDate = null;
  this.firstByteDate = null;
  this.requestEndDate = null;
  this.quality = NaN;
  this.index = NaN;
  this.availabilityStartTime = null;
  this.availabilityEndTime = null;
  this.wallStartTime = null;
  this.bytesLoaded = NaN;
  this.bytesTotal = NaN;
  this.delayLoadingTime = NaN;
  this.responseType = 'arraybuffer';
  this.representationId = null;
};

FragmentRequest.ACTION_DOWNLOAD = 'download';
FragmentRequest.ACTION_COMPLETE = 'complete';

exports['default'] = FragmentRequest;
module.exports = exports['default'];

},{}]},{},[10])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9uaWNvMy9Eb2N1bWVudHMvZGFzaC5qcy9zcmMvY29yZS9lcnJvcnMvRXJyb3JzQmFzZS5qcyIsIkM6L1VzZXJzL25pY28zL0RvY3VtZW50cy9kYXNoLmpzL3NyYy9jb3JlL2V2ZW50cy9FdmVudHNCYXNlLmpzIiwiQzovVXNlcnMvbmljbzMvRG9jdW1lbnRzL2Rhc2guanMvc3JjL21zcy9Nc3NFdmVudHMuanMiLCJDOi9Vc2Vycy9uaWNvMy9Eb2N1bWVudHMvZGFzaC5qcy9zcmMvbXNzL01zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIuanMiLCJDOi9Vc2Vycy9uaWNvMy9Eb2N1bWVudHMvZGFzaC5qcy9zcmMvbXNzL01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvci5qcyIsIkM6L1VzZXJzL25pY28zL0RvY3VtZW50cy9kYXNoLmpzL3NyYy9tc3MvTXNzRnJhZ21lbnRNb292UHJvY2Vzc29yLmpzIiwiQzovVXNlcnMvbmljbzMvRG9jdW1lbnRzL2Rhc2guanMvc3JjL21zcy9Nc3NGcmFnbWVudFByb2Nlc3Nvci5qcyIsIkM6L1VzZXJzL25pY28zL0RvY3VtZW50cy9kYXNoLmpzL3NyYy9tc3MvTXNzSGFuZGxlci5qcyIsIkM6L1VzZXJzL25pY28zL0RvY3VtZW50cy9kYXNoLmpzL3NyYy9tc3MvZXJyb3JzL01zc0Vycm9ycy5qcyIsIkM6L1VzZXJzL25pY28zL0RvY3VtZW50cy9kYXNoLmpzL3NyYy9tc3MvaW5kZXguanMiLCJDOi9Vc2Vycy9uaWNvMy9Eb2N1bWVudHMvZGFzaC5qcy9zcmMvbXNzL3BhcnNlci9Nc3NQYXJzZXIuanMiLCJDOi9Vc2Vycy9uaWNvMy9Eb2N1bWVudHMvZGFzaC5qcy9zcmMvc3RyZWFtaW5nL01lZGlhUGxheWVyRXZlbnRzLmpzIiwiQzovVXNlcnMvbmljbzMvRG9jdW1lbnRzL2Rhc2guanMvc3JjL3N0cmVhbWluZy92by9EYXNoSlNFcnJvci5qcyIsIkM6L1VzZXJzL25pY28zL0RvY3VtZW50cy9kYXNoLmpzL3NyYy9zdHJlYW1pbmcvdm8vRGF0YUNodW5rLmpzIiwiQzovVXNlcnMvbmljbzMvRG9jdW1lbnRzL2Rhc2guanMvc3JjL3N0cmVhbWluZy92by9GcmFnbWVudFJlcXVlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2tDTSxVQUFVO2FBQVYsVUFBVTs4QkFBVixVQUFVOzs7aUJBQVYsVUFBVTs7ZUFDTCxnQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsTUFBTSxFQUFFLE9BQU87O0FBRXBCLGdCQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDaEQsZ0JBQUksVUFBVSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7QUFHcEQsaUJBQUssSUFBTSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ3RCLG9CQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEFBQUMsRUFBRSxTQUFTO0FBQ3RFLG9CQUFJLFVBQVUsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVM7QUFDbEUsb0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFM0I7U0FDSjs7O1dBZEMsVUFBVTs7O3FCQWlCRCxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqQm5CLFVBQVU7YUFBVixVQUFVOzhCQUFWLFVBQVU7OztpQkFBVixVQUFVOztlQUNMLGdCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFD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LEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwSCxRQUFJLGNBQWMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztBQUV0SCxRQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFO0FBQ3pDLFlBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixZQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZixnQkFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDdEI7QUFDRCxZQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE1BQU0sRUFBRSxBQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNsRixZQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sRUFBRSxBQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztLQUNoRjs7QUFFRCxRQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxFQUFFO0FBQ3pDLFlBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixZQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDZixnQkFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7U0FDdEI7QUFDRCxZ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LFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixxQkFBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLEdBQUksZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQscUJBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUU1RCxtQ0FBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLG1DQUFtQixHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUV2RSxNQUFNOzs7QUFHSCxnQ0FBZ0IsR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFckMsZ0NBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQUFBQyxVQUFVLElBQUksQ0FBQyxHQUFLLFNBQVMsSUFBSSxDQUFDLEFBQUMsQ0FBQztBQUMzRCxnQ0FBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxBQUFDLFNBQVMsSUFBSSxDQUFDLEdBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxBQUFDLENBQUM7O0FBRXBHLHFCQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0IscUJBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxHQUFJLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUU1RCxtQ0FBbUIsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMs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VSxBQUFDLENBQUM7OztBQUdsQyxZQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlELFNBQUMsSUFBSSxDQUFDLENBQUM7OztBQUdQLFlBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvRyxTQUFDLElBQUksRUFBRSxDQUFDOzs7QUFHUixZQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFBLElBQUssRUFBRSxDQUFDO0FBQ3JELFlBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUEsSUFBSyxFQUFFLENBQUM7QUFDckQsWUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQSxJQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBSSxZQUFZLENBQUMsTUFBTSxHQUFHLFVBQVUsQUFBQyxDQUFDOzs7QUFHL0MsWUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztBQUcxQixZQUFJLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdDLFlBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFD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QUFlLEdBQUcsSUFBSSxDQUFDO0FBQzVCLE1BQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7QUFDN0IsTUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7QUFDMUIsTUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7QUFDM0IsTUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7QUFDbkIsTUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDakIsTUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztBQUNsQyxNQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO0FBQ2hDLE1BQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQzFCLE1BQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQ3ZCLE1BQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQ3RCLE1BQUksQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7QUFDNUIsTUFBSSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7QUFDbEMsTUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztDQUNoQzs7QUFHTCxlQUFlLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztBQUM3QyxlQUFlLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQzs7cUJBRTlCLGVBQWUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5jbGFzcyBFcnJvcnNCYXNlIHtcclxuICAgIGV4dGVuZCAoZXJyb3JzLCBjb25maWcpIHtcclxuICAgICAgICBpZiAoIWVycm9ycykgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgb3ZlcnJpZGUgPSBjb25maWcgPyBjb25maWcub3ZlcnJpZGUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgcHVibGljT25seSA9IGNvbmZpZyA/IGNvbmZpZy5wdWJsaWNPbmx5IDogZmFsc2U7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGVyciBpbiBlcnJvcnMpIHtcclxuICAgICAgICAgICAgaWYgKCFlcnJvcnMuaGFzT3duUHJvcGVydHkoZXJyKSB8fCAodGhpc1tlcnJdICYmICFvdmVycmlkZSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocHVibGljT25seSAmJiBlcnJvcnNbZXJyXS5pbmRleE9mKCdwdWJsaWNfJykgPT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgdGhpc1tlcnJdID0gZXJyb3JzW2Vycl07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JzQmFzZTsiLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5jbGFzcyBFdmVudHNCYXNlIHtcclxuICAgIGV4dGVuZCAoZXZlbnRzLCBjb25maWcpIHtcclxuICAgICAgICBpZiAoIWV2ZW50cykgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgb3ZlcnJpZGUgPSBjb25maWcgPyBjb25maWcub3ZlcnJpZGUgOiBmYWxzZTtcclxuICAgICAgICBsZXQgcHVibGljT25seSA9IGNvbmZpZyA/IGNvbmZpZy5wdWJsaWNPbmx5IDogZmFsc2U7XHJcblxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGV2dCBpbiBldmVudHMpIHtcclxuICAgICAgICAgICAgaWYgKCFldmVudHMuaGFzT3duUHJvcGVydHkoZXZ0KSB8fCAodGhpc1tldnRdICYmICFvdmVycmlkZSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocHVibGljT25seSAmJiBldmVudHNbZXZ0XS5pbmRleE9mKCdwdWJsaWNfJykgPT09IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgdGhpc1tldnRdID0gZXZlbnRzW2V2dF07XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzQmFzZTsiLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuaW1wb3J0IEV2ZW50c0Jhc2UgZnJvbSAnLi4vY29yZS9ldmVudHMvRXZlbnRzQmFzZSc7XHJcblxyXG5jbGFzcyBNc3NFdmVudHMgZXh0ZW5kcyBFdmVudHNCYXNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLkZSQUdNRU5UX0lORk9fTE9BRElOR19DT01QTEVURUQgPSAnZnJhZ21lbnRJbmZvTG9hZGluZ0NvbXBsZXRlZCc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtc3NFdmVudHMgPSBuZXcgTXNzRXZlbnRzKCk7XHJcbmV4cG9ydCBkZWZhdWx0IG1zc0V2ZW50cztcclxuIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcblxyXG5pbXBvcnQgTXNzRXZlbnRzIGZyb20gJy4vTXNzRXZlbnRzJztcclxuaW1wb3J0IE1TU0ZyYWdtZW50TW9vZlByb2Nlc3NvciBmcm9tICcuL01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcic7XHJcbmltcG9ydCBGcmFnbWVudFJlcXVlc3QgZnJvbSAnLi4vc3RyZWFtaW5nL3ZvL0ZyYWdtZW50UmVxdWVzdCc7XHJcblxyXG5mdW5jdGlvbiBNc3NGcmFnbWVudEluZm9Db250cm9sbGVyKGNvbmZpZykge1xyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcblxyXG4gICAgbGV0IGluc3RhbmNlLFxyXG4gICAgICAgIGxvZ2dlcixcclxuICAgICAgICBmcmFnbWVudE1vZGVsLFxyXG4gICAgICAgIHN0YXJ0ZWQsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBidWZmZXJUaW1lb3V0LFxyXG4gICAgICAgIHN0YXJ0VGltZSxcclxuICAgICAgICBzdGFydEZyYWdtZW50VGltZSxcclxuICAgICAgICBpbmRleDtcclxuXHJcbiAgICBjb25zdCBzdHJlYW1Qcm9jZXNzb3IgPSBjb25maWcuc3RyZWFtUHJvY2Vzc29yO1xyXG4gICAgY29uc3QgZXZlbnRCdXMgPSBjb25maWcuZXZlbnRCdXM7XHJcbiAgICBjb25zdCBkYXNoTWV0cmljcyA9IGNvbmZpZy5kYXNoTWV0cmljcztcclxuICAgIGNvbnN0IHBsYXliYWNrQ29udHJvbGxlciA9IGNvbmZpZy5wbGF5YmFja0NvbnRyb2xsZXI7XHJcbiAgICBjb25zdCBJU09Cb3hlciA9IGNvbmZpZy5JU09Cb3hlcjtcclxuICAgIGNvbnN0IGJhc2VVUkxDb250cm9sbGVyID0gY29uZmlnLmJhc2VVUkxDb250cm9sbGVyO1xyXG4gICAgY29uc3QgZGVidWcgPSBjb25maWcuZGVidWc7XHJcbiAgICBjb25zdCBjb250cm9sbGVyVHlwZSA9ICdNc3NGcmFnbWVudEluZm9Db250cm9sbGVyJztcclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgICBsb2dnZXIgPSBkZWJ1Zy5nZXRMb2dnZXIoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzdGFydFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHN0YXJ0RnJhZ21lbnRUaW1lID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgdG8gU3RyZWFtUHJvY2Vzc29yIGFzIGV4dGVybmFsIGNvbnRyb2xsZXJcclxuICAgICAgICBzdHJlYW1Qcm9jZXNzb3IucmVnaXN0ZXJFeHRlcm5hbENvbnRyb2xsZXIoaW5zdGFuY2UpO1xyXG4gICAgICAgIHR5cGUgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0VHlwZSgpO1xyXG4gICAgICAgIGZyYWdtZW50TW9kZWwgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0RnJhZ21lbnRNb2RlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvU3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHN0YXJ0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdEbyBzdGFydCcpO1xyXG5cclxuICAgICAgICBldmVudEJ1cy5vbihNc3NFdmVudHMuRlJBR01FTlRfSU5GT19MT0FESU5HX0NPTVBMRVRFRCwgb25GcmFnbWVudEluZm9Mb2FkZWRDb21wbGV0ZWQsIGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgc3RhcnRlZCA9IHRydWU7XHJcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaW5kZXggPSAwO1xyXG5cclxuICAgICAgICBsb2FkTmV4dEZyYWdtZW50SW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRvU3RvcCgpIHtcclxuICAgICAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsb2dnZXIuZGVidWcoJ0RvIHN0b3AnKTtcclxuXHJcbiAgICAgICAgZXZlbnRCdXMub2ZmKE1zc0V2ZW50cy5GUkFHTUVOVF9JTkZPX0xPQURJTkdfQ09NUExFVEVELCBvbkZyYWdtZW50SW5mb0xvYWRlZENvbXBsZXRlZCwgaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAvLyBTdG9wIGJ1ZmZlcmluZyBwcm9jZXNzXHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KGJ1ZmZlclRpbWVvdXQpO1xyXG4gICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICBzdGFydEZyYWdtZW50VGltZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XHJcbiAgICAgICAgZG9TdG9wKCk7XHJcbiAgICAgICAgc3RyZWFtUHJvY2Vzc29yLnVucmVnaXN0ZXJFeHRlcm5hbENvbnRyb2xsZXIoaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWROZXh0RnJhZ21lbnRJbmZvKCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIHJ1bm5pbmcgc3RhdGVcclxuICAgICAgICBpZiAoIXN0YXJ0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IGxhc3Qgc2VnbWVudCBmcm9tIFNlZ21lbnRUaW1lbGluZVxyXG4gICAgICAgIGNvbnN0IHJlcHJlc2VudGF0aW9uID0gZ2V0Q3VycmVudFJlcHJlc2VudGF0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbWFuaWZlc3QgPSByZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLnBlcmlvZC5tcGQubWFuaWZlc3Q7XHJcbiAgICAgICAgY29uc3QgYWRhcHRhdGlvbiA9IG1hbmlmZXN0LlBlcmlvZF9hc0FycmF5W3JlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24ucGVyaW9kLmluZGV4XS5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbcmVwcmVzZW50YXRpb24uYWRhcHRhdGlvbi5pbmRleF07XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudHMgPSBhZGFwdGF0aW9uLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuU19hc0FycmF5O1xyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdMYXN0IGZyYWdtZW50IHRpbWU6ICcgKyAoc2VnbWVudC50IC8gYWRhcHRhdGlvbi5TZWdtZW50VGVtcGxhdGUudGltZXNjYWxlKSk7XHJcblxyXG4gICAgICAgIC8vIEdlbmVyYXRlIHNlZ21lbnQgcmVxdWVzdFxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBnZXRSZXF1ZXN0Rm9yU2VnbWVudChhZGFwdGF0aW9uLCByZXByZXNlbnRhdGlvbiwgc2VnbWVudCk7XHJcblxyXG4gICAgICAgIC8vIFNlbmQgc2VnbWVudCByZXF1ZXN0XHJcbiAgICAgICAgcmVxdWVzdEZyYWdtZW50LmNhbGwodGhpcywgcmVxdWVzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsYXlMb2FkTmV4dEZyYWdtZW50SW5mbyhkZWxheSkge1xyXG4gICAgICAgIGNsZWFyVGltZW91dChidWZmZXJUaW1lb3V0KTtcclxuICAgICAgICBidWZmZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJ1ZmZlclRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBsb2FkTmV4dEZyYWdtZW50SW5mbygpO1xyXG4gICAgICAgIH0sIGRlbGF5ICogMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UmVxdWVzdEZvclNlZ21lbnQoYWRhcHRhdGlvbiwgcmVwcmVzZW50YXRpb24sIHNlZ21lbnQpIHtcclxuICAgICAgICBsZXQgdGltZXNjYWxlID0gYWRhcHRhdGlvbi5TZWdtZW50VGVtcGxhdGUudGltZXNjYWxlO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IEZyYWdtZW50UmVxdWVzdCgpO1xyXG5cclxuICAgICAgICByZXF1ZXN0Lm1lZGlhVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgcmVxdWVzdC50eXBlID0gJ0ZyYWdtZW50SW5mb1NlZ21lbnQnO1xyXG4gICAgICAgIC8vIHJlcXVlc3QucmFuZ2UgPSBzZWdtZW50Lm1lZGlhUmFuZ2U7XHJcbiAgICAgICAgcmVxdWVzdC5zdGFydFRpbWUgPSBzZWdtZW50LnQgLyB0aW1lc2NhbGU7XHJcbiAgICAgICAgcmVxdWVzdC5kdXJhdGlvbiA9IHNlZ21lbnQuZCAvIHRpbWVzY2FsZTtcclxuICAgICAgICByZXF1ZXN0LnRpbWVzY2FsZSA9IHRpbWVzY2FsZTtcclxuICAgICAgICAvLyByZXF1ZXN0LmF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IHNlZ21lbnQuYXZhaWxhYmlsaXR5U3RhcnRUaW1lO1xyXG4gICAgICAgIC8vIHJlcXVlc3QuYXZhaWxhYmlsaXR5RW5kVGltZSA9IHNlZ21lbnQuYXZhaWxhYmlsaXR5RW5kVGltZTtcclxuICAgICAgICAvLyByZXF1ZXN0LndhbGxTdGFydFRpbWUgPSBzZWdtZW50LndhbGxTdGFydFRpbWU7XHJcbiAgICAgICAgcmVxdWVzdC5xdWFsaXR5ID0gcmVwcmVzZW50YXRpb24uaW5kZXg7XHJcbiAgICAgICAgcmVxdWVzdC5pbmRleCA9IGluZGV4Kys7XHJcbiAgICAgICAgcmVxdWVzdC5tZWRpYUluZm8gPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0TWVkaWFJbmZvKCk7XHJcbiAgICAgICAgcmVxdWVzdC5hZGFwdGF0aW9uSW5kZXggPSByZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLmluZGV4O1xyXG4gICAgICAgIHJlcXVlc3QucmVwcmVzZW50YXRpb25JZCA9IHJlcHJlc2VudGF0aW9uLmlkO1xyXG4gICAgICAgIHJlcXVlc3QudXJsID0gYmFzZVVSTENvbnRyb2xsZXIucmVzb2x2ZShyZXByZXNlbnRhdGlvbi5wYXRoKS51cmwgKyBhZGFwdGF0aW9uLlNlZ21lbnRUZW1wbGF0ZS5tZWRpYTtcclxuICAgICAgICByZXF1ZXN0LnVybCA9IHJlcXVlc3QudXJsLnJlcGxhY2UoJyRCYW5kd2lkdGgkJywgcmVwcmVzZW50YXRpb24uYmFuZHdpZHRoKTtcclxuICAgICAgICByZXF1ZXN0LnVybCA9IHJlcXVlc3QudXJsLnJlcGxhY2UoJyRUaW1lJCcsIHNlZ21lbnQudE1hbmlmZXN0ID8gc2VnbWVudC50TWFuaWZlc3QgOiBzZWdtZW50LnQpO1xyXG4gICAgICAgIHJlcXVlc3QudXJsID0gcmVxdWVzdC51cmwucmVwbGFjZSgnL0ZyYWdtZW50cygnLCAnL0ZyYWdtZW50SW5mbygnKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFJlcHJlc2VudGF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlciA9IHN0cmVhbVByb2Nlc3Nvci5nZXRSZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIoKTtcclxuICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlci5nZXRDdXJyZW50UmVwcmVzZW50YXRpb24oKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcHJlc2VudGF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3RGcmFnbWVudChyZXF1ZXN0KSB7XHJcblxyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZygnTG9hZCBmcmFnbWVudCBmb3IgdGltZTogJyArIHJlcXVlc3Quc3RhcnRUaW1lKTtcclxuICAgICAgICBpZiAoc3RyZWFtUHJvY2Vzc29yLmdldEZyYWdtZW50TW9kZWwoKS5pc0ZyYWdtZW50TG9hZGVkT3JQZW5kaW5nKHJlcXVlc3QpKSB7XHJcbiAgICAgICAgICAgIC8vIFdlIG1heSBoYXZlIHJlYWNoZWQgZW5kIG9mIHRpbWVsaW5lIGluIGNhc2Ugb2Ygc3RhcnQtb3ZlciBzdHJlYW1zXHJcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnTm8gbW9yZSBmcmFnbWVudHMnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnJhZ21lbnRNb2RlbC5leGVjdXRlUmVxdWVzdChyZXF1ZXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkZyYWdtZW50SW5mb0xvYWRlZENvbXBsZXRlZChlKSB7XHJcbiAgICAgICAgaWYgKGUuc3RyZWFtUHJvY2Vzc29yICE9PSBzdHJlYW1Qcm9jZXNzb3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGUuZnJhZ21lbnRJbmZvLnJlcXVlc3Q7XHJcbiAgICAgICAgaWYgKCFlLmZyYWdtZW50SW5mby5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoJ0xvYWQgZXJyb3InLCByZXF1ZXN0LnVybCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkZWx0YUZyYWdtZW50VGltZSxcclxuICAgICAgICAgICAgZGVsdGFUaW1lO1xyXG5cclxuICAgICAgICBsb2dnZXIuZGVidWcoJ0ZyYWdtZW50SW5mbyBsb2FkZWQ6ICcsIHJlcXVlc3QudXJsKTtcclxuXHJcbiAgICAgICAgaWYgKCFzdGFydEZyYWdtZW50VGltZSkge1xyXG4gICAgICAgICAgICBzdGFydEZyYWdtZW50VGltZSA9IHJlcXVlc3Quc3RhcnRUaW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gUHJvY2VzcyBGcmFtZ2VudEluZm8gaW4gb3JkZXIgdG8gdXBkYXRlIHNlZ21lbnQgdGltZWxpbmUgKERWUiB3aW5kb3cpXHJcbiAgICAgICAgICAgIGNvbnN0IG1zc0ZyYWdtZW50TW9vZlByb2Nlc3NvciA9IE1TU0ZyYWdtZW50TW9vZlByb2Nlc3Nvcihjb250ZXh0KS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGFzaE1ldHJpY3M6IGRhc2hNZXRyaWNzLFxyXG4gICAgICAgICAgICAgICAgcGxheWJhY2tDb250cm9sbGVyOiBwbGF5YmFja0NvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBJU09Cb3hlcjogSVNPQm94ZXIsXHJcbiAgICAgICAgICAgICAgICBldmVudEJ1czogZXZlbnRCdXMsXHJcbiAgICAgICAgICAgICAgICBkZWJ1ZzogZGVidWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIG1zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvci51cGRhdGVTZWdtZW50TGlzdChlLmZyYWdtZW50SW5mbywgc3RyZWFtUHJvY2Vzc29yKTtcclxuXHJcbiAgICAgICAgICAgIGRlbHRhVGltZSA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICBkZWx0YUZyYWdtZW50VGltZSA9IChyZXF1ZXN0LnN0YXJ0VGltZSArIHJlcXVlc3QuZHVyYXRpb24pIC0gc3RhcnRGcmFnbWVudFRpbWU7XHJcbiAgICAgICAgICAgIGRlbGF5TG9hZE5leHRGcmFnbWVudEluZm8oTWF0aC5tYXgoMCwgKGRlbHRhRnJhZ21lbnRUaW1lIC0gZGVsdGFUaW1lKSkpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmZhdGFsKCdJbnRlcm5hbCBlcnJvciB3aGlsZSBwcm9jZXNzaW5nIGZyYWdtZW50IGluZm8gc2VnbWVudCAnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZSA9IHtcclxuICAgICAgICBpbml0aWFsaXplOiBpbml0aWFsaXplLFxyXG4gICAgICAgIGNvbnRyb2xsZXJUeXBlOiBjb250cm9sbGVyVHlwZSxcclxuICAgICAgICBzdGFydDogZG9TdGFydCxcclxuICAgICAgICBnZXRUeXBlOiBnZXRUeXBlLFxyXG4gICAgICAgIHJlc2V0OiByZXNldFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXR1cCgpO1xyXG5cclxuICAgIHJldHVybiBpbnN0YW5jZTtcclxufVxyXG5cclxuTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcbmltcG9ydCBEYXNoSlNFcnJvciBmcm9tICcuLi9zdHJlYW1pbmcvdm8vRGFzaEpTRXJyb3InO1xyXG5pbXBvcnQgTXNzRXJyb3JzIGZyb20gJy4vZXJyb3JzL01zc0Vycm9ycyc7XHJcblxyXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4uL3N0cmVhbWluZy9NZWRpYVBsYXllckV2ZW50cyc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBNc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3JcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIE1zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcihjb25maWcpIHtcclxuXHJcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICBsZXQgaW5zdGFuY2UsXHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBsb2dnZXI7XHJcbiAgICBjb25zdCBkYXNoTWV0cmljcyA9IGNvbmZpZy5kYXNoTWV0cmljcztcclxuICAgIGNvbnN0IHBsYXliYWNrQ29udHJvbGxlciA9IGNvbmZpZy5wbGF5YmFja0NvbnRyb2xsZXI7XHJcbiAgICBjb25zdCBlcnJvckhhbmRsZXIgPSBjb25maWcuZXJySGFuZGxlcjtcclxuICAgIGNvbnN0IGV2ZW50QnVzID0gY29uZmlnLmV2ZW50QnVzO1xyXG4gICAgY29uc3QgSVNPQm94ZXIgPSBjb25maWcuSVNPQm94ZXI7XHJcbiAgICBjb25zdCBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgICBsb2dnZXIgPSBkZWJ1Zy5nZXRMb2dnZXIoaW5zdGFuY2UpO1xyXG4gICAgICAgIHR5cGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzVGZyZihyZXF1ZXN0LCB0ZnJmLCB0ZmR0LCBzdHJlYW1Qcm9jZXNzb3IpIHtcclxuICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0UmVwcmVzZW50YXRpb25Db250cm9sbGVyKCk7XHJcbiAgICAgICAgY29uc3QgcmVwcmVzZW50YXRpb24gPSByZXByZXNlbnRhdGlvbkNvbnRyb2xsZXIuZ2V0Q3VycmVudFJlcHJlc2VudGF0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXhIYW5kbGVyID0gc3RyZWFtUHJvY2Vzc29yLmdldEluZGV4SGFuZGxlcigpO1xyXG5cclxuICAgICAgICBjb25zdCBtYW5pZmVzdCA9IHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb24ucGVyaW9kLm1wZC5tYW5pZmVzdDtcclxuICAgICAgICBjb25zdCBhZGFwdGF0aW9uID0gbWFuaWZlc3QuUGVyaW9kX2FzQXJyYXlbcmVwcmVzZW50YXRpb24uYWRhcHRhdGlvbi5wZXJpb2QuaW5kZXhdLkFkYXB0YXRpb25TZXRfYXNBcnJheVtyZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLmluZGV4XTtcclxuICAgICAgICBjb25zdCB0aW1lc2NhbGUgPSBhZGFwdGF0aW9uLlNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGU7XHJcblxyXG4gICAgICAgIHR5cGUgPSBzdHJlYW1Qcm9jZXNzb3IuZ2V0VHlwZSgpO1xyXG5cclxuICAgICAgICBpZiAobWFuaWZlc3QudHlwZSAhPT0gJ2R5bmFtaWMnICYmICFtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRmcmYpIHtcclxuICAgICAgICAgICAgZXJyb3JIYW5kbGVyLmVycm9yKG5ldyBEYXNoSlNFcnJvcihNc3NFcnJvcnMuTVNTX05PX1RGUkZfQ09ERSwgTXNzRXJyb3JzLk1TU19OT19URlJGX01FU1NBR0UpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IGFkYXB0YXRpb24ncyBzZWdtZW50IHRpbWVsaW5lIChhbHdheXMgYSBTZWdtZW50VGltZWxpbmUgaW4gU21vb3RoIFN0cmVhbWluZyB1c2UgY2FzZSlcclxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IGFkYXB0YXRpb24uU2VnbWVudFRlbXBsYXRlLlNlZ21lbnRUaW1lbGluZS5TO1xyXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSB0ZnJmLmVudHJ5O1xyXG4gICAgICAgIGxldCBlbnRyeSxcclxuICAgICAgICAgICAgc2VnbWVudFRpbWUsXHJcbiAgICAgICAgICAgIHJhbmdlO1xyXG4gICAgICAgIGxldCBzZWdtZW50ID0gbnVsbDtcclxuICAgICAgICBsZXQgdCA9IDA7XHJcbiAgICAgICAgbGV0IGF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDb25zaWRlciBvbmx5IGZpcnN0IHRmcmYgZW50cnkgKHRvIGF2b2lkIHByZS1jb25kaXRpb24gZmFpbHVyZSBvbiBmcmFnbWVudCBpbmZvIHJlcXVlc3RzKVxyXG4gICAgICAgIGVudHJ5ID0gZW50cmllc1swXTtcclxuXHJcbiAgICAgICAgLy8gSW4gY2FzZSBvZiBzdGFydC1vdmVyIHN0cmVhbXMsIGNoZWNrIGlmIHdlIGhhdmUgcmVhY2hlZCBlbmQgb2Ygb3JpZ2luYWwgbWFuaWZlc3QgZHVyYXRpb24gKHNldCBpbiB0aW1lU2hpZnRCdWZmZXJEZXB0aClcclxuICAgICAgICAvLyA9PiB0aGVuIGRvIG5vdCB1cGRhdGUgYW55bW9yZSB0aW1lbGluZVxyXG4gICAgICAgIGlmIChtYW5pZmVzdC50eXBlID09PSAnc3RhdGljJykge1xyXG4gICAgICAgICAgICAvLyBHZXQgZmlyc3Qgc2VnbWVudCB0aW1lXHJcbiAgICAgICAgICAgIHNlZ21lbnRUaW1lID0gc2VnbWVudHNbMF0udE1hbmlmZXN0ID8gcGFyc2VGbG9hdChzZWdtZW50c1swXS50TWFuaWZlc3QpIDogc2VnbWVudHNbMF0udDtcclxuICAgICAgICAgICAgaWYgKGVudHJ5LmZyYWdtZW50X2Fic29sdXRlX3RpbWUgPiAoc2VnbWVudFRpbWUgKyAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggKiB0aW1lc2NhbGUpKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2dnZXIuZGVidWcoJ2VudHJ5IC0gdCA9ICcsIChlbnRyeS5mcmFnbWVudF9hYnNvbHV0ZV90aW1lIC8gdGltZXNjYWxlKSk7XHJcblxyXG4gICAgICAgIC8vIEdldCBsYXN0IHNlZ21lbnQgdGltZVxyXG4gICAgICAgIHNlZ21lbnRUaW1lID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0udE1hbmlmZXN0ID8gcGFyc2VGbG9hdChzZWdtZW50c1tzZWdtZW50cy5sZW5ndGggLSAxXS50TWFuaWZlc3QpIDogc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV0udDtcclxuICAgICAgICBsb2dnZXIuZGVidWcoJ0xhc3Qgc2VnbWVudCAtIHQgPSAnLCAoc2VnbWVudFRpbWUgLyB0aW1lc2NhbGUpKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSB0byBhcHBlbmQgbmV3IHNlZ21lbnQgdG8gdGltZWxpbmVcclxuICAgICAgICBpZiAoZW50cnkuZnJhZ21lbnRfYWJzb2x1dGVfdGltZSA8PSBzZWdtZW50VGltZSkge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgRFZSIHdpbmRvdyByYW5nZVxyXG4gICAgICAgICAgICAvLyA9PiBzZXQgcmFuZ2UgZW5kIHRvIGVuZCB0aW1lIG9mIGN1cnJlbnQgc2VnbWVudFxyXG4gICAgICAgICAgICByYW5nZSA9IHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0OiBzZWdtZW50c1swXS50IC8gdGltZXNjYWxlLFxyXG4gICAgICAgICAgICAgICAgZW5kOiAodGZkdC5iYXNlTWVkaWFEZWNvZGVUaW1lIC8gdGltZXNjYWxlKSArIHJlcXVlc3QuZHVyYXRpb25cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZURWUihyZXF1ZXN0Lm1lZGlhVHlwZSwgcmFuZ2UsIHN0cmVhbVByb2Nlc3Nvci5nZXRTdHJlYW1JbmZvKCkubWFuaWZlc3RJbmZvKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKCdBZGQgbmV3IHNlZ21lbnQgLSB0ID0gJywgKGVudHJ5LmZyYWdtZW50X2Fic29sdXRlX3RpbWUgLyB0aW1lc2NhbGUpKTtcclxuICAgICAgICBzZWdtZW50ID0ge307XHJcbiAgICAgICAgc2VnbWVudC50ID0gZW50cnkuZnJhZ21lbnRfYWJzb2x1dGVfdGltZTtcclxuICAgICAgICBzZWdtZW50LmQgPSBlbnRyeS5mcmFnbWVudF9kdXJhdGlvbjtcclxuICAgICAgICAvLyBJZiB0aW1lc3RhbXBzIHN0YXJ0cyBhdCAwIHJlbGF0aXZlIHRvIDFzdCBzZWdtZW50IChkeW5hbWljIHRvIHN0YXRpYykgdGhlbiB1cGRhdGUgc2VnbWVudCB0aW1lXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzWzBdLnRNYW5pZmVzdCkge1xyXG4gICAgICAgICAgICBzZWdtZW50LnQgLT0gcGFyc2VGbG9hdChzZWdtZW50c1swXS50TWFuaWZlc3QpIC0gc2VnbWVudHNbMF0udDtcclxuICAgICAgICAgICAgc2VnbWVudC50TWFuaWZlc3QgPSBlbnRyeS5mcmFnbWVudF9hYnNvbHV0ZV90aW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xyXG5cclxuICAgICAgICAvLyBJbiBjYXNlIG9mIHN0YXRpYyBzdGFydC1vdmVyIHN0cmVhbXMsIHVwZGF0ZSBjb250ZW50IGR1cmF0aW9uXHJcbiAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdzdGF0aWMnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZW5kID0gKHNlZ21lbnQudCArIHNlZ21lbnQuZCkgLyB0aW1lc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZW5kID4gcmVwcmVzZW50YXRpb24uYWRhcHRhdGlvbi5wZXJpb2QuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBldmVudEJ1cy50cmlnZ2VyKEV2ZW50cy5NQU5JRkVTVF9WQUxJRElUWV9DSEFOR0VELCB7IHNlbmRlcjogdGhpcywgbmV3RHVyYXRpb246IGVuZCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEluIGNhc2Ugb2YgbGl2ZSBzdHJlYW1zLCB1cGRhdGUgc2VnbWVudCB0aW1lbGluZSBhY2NvcmRpbmcgdG8gRFZSIHdpbmRvd1xyXG4gICAgICAgIGVsc2UgaWYgKG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoICYmIG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHNlZ21lbnRcclxuICAgICAgICAgICAgc2VnbWVudCA9IHNlZ21lbnRzW3NlZ21lbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB0ID0gc2VnbWVudC50O1xyXG5cclxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHRoZSBzZWdtZW50cycgYXZhaWxhYmlsaXR5IHN0YXJ0IHRpbWVcclxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5U3RhcnRUaW1lID0gTWF0aC5yb3VuZCgodCAtIChtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCAqIHRpbWVzY2FsZSkpIC8gdGltZXNjYWxlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBzZWdtZW50cyBwcmlvciB0byBhdmFpbGFiaWxpdHkgc3RhcnQgdGltZVxyXG4gICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudHNbMF07XHJcbiAgICAgICAgICAgIHdoaWxlIChNYXRoLnJvdW5kKHNlZ21lbnQudCAvIHRpbWVzY2FsZSkgPCBhdmFpbGFiaWxpdHlTdGFydFRpbWUpIHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnUmVtb3ZlIHNlZ21lbnQgIC0gdCA9ICcgKyAoc2VnbWVudC50IC8gdGltZXNjYWxlKSk7XHJcbiAgICAgICAgICAgICAgICBzZWdtZW50cy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gc2VnbWVudHNbMF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVwZGF0ZSBEVlIgd2luZG93IHJhbmdlID0+IHNldCByYW5nZSBlbmQgdG8gZW5kIHRpbWUgb2YgY3VycmVudCBzZWdtZW50XHJcbiAgICAgICAgICAgIHJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHNlZ21lbnRzWzBdLnQgLyB0aW1lc2NhbGUsXHJcbiAgICAgICAgICAgICAgICBlbmQ6ICh0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgLyB0aW1lc2NhbGUpICsgcmVxdWVzdC5kdXJhdGlvblxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdXBkYXRlRFZSKHR5cGUsIHJhbmdlLCBzdHJlYW1Qcm9jZXNzb3IuZ2V0U3RyZWFtSW5mbygpLm1hbmlmZXN0SW5mbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbmRleEhhbmRsZXIudXBkYXRlU2VnbWVudExpc3QocmVwcmVzZW50YXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZURWUih0eXBlLCByYW5nZSwgbWFuaWZlc3RJbmZvKSB7XHJcbiAgICAgICAgY29uc3QgZHZySW5mb3MgPSBkYXNoTWV0cmljcy5nZXRDdXJyZW50RFZSSW5mbyh0eXBlKTtcclxuICAgICAgICBpZiAoIWR2ckluZm9zIHx8IChyYW5nZS5lbmQgPiBkdnJJbmZvcy5yYW5nZS5lbmQpKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnVXBkYXRlIERWUiBJbmZvcyBbJyArIHJhbmdlLnN0YXJ0ICsgJyAtICcgKyByYW5nZS5lbmQgKyAnXScpO1xyXG4gICAgICAgICAgICBkYXNoTWV0cmljcy5hZGREVlJJbmZvKHR5cGUsIHBsYXliYWNrQ29udHJvbGxlci5nZXRUaW1lKCksIG1hbmlmZXN0SW5mbywgcmFuZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIG9mZnNldCBvZiB0aGUgMXN0IGJ5dGUgb2YgYSBjaGlsZCBib3ggd2l0aGluIGEgY29udGFpbmVyIGJveFxyXG4gICAgZnVuY3Rpb24gZ2V0Qm94T2Zmc2V0KHBhcmVudCwgdHlwZSkge1xyXG4gICAgICAgIGxldCBvZmZzZXQgPSA4O1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcmVudC5ib3hlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGFyZW50LmJveGVzW2ldLnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2Zmc2V0ICs9IHBhcmVudC5ib3hlc1tpXS5zaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2Zmc2V0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNvbnZlcnRGcmFnbWVudChlLCBzcCkge1xyXG4gICAgICAgIGxldCBpO1xyXG5cclxuICAgICAgICAvLyBlLnJlcXVlc3QgY29udGFpbnMgcmVxdWVzdCBkZXNjcmlwdGlvbiBvYmplY3RcclxuICAgICAgICAvLyBlLnJlc3BvbnNlIGNvbnRhaW5zIGZyYWdtZW50IGJ5dGVzXHJcbiAgICAgICAgY29uc3QgaXNvRmlsZSA9IElTT0JveGVyLnBhcnNlQnVmZmVyKGUucmVzcG9uc2UpO1xyXG4gICAgICAgIC8vIFVwZGF0ZSB0cmFja19JZCBpbiB0ZmhkIGJveFxyXG4gICAgICAgIGNvbnN0IHRmaGQgPSBpc29GaWxlLmZldGNoKCd0ZmhkJyk7XHJcbiAgICAgICAgdGZoZC50cmFja19JRCA9IGUucmVxdWVzdC5tZWRpYUluZm8uaW5kZXggKyAxO1xyXG5cclxuICAgICAgICAvLyBBZGQgdGZkdCBib3hcclxuICAgICAgICBsZXQgdGZkdCA9IGlzb0ZpbGUuZmV0Y2goJ3RmZHQnKTtcclxuICAgICAgICBjb25zdCB0cmFmID0gaXNvRmlsZS5mZXRjaCgndHJhZicpO1xyXG4gICAgICAgIGlmICh0ZmR0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRmZHQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd0ZmR0JywgdHJhZiwgdGZoZCk7XHJcbiAgICAgICAgICAgIHRmZHQudmVyc2lvbiA9IDE7XHJcbiAgICAgICAgICAgIHRmZHQuZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICB0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgPSBNYXRoLmZsb29yKGUucmVxdWVzdC5zdGFydFRpbWUgKiBlLnJlcXVlc3QudGltZXNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHRydW4gPSBpc29GaWxlLmZldGNoKCd0cnVuJyk7XHJcblxyXG4gICAgICAgIC8vIFByb2Nlc3MgdGZ4ZCBib3hlc1xyXG4gICAgICAgIC8vIFRoaXMgYm94IHByb3ZpZGUgYWJzb2x1dGUgdGltZXN0YW1wIGJ1dCB3ZSB0YWtlIHRoZSBzZWdtZW50IHN0YXJ0IHRpbWUgZm9yIHRmZHRcclxuICAgICAgICBsZXQgdGZ4ZCA9IGlzb0ZpbGUuZmV0Y2goJ3RmeGQnKTtcclxuICAgICAgICBpZiAodGZ4ZCkge1xyXG4gICAgICAgICAgICB0ZnhkLl9wYXJlbnQuYm94ZXMuc3BsaWNlKHRmeGQuX3BhcmVudC5ib3hlcy5pbmRleE9mKHRmeGQpLCAxKTtcclxuICAgICAgICAgICAgdGZ4ZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB0ZnJmID0gaXNvRmlsZS5mZXRjaCgndGZyZicpO1xyXG4gICAgICAgIHByb2Nlc3NUZnJmKGUucmVxdWVzdCwgdGZyZiwgdGZkdCwgc3ApO1xyXG4gICAgICAgIGlmICh0ZnJmKSB7XHJcbiAgICAgICAgICAgIHRmcmYuX3BhcmVudC5ib3hlcy5zcGxpY2UodGZyZi5fcGFyZW50LmJveGVzLmluZGV4T2YodGZyZiksIDEpO1xyXG4gICAgICAgICAgICB0ZnJmID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHByb3RlY3RlZCBjb250ZW50IGluIFBJRkYxLjEgZm9ybWF0IChzZXBpZmYgYm94ID0gU2FtcGxlIEVuY3J5cHRpb24gUElGRilcclxuICAgICAgICAvLyA9PiBjb252ZXJ0IHNlcGlmZiBib3ggaXQgaW50byBhIHNlbmMgYm94XHJcbiAgICAgICAgLy8gPT4gY3JlYXRlIHNhaW8gYW5kIHNhaXogYm94ZXMgKGlmIG5vdCBhbHJlYWR5IHByZXNlbnQpXHJcbiAgICAgICAgY29uc3Qgc2VwaWZmID0gaXNvRmlsZS5mZXRjaCgnc2VwaWZmJyk7XHJcbiAgICAgICAgaWYgKHNlcGlmZiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXBpZmYudHlwZSA9ICdzZW5jJztcclxuICAgICAgICAgICAgc2VwaWZmLnVzZXJ0eXBlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNhaW8gPSBpc29GaWxlLmZldGNoKCdzYWlvJyk7XHJcbiAgICAgICAgICAgIGlmIChzYWlvID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgU2FtcGxlIEF1eGlsaWFyeSBJbmZvcm1hdGlvbiBPZmZzZXRzIEJveCBib3ggKHNhaW8pXHJcbiAgICAgICAgICAgICAgICBzYWlvID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc2FpbycsIHRyYWYpO1xyXG4gICAgICAgICAgICAgICAgc2Fpby52ZXJzaW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHNhaW8uZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2Fpby5lbnRyeV9jb3VudCA9IDE7XHJcbiAgICAgICAgICAgICAgICBzYWlvLm9mZnNldCA9IFswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzYWl6ID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc2FpeicsIHRyYWYpO1xyXG4gICAgICAgICAgICAgICAgc2Fpei52ZXJzaW9uID0gMDtcclxuICAgICAgICAgICAgICAgIHNhaXouZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2Fpei5zYW1wbGVfY291bnQgPSBzZXBpZmYuc2FtcGxlX2NvdW50O1xyXG4gICAgICAgICAgICAgICAgc2Fpei5kZWZhdWx0X3NhbXBsZV9pbmZvX3NpemUgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2Fpei5zYW1wbGVfaW5mb19zaXplID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNlcGlmZi5mbGFncyAmIDB4MDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdWItc2FtcGxlIGVuY3J5cHRpb24gPT4gc2V0IHNhbXBsZV9pbmZvX3NpemUgZm9yIGVhY2ggc2FtcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlcGlmZi5zYW1wbGVfY291bnQ7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMCA9IDggKEluaXRpYWxpemF0aW9uVmVjdG9yIGZpZWxkIHNpemUpICsgMiAoc3Vic2FtcGxlX2NvdW50IGZpZWxkIHNpemUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDYgPSAyIChCeXRlc09mQ2xlYXJEYXRhIGZpZWxkIHNpemUpICsgNCAoQnl0ZXNPZkVuY3J5cHRlZERhdGEgZmllbGQgc2l6ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Fpei5zYW1wbGVfaW5mb19zaXplW2ldID0gMTAgKyAoNiAqIHNlcGlmZi5lbnRyeVtpXS5OdW1iZXJPZkVudHJpZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTm8gc3ViLXNhbXBsZSBlbmNyeXB0aW9uID0+IHNldCBkZWZhdWx0IHNhbXBsZV9pbmZvX3NpemUgPSBJbml0aWFsaXphdGlvblZlY3RvciBmaWVsZCBzaXplICg4KVxyXG4gICAgICAgICAgICAgICAgICAgIHNhaXouZGVmYXVsdF9zYW1wbGVfaW5mb19zaXplID0gODtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGZoZC5mbGFncyAmPSAweEZGRkZGRTsgLy8gc2V0IHRmaGQuYmFzZS1kYXRhLW9mZnNldC1wcmVzZW50IHRvIGZhbHNlXHJcbiAgICAgICAgdGZoZC5mbGFncyB8PSAweDAyMDAwMDsgLy8gc2V0IHRmaGQuZGVmYXVsdC1iYXNlLWlzLW1vb2YgdG8gdHJ1ZVxyXG4gICAgICAgIHRydW4uZmxhZ3MgfD0gMHgwMDAwMDE7IC8vIHNldCB0cnVuLmRhdGEtb2Zmc2V0LXByZXNlbnQgdG8gdHJ1ZVxyXG5cclxuICAgICAgICAvLyBVcGRhdGUgdHJ1bi5kYXRhX29mZnNldCBmaWVsZCB0aGF0IGNvcnJlc3BvbmRzIHRvIGZpcnN0IGRhdGEgYnl0ZSAoaW5zaWRlIG1kYXQgYm94KVxyXG4gICAgICAgIGNvbnN0IG1vb2YgPSBpc29GaWxlLmZldGNoKCdtb29mJyk7XHJcbiAgICAgICAgbGV0IGxlbmd0aCA9IG1vb2YuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgdHJ1bi5kYXRhX29mZnNldCA9IGxlbmd0aCArIDg7XHJcblxyXG4gICAgICAgIC8vIFVwZGF0ZSBzYWlvIGJveCBvZmZzZXQgZmllbGQgYWNjb3JkaW5nIHRvIG5ldyBzZW5jIGJveCBvZmZzZXRcclxuICAgICAgICBsZXQgc2FpbyA9IGlzb0ZpbGUuZmV0Y2goJ3NhaW8nKTtcclxuICAgICAgICBpZiAoc2FpbyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgdHJhZlBvc0luTW9vZiA9IGdldEJveE9mZnNldChtb29mLCAndHJhZicpO1xyXG4gICAgICAgICAgICBsZXQgc2VuY1Bvc0luVHJhZiA9IGdldEJveE9mZnNldCh0cmFmLCAnc2VuYycpO1xyXG4gICAgICAgICAgICAvLyBTZXQgb2Zmc2V0IGZyb20gYmVnaW4gZnJhZ21lbnQgdG8gdGhlIGZpcnN0IElWIGZpZWxkIGluIHNlbmMgYm94XHJcbiAgICAgICAgICAgIHNhaW8ub2Zmc2V0WzBdID0gdHJhZlBvc0luTW9vZiArIHNlbmNQb3NJblRyYWYgKyAxNjsgLy8gMTYgPSBib3ggaGVhZGVyICgxMikgKyBzYW1wbGVfY291bnQgZmllbGQgc2l6ZSAoNClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFdyaXRlIHRyYW5zZm9ybWVkL3Byb2Nlc3NlZCBmcmFnbWVudCBpbnRvIHJlcXVlc3QgcmVwb25zZSBkYXRhXHJcbiAgICAgICAgZS5yZXNwb25zZSA9IGlzb0ZpbGUud3JpdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTZWdtZW50TGlzdChlLCBzcCkge1xyXG4gICAgICAgIC8vIGUucmVxdWVzdCBjb250YWlucyByZXF1ZXN0IGRlc2NyaXB0aW9uIG9iamVjdFxyXG4gICAgICAgIC8vIGUucmVzcG9uc2UgY29udGFpbnMgZnJhZ21lbnQgYnl0ZXNcclxuICAgICAgICBpZiAoIWUucmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlLnJlc3BvbnNlIHBhcmFtZXRlciBpcyBtaXNzaW5nJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpc29GaWxlID0gSVNPQm94ZXIucGFyc2VCdWZmZXIoZS5yZXNwb25zZSk7XHJcbiAgICAgICAgLy8gVXBkYXRlIHRyYWNrX0lkIGluIHRmaGQgYm94XHJcbiAgICAgICAgY29uc3QgdGZoZCA9IGlzb0ZpbGUuZmV0Y2goJ3RmaGQnKTtcclxuICAgICAgICB0ZmhkLnRyYWNrX0lEID0gZS5yZXF1ZXN0Lm1lZGlhSW5mby5pbmRleCArIDE7XHJcblxyXG4gICAgICAgIC8vIEFkZCB0ZmR0IGJveFxyXG4gICAgICAgIGxldCB0ZmR0ID0gaXNvRmlsZS5mZXRjaCgndGZkdCcpO1xyXG4gICAgICAgIGxldCB0cmFmID0gaXNvRmlsZS5mZXRjaCgndHJhZicpO1xyXG4gICAgICAgIGlmICh0ZmR0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRmZHQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd0ZmR0JywgdHJhZiwgdGZoZCk7XHJcbiAgICAgICAgICAgIHRmZHQudmVyc2lvbiA9IDE7XHJcbiAgICAgICAgICAgIHRmZHQuZmxhZ3MgPSAwO1xyXG4gICAgICAgICAgICB0ZmR0LmJhc2VNZWRpYURlY29kZVRpbWUgPSBNYXRoLmZsb29yKGUucmVxdWVzdC5zdGFydFRpbWUgKiBlLnJlcXVlc3QudGltZXNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0ZnJmID0gaXNvRmlsZS5mZXRjaCgndGZyZicpO1xyXG4gICAgICAgIHByb2Nlc3NUZnJmKGUucmVxdWVzdCwgdGZyZiwgdGZkdCwgc3ApO1xyXG4gICAgICAgIGlmICh0ZnJmKSB7XHJcbiAgICAgICAgICAgIHRmcmYuX3BhcmVudC5ib3hlcy5zcGxpY2UodGZyZi5fcGFyZW50LmJveGVzLmluZGV4T2YodGZyZiksIDEpO1xyXG4gICAgICAgICAgICB0ZnJmID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VHlwZSgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZSA9IHtcclxuICAgICAgICBjb252ZXJ0RnJhZ21lbnQ6IGNvbnZlcnRGcmFnbWVudCxcclxuICAgICAgICB1cGRhdGVTZWdtZW50TGlzdDogdXBkYXRlU2VnbWVudExpc3QsXHJcbiAgICAgICAgZ2V0VHlwZTogZ2V0VHlwZVxyXG4gICAgfTtcclxuXHJcbiAgICBzZXR1cCgpO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5Nc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcic7XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xyXG4iLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuXHJcbiBpbXBvcnQgTXNzRXJyb3JzIGZyb20gJy4vZXJyb3JzL01zc0Vycm9ycyc7XHJcblxyXG4vKipcclxuICogQG1vZHVsZSBNc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3JcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIE1zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcihjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IE5BTFVUWVBFX1NQUyA9IDc7XHJcbiAgICBjb25zdCBOQUxVVFlQRV9QUFMgPSA4O1xyXG4gICAgY29uc3QgY29uc3RhbnRzID0gY29uZmlnLmNvbnN0YW50cztcclxuICAgIGNvbnN0IElTT0JveGVyID0gY29uZmlnLklTT0JveGVyO1xyXG5cclxuICAgIGxldCBwcm90ZWN0aW9uQ29udHJvbGxlciA9IGNvbmZpZy5wcm90ZWN0aW9uQ29udHJvbGxlcjtcclxuICAgIGxldCBpbnN0YW5jZSxcclxuICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgYWRhcHRhdGlvblNldCxcclxuICAgICAgICByZXByZXNlbnRhdGlvbixcclxuICAgICAgICBjb250ZW50UHJvdGVjdGlvbixcclxuICAgICAgICB0aW1lc2NhbGUsXHJcbiAgICAgICAgdHJhY2tJZDtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGdHlwQm94KGlzb0ZpbGUpIHtcclxuICAgICAgICBsZXQgZnR5cCA9IElTT0JveGVyLmNyZWF0ZUJveCgnZnR5cCcsIGlzb0ZpbGUpO1xyXG4gICAgICAgIGZ0eXAubWFqb3JfYnJhbmQgPSAnaXNvNic7XHJcbiAgICAgICAgZnR5cC5taW5vcl92ZXJzaW9uID0gMTsgLy8gaXMgYW4gaW5mb3JtYXRpdmUgaW50ZWdlciBmb3IgdGhlIG1pbm9yIHZlcnNpb24gb2YgdGhlIG1ham9yIGJyYW5kXHJcbiAgICAgICAgZnR5cC5jb21wYXRpYmxlX2JyYW5kcyA9IFtdOyAvL2lzIGEgbGlzdCwgdG8gdGhlIGVuZCBvZiB0aGUgYm94LCBvZiBicmFuZHMgaXNvbSwgaXNvNiBhbmQgbXNkaFxyXG4gICAgICAgIGZ0eXAuY29tcGF0aWJsZV9icmFuZHNbMF0gPSAnaXNvbSc7IC8vID0+IGRlY2ltYWwgQVNDSUkgdmFsdWUgZm9yIGlzb21cclxuICAgICAgICBmdHlwLmNvbXBhdGlibGVfYnJhbmRzWzFdID0gJ2lzbzYnOyAvLyA9PiBkZWNpbWFsIEFTQ0lJIHZhbHVlIGZvciBpc282XHJcbiAgICAgICAgZnR5cC5jb21wYXRpYmxlX2JyYW5kc1syXSA9ICdtc2RoJzsgLy8gPT4gZGVjaW1hbCBBU0NJSSB2YWx1ZSBmb3IgbXNkaFxyXG5cclxuICAgICAgICByZXR1cm4gZnR5cDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNb292Qm94KGlzb0ZpbGUpIHtcclxuXHJcbiAgICAgICAgLy8gbW9vdiBib3hcclxuICAgICAgICBsZXQgbW9vdiA9IElTT0JveGVyLmNyZWF0ZUJveCgnbW9vdicsIGlzb0ZpbGUpO1xyXG5cclxuICAgICAgICAvLyBtb292L212aGRcclxuICAgICAgICBjcmVhdGVNdmhkQm94KG1vb3YpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWtcclxuICAgICAgICBsZXQgdHJhayA9IElTT0JveGVyLmNyZWF0ZUJveCgndHJhaycsIG1vb3YpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvdGtoZFxyXG4gICAgICAgIGNyZWF0ZVRraGRCb3godHJhayk7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhXHJcbiAgICAgICAgbGV0IG1kaWEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ21kaWEnLCB0cmFrKTtcclxuXHJcbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWRoZFxyXG4gICAgICAgIGNyZWF0ZU1kaGRCb3gobWRpYSk7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvdHJhay9tZGlhL2hkbHJcclxuICAgICAgICBjcmVhdGVIZGxyQm94KG1kaWEpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mXHJcbiAgICAgICAgbGV0IG1pbmYgPSBJU09Cb3hlci5jcmVhdGVCb3goJ21pbmYnLCBtZGlhKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChhZGFwdGF0aW9uU2V0LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuVklERU86XHJcbiAgICAgICAgICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3ZtaGRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVZtaGRCb3gobWluZik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQVVESU86XHJcbiAgICAgICAgICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3NtaGRcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVNtaGRCb3gobWluZik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWluZi9kaW5mXHJcbiAgICAgICAgbGV0IGRpbmYgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2RpbmYnLCBtaW5mKTtcclxuXHJcbiAgICAgICAgLy8gbW9vdi90cmFrL21kaWEvbWluZi9kaW5mL2RyZWZcclxuICAgICAgICBjcmVhdGVEcmVmQm94KGRpbmYpO1xyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0YmxcclxuICAgICAgICBsZXQgc3RibCA9IElTT0JveGVyLmNyZWF0ZUJveCgnc3RibCcsIG1pbmYpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgZW1wdHkgc3R0cywgc3RzYywgc3RjbyBhbmQgc3RzeiBib3hlc1xyXG4gICAgICAgIC8vIFVzZSBkYXRhIGZpZWxkIGFzIGZvciBjb2RlbS1pc29ib3hlciB1bmtub3duIGJveGVzIGZvciBzZXR0aW5nIGZpZWxkcyB2YWx1ZVxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3R0c1xyXG4gICAgICAgIGxldCBzdHRzID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3R0cycsIHN0YmwpO1xyXG4gICAgICAgIHN0dHMuX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIGVudHJ5X2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3RzY1xyXG4gICAgICAgIGxldCBzdHNjID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RzYycsIHN0YmwpO1xyXG4gICAgICAgIHN0c2MuX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIGVudHJ5X2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3Rjb1xyXG4gICAgICAgIGxldCBzdGNvID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RjbycsIHN0YmwpO1xyXG4gICAgICAgIHN0Y28uX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIGVudHJ5X2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3RzelxyXG4gICAgICAgIGxldCBzdHN6ID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc3RzeicsIHN0YmwpO1xyXG4gICAgICAgIHN0c3ouX2RhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07IC8vIHZlcnNpb24gPSAwLCBmbGFncyA9IDAsIHNhbXBsZV9zaXplID0gMCwgc2FtcGxlX2NvdW50ID0gMFxyXG5cclxuICAgICAgICAvLyBtb292L3RyYWsvbWRpYS9taW5mL3N0Ymwvc3RzZFxyXG4gICAgICAgIGNyZWF0ZVN0c2RCb3goc3RibCk7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvbXZleFxyXG4gICAgICAgIGxldCBtdmV4ID0gSVNPQm94ZXIuY3JlYXRlQm94KCdtdmV4JywgbW9vdik7XHJcblxyXG4gICAgICAgIC8vIG1vb3YvbXZleC90cmV4XHJcbiAgICAgICAgY3JlYXRlVHJleEJveChtdmV4KTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRQcm90ZWN0aW9uICYmIHByb3RlY3Rpb25Db250cm9sbGVyKSB7XHJcbiAgICAgICAgICAgIGxldCBzdXBwb3J0ZWRLUyA9IHByb3RlY3Rpb25Db250cm9sbGVyLmdldFN1cHBvcnRlZEtleVN5c3RlbXNGcm9tQ29udGVudFByb3RlY3Rpb24oY29udGVudFByb3RlY3Rpb24pO1xyXG4gICAgICAgICAgICBjcmVhdGVQcm90ZWN0aW9uU3lzdGVtU3BlY2lmaWNIZWFkZXJCb3gobW9vdiwgc3VwcG9ydGVkS1MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVNdmhkQm94KG1vb3YpIHtcclxuXHJcbiAgICAgICAgbGV0IG12aGQgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdtdmhkJywgbW9vdik7XHJcblxyXG4gICAgICAgIG12aGQudmVyc2lvbiA9IDE7IC8vIHZlcnNpb24gPSAxICBpbiBvcmRlciB0byBoYXZlIDY0Yml0cyBkdXJhdGlvbiB2YWx1ZVxyXG5cclxuICAgICAgICBtdmhkLmNyZWF0aW9uX3RpbWUgPSAwOyAvLyB0aGUgY3JlYXRpb24gdGltZSBvZiB0aGUgcHJlc2VudGF0aW9uID0+IGlnbm9yZSAoc2V0IHRvIDApXHJcbiAgICAgICAgbXZoZC5tb2RpZmljYXRpb25fdGltZSA9IDA7IC8vIHRoZSBtb3N0IHJlY2VudCB0aW1lIHRoZSBwcmVzZW50YXRpb24gd2FzIG1vZGlmaWVkID0+IGlnbm9yZSAoc2V0IHRvIDApXHJcbiAgICAgICAgbXZoZC50aW1lc2NhbGUgPSB0aW1lc2NhbGU7IC8vIHRoZSB0aW1lLXNjYWxlIGZvciB0aGUgZW50aXJlIHByZXNlbnRhdGlvbiA9PiAxMDAwMDAwMCBmb3IgTVNTXHJcbiAgICAgICAgbXZoZC5kdXJhdGlvbiA9IE1hdGgucm91bmQocGVyaW9kLmR1cmF0aW9uICogdGltZXNjYWxlKTsgLy8gdGhlIGxlbmd0aCBvZiB0aGUgcHJlc2VudGF0aW9uIChpbiB0aGUgaW5kaWNhdGVkIHRpbWVzY2FsZSkgPT4gIHRha2UgZHVyYXRpb24gb2YgcGVyaW9kXHJcbiAgICAgICAgbXZoZC5yYXRlID0gMS4wOyAvLyAxNi4xNiBudW1iZXIsICcxLjAnID0gbm9ybWFsIHBsYXliYWNrXHJcbiAgICAgICAgbXZoZC52b2x1bWUgPSAxLjA7IC8vIDguOCBudW1iZXIsICcxLjAnID0gZnVsbCB2b2x1bWVcclxuICAgICAgICBtdmhkLnJlc2VydmVkMSA9IDA7XHJcbiAgICAgICAgbXZoZC5yZXNlcnZlZDIgPSBbMHgwLCAweDBdO1xyXG4gICAgICAgIG12aGQubWF0cml4ID0gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAvLyBwcm92aWRlcyBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBmb3IgdGhlIHZpZGVvO1xyXG4gICAgICAgICAgICAwLCAxLCAwLCAvLyAodSx2LHcpIGFyZSByZXN0cmljdGVkIGhlcmUgdG8gKDAsMCwxKVxyXG4gICAgICAgICAgICAwLCAwLCAxNjM4NFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbXZoZC5wcmVfZGVmaW5lZCA9IFswLCAwLCAwLCAwLCAwLCAwXTtcclxuICAgICAgICBtdmhkLm5leHRfdHJhY2tfSUQgPSB0cmFja0lkICsgMTsgLy8gaW5kaWNhdGVzIGEgdmFsdWUgdG8gdXNlIGZvciB0aGUgdHJhY2sgSUQgb2YgdGhlIG5leHQgdHJhY2sgdG8gYmUgYWRkZWQgdG8gdGhpcyBwcmVzZW50YXRpb25cclxuXHJcbiAgICAgICAgcmV0dXJuIG12aGQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGtoZEJveCh0cmFrKSB7XHJcblxyXG4gICAgICAgIGxldCB0a2hkID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgndGtoZCcsIHRyYWspO1xyXG5cclxuICAgICAgICB0a2hkLnZlcnNpb24gPSAxOyAvLyB2ZXJzaW9uID0gMSAgaW4gb3JkZXIgdG8gaGF2ZSA2NGJpdHMgZHVyYXRpb24gdmFsdWVcclxuICAgICAgICB0a2hkLmZsYWdzID0gMHgxIHwgLy8gVHJhY2tfZW5hYmxlZCAoMHgwMDAwMDEpOiBJbmRpY2F0ZXMgdGhhdCB0aGUgdHJhY2sgaXMgZW5hYmxlZFxyXG4gICAgICAgICAgICAweDIgfCAvLyBUcmFja19pbl9tb3ZpZSAoMHgwMDAwMDIpOiAgSW5kaWNhdGVzIHRoYXQgdGhlIHRyYWNrIGlzIHVzZWQgaW4gdGhlIHByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICAweDQ7IC8vIFRyYWNrX2luX3ByZXZpZXcgKDB4MDAwMDA0KTogIEluZGljYXRlcyB0aGF0IHRoZSB0cmFjayBpcyB1c2VkIHdoZW4gcHJldmlld2luZyB0aGUgcHJlc2VudGF0aW9uXHJcblxyXG4gICAgICAgIHRraGQuY3JlYXRpb25fdGltZSA9IDA7IC8vIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBwcmVzZW50YXRpb24gPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICB0a2hkLm1vZGlmaWNhdGlvbl90aW1lID0gMDsgLy8gdGhlIG1vc3QgcmVjZW50IHRpbWUgdGhlIHByZXNlbnRhdGlvbiB3YXMgbW9kaWZpZWQgPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICB0a2hkLnRyYWNrX0lEID0gdHJhY2tJZDsgLy8gdW5pcXVlbHkgaWRlbnRpZmllcyB0aGlzIHRyYWNrIG92ZXIgdGhlIGVudGlyZSBsaWZlLXRpbWUgb2YgdGhpcyBwcmVzZW50YXRpb25cclxuICAgICAgICB0a2hkLnJlc2VydmVkMSA9IDA7XHJcbiAgICAgICAgdGtoZC5kdXJhdGlvbiA9IE1hdGgucm91bmQocGVyaW9kLmR1cmF0aW9uICogdGltZXNjYWxlKTsgLy8gdGhlIGR1cmF0aW9uIG9mIHRoaXMgdHJhY2sgKGluIHRoZSB0aW1lc2NhbGUgaW5kaWNhdGVkIGluIHRoZSBNb3ZpZSBIZWFkZXIgQm94KSA9PiAgdGFrZSBkdXJhdGlvbiBvZiBwZXJpb2RcclxuICAgICAgICB0a2hkLnJlc2VydmVkMiA9IFsweDAsIDB4MF07XHJcbiAgICAgICAgdGtoZC5sYXllciA9IDA7IC8vIHNwZWNpZmllcyB0aGUgZnJvbnQtdG8tYmFjayBvcmRlcmluZyBvZiB2aWRlbyB0cmFja3M7IHRyYWNrcyB3aXRoIGxvd2VyIG51bWJlcnMgYXJlIGNsb3NlciB0byB0aGUgdmlld2VyID0+IDAgc2luY2Ugb25seSBvbmUgdmlkZW8gdHJhY2tcclxuICAgICAgICB0a2hkLmFsdGVybmF0ZV9ncm91cCA9IDA7IC8vIHNwZWNpZmllcyBhIGdyb3VwIG9yIGNvbGxlY3Rpb24gb2YgdHJhY2tzID0+IGlnbm9yZVxyXG4gICAgICAgIHRraGQudm9sdW1lID0gMS4wOyAvLyAnMS4wJyA9IGZ1bGwgdm9sdW1lXHJcbiAgICAgICAgdGtoZC5yZXNlcnZlZDMgPSAwO1xyXG4gICAgICAgIHRraGQubWF0cml4ID0gW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAvLyBwcm92aWRlcyBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeCBmb3IgdGhlIHZpZGVvO1xyXG4gICAgICAgICAgICAwLCAxLCAwLCAvLyAodSx2LHcpIGFyZSByZXN0cmljdGVkIGhlcmUgdG8gKDAsMCwxKVxyXG4gICAgICAgICAgICAwLCAwLCAxNjM4NFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGtoZC53aWR0aCA9IHJlcHJlc2VudGF0aW9uLndpZHRoOyAvLyB2aXN1YWwgcHJlc2VudGF0aW9uIHdpZHRoXHJcbiAgICAgICAgdGtoZC5oZWlnaHQgPSByZXByZXNlbnRhdGlvbi5oZWlnaHQ7IC8vIHZpc3VhbCBwcmVzZW50YXRpb24gaGVpZ2h0XHJcblxyXG4gICAgICAgIHJldHVybiB0a2hkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1kaGRCb3gobWRpYSkge1xyXG5cclxuICAgICAgICBsZXQgbWRoZCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ21kaGQnLCBtZGlhKTtcclxuXHJcbiAgICAgICAgbWRoZC52ZXJzaW9uID0gMTsgLy8gdmVyc2lvbiA9IDEgIGluIG9yZGVyIHRvIGhhdmUgNjRiaXRzIGR1cmF0aW9uIHZhbHVlXHJcblxyXG4gICAgICAgIG1kaGQuY3JlYXRpb25fdGltZSA9IDA7IC8vIHRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSBwcmVzZW50YXRpb24gPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICBtZGhkLm1vZGlmaWNhdGlvbl90aW1lID0gMDsgLy8gdGhlIG1vc3QgcmVjZW50IHRpbWUgdGhlIHByZXNlbnRhdGlvbiB3YXMgbW9kaWZpZWQgPT4gaWdub3JlIChzZXQgdG8gMClcclxuICAgICAgICBtZGhkLnRpbWVzY2FsZSA9IHRpbWVzY2FsZTsgLy8gdGhlIHRpbWUtc2NhbGUgZm9yIHRoZSBlbnRpcmUgcHJlc2VudGF0aW9uXHJcbiAgICAgICAgbWRoZC5kdXJhdGlvbiA9IE1hdGgucm91bmQocGVyaW9kLmR1cmF0aW9uICogdGltZXNjYWxlKTsgLy8gdGhlIGR1cmF0aW9uIG9mIHRoaXMgbWVkaWEgKGluIHRoZSBzY2FsZSBvZiB0aGUgdGltZXNjYWxlKS4gSWYgdGhlIGR1cmF0aW9uIGNhbm5vdCBiZSBkZXRlcm1pbmVkIHRoZW4gZHVyYXRpb24gaXMgc2V0IHRvIGFsbCAxcy5cclxuICAgICAgICBtZGhkLmxhbmd1YWdlID0gYWRhcHRhdGlvblNldC5sYW5nIHx8ICd1bmQnOyAvLyBkZWNsYXJlcyB0aGUgbGFuZ3VhZ2UgY29kZSBmb3IgdGhpcyBtZWRpYSAoc2VlIGdldExhbmd1YWdlQ29kZSgpKVxyXG4gICAgICAgIG1kaGQucHJlX2RlZmluZWQgPSAwO1xyXG5cclxuICAgICAgICByZXR1cm4gbWRoZDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZGxyQm94KG1kaWEpIHtcclxuXHJcbiAgICAgICAgbGV0IGhkbHIgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCdoZGxyJywgbWRpYSk7XHJcblxyXG4gICAgICAgIGhkbHIucHJlX2RlZmluZWQgPSAwO1xyXG4gICAgICAgIHN3aXRjaCAoYWRhcHRhdGlvblNldC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLlZJREVPOlxyXG4gICAgICAgICAgICAgICAgaGRsci5oYW5kbGVyX3R5cGUgPSAndmlkZSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuQVVESU86XHJcbiAgICAgICAgICAgICAgICBoZGxyLmhhbmRsZXJfdHlwZSA9ICdzb3VuJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgaGRsci5oYW5kbGVyX3R5cGUgPSAnbWV0YSc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaGRsci5uYW1lID0gcmVwcmVzZW50YXRpb24uaWQ7XHJcbiAgICAgICAgaGRsci5yZXNlcnZlZCA9IFswLCAwLCAwXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGhkbHI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVm1oZEJveChtaW5mKSB7XHJcblxyXG4gICAgICAgIGxldCB2bWhkID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgndm1oZCcsIG1pbmYpO1xyXG5cclxuICAgICAgICB2bWhkLmZsYWdzID0gMTtcclxuXHJcbiAgICAgICAgdm1oZC5ncmFwaGljc21vZGUgPSAwOyAvLyBzcGVjaWZpZXMgYSBjb21wb3NpdGlvbiBtb2RlIGZvciB0aGlzIHZpZGVvIHRyYWNrLCBmcm9tIHRoZSBmb2xsb3dpbmcgZW51bWVyYXRlZCBzZXQsIHdoaWNoIG1heSBiZSBleHRlbmRlZCBieSBkZXJpdmVkIHNwZWNpZmljYXRpb25zOiBjb3B5ID0gMCBjb3B5IG92ZXIgdGhlIGV4aXN0aW5nIGltYWdlXHJcbiAgICAgICAgdm1oZC5vcGNvbG9yID0gWzAsIDAsIDBdOyAvLyBpcyBhIHNldCBvZiAzIGNvbG91ciB2YWx1ZXMgKHJlZCwgZ3JlZW4sIGJsdWUpIGF2YWlsYWJsZSBmb3IgdXNlIGJ5IGdyYXBoaWNzIG1vZGVzXHJcblxyXG4gICAgICAgIHJldHVybiB2bWhkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNtaGRCb3gobWluZikge1xyXG5cclxuICAgICAgICBsZXQgc21oZCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3NtaGQnLCBtaW5mKTtcclxuXHJcbiAgICAgICAgc21oZC5mbGFncyA9IDE7XHJcblxyXG4gICAgICAgIHNtaGQuYmFsYW5jZSA9IDA7IC8vIGlzIGEgZml4ZWQtcG9pbnQgOC44IG51bWJlciB0aGF0IHBsYWNlcyBtb25vIGF1ZGlvIHRyYWNrcyBpbiBhIHN0ZXJlbyBzcGFjZTsgMCBpcyBjZW50cmUgKHRoZSBub3JtYWwgdmFsdWUpOyBmdWxsIGxlZnQgaXMgLTEuMCBhbmQgZnVsbCByaWdodCBpcyAxLjAuXHJcbiAgICAgICAgc21oZC5yZXNlcnZlZCA9IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBzbWhkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURyZWZCb3goZGluZikge1xyXG5cclxuICAgICAgICBsZXQgZHJlZiA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ2RyZWYnLCBkaW5mKTtcclxuXHJcbiAgICAgICAgZHJlZi5lbnRyeV9jb3VudCA9IDE7XHJcbiAgICAgICAgZHJlZi5lbnRyaWVzID0gW107XHJcblxyXG4gICAgICAgIGxldCB1cmwgPSBJU09Cb3hlci5jcmVhdGVGdWxsQm94KCd1cmwgJywgZHJlZiwgZmFsc2UpO1xyXG4gICAgICAgIHVybC5sb2NhdGlvbiA9ICcnO1xyXG4gICAgICAgIHVybC5mbGFncyA9IDE7XHJcblxyXG4gICAgICAgIGRyZWYuZW50cmllcy5wdXNoKHVybCk7XHJcblxyXG4gICAgICAgIHJldHVybiBkcmVmO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0c2RCb3goc3RibCkge1xyXG5cclxuICAgICAgICBsZXQgc3RzZCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3N0c2QnLCBzdGJsKTtcclxuXHJcbiAgICAgICAgc3RzZC5lbnRyaWVzID0gW107XHJcbiAgICAgICAgc3dpdGNoIChhZGFwdGF0aW9uU2V0LnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMuVklERU86XHJcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLkFVRElPOlxyXG4gICAgICAgICAgICAgICAgc3RzZC5lbnRyaWVzLnB1c2goY3JlYXRlU2FtcGxlRW50cnkoc3RzZCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0c2QuZW50cnlfY291bnQgPSBzdHNkLmVudHJpZXMubGVuZ3RoOyAvLyBpcyBhbiBpbnRlZ2VyIHRoYXQgY291bnRzIHRoZSBhY3R1YWwgZW50cmllc1xyXG4gICAgICAgIHJldHVybiBzdHNkO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNhbXBsZUVudHJ5KHN0c2QpIHtcclxuICAgICAgICBsZXQgY29kZWMgPSByZXByZXNlbnRhdGlvbi5jb2RlY3Muc3Vic3RyaW5nKDAsIHJlcHJlc2VudGF0aW9uLmNvZGVjcy5pbmRleE9mKCcuJykpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvZGVjKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2F2YzEnOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUFWQ1Zpc3VhbFNhbXBsZUVudHJ5KHN0c2QsIGNvZGVjKTtcclxuICAgICAgICAgICAgY2FzZSAnbXA0YSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlTVA0QXVkaW9TYW1wbGVFbnRyeShzdHNkLCBjb2RlYyk7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29kZTogTXNzRXJyb3JzLk1TU19VTlNVUFBPUlRFRF9DT0RFQ19DT0RFLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IE1zc0Vycm9ycy5NU1NfVU5TVVBQT1JURURfQ09ERUNfTUVTU0FHRSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGVjOiBjb2RlY1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFWQ1Zpc3VhbFNhbXBsZUVudHJ5KHN0c2QsIGNvZGVjKSB7XHJcbiAgICAgICAgbGV0IGF2YzE7XHJcblxyXG4gICAgICAgIGlmIChjb250ZW50UHJvdGVjdGlvbikge1xyXG4gICAgICAgICAgICBhdmMxID0gSVNPQm94ZXIuY3JlYXRlQm94KCdlbmN2Jywgc3RzZCwgZmFsc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGF2YzEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2F2YzEnLCBzdHNkLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTYW1wbGVFbnRyeSBmaWVsZHNcclxuICAgICAgICBhdmMxLnJlc2VydmVkMSA9IFsweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwXTtcclxuICAgICAgICBhdmMxLmRhdGFfcmVmZXJlbmNlX2luZGV4ID0gMTtcclxuXHJcbiAgICAgICAgLy8gVmlzdWFsU2FtcGxlRW50cnkgZmllbGRzXHJcbiAgICAgICAgYXZjMS5wcmVfZGVmaW5lZDEgPSAwO1xyXG4gICAgICAgIGF2YzEucmVzZXJ2ZWQyID0gMDtcclxuICAgICAgICBhdmMxLnByZV9kZWZpbmVkMiA9IFswLCAwLCAwXTtcclxuICAgICAgICBhdmMxLmhlaWdodCA9IHJlcHJlc2VudGF0aW9uLmhlaWdodDtcclxuICAgICAgICBhdmMxLndpZHRoID0gcmVwcmVzZW50YXRpb24ud2lkdGg7XHJcbiAgICAgICAgYXZjMS5ob3JpenJlc29sdXRpb24gPSA3MjsgLy8gNzIgZHBpXHJcbiAgICAgICAgYXZjMS52ZXJ0cmVzb2x1dGlvbiA9IDcyOyAvLyA3MiBkcGlcclxuICAgICAgICBhdmMxLnJlc2VydmVkMyA9IDA7XHJcbiAgICAgICAgYXZjMS5mcmFtZV9jb3VudCA9IDE7IC8vIDEgY29tcHJlc3NlZCB2aWRlbyBmcmFtZSBwZXIgc2FtcGxlXHJcbiAgICAgICAgYXZjMS5jb21wcmVzc29ybmFtZSA9IFtcclxuICAgICAgICAgICAgMHgwQSwgMHg0MSwgMHg1NiwgMHg0MywgMHgyMCwgMHg0MywgMHg2RiwgMHg2NCwgLy8gPSAnQVZDIENvZGluZyc7XHJcbiAgICAgICAgICAgIDB4NjksIDB4NkUsIDB4NjcsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXHJcbiAgICAgICAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGF2YzEuZGVwdGggPSAweDAwMTg7IC8vIDB4MDAxOCDigJMgaW1hZ2VzIGFyZSBpbiBjb2xvdXIgd2l0aCBubyBhbHBoYS5cclxuICAgICAgICBhdmMxLnByZV9kZWZpbmVkMyA9IDY1NTM1O1xyXG4gICAgICAgIGF2YzEuY29uZmlnID0gY3JlYXRlQVZDMUNvbmZpZ3VyYXRpb25SZWNvcmQoKTtcclxuICAgICAgICBpZiAoY29udGVudFByb3RlY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgUHJvdGVjdGlvbiBTY2hlbWUgSW5mbyBCb3hcclxuICAgICAgICAgICAgbGV0IHNpbmYgPSBJU09Cb3hlci5jcmVhdGVCb3goJ3NpbmYnLCBhdmMxKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIE9yaWdpbmFsIEZvcm1hdCBCb3ggPT4gaW5kaWNhdGUgY29kZWMgdHlwZSBvZiB0aGUgZW5jcnlwdGVkIGNvbnRlbnRcclxuICAgICAgICAgICAgY3JlYXRlT3JpZ2luYWxGb3JtYXRCb3goc2luZiwgY29kZWMpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgU2NoZW1lIFR5cGUgYm94XHJcbiAgICAgICAgICAgIGNyZWF0ZVNjaGVtZVR5cGVCb3goc2luZik7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBTY2hlbWUgSW5mb3JtYXRpb24gQm94XHJcbiAgICAgICAgICAgIGNyZWF0ZVNjaGVtZUluZm9ybWF0aW9uQm94KHNpbmYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF2YzE7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQVZDMUNvbmZpZ3VyYXRpb25SZWNvcmQoKSB7XHJcblxyXG4gICAgICAgIGxldCBhdmNDID0gbnVsbDtcclxuICAgICAgICBsZXQgYXZjQ0xlbmd0aCA9IDE1OyAvLyBsZW5ndGggPSAxNSBieSBkZWZhdWx0ICgwIFNQUyBhbmQgMCBQUFMpXHJcblxyXG4gICAgICAgIC8vIEZpcnN0IGdldCBhbGwgU1BTIGFuZCBQUFMgZnJvbSBjb2RlY1ByaXZhdGVEYXRhXHJcbiAgICAgICAgbGV0IHNwcyA9IFtdO1xyXG4gICAgICAgIGxldCBwcHMgPSBbXTtcclxuICAgICAgICBsZXQgQVZDUHJvZmlsZUluZGljYXRpb24gPSAwO1xyXG4gICAgICAgIGxldCBBVkNMZXZlbEluZGljYXRpb24gPSAwO1xyXG4gICAgICAgIGxldCBwcm9maWxlX2NvbXBhdGliaWxpdHkgPSAwO1xyXG5cclxuICAgICAgICBsZXQgbmFsdXMgPSByZXByZXNlbnRhdGlvbi5jb2RlY1ByaXZhdGVEYXRhLnNwbGl0KCcwMDAwMDAwMScpLnNsaWNlKDEpO1xyXG4gICAgICAgIGxldCBuYWx1Qnl0ZXMsIG5hbHVUeXBlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5hbHVCeXRlcyA9IGhleFN0cmluZ3RvQnVmZmVyKG5hbHVzW2ldKTtcclxuXHJcbiAgICAgICAgICAgIG5hbHVUeXBlID0gbmFsdUJ5dGVzWzBdICYgMHgxRjtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAobmFsdVR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgTkFMVVRZUEVfU1BTOlxyXG4gICAgICAgICAgICAgICAgICAgIHNwcy5wdXNoKG5hbHVCeXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZjQ0xlbmd0aCArPSBuYWx1Qnl0ZXMubGVuZ3RoICsgMjsgLy8gMiA9IHNlcXVlbmNlUGFyYW1ldGVyU2V0TGVuZ3RoIGZpZWxkIGxlbmd0aFxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBOQUxVVFlQRV9QUFM6XHJcbiAgICAgICAgICAgICAgICAgICAgcHBzLnB1c2gobmFsdUJ5dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBhdmNDTGVuZ3RoICs9IG5hbHVCeXRlcy5sZW5ndGggKyAyOyAvLyAyID0gcGljdHVyZVBhcmFtZXRlclNldExlbmd0aCBmaWVsZCBsZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBwcm9maWxlIGFuZCBsZXZlbCBmcm9tIFNQU1xyXG4gICAgICAgIGlmIChzcHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBBVkNQcm9maWxlSW5kaWNhdGlvbiA9IHNwc1swXVsxXTtcclxuICAgICAgICAgICAgcHJvZmlsZV9jb21wYXRpYmlsaXR5ID0gc3BzWzBdWzJdO1xyXG4gICAgICAgICAgICBBVkNMZXZlbEluZGljYXRpb24gPSBzcHNbMF1bM107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZW5lcmF0ZSBhdmNDIGJ1ZmZlclxyXG4gICAgICAgIGF2Y0MgPSBuZXcgVWludDhBcnJheShhdmNDTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIC8vIGxlbmd0aFxyXG4gICAgICAgIGF2Y0NbaSsrXSA9IChhdmNDTGVuZ3RoICYgMHhGRjAwMDAwMCkgPj4gMjQ7XHJcbiAgICAgICAgYXZjQ1tpKytdID0gKGF2Y0NMZW5ndGggJiAweDAwRkYwMDAwKSA+PiAxNjtcclxuICAgICAgICBhdmNDW2krK10gPSAoYXZjQ0xlbmd0aCAmIDB4MDAwMEZGMDApID4+IDg7XHJcbiAgICAgICAgYXZjQ1tpKytdID0gKGF2Y0NMZW5ndGggJiAweDAwMDAwMEZGKTtcclxuICAgICAgICBhdmNDLnNldChbMHg2MSwgMHg3NiwgMHg2MywgMHg0M10sIGkpOyAvLyB0eXBlID0gJ2F2Y0MnXHJcbiAgICAgICAgaSArPSA0O1xyXG4gICAgICAgIGF2Y0NbaSsrXSA9IDE7IC8vIGNvbmZpZ3VyYXRpb25WZXJzaW9uID0gMVxyXG4gICAgICAgIGF2Y0NbaSsrXSA9IEFWQ1Byb2ZpbGVJbmRpY2F0aW9uO1xyXG4gICAgICAgIGF2Y0NbaSsrXSA9IHByb2ZpbGVfY29tcGF0aWJpbGl0eTtcclxuICAgICAgICBhdmNDW2krK10gPSBBVkNMZXZlbEluZGljYXRpb247XHJcbiAgICAgICAgYXZjQ1tpKytdID0gMHhGRjsgLy8gJzExMTExJyArIGxlbmd0aFNpemVNaW51c09uZSA9IDNcclxuICAgICAgICBhdmNDW2krK10gPSAweEUwIHwgc3BzLmxlbmd0aDsgLy8gJzExMScgKyBudW1PZlNlcXVlbmNlUGFyYW1ldGVyU2V0c1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgc3BzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGF2Y0NbaSsrXSA9IChzcHNbbl0ubGVuZ3RoICYgMHhGRjAwKSA+PiA4O1xyXG4gICAgICAgICAgICBhdmNDW2krK10gPSAoc3BzW25dLmxlbmd0aCAmIDB4MDBGRik7XHJcbiAgICAgICAgICAgIGF2Y0Muc2V0KHNwc1tuXSwgaSk7XHJcbiAgICAgICAgICAgIGkgKz0gc3BzW25dLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXZjQ1tpKytdID0gcHBzLmxlbmd0aDsgLy8gbnVtT2ZQaWN0dXJlUGFyYW1ldGVyU2V0c1xyXG4gICAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgcHBzLmxlbmd0aDsgbisrKSB7XHJcbiAgICAgICAgICAgIGF2Y0NbaSsrXSA9IChwcHNbbl0ubGVuZ3RoICYgMHhGRjAwKSA+PiA4O1xyXG4gICAgICAgICAgICBhdmNDW2krK10gPSAocHBzW25dLmxlbmd0aCAmIDB4MDBGRik7XHJcbiAgICAgICAgICAgIGF2Y0Muc2V0KHBwc1tuXSwgaSk7XHJcbiAgICAgICAgICAgIGkgKz0gcHBzW25dLmxlbmd0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhdmNDO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1QNEF1ZGlvU2FtcGxlRW50cnkoc3RzZCwgY29kZWMpIHtcclxuICAgICAgICBsZXQgbXA0YTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRQcm90ZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIG1wNGEgPSBJU09Cb3hlci5jcmVhdGVCb3goJ2VuY2EnLCBzdHNkLCBmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbXA0YSA9IElTT0JveGVyLmNyZWF0ZUJveCgnbXA0YScsIHN0c2QsIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNhbXBsZUVudHJ5IGZpZWxkc1xyXG4gICAgICAgIG1wNGEucmVzZXJ2ZWQxID0gWzB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDBdO1xyXG4gICAgICAgIG1wNGEuZGF0YV9yZWZlcmVuY2VfaW5kZXggPSAxO1xyXG5cclxuICAgICAgICAvLyBBdWRpb1NhbXBsZUVudHJ5IGZpZWxkc1xyXG4gICAgICAgIG1wNGEucmVzZXJ2ZWQyID0gWzB4MCwgMHgwXTtcclxuICAgICAgICBtcDRhLmNoYW5uZWxjb3VudCA9IHJlcHJlc2VudGF0aW9uLmF1ZGlvQ2hhbm5lbHM7XHJcbiAgICAgICAgbXA0YS5zYW1wbGVzaXplID0gMTY7XHJcbiAgICAgICAgbXA0YS5wcmVfZGVmaW5lZCA9IDA7XHJcbiAgICAgICAgbXA0YS5yZXNlcnZlZF8zID0gMDtcclxuICAgICAgICBtcDRhLnNhbXBsZXJhdGUgPSByZXByZXNlbnRhdGlvbi5hdWRpb1NhbXBsaW5nUmF0ZSA8PCAxNjtcclxuXHJcbiAgICAgICAgbXA0YS5lc2RzID0gY3JlYXRlTVBFRzRBQUNFU0Rlc2NyaXB0b3IoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRlbnRQcm90ZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFByb3RlY3Rpb24gU2NoZW1lIEluZm8gQm94XHJcbiAgICAgICAgICAgIGxldCBzaW5mID0gSVNPQm94ZXIuY3JlYXRlQm94KCdzaW5mJywgbXA0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYW5kIGFkZCBPcmlnaW5hbCBGb3JtYXQgQm94ID0+IGluZGljYXRlIGNvZGVjIHR5cGUgb2YgdGhlIGVuY3J5cHRlZCBjb250ZW50XHJcbiAgICAgICAgICAgIGNyZWF0ZU9yaWdpbmFsRm9ybWF0Qm94KHNpbmYsIGNvZGVjKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFNjaGVtZSBUeXBlIGJveFxyXG4gICAgICAgICAgICBjcmVhdGVTY2hlbWVUeXBlQm94KHNpbmYpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgU2NoZW1lIEluZm9ybWF0aW9uIEJveFxyXG4gICAgICAgICAgICBjcmVhdGVTY2hlbWVJbmZvcm1hdGlvbkJveChzaW5mKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtcDRhO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1QRUc0QUFDRVNEZXNjcmlwdG9yKCkge1xyXG5cclxuICAgICAgICAvLyBBdWRpb1NwZWNpZmljQ29uZmlnIChzZWUgSVNPL0lFQyAxNDQ5Ni0zLCBzdWJwYXJ0IDEpID0+IGNvcnJlc3BvbmRzIHRvIGhleCBieXRlcyBjb250YWluZWQgaW4gJ2NvZGVjUHJpdmF0ZURhdGEnIGZpZWxkXHJcbiAgICAgICAgbGV0IGF1ZGlvU3BlY2lmaWNDb25maWcgPSBoZXhTdHJpbmd0b0J1ZmZlcihyZXByZXNlbnRhdGlvbi5jb2RlY1ByaXZhdGVEYXRhKTtcclxuXHJcbiAgICAgICAgLy8gRVNEUyBsZW5ndGggPSBlc2RzIGJveCBoZWFkZXIgbGVuZ3RoICg9IDEyKSArXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICBFU19EZXNjcmlwdG9yIGhlYWRlciBsZW5ndGggKD0gNSkgK1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgRGVjb2RlckNvbmZpZ0Rlc2NyaXB0b3IgaGVhZGVyIGxlbmd0aCAoPSAxNSkgK1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgZGVjb2RlclNwZWNpZmljSW5mbyBoZWFkZXIgbGVuZ3RoICg9IDIpICtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgIEF1ZGlvU3BlY2lmaWNDb25maWcgbGVuZ3RoICg9IGNvZGVjUHJpdmF0ZURhdGEgbGVuZ3RoKVxyXG4gICAgICAgIGxldCBlc2RzTGVuZ3RoID0gMzQgKyBhdWRpb1NwZWNpZmljQ29uZmlnLmxlbmd0aDtcclxuICAgICAgICBsZXQgZXNkcyA9IG5ldyBVaW50OEFycmF5KGVzZHNMZW5ndGgpO1xyXG5cclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgLy8gZXNkcyBib3hcclxuICAgICAgICBlc2RzW2krK10gPSAoZXNkc0xlbmd0aCAmIDB4RkYwMDAwMDApID4+IDI0OyAvLyBlc2RzIGJveCBsZW5ndGhcclxuICAgICAgICBlc2RzW2krK10gPSAoZXNkc0xlbmd0aCAmIDB4MDBGRjAwMDApID4+IDE2OyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IChlc2RzTGVuZ3RoICYgMHgwMDAwRkYwMCkgPj4gODsgLy8gJydcclxuICAgICAgICBlc2RzW2krK10gPSAoZXNkc0xlbmd0aCAmIDB4MDAwMDAwRkYpOyAvLyAnJ1xyXG4gICAgICAgIGVzZHMuc2V0KFsweDY1LCAweDczLCAweDY0LCAweDczXSwgaSk7IC8vIHR5cGUgPSAnZXNkcydcclxuICAgICAgICBpICs9IDQ7XHJcbiAgICAgICAgZXNkcy5zZXQoWzAsIDAsIDAsIDBdLCBpKTsgLy8gdmVyc2lvbiA9IDAsIGZsYWdzID0gMFxyXG4gICAgICAgIGkgKz0gNDtcclxuICAgICAgICAvLyBFU19EZXNjcmlwdG9yIChzZWUgSVNPL0lFQyAxNDQ5Ni0xIChTeXN0ZW1zKSlcclxuICAgICAgICBlc2RzW2krK10gPSAweDAzOyAvLyB0YWcgPSAweDAzIChFU19EZXNjclRhZylcclxuICAgICAgICBlc2RzW2krK10gPSAyMCArIGF1ZGlvU3BlY2lmaWNDb25maWcubGVuZ3RoOyAvLyBzaXplXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHRyYWNrSWQgJiAweEZGMDApID4+IDg7IC8vIEVTX0lEID0gdHJhY2tfaWRcclxuICAgICAgICBlc2RzW2krK10gPSAodHJhY2tJZCAmIDB4MDBGRik7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gMDsgLy8gZmxhZ3MgYW5kIHN0cmVhbVByaW9yaXR5XHJcblxyXG4gICAgICAgIC8vIERlY29kZXJDb25maWdEZXNjcmlwdG9yIChzZWUgSVNPL0lFQyAxNDQ5Ni0xIChTeXN0ZW1zKSlcclxuICAgICAgICBlc2RzW2krK10gPSAweDA0OyAvLyB0YWcgPSAweDA0IChEZWNvZGVyQ29uZmlnRGVzY3JUYWcpXHJcbiAgICAgICAgZXNkc1tpKytdID0gMTUgKyBhdWRpb1NwZWNpZmljQ29uZmlnLmxlbmd0aDsgLy8gc2l6ZVxyXG4gICAgICAgIGVzZHNbaSsrXSA9IDB4NDA7IC8vIG9iamVjdFR5cGVJbmRpY2F0aW9uID0gMHg0MCAoTVBFRy00IEFBQylcclxuICAgICAgICBlc2RzW2ldID0gMHgwNSA8PCAyOyAvLyBzdHJlYW1UeXBlID0gMHgwNSAoQXVkaW9zdHJlYW0pXHJcbiAgICAgICAgZXNkc1tpXSB8PSAwIDw8IDE7IC8vIHVwU3RyZWFtID0gMFxyXG4gICAgICAgIGVzZHNbaSsrXSB8PSAxOyAvLyByZXNlcnZlZCA9IDFcclxuICAgICAgICBlc2RzW2krK10gPSAweEZGOyAvLyBidWZmZXJzaXplREIgPSB1bmRlZmluZWRcclxuICAgICAgICBlc2RzW2krK10gPSAweEZGOyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IDB4RkY7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4RkYwMDAwMDApID4+IDI0OyAvLyBtYXhCaXRyYXRlXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDBGRjAwMDApID4+IDE2OyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IChyZXByZXNlbnRhdGlvbi5iYW5kd2lkdGggJiAweDAwMDBGRjAwKSA+PiA4OyAvLyAnJ1xyXG4gICAgICAgIGVzZHNbaSsrXSA9IChyZXByZXNlbnRhdGlvbi5iYW5kd2lkdGggJiAweDAwMDAwMEZGKTsgLy8gJydcclxuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHhGRjAwMDAwMCkgPj4gMjQ7IC8vIGF2Z2JpdHJhdGVcclxuICAgICAgICBlc2RzW2krK10gPSAocmVwcmVzZW50YXRpb24uYmFuZHdpZHRoICYgMHgwMEZGMDAwMCkgPj4gMTY7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDAwMEZGMDApID4+IDg7IC8vICcnXHJcbiAgICAgICAgZXNkc1tpKytdID0gKHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCAmIDB4MDAwMDAwRkYpOyAvLyAnJ1xyXG5cclxuICAgICAgICAvLyBEZWNvZGVyU3BlY2lmaWNJbmZvIChzZWUgSVNPL0lFQyAxNDQ5Ni0xIChTeXN0ZW1zKSlcclxuICAgICAgICBlc2RzW2krK10gPSAweDA1OyAvLyB0YWcgPSAweDA1IChEZWNTcGVjaWZpY0luZm9UYWcpXHJcbiAgICAgICAgZXNkc1tpKytdID0gYXVkaW9TcGVjaWZpY0NvbmZpZy5sZW5ndGg7IC8vIHNpemVcclxuICAgICAgICBlc2RzLnNldChhdWRpb1NwZWNpZmljQ29uZmlnLCBpKTsgLy8gQXVkaW9TcGVjaWZpY0NvbmZpZyBieXRlc1xyXG5cclxuICAgICAgICByZXR1cm4gZXNkcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVPcmlnaW5hbEZvcm1hdEJveChzaW5mLCBjb2RlYykge1xyXG4gICAgICAgIGxldCBmcm1hID0gSVNPQm94ZXIuY3JlYXRlQm94KCdmcm1hJywgc2luZik7XHJcbiAgICAgICAgZnJtYS5kYXRhX2Zvcm1hdCA9IHN0cmluZ1RvQ2hhckNvZGUoY29kZWMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNjaGVtZVR5cGVCb3goc2luZikge1xyXG4gICAgICAgIGxldCBzY2htID0gSVNPQm94ZXIuY3JlYXRlRnVsbEJveCgnc2NobScsIHNpbmYpO1xyXG5cclxuICAgICAgICBzY2htLmZsYWdzID0gMDtcclxuICAgICAgICBzY2htLnZlcnNpb24gPSAwO1xyXG4gICAgICAgIHNjaG0uc2NoZW1lX3R5cGUgPSAweDYzNjU2RTYzOyAvLyAnY2VuYycgPT4gY29tbW9uIGVuY3J5cHRpb25cclxuICAgICAgICBzY2htLnNjaGVtZV92ZXJzaW9uID0gMHgwMDAxMDAwMDsgLy8gdmVyc2lvbiBzZXQgdG8gMHgwMDAxMDAwMCAoTWFqb3IgdmVyc2lvbiAxLCBNaW5vciB2ZXJzaW9uIDApXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU2NoZW1lSW5mb3JtYXRpb25Cb3goc2luZikge1xyXG4gICAgICAgIGxldCBzY2hpID0gSVNPQm94ZXIuY3JlYXRlQm94KCdzY2hpJywgc2luZik7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhbmQgYWRkIFRyYWNrIEVuY3J5cHRpb24gQm94XHJcbiAgICAgICAgY3JlYXRlVHJhY2tFbmNyeXB0aW9uQm94KHNjaGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3RlY3Rpb25TeXN0ZW1TcGVjaWZpY0hlYWRlckJveChtb292LCBrZXlTeXN0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHBzc2hfYnl0ZXMsXHJcbiAgICAgICAgICAgIHBzc2gsXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHBhcnNlZEJ1ZmZlcjtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleVN5c3RlbXMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgcHNzaF9ieXRlcyA9IGtleVN5c3RlbXNbaV0uaW5pdERhdGE7XHJcbiAgICAgICAgICAgIHBhcnNlZEJ1ZmZlciA9IElTT0JveGVyLnBhcnNlQnVmZmVyKHBzc2hfYnl0ZXMpO1xyXG4gICAgICAgICAgICBwc3NoID0gcGFyc2VkQnVmZmVyLmZldGNoKCdwc3NoJyk7XHJcbiAgICAgICAgICAgIGlmIChwc3NoKSB7XHJcbiAgICAgICAgICAgICAgICBJU09Cb3hlci5VdGlscy5hcHBlbmRCb3gobW9vdiwgcHNzaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVHJhY2tFbmNyeXB0aW9uQm94KHNjaGkpIHtcclxuICAgICAgICBsZXQgdGVuYyA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3RlbmMnLCBzY2hpKTtcclxuXHJcbiAgICAgICAgdGVuYy5mbGFncyA9IDA7XHJcbiAgICAgICAgdGVuYy52ZXJzaW9uID0gMDtcclxuXHJcbiAgICAgICAgdGVuYy5kZWZhdWx0X0lzRW5jcnlwdGVkID0gMHgxO1xyXG4gICAgICAgIHRlbmMuZGVmYXVsdF9JVl9zaXplID0gODtcclxuICAgICAgICB0ZW5jLmRlZmF1bHRfS0lEID0gKGNvbnRlbnRQcm90ZWN0aW9uICYmIChjb250ZW50UHJvdGVjdGlvbi5sZW5ndGgpID4gMCAmJiBjb250ZW50UHJvdGVjdGlvblswXVsnY2VuYzpkZWZhdWx0X0tJRCddKSA/XHJcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9uWzBdWydjZW5jOmRlZmF1bHRfS0lEJ10gOiBbMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwLCAweDAsIDB4MCwgMHgwXTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUcmV4Qm94KG1vb3YpIHtcclxuICAgICAgICBsZXQgdHJleCA9IElTT0JveGVyLmNyZWF0ZUZ1bGxCb3goJ3RyZXgnLCBtb292KTtcclxuXHJcbiAgICAgICAgdHJleC50cmFja19JRCA9IHRyYWNrSWQ7XHJcbiAgICAgICAgdHJleC5kZWZhdWx0X3NhbXBsZV9kZXNjcmlwdGlvbl9pbmRleCA9IDE7XHJcbiAgICAgICAgdHJleC5kZWZhdWx0X3NhbXBsZV9kdXJhdGlvbiA9IDA7XHJcbiAgICAgICAgdHJleC5kZWZhdWx0X3NhbXBsZV9zaXplID0gMDtcclxuICAgICAgICB0cmV4LmRlZmF1bHRfc2FtcGxlX2ZsYWdzID0gMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRyZXg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGV4U3RyaW5ndG9CdWZmZXIoc3RyKSB7XHJcbiAgICAgICAgbGV0IGJ1ZiA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGggLyAyKTtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGggLyAyOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYnVmW2ldID0gcGFyc2VJbnQoJycgKyBzdHJbaSAqIDJdICsgc3RyW2kgKiAyICsgMV0sIDE2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzdHJpbmdUb0NoYXJDb2RlKHN0cikge1xyXG4gICAgICAgIGxldCBjb2RlID0gMDtcclxuICAgICAgICBsZXQgaTtcclxuXHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICBjb2RlIHw9IHN0ci5jaGFyQ29kZUF0KGkpIDw8ICgoc3RyLmxlbmd0aCAtIGkgLSAxKSAqIDgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29kZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1vb3YocmVwKSB7XHJcbiAgICAgICAgaWYgKCFyZXAgfHwgIXJlcC5hZGFwdGF0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpc29GaWxlLFxyXG4gICAgICAgICAgICBhcnJheUJ1ZmZlcjtcclxuXHJcbiAgICAgICAgcmVwcmVzZW50YXRpb24gPSByZXA7XHJcbiAgICAgICAgYWRhcHRhdGlvblNldCA9IHJlcHJlc2VudGF0aW9uLmFkYXB0YXRpb247XHJcblxyXG4gICAgICAgIHBlcmlvZCA9IGFkYXB0YXRpb25TZXQucGVyaW9kO1xyXG4gICAgICAgIHRyYWNrSWQgPSBhZGFwdGF0aW9uU2V0LmluZGV4ICsgMTtcclxuICAgICAgICBjb250ZW50UHJvdGVjdGlvbiA9IHBlcmlvZC5tcGQubWFuaWZlc3QuUGVyaW9kX2FzQXJyYXlbcGVyaW9kLmluZGV4XS5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbYWRhcHRhdGlvblNldC5pbmRleF0uQ29udGVudFByb3RlY3Rpb247XHJcblxyXG4gICAgICAgIHRpbWVzY2FsZSA9IHBlcmlvZC5tcGQubWFuaWZlc3QuUGVyaW9kX2FzQXJyYXlbcGVyaW9kLmluZGV4XS5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbYWRhcHRhdGlvblNldC5pbmRleF0uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZTtcclxuXHJcbiAgICAgICAgaXNvRmlsZSA9IElTT0JveGVyLmNyZWF0ZUZpbGUoKTtcclxuICAgICAgICBjcmVhdGVGdHlwQm94KGlzb0ZpbGUpO1xyXG4gICAgICAgIGNyZWF0ZU1vb3ZCb3goaXNvRmlsZSk7XHJcblxyXG4gICAgICAgIGFycmF5QnVmZmVyID0gaXNvRmlsZS53cml0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyYXlCdWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UgPSB7XHJcbiAgICAgICAgZ2VuZXJhdGVNb292OiBnZW5lcmF0ZU1vb3ZcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5Nc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3IuX19kYXNoanNfZmFjdG9yeV9uYW1lID0gJ01zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcic7XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvcik7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqLyIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5cclxuaW1wb3J0IE1TU0ZyYWdtZW50TW9vZlByb2Nlc3NvciBmcm9tICcuL01zc0ZyYWdtZW50TW9vZlByb2Nlc3Nvcic7XHJcbmltcG9ydCBNU1NGcmFnbWVudE1vb3ZQcm9jZXNzb3IgZnJvbSAnLi9Nc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3InO1xyXG5pbXBvcnQgTXNzRXZlbnRzIGZyb20gJy4vTXNzRXZlbnRzJztcclxuXHJcblxyXG4vLyBBZGQgc3BlY2lmaWMgYm94IHByb2Nlc3NvcnMgbm90IHByb3ZpZGVkIGJ5IGNvZGVtLWlzb2JveGVyIGxpYnJhcnlcclxuXHJcbmZ1bmN0aW9uIGFycmF5RXF1YWwoYXJyMSwgYXJyMikge1xyXG4gICAgcmV0dXJuIChhcnIxLmxlbmd0aCA9PT0gYXJyMi5sZW5ndGgpICYmIGFycjEuZXZlcnkoZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGFycjJbaW5kZXhdO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhaW9Qcm9jZXNzb3IoKSB7XHJcbiAgICB0aGlzLl9wcm9jRnVsbEJveCgpO1xyXG4gICAgaWYgKHRoaXMuZmxhZ3MgJiAxKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdhdXhfaW5mb190eXBlJywgJ3VpbnQnLCAzMik7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdhdXhfaW5mb190eXBlX3BhcmFtZXRlcicsICd1aW50JywgMzIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcHJvY0ZpZWxkKCdlbnRyeV9jb3VudCcsICd1aW50JywgMzIpO1xyXG4gICAgdGhpcy5fcHJvY0ZpZWxkQXJyYXkoJ29mZnNldCcsIHRoaXMuZW50cnlfY291bnQsICd1aW50JywgKHRoaXMudmVyc2lvbiA9PT0gMSkgPyA2NCA6IDMyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2FpelByb2Nlc3NvcigpIHtcclxuICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XHJcbiAgICBpZiAodGhpcy5mbGFncyAmIDEpIHtcclxuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2F1eF9pbmZvX3R5cGUnLCAndWludCcsIDMyKTtcclxuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2F1eF9pbmZvX3R5cGVfcGFyYW1ldGVyJywgJ3VpbnQnLCAzMik7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9wcm9jRmllbGQoJ2RlZmF1bHRfc2FtcGxlX2luZm9fc2l6ZScsICd1aW50JywgOCk7XHJcbiAgICB0aGlzLl9wcm9jRmllbGQoJ3NhbXBsZV9jb3VudCcsICd1aW50JywgMzIpO1xyXG4gICAgaWYgKHRoaXMuZGVmYXVsdF9zYW1wbGVfaW5mb19zaXplID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkQXJyYXkoJ3NhbXBsZV9pbmZvX3NpemUnLCB0aGlzLnNhbXBsZV9jb3VudCwgJ3VpbnQnLCA4KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2VuY1Byb2Nlc3NvcigpIHtcclxuICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XHJcbiAgICB0aGlzLl9wcm9jRmllbGQoJ3NhbXBsZV9jb3VudCcsICd1aW50JywgMzIpO1xyXG4gICAgaWYgKHRoaXMuZmxhZ3MgJiAxKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdJVl9zaXplJywgJ3VpbnQnLCA4KTtcclxuICAgIH1cclxuICAgIHRoaXMuX3Byb2NFbnRyaWVzKCdlbnRyeScsIHRoaXMuc2FtcGxlX2NvdW50LCBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ0luaXRpYWxpemF0aW9uVmVjdG9yJywgJ2RhdGEnLCA4KTtcclxuICAgICAgICBpZiAodGhpcy5mbGFncyAmIDIpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY0VudHJ5RmllbGQoZW50cnksICdOdW1iZXJPZkVudHJpZXMnLCAndWludCcsIDE2KTtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY1N1YkVudHJpZXMoZW50cnksICdjbGVhckFuZENyeXB0ZWREYXRhJywgZW50cnkuTnVtYmVyT2ZFbnRyaWVzLCBmdW5jdGlvbiAoY2xlYXJBbmRDcnlwdGVkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY0VudHJ5RmllbGQoY2xlYXJBbmRDcnlwdGVkRGF0YSwgJ0J5dGVzT2ZDbGVhckRhdGEnLCAndWludCcsIDE2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2NFbnRyeUZpZWxkKGNsZWFyQW5kQ3J5cHRlZERhdGEsICdCeXRlc09mRW5jcnlwdGVkRGF0YScsICd1aW50JywgMzIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXVpZFByb2Nlc3NvcigpIHtcclxuICAgIGxldCB0ZnhkVXNlclR5cGUgPSBbMHg2RCwgMHgxRCwgMHg5QiwgMHgwNSwgMHg0MiwgMHhENSwgMHg0NCwgMHhFNiwgMHg4MCwgMHhFMiwgMHgxNCwgMHgxRCwgMHhBRiwgMHhGNywgMHg1NywgMHhCMl07XHJcbiAgICBsZXQgdGZyZlVzZXJUeXBlID0gWzB4RDQsIDB4ODAsIDB4N0UsIDB4RjIsIDB4Q0EsIDB4MzksIDB4NDYsIDB4OTUsIDB4OEUsIDB4NTQsIDB4MjYsIDB4Q0IsIDB4OUUsIDB4NDYsIDB4QTcsIDB4OUZdO1xyXG4gICAgbGV0IHNlcGlmZlVzZXJUeXBlID0gWzB4QTIsIDB4MzksIDB4NEYsIDB4NTIsIDB4NUEsIDB4OUIsIDB4NGYsIDB4MTQsIDB4QTIsIDB4NDQsIDB4NkMsIDB4NDIsIDB4N0MsIDB4NjQsIDB4OEQsIDB4RjRdO1xyXG5cclxuICAgIGlmIChhcnJheUVxdWFsKHRoaXMudXNlcnR5cGUsIHRmeGRVc2VyVHlwZSkpIHtcclxuICAgICAgICB0aGlzLl9wcm9jRnVsbEJveCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJzaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICd0ZnhkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJvY0ZpZWxkKCdmcmFnbWVudF9hYnNvbHV0ZV90aW1lJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xyXG4gICAgICAgIHRoaXMuX3Byb2NGaWVsZCgnZnJhZ21lbnRfZHVyYXRpb24nLCAndWludCcsICh0aGlzLnZlcnNpb24gPT09IDEpID8gNjQgOiAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFycmF5RXF1YWwodGhpcy51c2VydHlwZSwgdGZyZlVzZXJUeXBlKSkge1xyXG4gICAgICAgIHRoaXMuX3Byb2NGdWxsQm94KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcnNpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gJ3RmcmYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wcm9jRmllbGQoJ2ZyYWdtZW50X2NvdW50JywgJ3VpbnQnLCA4KTtcclxuICAgICAgICB0aGlzLl9wcm9jRW50cmllcygnZW50cnknLCB0aGlzLmZyYWdtZW50X2NvdW50LCBmdW5jdGlvbiAoZW50cnkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvY0VudHJ5RmllbGQoZW50cnksICdmcmFnbWVudF9hYnNvbHV0ZV90aW1lJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9jRW50cnlGaWVsZChlbnRyeSwgJ2ZyYWdtZW50X2R1cmF0aW9uJywgJ3VpbnQnLCAodGhpcy52ZXJzaW9uID09PSAxKSA/IDY0IDogMzIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcnJheUVxdWFsKHRoaXMudXNlcnR5cGUsIHNlcGlmZlVzZXJUeXBlKSkge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJzaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9ICdzZXBpZmYnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZW5jUHJvY2Vzc29yLmNhbGwodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIE1zc0ZyYWdtZW50UHJvY2Vzc29yKGNvbmZpZykge1xyXG5cclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBjb25zdCBkYXNoTWV0cmljcyA9IGNvbmZpZy5kYXNoTWV0cmljcztcclxuICAgIGNvbnN0IHBsYXliYWNrQ29udHJvbGxlciA9IGNvbmZpZy5wbGF5YmFja0NvbnRyb2xsZXI7XHJcbiAgICBjb25zdCBldmVudEJ1cyA9IGNvbmZpZy5ldmVudEJ1cztcclxuICAgIGNvbnN0IHByb3RlY3Rpb25Db250cm9sbGVyID0gY29uZmlnLnByb3RlY3Rpb25Db250cm9sbGVyO1xyXG4gICAgY29uc3QgSVNPQm94ZXIgPSBjb25maWcuSVNPQm94ZXI7XHJcbiAgICBjb25zdCBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcclxuICAgIGxldCBtc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3IsXHJcbiAgICAgICAgbXNzRnJhZ21lbnRNb29mUHJvY2Vzc29yLFxyXG4gICAgICAgIGluc3RhbmNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgICAgIElTT0JveGVyLmFkZEJveFByb2Nlc3NvcigndXVpZCcsIHV1aWRQcm9jZXNzb3IpO1xyXG4gICAgICAgIElTT0JveGVyLmFkZEJveFByb2Nlc3Nvcignc2FpbycsIHNhaW9Qcm9jZXNzb3IpO1xyXG4gICAgICAgIElTT0JveGVyLmFkZEJveFByb2Nlc3Nvcignc2FpeicsIHNhaXpQcm9jZXNzb3IpO1xyXG4gICAgICAgIElTT0JveGVyLmFkZEJveFByb2Nlc3Nvcignc2VuYycsIHNlbmNQcm9jZXNzb3IpO1xyXG5cclxuICAgICAgICBtc3NGcmFnbWVudE1vb3ZQcm9jZXNzb3IgPSBNU1NGcmFnbWVudE1vb3ZQcm9jZXNzb3IoY29udGV4dCkuY3JlYXRlKHtwcm90ZWN0aW9uQ29udHJvbGxlcjogcHJvdGVjdGlvbkNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgIGNvbnN0YW50czogY29uZmlnLmNvbnN0YW50cywgSVNPQm94ZXI6IElTT0JveGVyfSk7XHJcblxyXG4gICAgICAgIG1zc0ZyYWdtZW50TW9vZlByb2Nlc3NvciA9IE1TU0ZyYWdtZW50TW9vZlByb2Nlc3Nvcihjb250ZXh0KS5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgZGFzaE1ldHJpY3M6IGRhc2hNZXRyaWNzLFxyXG4gICAgICAgICAgICAgICAgcGxheWJhY2tDb250cm9sbGVyOiBwbGF5YmFja0NvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgICAgICBJU09Cb3hlcjogSVNPQm94ZXIsXHJcbiAgICAgICAgICAgICAgICBldmVudEJ1czogZXZlbnRCdXMsXHJcbiAgICAgICAgICAgICAgICBkZWJ1ZzogZGVidWcsXHJcbiAgICAgICAgICAgICAgICBlcnJIYW5kbGVyOiBjb25maWcuZXJySGFuZGxlclxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZU1vb3YocmVwKSB7XHJcbiAgICAgICAgcmV0dXJuIG1zc0ZyYWdtZW50TW9vdlByb2Nlc3Nvci5nZW5lcmF0ZU1vb3YocmVwKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzRnJhZ21lbnQoZSwgc3ApIHtcclxuICAgICAgICBpZiAoIWUgfHwgIWUucmVxdWVzdCB8fCAhZS5yZXNwb25zZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2UgcGFyYW1ldGVyIGlzIG1pc3Npbmcgb3IgbWFsZm9ybWVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IGUucmVxdWVzdDtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVlc3QudHlwZSA9PT0gJ01lZGlhU2VnbWVudCcpIHtcclxuICAgICAgICAgICAgLy8gaXQncyBhIE1lZGlhU2VnbWVudCwgbGV0J3MgY29udmVydCBmcmFnbWVudFxyXG4gICAgICAgICAgICBtc3NGcmFnbWVudE1vb2ZQcm9jZXNzb3IuY29udmVydEZyYWdtZW50KGUsIHNwKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LnR5cGUgPT09ICdGcmFnbWVudEluZm9TZWdtZW50Jykge1xyXG5cclxuICAgICAgICAgICAgLy8gaXQncyBhIEZyYWdtZW50SW5mbywgYXNrIHJlbGF0aXZlIGZyYWdtZW50IGluZm8gY29udHJvbGxlciB0byBoYW5kbGUgaXRcclxuICAgICAgICAgICAgZXZlbnRCdXMudHJpZ2dlcihNc3NFdmVudHMuRlJBR01FTlRfSU5GT19MT0FESU5HX0NPTVBMRVRFRCwge1xyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRJbmZvOiBlLFxyXG4gICAgICAgICAgICAgICAgc3RyZWFtUHJvY2Vzc29yOiBzcFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgc2VuZGVyIHZhbHVlIHRvIHN0b3AgZXZlbnQgdG8gYmUgcHJvcGFnYXRlZCAoZnJhZ21lbnQgaW5mbyBtdXN0IG5vdCBiZSBhZGRlZCB0byBidWZmZXIpXHJcbiAgICAgICAgICAgIGUuc2VuZGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UgPSB7XHJcbiAgICAgICAgZ2VuZXJhdGVNb292OiBnZW5lcmF0ZU1vb3YsXHJcbiAgICAgICAgcHJvY2Vzc0ZyYWdtZW50OiBwcm9jZXNzRnJhZ21lbnRcclxuICAgIH07XHJcblxyXG4gICAgc2V0dXAoKTtcclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbk1zc0ZyYWdtZW50UHJvY2Vzc29yLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdNc3NGcmFnbWVudFByb2Nlc3Nvcic7XHJcbmV4cG9ydCBkZWZhdWx0IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0ZyYWdtZW50UHJvY2Vzc29yKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcblxyXG5pbXBvcnQgRGF0YUNodW5rIGZyb20gJy4uL3N0cmVhbWluZy92by9EYXRhQ2h1bmsnO1xyXG5pbXBvcnQgRnJhZ21lbnRSZXF1ZXN0IGZyb20gJy4uL3N0cmVhbWluZy92by9GcmFnbWVudFJlcXVlc3QnO1xyXG5pbXBvcnQgTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlciBmcm9tICcuL01zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgTXNzRnJhZ21lbnRQcm9jZXNzb3IgZnJvbSAnLi9Nc3NGcmFnbWVudFByb2Nlc3Nvcic7XHJcbmltcG9ydCBNc3NQYXJzZXIgZnJvbSAnLi9wYXJzZXIvTXNzUGFyc2VyJztcclxuaW1wb3J0IE1zc0Vycm9ycyBmcm9tICcuL2Vycm9ycy9Nc3NFcnJvcnMnO1xyXG5pbXBvcnQgRGFzaEpTRXJyb3IgZnJvbSAnLi4vc3RyZWFtaW5nL3ZvL0Rhc2hKU0Vycm9yJztcclxuXHJcbmZ1bmN0aW9uIE1zc0hhbmRsZXIoY29uZmlnKSB7XHJcblxyXG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xyXG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBsZXQgZXZlbnRCdXMgPSBjb25maWcuZXZlbnRCdXM7XHJcbiAgICBjb25zdCBldmVudHMgPSBjb25maWcuZXZlbnRzO1xyXG4gICAgY29uc3QgY29uc3RhbnRzID0gY29uZmlnLmNvbnN0YW50cztcclxuICAgIGNvbnN0IGluaXRTZWdtZW50VHlwZSA9IGNvbmZpZy5pbml0U2VnbWVudFR5cGU7XHJcbiAgICBsZXQgZGFzaE1ldHJpY3MgPSBjb25maWcuZGFzaE1ldHJpY3M7XHJcbiAgICBsZXQgcGxheWJhY2tDb250cm9sbGVyID0gY29uZmlnLnBsYXliYWNrQ29udHJvbGxlcjtcclxuICAgIGxldCBwcm90ZWN0aW9uQ29udHJvbGxlciA9IGNvbmZpZy5wcm90ZWN0aW9uQ29udHJvbGxlcjtcclxuICAgIGxldCBtc3NGcmFnbWVudFByb2Nlc3NvciA9IE1zc0ZyYWdtZW50UHJvY2Vzc29yKGNvbnRleHQpLmNyZWF0ZSh7XHJcbiAgICAgICAgZGFzaE1ldHJpY3M6IGRhc2hNZXRyaWNzLFxyXG4gICAgICAgIHBsYXliYWNrQ29udHJvbGxlcjogcGxheWJhY2tDb250cm9sbGVyLFxyXG4gICAgICAgIHByb3RlY3Rpb25Db250cm9sbGVyOiBwcm90ZWN0aW9uQ29udHJvbGxlcixcclxuICAgICAgICBldmVudEJ1czogZXZlbnRCdXMsXHJcbiAgICAgICAgY29uc3RhbnRzOiBjb25zdGFudHMsXHJcbiAgICAgICAgSVNPQm94ZXI6IGNvbmZpZy5JU09Cb3hlcixcclxuICAgICAgICBkZWJ1ZzogY29uZmlnLmRlYnVnLFxyXG4gICAgICAgIGVyckhhbmRsZXI6IGNvbmZpZy5lcnJIYW5kbGVyXHJcbiAgICB9KTtcclxuICAgIGxldCBtc3NQYXJzZXIsXHJcbiAgICAgICAgaW5zdGFuY2U7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXAoKSB7fVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uSW5pdGlhbGl6YXRpb25SZXF1ZXN0ZWQoZSkge1xyXG4gICAgICAgIGxldCBzdHJlYW1Qcm9jZXNzb3IgPSBlLnNlbmRlci5nZXRTdHJlYW1Qcm9jZXNzb3IoKTtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBGcmFnbWVudFJlcXVlc3QoKTtcclxuICAgICAgICBsZXQgcmVwcmVzZW50YXRpb25Db250cm9sbGVyID0gc3RyZWFtUHJvY2Vzc29yLmdldFJlcHJlc2VudGF0aW9uQ29udHJvbGxlcigpO1xyXG4gICAgICAgIGxldCByZXByZXNlbnRhdGlvbiA9IHJlcHJlc2VudGF0aW9uQ29udHJvbGxlci5nZXRDdXJyZW50UmVwcmVzZW50YXRpb24oKTtcclxuXHJcbiAgICAgICAgcmVxdWVzdC5tZWRpYVR5cGUgPSByZXByZXNlbnRhdGlvbi5hZGFwdGF0aW9uLnR5cGU7XHJcbiAgICAgICAgcmVxdWVzdC50eXBlID0gaW5pdFNlZ21lbnRUeXBlO1xyXG4gICAgICAgIHJlcXVlc3QucmFuZ2UgPSByZXByZXNlbnRhdGlvbi5yYW5nZTtcclxuICAgICAgICByZXF1ZXN0LnF1YWxpdHkgPSByZXByZXNlbnRhdGlvbi5pbmRleDtcclxuICAgICAgICByZXF1ZXN0Lm1lZGlhSW5mbyA9IHN0cmVhbVByb2Nlc3Nvci5nZXRNZWRpYUluZm8oKTtcclxuICAgICAgICByZXF1ZXN0LnJlcHJlc2VudGF0aW9uSWQgPSByZXByZXNlbnRhdGlvbi5pZDtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSBjcmVhdGVEYXRhQ2h1bmsocmVxdWVzdCwgc3RyZWFtUHJvY2Vzc29yLmdldFN0cmVhbUluZm8oKS5pZCwgZS50eXBlICE9PSBldmVudHMuRlJBR01FTlRfTE9BRElOR19QUk9HUkVTUyk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWxpemF0aW9uIHNlZ21lbnQgKG1vb3YpXHJcbiAgICAgICAgICAgIGNodW5rLmJ5dGVzID0gbXNzRnJhZ21lbnRQcm9jZXNzb3IuZ2VuZXJhdGVNb292KHJlcHJlc2VudGF0aW9uKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5lcnJIYW5kbGVyLmVycm9yKG5ldyBEYXNoSlNFcnJvcihlLmNvZGUsIGUubWVzc2FnZSwgZS5kYXRhKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBldmVudEJ1cy50cmlnZ2VyKGV2ZW50cy5JTklUX0ZSQUdNRU5UX0xPQURFRCwge1xyXG4gICAgICAgICAgICBjaHVuazogY2h1bmssXHJcbiAgICAgICAgICAgIGZyYWdtZW50TW9kZWw6IHN0cmVhbVByb2Nlc3Nvci5nZXRGcmFnbWVudE1vZGVsKClcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQ2hhbmdlIHRoZSBzZW5kZXIgdmFsdWUgdG8gc3RvcCBldmVudCB0byBiZSBwcm9wYWdhdGVkXHJcbiAgICAgICAgZS5zZW5kZXIgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZURhdGFDaHVuayhyZXF1ZXN0LCBzdHJlYW1JZCwgZW5kRnJhZ21lbnQpIHtcclxuICAgICAgICBjb25zdCBjaHVuayA9IG5ldyBEYXRhQ2h1bmsoKTtcclxuXHJcbiAgICAgICAgY2h1bmsuc3RyZWFtSWQgPSBzdHJlYW1JZDtcclxuICAgICAgICBjaHVuay5tZWRpYUluZm8gPSByZXF1ZXN0Lm1lZGlhSW5mbztcclxuICAgICAgICBjaHVuay5zZWdtZW50VHlwZSA9IHJlcXVlc3QudHlwZTtcclxuICAgICAgICBjaHVuay5zdGFydCA9IHJlcXVlc3Quc3RhcnRUaW1lO1xyXG4gICAgICAgIGNodW5rLmR1cmF0aW9uID0gcmVxdWVzdC5kdXJhdGlvbjtcclxuICAgICAgICBjaHVuay5lbmQgPSBjaHVuay5zdGFydCArIGNodW5rLmR1cmF0aW9uO1xyXG4gICAgICAgIGNodW5rLmluZGV4ID0gcmVxdWVzdC5pbmRleDtcclxuICAgICAgICBjaHVuay5xdWFsaXR5ID0gcmVxdWVzdC5xdWFsaXR5O1xyXG4gICAgICAgIGNodW5rLnJlcHJlc2VudGF0aW9uSWQgPSByZXF1ZXN0LnJlcHJlc2VudGF0aW9uSWQ7XHJcbiAgICAgICAgY2h1bmsuZW5kRnJhZ21lbnQgPSBlbmRGcmFnbWVudDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNodW5rO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0YXJ0RnJhZ21lbnRJbmZvQ29udHJvbGxlcnMoKSB7XHJcblxyXG4gICAgICAgIGxldCBzdHJlYW1Db250cm9sbGVyID0gcGxheWJhY2tDb250cm9sbGVyLmdldFN0cmVhbUNvbnRyb2xsZXIoKTtcclxuICAgICAgICBpZiAoIXN0cmVhbUNvbnRyb2xsZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXJzIGZvciBlYWNoIFN0cmVhbVByb2Nlc3NvciBvZiBhY3RpdmUgc3RyZWFtIChvbmx5IGZvciBhdWRpbywgdmlkZW8gb3IgZnJhZ21lbnRlZFRleHQpXHJcbiAgICAgICAgbGV0IHByb2Nlc3NvcnMgPSBzdHJlYW1Db250cm9sbGVyLmdldEFjdGl2ZVN0cmVhbVByb2Nlc3NvcnMoKTtcclxuICAgICAgICBwcm9jZXNzb3JzLmZvckVhY2goZnVuY3Rpb24gKHByb2Nlc3Nvcikge1xyXG4gICAgICAgICAgICBpZiAocHJvY2Vzc29yLmdldFR5cGUoKSA9PT0gY29uc3RhbnRzLlZJREVPIHx8XHJcbiAgICAgICAgICAgICAgICBwcm9jZXNzb3IuZ2V0VHlwZSgpID09PSBjb25zdGFudHMuQVVESU8gfHxcclxuICAgICAgICAgICAgICAgIHByb2Nlc3Nvci5nZXRUeXBlKCkgPT09IGNvbnN0YW50cy5GUkFHTUVOVEVEX1RFWFQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBNc3NGcmFnbWVudEluZm9Db250cm9sbGVyIGFscmVhZHkgcmVnaXN0ZXJlZCB0byBTdHJlYW1Qcm9jZXNzb3JcclxuICAgICAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFscmVhZHlSZWdpc3RlcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0ZXJuYWxDb250cm9sbGVycyA9IHByb2Nlc3Nvci5nZXRFeHRlcm5hbENvbnRyb2xsZXJzKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXh0ZXJuYWxDb250cm9sbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbENvbnRyb2xsZXJzW2ldLmNvbnRyb2xsZXJUeXBlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsQ29udHJvbGxlcnNbaV0uY29udHJvbGxlclR5cGUgPT09ICdNc3NGcmFnbWVudEluZm9Db250cm9sbGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5UmVnaXN0ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeVJlZ2lzdGVyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZnJhZ21lbnRJbmZvQ29udHJvbGxlciA9IE1zc0ZyYWdtZW50SW5mb0NvbnRyb2xsZXIoY29udGV4dCkuY3JlYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtUHJvY2Vzc29yOiBwcm9jZXNzb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QnVzOiBldmVudEJ1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGFzaE1ldHJpY3M6IGRhc2hNZXRyaWNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5YmFja0NvbnRyb2xsZXI6IHBsYXliYWNrQ29udHJvbGxlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZVVSTENvbnRyb2xsZXI6IGNvbmZpZy5iYXNlVVJMQ29udHJvbGxlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgSVNPQm94ZXI6IGNvbmZpZy5JU09Cb3hlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWc6IGNvbmZpZy5kZWJ1Z1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50SW5mb0NvbnRyb2xsZXIuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZyYWdtZW50SW5mb0NvbnRyb2xsZXIuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uU2VnbWVudE1lZGlhTG9hZGVkKGUpIHtcclxuICAgICAgICBpZiAoZS5lcnJvcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFByb2Nlc3MgbW9vZiB0byB0cmFuc2NvZGUgaXQgZnJvbSBNU1MgdG8gREFTSFxyXG4gICAgICAgIGxldCBzdHJlYW1Qcm9jZXNzb3IgPSBlLnNlbmRlci5nZXRTdHJlYW1Qcm9jZXNzb3IoKTtcclxuICAgICAgICBtc3NGcmFnbWVudFByb2Nlc3Nvci5wcm9jZXNzRnJhZ21lbnQoZSwgc3RyZWFtUHJvY2Vzc29yKTtcclxuXHJcbiAgICAgICAgLy8gU3RhcnQgTXNzRnJhZ21lbnRJbmZvQ29udHJvbGxlcnMgaW4gY2FzZSBvZiBzdGFydC1vdmVyIHN0cmVhbXNcclxuICAgICAgICBsZXQgc3RyZWFtSW5mbyA9IHN0cmVhbVByb2Nlc3Nvci5nZXRTdHJlYW1JbmZvKCk7XHJcbiAgICAgICAgaWYgKCFzdHJlYW1JbmZvLm1hbmlmZXN0SW5mby5pc0R5bmFtaWMgJiYgc3RyZWFtSW5mby5tYW5pZmVzdEluZm8uRFZSV2luZG93U2l6ZSAhPT0gSW5maW5pdHkpIHtcclxuICAgICAgICAgICAgc3RhcnRGcmFnbWVudEluZm9Db250cm9sbGVycygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvblBsYXliYWNrUGF1c2VkKCkge1xyXG4gICAgICAgIGlmIChwbGF5YmFja0NvbnRyb2xsZXIuZ2V0SXNEeW5hbWljKCkgJiYgcGxheWJhY2tDb250cm9sbGVyLmdldFRpbWUoKSAhPT0gMCkge1xyXG4gICAgICAgICAgICBzdGFydEZyYWdtZW50SW5mb0NvbnRyb2xsZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUGxheWJhY2tTZWVrQXNrZWQoKSB7XHJcbiAgICAgICAgaWYgKHBsYXliYWNrQ29udHJvbGxlci5nZXRJc0R5bmFtaWMoKSAmJiBwbGF5YmFja0NvbnRyb2xsZXIuZ2V0VGltZSgpICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0RnJhZ21lbnRJbmZvQ29udHJvbGxlcnMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25UVE1MUHJlUHJvY2Vzcyh0dG1sU3VidGl0bGVzKSB7XHJcbiAgICAgICAgaWYgKCF0dG1sU3VidGl0bGVzIHx8ICF0dG1sU3VidGl0bGVzLmRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHRtbFN1YnRpdGxlcy5kYXRhID0gdHRtbFN1YnRpdGxlcy5kYXRhLnJlcGxhY2UoL2h0dHA6XFwvXFwvd3d3LnczLm9yZ1xcLzIwMDZcXC8xMFxcL3R0YWYxL2dpLCAnaHR0cDovL3d3dy53My5vcmcvbnMvdHRtbCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlZ2lzdGVyRXZlbnRzKCkge1xyXG4gICAgICAgIGV2ZW50QnVzLm9uKGV2ZW50cy5JTklUX1JFUVVFU1RFRCwgb25Jbml0aWFsaXphdGlvblJlcXVlc3RlZCwgaW5zdGFuY2UsIGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0U2luZ2xldG9uRmFjdG9yeUJ5TmFtZShldmVudEJ1cy5nZXRDbGFzc05hbWUoKSkuRVZFTlRfUFJJT1JJVFlfSElHSCk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xyXG4gICAgICAgIGV2ZW50QnVzLm9uKGV2ZW50cy5QTEFZQkFDS19QQVVTRUQsIG9uUGxheWJhY2tQYXVzZWQsIGluc3RhbmNlLCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnlCeU5hbWUoZXZlbnRCdXMuZ2V0Q2xhc3NOYW1lKCkpLkVWRU5UX1BSSU9SSVRZX0hJR0gpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuUExBWUJBQ0tfU0VFS19BU0tFRCwgb25QbGF5YmFja1NlZWtBc2tlZCwgaW5zdGFuY2UsIGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0U2luZ2xldG9uRmFjdG9yeUJ5TmFtZShldmVudEJ1cy5nZXRDbGFzc05hbWUoKSkuRVZFTlRfUFJJT1JJVFlfSElHSCk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xyXG4gICAgICAgIGV2ZW50QnVzLm9uKGV2ZW50cy5GUkFHTUVOVF9MT0FESU5HX0NPTVBMRVRFRCwgb25TZWdtZW50TWVkaWFMb2FkZWQsIGluc3RhbmNlLCBkYXNoanMuRmFjdG9yeU1ha2VyLmdldFNpbmdsZXRvbkZhY3RvcnlCeU5hbWUoZXZlbnRCdXMuZ2V0Q2xhc3NOYW1lKCkpLkVWRU5UX1BSSU9SSVRZX0hJR0gpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuICAgICAgICBldmVudEJ1cy5vbihldmVudHMuVFRNTF9UT19QQVJTRSwgb25UVE1MUHJlUHJvY2VzcywgaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgICAgIGV2ZW50QnVzLm9mZihldmVudHMuSU5JVF9SRVFVRVNURUQsIG9uSW5pdGlhbGl6YXRpb25SZXF1ZXN0ZWQsIHRoaXMpO1xyXG4gICAgICAgIGV2ZW50QnVzLm9mZihldmVudHMuUExBWUJBQ0tfUEFVU0VELCBvblBsYXliYWNrUGF1c2VkLCB0aGlzKTtcclxuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLlBMQVlCQUNLX1NFRUtfQVNLRUQsIG9uUGxheWJhY2tTZWVrQXNrZWQsIHRoaXMpO1xyXG4gICAgICAgIGV2ZW50QnVzLm9mZihldmVudHMuRlJBR01FTlRfTE9BRElOR19DT01QTEVURUQsIG9uU2VnbWVudE1lZGlhTG9hZGVkLCB0aGlzKTtcclxuICAgICAgICBldmVudEJ1cy5vZmYoZXZlbnRzLlRUTUxfVE9fUEFSU0UsIG9uVFRNTFByZVByb2Nlc3MsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZU1zc1BhcnNlcigpIHtcclxuICAgICAgICBtc3NQYXJzZXIgPSBNc3NQYXJzZXIoY29udGV4dCkuY3JlYXRlKGNvbmZpZyk7XHJcbiAgICAgICAgcmV0dXJuIG1zc1BhcnNlcjtcclxuICAgIH1cclxuXHJcbiAgICBpbnN0YW5jZSA9IHtcclxuICAgICAgICByZXNldDogcmVzZXQsXHJcbiAgICAgICAgY3JlYXRlTXNzUGFyc2VyOiBjcmVhdGVNc3NQYXJzZXIsXHJcbiAgICAgICAgcmVnaXN0ZXJFdmVudHM6IHJlZ2lzdGVyRXZlbnRzXHJcbiAgICB9O1xyXG5cclxuICAgIHNldHVwKCk7XHJcblxyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5Nc3NIYW5kbGVyLl9fZGFzaGpzX2ZhY3RvcnlfbmFtZSA9ICdNc3NIYW5kbGVyJztcclxuY29uc3QgZmFjdG9yeSA9IGRhc2hqcy5GYWN0b3J5TWFrZXIuZ2V0Q2xhc3NGYWN0b3J5KE1zc0hhbmRsZXIpOyAvKiBqc2hpbnQgaWdub3JlOmxpbmUgKi9cclxuZmFjdG9yeS5lcnJvcnMgPSBNc3NFcnJvcnM7XHJcbmRhc2hqcy5GYWN0b3J5TWFrZXIudXBkYXRlQ2xhc3NGYWN0b3J5KE1zc0hhbmRsZXIuX19kYXNoanNfZmFjdG9yeV9uYW1lLCBmYWN0b3J5KTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7IC8qIGpzaGludCBpZ25vcmU6bGluZSAqL1xyXG4iLCIvKipcclxuICogVGhlIGNvcHlyaWdodCBpbiB0aGlzIHNvZnR3YXJlIGlzIGJlaW5nIG1hZGUgYXZhaWxhYmxlIHVuZGVyIHRoZSBCU0QgTGljZW5zZSxcclxuICogaW5jbHVkZWQgYmVsb3cuIFRoaXMgc29mdHdhcmUgbWF5IGJlIHN1YmplY3QgdG8gb3RoZXIgdGhpcmQgcGFydHkgYW5kIGNvbnRyaWJ1dG9yXHJcbiAqIHJpZ2h0cywgaW5jbHVkaW5nIHBhdGVudCByaWdodHMsIGFuZCBubyBzdWNoIHJpZ2h0cyBhcmUgZ3JhbnRlZCB1bmRlciB0aGlzIGxpY2Vuc2UuXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgMjAxMywgRGFzaCBJbmR1c3RyeSBGb3J1bS5cclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICpcclxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbixcclxuICogYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcclxuICogIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxyXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXHJcbiAqICB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vclxyXG4gKiAgb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBEYXNoIEluZHVzdHJ5IEZvcnVtIG5vciB0aGUgbmFtZXMgb2YgaXRzXHJcbiAqICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlXHJcbiAqICB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cclxuICpcclxuICogIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgQVMgSVMgQU5EIEFOWVxyXG4gKiAgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRFxyXG4gKiAgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELlxyXG4gKiAgSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBIT0xERVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcclxuICogIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVRcclxuICogIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1JcclxuICogIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUlkgT0YgTElBQklMSVRZLFxyXG4gKiAgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKVxyXG4gKiAgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEVcclxuICogIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxyXG4gKi9cclxuaW1wb3J0IEVycm9yc0Jhc2UgZnJvbSAnLi4vLi4vY29yZS9lcnJvcnMvRXJyb3JzQmFzZSc7XHJcbi8qKlxyXG4gKiBAY2xhc3NcclxuICpcclxuICovXHJcbmNsYXNzIE1zc0Vycm9ycyBleHRlbmRzIEVycm9yc0Jhc2Uge1xyXG5cdGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEVycm9yIGNvZGUgcmV0dXJuZWQgd2hlbiBubyB0ZnJmIGJveCBpcyBkZXRlY3RlZCBpbiBNU1MgbGl2ZSBzdHJlYW1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1TU19OT19URlJGX0NPREUgPSAyMDA7XHJcbiAgICAgICAgdGhpcy5NU1NfVU5TVVBQT1JURURfQ09ERUNfQ09ERSA9IDIwMTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFcnJvciBtZXNzYWdlIHJldHVybmVkIHdoZW4gbm8gdGZyZiBib3ggaXMgZGV0ZWN0ZWQgaW4gTVNTIGxpdmUgc3RyZWFtXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5NU1NfTk9fVEZSRl9NRVNTQUdFID0gJ01pc3NpbmcgdGZyZiBpbiBsaXZlIG1lZGlhIHNlZ21lbnQnO1xyXG4gICAgICAgIHRoaXMuTVNTX1VOU1VQUE9SVEVEX0NPREVDX01FU1NBR0UgPSAnVW5zdXBwb3J0ZWQgY29kZWMnO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbXNzRXJyb3JzID0gbmV3IE1zc0Vycm9ycygpO1xyXG5leHBvcnQgZGVmYXVsdCBtc3NFcnJvcnM7IiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcblxyXG5pbXBvcnQgTXNzSGFuZGxlciBmcm9tICcuL01zc0hhbmRsZXInO1xyXG5cclxuLy8gU2hvdmUgYm90aCBvZiB0aGVzZSBpbnRvIHRoZSBnbG9iYWwgc2NvcGVcclxudmFyIGNvbnRleHQgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCBnbG9iYWw7XHJcblxyXG52YXIgZGFzaGpzID0gY29udGV4dC5kYXNoanM7XHJcbmlmICghZGFzaGpzKSB7XHJcbiAgICBkYXNoanMgPSBjb250ZXh0LmRhc2hqcyA9IHt9O1xyXG59XHJcblxyXG5kYXNoanMuTXNzSGFuZGxlciA9IE1zc0hhbmRsZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYXNoanM7XHJcbmV4cG9ydCB7IE1zc0hhbmRsZXIgfTtcclxuIiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcblxyXG4vKipcclxuICogQG1vZHVsZSBNc3NQYXJzZXJcclxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBvYmplY3RcclxuICovXHJcbmZ1bmN0aW9uIE1zc1BhcnNlcihjb25maWcpIHtcclxuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuICAgIGNvbnN0IEJBU0U2NCA9IGNvbmZpZy5CQVNFNjQ7XHJcbiAgICBjb25zdCBkZWJ1ZyA9IGNvbmZpZy5kZWJ1ZztcclxuICAgIGNvbnN0IGNvbnN0YW50cyA9IGNvbmZpZy5jb25zdGFudHM7XHJcbiAgICBjb25zdCBtYW5pZmVzdE1vZGVsID0gY29uZmlnLm1hbmlmZXN0TW9kZWw7XHJcblxyXG4gICAgY29uc3QgREVGQVVMVF9USU1FX1NDQUxFID0gMTAwMDAwMDAuMDtcclxuICAgIGNvbnN0IFNVUFBPUlRFRF9DT0RFQ1MgPSBbJ0FBQycsICdBQUNMJywgJ0FWQzEnLCAnSDI2NCcsICdUVE1MJywgJ0RGWFAnXTtcclxuICAgIC8vIE1QRUctREFTSCBSb2xlIGFuZCBhY2Nlc3NpYmlsaXR5IG1hcHBpbmcgYWNjb3JkaW5nIHRvIEVUU0kgVFMgMTAzIDI4NSB2MS4xLjEgKHNlY3Rpb24gNy4xLjIpXHJcbiAgICBjb25zdCBST0xFID0ge1xyXG4gICAgICAgICdTVUJUJzogJ2FsdGVybmF0ZScsXHJcbiAgICAgICAgJ0NBUFQnOiAnYWx0ZXJuYXRlJywgLy8gJ0NBUFQnIGlzIGNvbW1vbmx5IGVxdWl2YWxlbnQgdG8gJ1NVQlQnXHJcbiAgICAgICAgJ0RFU0MnOiAnbWFpbidcclxuICAgIH07XHJcbiAgICBjb25zdCBBQ0NFU1NJQklMSVRZID0ge1xyXG4gICAgICAgICdERVNDJzogJzInXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc2FtcGxpbmdGcmVxdWVuY3lJbmRleCA9IHtcclxuICAgICAgICA5NjAwMDogMHgwLFxyXG4gICAgICAgIDg4MjAwOiAweDEsXHJcbiAgICAgICAgNjQwMDA6IDB4MixcclxuICAgICAgICA0ODAwMDogMHgzLFxyXG4gICAgICAgIDQ0MTAwOiAweDQsXHJcbiAgICAgICAgMzIwMDA6IDB4NSxcclxuICAgICAgICAyNDAwMDogMHg2LFxyXG4gICAgICAgIDIyMDUwOiAweDcsXHJcbiAgICAgICAgMTYwMDA6IDB4OCxcclxuICAgICAgICAxMjAwMDogMHg5LFxyXG4gICAgICAgIDExMDI1OiAweEEsXHJcbiAgICAgICAgODAwMDogMHhCLFxyXG4gICAgICAgIDczNTA6IDB4Q1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG1pbWVUeXBlTWFwID0ge1xyXG4gICAgICAgICd2aWRlbyc6ICd2aWRlby9tcDQnLFxyXG4gICAgICAgICdhdWRpbyc6ICdhdWRpby9tcDQnLFxyXG4gICAgICAgICd0ZXh0JzogJ2FwcGxpY2F0aW9uL21wNCdcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGluc3RhbmNlLFxyXG4gICAgICAgIGxvZ2dlcixcclxuICAgICAgICBtZWRpYVBsYXllck1vZGVsO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgICAgICBsb2dnZXIgPSBkZWJ1Zy5nZXRMb2dnZXIoaW5zdGFuY2UpO1xyXG4gICAgICAgIG1lZGlhUGxheWVyTW9kZWwgPSBjb25maWcubWVkaWFQbGF5ZXJNb2RlbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYXBQZXJpb2Qoc21vb3RoU3RyZWFtaW5nTWVkaWEsIHRpbWVzY2FsZSkge1xyXG4gICAgICAgIGNvbnN0IHBlcmlvZCA9IHt9O1xyXG4gICAgICAgIGxldCBzdHJlYW1zLFxyXG4gICAgICAgICAgICBhZGFwdGF0aW9uO1xyXG5cclxuICAgICAgICAvLyBGb3IgZWFjaCBTdHJlYW1JbmRleCBub2RlLCBjcmVhdGUgYW4gQWRhcHRhdGlvblNldCBlbGVtZW50XHJcbiAgICAgICAgcGVyaW9kLkFkYXB0YXRpb25TZXRfYXNBcnJheSA9IFtdO1xyXG4gICAgICAgIHN0cmVhbXMgPSBzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnU3RyZWFtSW5kZXgnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmVhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYWRhcHRhdGlvbiA9IG1hcEFkYXB0YXRpb25TZXQoc3RyZWFtc1tpXSwgdGltZXNjYWxlKTtcclxuICAgICAgICAgICAgaWYgKGFkYXB0YXRpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHBlcmlvZC5BZGFwdGF0aW9uU2V0X2FzQXJyYXkucHVzaChhZGFwdGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBlcmlvZC5BZGFwdGF0aW9uU2V0X2FzQXJyYXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBwZXJpb2QuQWRhcHRhdGlvblNldCA9IChwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5Lmxlbmd0aCA+IDEpID8gcGVyaW9kLkFkYXB0YXRpb25TZXRfYXNBcnJheSA6IHBlcmlvZC5BZGFwdGF0aW9uU2V0X2FzQXJyYXlbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcGVyaW9kO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hcEFkYXB0YXRpb25TZXQoc3RyZWFtSW5kZXgsIHRpbWVzY2FsZSkge1xyXG4gICAgICAgIGNvbnN0IGFkYXB0YXRpb25TZXQgPSB7fTtcclxuICAgICAgICBjb25zdCByZXByZXNlbnRhdGlvbnMgPSBbXTtcclxuICAgICAgICBsZXQgc2VnbWVudFRlbXBsYXRlO1xyXG4gICAgICAgIGxldCBxdWFsaXR5TGV2ZWxzLFxyXG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbixcclxuICAgICAgICAgICAgc2VnbWVudHMsXHJcbiAgICAgICAgICAgIGk7XHJcblxyXG4gICAgICAgIGFkYXB0YXRpb25TZXQuaWQgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ05hbWUnKSA/IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnTmFtZScpIDogc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdUeXBlJyk7XHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5jb250ZW50VHlwZSA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnVHlwZScpO1xyXG4gICAgICAgIGFkYXB0YXRpb25TZXQubGFuZyA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnTGFuZ3VhZ2UnKSB8fCAndW5kJztcclxuICAgICAgICBhZGFwdGF0aW9uU2V0Lm1pbWVUeXBlID0gbWltZVR5cGVNYXBbYWRhcHRhdGlvblNldC5jb250ZW50VHlwZV07XHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5zdWJUeXBlID0gc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdTdWJ0eXBlJyk7XHJcbiAgICAgICAgYWRhcHRhdGlvblNldC5tYXhXaWR0aCA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnTWF4V2lkdGgnKTtcclxuICAgICAgICBhZGFwdGF0aW9uU2V0Lm1heEhlaWdodCA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnTWF4SGVpZ2h0Jyk7XHJcblxyXG4gICAgICAgIC8vIE1hcCBzdWJUeXBlcyB0byBNUEVHLURBU0ggQWRhcHRhdGlvblNldCByb2xlIGFuZCBhY2Nlc3NpYmlsaXR5IChzZWUgRVRTSSBUUyAxMDMgMjg1IHYxLjEuMSwgc2VjdGlvbiA3LjEuMilcclxuICAgICAgICBpZiAoYWRhcHRhdGlvblNldC5zdWJUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChST0xFW2FkYXB0YXRpb25TZXQuc3ViVHlwZV0pIHtcclxuICAgICAgICAgICAgICAgIGxldCByb2xlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtZUlkVXJpOiAndXJuOm1wZWc6ZGFzaDpyb2xlOjIwMTEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBST0xFW2FkYXB0YXRpb25TZXQuc3ViVHlwZV1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhZGFwdGF0aW9uU2V0LlJvbGUgPSByb2xlO1xyXG4gICAgICAgICAgICAgICAgYWRhcHRhdGlvblNldC5Sb2xlX2FzQXJyYXkgPSBbcm9sZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKEFDQ0VTU0lCSUxJVFlbYWRhcHRhdGlvblNldC5zdWJUeXBlXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY2Vzc2liaWxpdHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1lSWRVcmk6ICd1cm46dHZhOm1ldGFkYXRhOmNzOkF1ZGlvUHVycG9zZUNTOjIwMDcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBBQ0NFU1NJQklMSVRZW2FkYXB0YXRpb25TZXQuc3ViVHlwZV1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBhZGFwdGF0aW9uU2V0LkFjY2Vzc2liaWxpdHkgPSBhY2Nlc3NpYmlsaXR5O1xyXG4gICAgICAgICAgICAgICAgYWRhcHRhdGlvblNldC5BY2Nlc3NpYmlsaXR5X2FzQXJyYXkgPSBbYWNjZXNzaWJpbGl0eV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIFNlZ21lbnRUZW1wbGF0ZSB3aXRoIGEgU2VnbWVudFRpbWVsaW5lXHJcbiAgICAgICAgc2VnbWVudFRlbXBsYXRlID0gbWFwU2VnbWVudFRlbXBsYXRlKHN0cmVhbUluZGV4LCB0aW1lc2NhbGUpO1xyXG5cclxuICAgICAgICBxdWFsaXR5TGV2ZWxzID0gc3RyZWFtSW5kZXguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1F1YWxpdHlMZXZlbCcpO1xyXG4gICAgICAgIC8vIEZvciBlYWNoIFF1YWxpdHlMZXZlbCBub2RlLCBjcmVhdGUgYSBSZXByZXNlbnRhdGlvbiBlbGVtZW50XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHF1YWxpdHlMZXZlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gUHJvcGFnYXRlIEJhc2VVUkwgYW5kIG1pbWVUeXBlXHJcbiAgICAgICAgICAgIHF1YWxpdHlMZXZlbHNbaV0uQmFzZVVSTCA9IGFkYXB0YXRpb25TZXQuQmFzZVVSTDtcclxuICAgICAgICAgICAgcXVhbGl0eUxldmVsc1tpXS5taW1lVHlwZSA9IGFkYXB0YXRpb25TZXQubWltZVR5cGU7XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgcXVhbGl0eSBsZXZlbCBpZFxyXG4gICAgICAgICAgICBxdWFsaXR5TGV2ZWxzW2ldLklkID0gYWRhcHRhdGlvblNldC5pZCArICdfJyArIHF1YWxpdHlMZXZlbHNbaV0uZ2V0QXR0cmlidXRlKCdJbmRleCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gTWFwIFJlcHJlc2VudGF0aW9uIHRvIFF1YWxpdHlMZXZlbFxyXG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbiA9IG1hcFJlcHJlc2VudGF0aW9uKHF1YWxpdHlMZXZlbHNbaV0sIHN0cmVhbUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXByZXNlbnRhdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ29weSBTZWdtZW50VGVtcGxhdGUgaW50byBSZXByZXNlbnRhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVwcmVzZW50YXRpb24uU2VnbWVudFRlbXBsYXRlID0gc2VnbWVudFRlbXBsYXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcHJlc2VudGF0aW9ucy5wdXNoKHJlcHJlc2VudGF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcHJlc2VudGF0aW9ucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGFwdGF0aW9uU2V0LlJlcHJlc2VudGF0aW9uID0gKHJlcHJlc2VudGF0aW9ucy5sZW5ndGggPiAxKSA/IHJlcHJlc2VudGF0aW9ucyA6IHJlcHJlc2VudGF0aW9uc1swXTtcclxuICAgICAgICBhZGFwdGF0aW9uU2V0LlJlcHJlc2VudGF0aW9uX2FzQXJyYXkgPSByZXByZXNlbnRhdGlvbnM7XHJcblxyXG4gICAgICAgIC8vIFNldCBTZWdtZW50VGVtcGxhdGVcclxuICAgICAgICBhZGFwdGF0aW9uU2V0LlNlZ21lbnRUZW1wbGF0ZSA9IHNlZ21lbnRUZW1wbGF0ZTtcclxuXHJcbiAgICAgICAgc2VnbWVudHMgPSBzZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLlNfYXNBcnJheTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFkYXB0YXRpb25TZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFwUmVwcmVzZW50YXRpb24ocXVhbGl0eUxldmVsLCBzdHJlYW1JbmRleCkge1xyXG4gICAgICAgIGNvbnN0IHJlcHJlc2VudGF0aW9uID0ge307XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnVHlwZScpO1xyXG4gICAgICAgIGxldCBmb3VyQ0NWYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLmlkID0gcXVhbGl0eUxldmVsLklkO1xyXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLmJhbmR3aWR0aCA9IHBhcnNlSW50KHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0JpdHJhdGUnKSwgMTApO1xyXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLm1pbWVUeXBlID0gcXVhbGl0eUxldmVsLm1pbWVUeXBlO1xyXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLndpZHRoID0gcGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnTWF4V2lkdGgnKSwgMTApO1xyXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLmhlaWdodCA9IHBhcnNlSW50KHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ01heEhlaWdodCcpLCAxMCk7XHJcblxyXG4gICAgICAgIGZvdXJDQ1ZhbHVlID0gcXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnRm91ckNDJyk7XHJcblxyXG4gICAgICAgIC8vIElmIEZvdXJDQyBub3QgZGVmaW5lZCBhdCBRdWFsaXR5TGV2ZWwgbGV2ZWwsIHRoZW4gZ2V0IGl0IGZyb20gU3RyZWFtSW5kZXggbGV2ZWxcclxuICAgICAgICBpZiAoZm91ckNDVmFsdWUgPT09IG51bGwgfHwgZm91ckNDVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGZvdXJDQ1ZhbHVlID0gc3RyZWFtSW5kZXguZ2V0QXR0cmlidXRlKCdGb3VyQ0MnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHN0aWxsIG5vdCBkZWZpbmVkIChvcHRpb25uYWwgZm9yIGF1ZGlvIHN0cmVhbSwgc2VlIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvZmY3MjgxMTYlMjh2PXZzLjk1JTI5LmFzcHgpLFxyXG4gICAgICAgIC8vIHRoZW4gd2UgY29uc2lkZXIgdGhlIHN0cmVhbSBpcyBhbiBhdWRpbyBBQUMgc3RyZWFtXHJcbiAgICAgICAgaWYgKGZvdXJDQ1ZhbHVlID09PSBudWxsIHx8IGZvdXJDQ1ZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xyXG4gICAgICAgICAgICAgICAgZm91ckNDVmFsdWUgPSAnQUFDJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0ZvdXJDQyBpcyBub3QgZGVmaW5lZCB3aGVyZWFzIGl0IGlzIHJlcXVpcmVkIGZvciBhIFF1YWxpdHlMZXZlbCBlbGVtZW50IGZvciBhIFN0cmVhbUluZGV4IG9mIHR5cGUgXCJ2aWRlb1wiJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgY29kZWMgaXMgc3VwcG9ydGVkXHJcbiAgICAgICAgaWYgKFNVUFBPUlRFRF9DT0RFQ1MuaW5kZXhPZihmb3VyQ0NWYWx1ZS50b1VwcGVyQ2FzZSgpKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgLy8gRG8gbm90IHNlbmQgd2FybmluZ1xyXG4gICAgICAgICAgICBsb2dnZXIud2FybignQ29kZWMgbm90IHN1cHBvcnRlZDogJyArIGZvdXJDQ1ZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBHZXQgY29kZWNzIHZhbHVlIGFjY29yZGluZyB0byBGb3VyQ0MgZmllbGRcclxuICAgICAgICBpZiAoZm91ckNDVmFsdWUgPT09ICdIMjY0JyB8fCBmb3VyQ0NWYWx1ZSA9PT0gJ0FWQzEnKSB7XHJcbiAgICAgICAgICAgIHJlcHJlc2VudGF0aW9uLmNvZGVjcyA9IGdldEgyNjRDb2RlYyhxdWFsaXR5TGV2ZWwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm91ckNDVmFsdWUuaW5kZXhPZignQUFDJykgPj0gMCkge1xyXG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbi5jb2RlY3MgPSBnZXRBQUNDb2RlYyhxdWFsaXR5TGV2ZWwsIGZvdXJDQ1ZhbHVlKTtcclxuICAgICAgICAgICAgcmVwcmVzZW50YXRpb24uYXVkaW9TYW1wbGluZ1JhdGUgPSBwYXJzZUludChxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdTYW1wbGluZ1JhdGUnKSwgMTApO1xyXG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbi5hdWRpb0NoYW5uZWxzID0gcGFyc2VJbnQocXVhbGl0eUxldmVsLmdldEF0dHJpYnV0ZSgnQ2hhbm5lbHMnKSwgMTApO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm91ckNDVmFsdWUuaW5kZXhPZignVFRNTCcpIHx8IGZvdXJDQ1ZhbHVlLmluZGV4T2YoJ0RGWFAnKSkge1xyXG4gICAgICAgICAgICByZXByZXNlbnRhdGlvbi5jb2RlY3MgPSBjb25zdGFudHMuU1RQUDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcHJlc2VudGF0aW9uLmNvZGVjUHJpdmF0ZURhdGEgPSAnJyArIHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ0NvZGVjUHJpdmF0ZURhdGEnKTtcclxuICAgICAgICByZXByZXNlbnRhdGlvbi5CYXNlVVJMID0gcXVhbGl0eUxldmVsLkJhc2VVUkw7XHJcblxyXG4gICAgICAgIHJldHVybiByZXByZXNlbnRhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRIMjY0Q29kZWMocXVhbGl0eUxldmVsKSB7XHJcbiAgICAgICAgbGV0IGNvZGVjUHJpdmF0ZURhdGEgPSBxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdDb2RlY1ByaXZhdGVEYXRhJykudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbmFsSGVhZGVyLFxyXG4gICAgICAgICAgICBhdmNvdGk7XHJcblxyXG5cclxuICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIENvZGVjUHJpdmF0ZURhdGEgZmllbGQgdGhlIGhleGFkZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBmb2xsb3dpbmdcclxuICAgICAgICAvLyB0aHJlZSBieXRlcyBpbiB0aGUgc2VxdWVuY2UgcGFyYW1ldGVyIHNldCBOQUwgdW5pdC5cclxuICAgICAgICAvLyA9PiBGaW5kIHRoZSBTUFMgbmFsIGhlYWRlclxyXG4gICAgICAgIG5hbEhlYWRlciA9IC8wMDAwMDAwMVswLTldNy8uZXhlYyhjb2RlY1ByaXZhdGVEYXRhKTtcclxuICAgICAgICAvLyA9PiBGaW5kIHRoZSA2IGNoYXJhY3RlcnMgYWZ0ZXIgdGhlIFNQUyBuYWxIZWFkZXIgKGlmIGl0IGV4aXN0cylcclxuICAgICAgICBhdmNvdGkgPSBuYWxIZWFkZXIgJiYgbmFsSGVhZGVyWzBdID8gKGNvZGVjUHJpdmF0ZURhdGEuc3Vic3RyKGNvZGVjUHJpdmF0ZURhdGEuaW5kZXhPZihuYWxIZWFkZXJbMF0pICsgMTAsIDYpKSA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgcmV0dXJuICdhdmMxLicgKyBhdmNvdGk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0QUFDQ29kZWMocXVhbGl0eUxldmVsLCBmb3VyQ0NWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHNhbXBsaW5nUmF0ZSA9IHBhcnNlSW50KHF1YWxpdHlMZXZlbC5nZXRBdHRyaWJ1dGUoJ1NhbXBsaW5nUmF0ZScpLCAxMCk7XHJcbiAgICAgICAgbGV0IGNvZGVjUHJpdmF0ZURhdGEgPSBxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdDb2RlY1ByaXZhdGVEYXRhJykudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgb2JqZWN0VHlwZSA9IDA7XHJcbiAgICAgICAgbGV0IGNvZGVjUHJpdmF0ZURhdGFIZXgsXHJcbiAgICAgICAgICAgIGFycjE2LFxyXG4gICAgICAgICAgICBpbmRleEZyZXEsXHJcbiAgICAgICAgICAgIGV4dGVuc2lvblNhbXBsaW5nRnJlcXVlbmN5SW5kZXg7XHJcblxyXG4gICAgICAgIC8vY2hyb21lIHByb2JsZW0sIGluIGltcGxpY2l0IEFBQyBIRSBkZWZpbml0aW9uLCBzbyB3aGVuIEFBQ0ggaXMgZGV0ZWN0ZWQgaW4gRm91ckNDXHJcbiAgICAgICAgLy9zZXQgb2JqZWN0VHlwZSB0byA1ID0+IHN0cmFuZ2UsIGl0IHNob3VsZCBiZSAyXHJcbiAgICAgICAgaWYgKGZvdXJDQ1ZhbHVlID09PSAnQUFDSCcpIHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZSA9IDB4MDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vaWYgY29kZWNQcml2YXRlRGF0YSBpcyBlbXB0eSwgYnVpbGQgaXQgOlxyXG4gICAgICAgIGlmIChjb2RlY1ByaXZhdGVEYXRhID09PSB1bmRlZmluZWQgfHwgY29kZWNQcml2YXRlRGF0YSA9PT0gJycpIHtcclxuICAgICAgICAgICAgb2JqZWN0VHlwZSA9IDB4MDI7IC8vQUFDIE1haW4gTG93IENvbXBsZXhpdHkgPT4gb2JqZWN0IFR5cGUgPSAyXHJcbiAgICAgICAgICAgIGluZGV4RnJlcSA9IHNhbXBsaW5nRnJlcXVlbmN5SW5kZXhbc2FtcGxpbmdSYXRlXTtcclxuICAgICAgICAgICAgaWYgKGZvdXJDQ1ZhbHVlID09PSAnQUFDSCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIDQgYnl0ZXMgOiAgICAgWFhYWFggICAgICAgICBYWFhYICAgICAgICAgIFhYWFggICAgICAgICAgICAgWFhYWCAgICAgICAgICAgICAgICAgIFhYWFhYICAgICAgWFhYICAgWFhYWFhYWFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICcgT2JqZWN0VHlwZScgJ0ZyZXEgSW5kZXgnICdDaGFubmVscyB2YWx1ZScgICAnRXh0ZW5zIFNhbXBsIEZyZXEnICAnT2JqZWN0VHlwZScgICdHQVMnICdhbGlnbm1lbnQgPSAwJ1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA9IDB4MDU7IC8vIEhpZ2ggRWZmaWNpZW5jeSBBQUMgUHJvZmlsZSA9IG9iamVjdCBUeXBlID0gNSBTQlJcclxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGEgPSBuZXcgVWludDhBcnJheSg0KTtcclxuICAgICAgICAgICAgICAgIGV4dGVuc2lvblNhbXBsaW5nRnJlcXVlbmN5SW5kZXggPSBzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4W3NhbXBsaW5nUmF0ZSAqIDJdOyAvLyBpbiBIRSBBQUMgRXh0ZW5zaW9uIFNhbXBsaW5nIGZyZXF1ZW5jZVxyXG4gICAgICAgICAgICAgICAgLy8gZXF1YWxzIHRvIFNhbXBsaW5nUmF0ZSoyXHJcbiAgICAgICAgICAgICAgICAvL0ZyZXEgSW5kZXggaXMgcHJlc2VudCBmb3IgMyBiaXRzIGluIHRoZSBmaXJzdCBieXRlLCBsYXN0IGJpdCBpcyBpbiB0aGUgc2Vjb25kXHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhWzBdID0gKG9iamVjdFR5cGUgPDwgMykgfCAoaW5kZXhGcmVxID4+IDEpO1xyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YVsxXSA9IChpbmRleEZyZXEgPDwgNykgfCAocXVhbGl0eUxldmVsLkNoYW5uZWxzIDw8IDMpIHwgKGV4dGVuc2lvblNhbXBsaW5nRnJlcXVlbmN5SW5kZXggPj4gMSk7XHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhWzJdID0gKGV4dGVuc2lvblNhbXBsaW5nRnJlcXVlbmN5SW5kZXggPDwgNykgfCAoMHgwMiA8PCAyKTsgLy8gb3JpZ2luIG9iamVjdCB0eXBlIGVxdWFscyB0byAyID0+IEFBQyBNYWluIExvdyBDb21wbGV4aXR5XHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhWzNdID0gMHgwOyAvL2FsaWdubWVudCBiaXRzXHJcblxyXG4gICAgICAgICAgICAgICAgYXJyMTYgPSBuZXcgVWludDE2QXJyYXkoMik7XHJcbiAgICAgICAgICAgICAgICBhcnIxNlswXSA9IChjb2RlY1ByaXZhdGVEYXRhWzBdIDw8IDgpICsgY29kZWNQcml2YXRlRGF0YVsxXTtcclxuICAgICAgICAgICAgICAgIGFycjE2WzFdID0gKGNvZGVjUHJpdmF0ZURhdGFbMl0gPDwgOCkgKyBjb2RlY1ByaXZhdGVEYXRhWzNdO1xyXG4gICAgICAgICAgICAgICAgLy9jb252ZXJ0IGRlY2ltYWwgdG8gaGV4IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhSGV4ID0gYXJyMTZbMF0udG9TdHJpbmcoMTYpO1xyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YUhleCA9IGFycjE2WzBdLnRvU3RyaW5nKDE2KSArIGFycjE2WzFdLnRvU3RyaW5nKDE2KTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAyIGJ5dGVzIDogICAgIFhYWFhYICAgICAgICAgWFhYWCAgICAgICAgICBYWFhYICAgICAgICAgICAgICBYWFhcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAnIE9iamVjdFR5cGUnICdGcmVxIEluZGV4JyAnQ2hhbm5lbHMgdmFsdWUnICAgJ0dBUyA9IDAwMCdcclxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGEgPSBuZXcgVWludDhBcnJheSgyKTtcclxuICAgICAgICAgICAgICAgIC8vRnJlcSBJbmRleCBpcyBwcmVzZW50IGZvciAzIGJpdHMgaW4gdGhlIGZpcnN0IGJ5dGUsIGxhc3QgYml0IGlzIGluIHRoZSBzZWNvbmRcclxuICAgICAgICAgICAgICAgIGNvZGVjUHJpdmF0ZURhdGFbMF0gPSAob2JqZWN0VHlwZSA8PCAzKSB8IChpbmRleEZyZXEgPj4gMSk7XHJcbiAgICAgICAgICAgICAgICBjb2RlY1ByaXZhdGVEYXRhWzFdID0gKGluZGV4RnJlcSA8PCA3KSB8IChwYXJzZUludChxdWFsaXR5TGV2ZWwuZ2V0QXR0cmlidXRlKCdDaGFubmVscycpLCAxMCkgPDwgMyk7XHJcbiAgICAgICAgICAgICAgICAvLyBwdXQgdGhlIDIgYnl0ZXMgaW4gYW4gMTYgYml0cyBhcnJheVxyXG4gICAgICAgICAgICAgICAgYXJyMTYgPSBuZXcgVWludDE2QXJyYXkoMSk7XHJcbiAgICAgICAgICAgICAgICBhcnIxNlswXSA9IChjb2RlY1ByaXZhdGVEYXRhWzBdIDw8IDgpICsgY29kZWNQcml2YXRlRGF0YVsxXTtcclxuICAgICAgICAgICAgICAgIC8vY29udmVydCBkZWNpbWFsIHRvIGhleCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YUhleCA9IGFycjE2WzBdLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YSA9ICcnICsgY29kZWNQcml2YXRlRGF0YUhleDtcclxuICAgICAgICAgICAgY29kZWNQcml2YXRlRGF0YSA9IGNvZGVjUHJpdmF0ZURhdGEudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgcXVhbGl0eUxldmVsLnNldEF0dHJpYnV0ZSgnQ29kZWNQcml2YXRlRGF0YScsIGNvZGVjUHJpdmF0ZURhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqZWN0VHlwZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBvYmplY3RUeXBlID0gKHBhcnNlSW50KGNvZGVjUHJpdmF0ZURhdGEuc3Vic3RyKDAsIDIpLCAxNikgJiAweEY4KSA+PiAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICdtcDRhLjQwLicgKyBvYmplY3RUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hcFNlZ21lbnRUZW1wbGF0ZShzdHJlYW1JbmRleCwgdGltZXNjYWxlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudFRlbXBsYXRlID0ge307XHJcbiAgICAgICAgbGV0IG1lZGlhVXJsLFxyXG4gICAgICAgICAgICBzdHJlYW1JbmRleFRpbWVTY2FsZTtcclxuXHJcbiAgICAgICAgbWVkaWFVcmwgPSBzdHJlYW1JbmRleC5nZXRBdHRyaWJ1dGUoJ1VybCcpLnJlcGxhY2UoJ3tiaXRyYXRlfScsICckQmFuZHdpZHRoJCcpO1xyXG4gICAgICAgIG1lZGlhVXJsID0gbWVkaWFVcmwucmVwbGFjZSgne3N0YXJ0IHRpbWV9JywgJyRUaW1lJCcpO1xyXG5cclxuICAgICAgICBzdHJlYW1JbmRleFRpbWVTY2FsZSA9IHN0cmVhbUluZGV4LmdldEF0dHJpYnV0ZSgnVGltZVNjYWxlJyk7XHJcbiAgICAgICAgc3RyZWFtSW5kZXhUaW1lU2NhbGUgPSBzdHJlYW1JbmRleFRpbWVTY2FsZSA/IHBhcnNlRmxvYXQoc3RyZWFtSW5kZXhUaW1lU2NhbGUpIDogdGltZXNjYWxlO1xyXG5cclxuICAgICAgICBzZWdtZW50VGVtcGxhdGUubWVkaWEgPSBtZWRpYVVybDtcclxuICAgICAgICBzZWdtZW50VGVtcGxhdGUudGltZXNjYWxlID0gc3RyZWFtSW5kZXhUaW1lU2NhbGU7XHJcblxyXG4gICAgICAgIHNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUgPSBtYXBTZWdtZW50VGltZWxpbmUoc3RyZWFtSW5kZXgsIHNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gc2VnbWVudFRlbXBsYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG1hcFNlZ21lbnRUaW1lbGluZShzdHJlYW1JbmRleCwgdGltZXNjYWxlKSB7XHJcbiAgICAgICAgY29uc3Qgc2VnbWVudFRpbWVsaW5lID0ge307XHJcbiAgICAgICAgY29uc3QgY2h1bmtzID0gc3RyZWFtSW5kZXguZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2MnKTtcclxuICAgICAgICBjb25zdCBzZWdtZW50cyA9IFtdO1xyXG4gICAgICAgIGxldCBzZWdtZW50LFxyXG4gICAgICAgICAgICBwcmV2U2VnbWVudCxcclxuICAgICAgICAgICAgdE1hbmlmZXN0LFxyXG4gICAgICAgICAgICBpLGoscjtcclxuICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2h1bmtzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNlZ21lbnQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aW1lICd0JyBhdHRyaWJ1dGUgdmFsdWVcclxuICAgICAgICAgICAgdE1hbmlmZXN0ID0gY2h1bmtzW2ldLmdldEF0dHJpYnV0ZSgndCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT4gc2VnbWVudC50TWFuaWZlc3QgPSBvcmlnaW5hbCB0aW1lc3RhbXAgdmFsdWUgYXMgYSBzdHJpbmcgKGZvciBjb25zdHJ1Y3RpbmcgdGhlIGZyYWdtZW50IHJlcXVlc3QgdXJsLCBzZWUgRGFzaEhhbmRsZXIpXHJcbiAgICAgICAgICAgIC8vID0+IHNlZ21lbnQudCA9IG51bWJlciB2YWx1ZSBvZiB0aW1lc3RhbXAgKG1heWJlIHJvdW5kZWQgdmFsdWUsIGJ1dCBvbmx5IGZvciAwLjEgbWljcm9zZWNvbmQpXHJcbiAgICAgICAgICAgIHNlZ21lbnQudE1hbmlmZXN0ID0gcGFyc2VGbG9hdCh0TWFuaWZlc3QpO1xyXG4gICAgICAgICAgICBzZWdtZW50LnQgPSBwYXJzZUZsb2F0KHRNYW5pZmVzdCk7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgZHVyYXRpb24gJ2QnIGF0dHJpYnV0ZSB2YWx1ZVxyXG4gICAgICAgICAgICBzZWdtZW50LmQgPSBwYXJzZUZsb2F0KGNodW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2QnKSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiAndCcgbm90IGRlZmluZWQgZm9yIGZpcnN0IHNlZ21lbnQgdGhlbiB0PTBcclxuICAgICAgICAgICAgaWYgKChpID09PSAwKSAmJiAhc2VnbWVudC50KSB7XHJcbiAgICAgICAgICAgICAgICBzZWdtZW50LnQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHByZXZTZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcHJldmlvdXMgc2VnbWVudCBkdXJhdGlvbiBpZiBub3QgZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgaWYgKCFwcmV2U2VnbWVudC5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZTZWdtZW50LnRNYW5pZmVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2U2VnbWVudC5kID0gcGFyc2VGbG9hdCh0TWFuaWZlc3QpIC0gcGFyc2VGbG9hdChwcmV2U2VnbWVudC50TWFuaWZlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZTZWdtZW50LmQgPSBzZWdtZW50LnQgLSBwcmV2U2VnbWVudC50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiArPSBwcmV2U2VnbWVudC5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHNlZ21lbnQgYWJzb2x1dGUgdGltZXN0YW1wIGlmIG5vdCBzZXQgaW4gbWFuaWZlc3RcclxuICAgICAgICAgICAgICAgIGlmICghc2VnbWVudC50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZTZWdtZW50LnRNYW5pZmVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50LnRNYW5pZmVzdCA9IHBhcnNlRmxvYXQocHJldlNlZ21lbnQudE1hbmlmZXN0KSArIHByZXZTZWdtZW50LmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQudCA9IHBhcnNlRmxvYXQoc2VnbWVudC50TWFuaWZlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnQudCA9IHByZXZTZWdtZW50LnQgKyBwcmV2U2VnbWVudC5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNlZ21lbnQuZCkge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gKz0gc2VnbWVudC5kO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHNlZ21lbnRcclxuICAgICAgICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vIFN1cHBvcnQgZm9yICdyJyBhdHRyaWJ1dGUgKGkuZS4gXCJyZXBlYXRcIiBhcyBpbiBNUEVHLURBU0gpXHJcbiAgICAgICAgICAgIHIgPSBwYXJzZUZsb2F0KGNodW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ3InKSk7XHJcbiAgICAgICAgICAgIGlmIChyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IChyIC0gMSk7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHByZXZTZWdtZW50ID0gc2VnbWVudHNbc2VnbWVudHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQudCA9IHByZXZTZWdtZW50LnQgKyBwcmV2U2VnbWVudC5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuZCA9IHByZXZTZWdtZW50LmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZTZWdtZW50LnRNYW5pZmVzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50LnRNYW5pZmVzdCAgPSBwYXJzZUZsb2F0KHByZXZTZWdtZW50LnRNYW5pZmVzdCkgKyBwcmV2U2VnbWVudC5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiArPSBzZWdtZW50LmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMucHVzaChzZWdtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VnbWVudFRpbWVsaW5lLlMgPSBzZWdtZW50cztcclxuICAgICAgICBzZWdtZW50VGltZWxpbmUuU19hc0FycmF5ID0gc2VnbWVudHM7XHJcbiAgICAgICAgc2VnbWVudFRpbWVsaW5lLmR1cmF0aW9uID0gZHVyYXRpb24gLyB0aW1lc2NhbGU7XHJcblxyXG4gICAgICAgIHJldHVybiBzZWdtZW50VGltZWxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0S0lERnJvbVByb3RlY3Rpb25IZWFkZXIocHJvdGVjdGlvbkhlYWRlcikge1xyXG4gICAgICAgIGxldCBwckhlYWRlcixcclxuICAgICAgICAgICAgd3JtSGVhZGVyLFxyXG4gICAgICAgICAgICB4bWxSZWFkZXIsXHJcbiAgICAgICAgICAgIEtJRDtcclxuXHJcbiAgICAgICAgLy8gR2V0IFBsYXlSZWFkeSBoZWFkZXIgYXMgYnl0ZSBhcnJheSAoYmFzZTY0IGRlY29kZWQpXHJcbiAgICAgICAgcHJIZWFkZXIgPSBCQVNFNjQuZGVjb2RlQXJyYXkocHJvdGVjdGlvbkhlYWRlci5maXJzdENoaWxkLmRhdGEpO1xyXG5cclxuICAgICAgICAvLyBHZXQgUmlnaHQgTWFuYWdlbWVudCBoZWFkZXIgKFdSTUhFQURFUikgZnJvbSBQbGF5UmVhZHkgaGVhZGVyXHJcbiAgICAgICAgd3JtSGVhZGVyID0gZ2V0V1JNSGVhZGVyRnJvbVBSSGVhZGVyKHBySGVhZGVyKTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBmcm9tIG11bHRpLWJ5dGUgdG8gdW5pY29kZVxyXG4gICAgICAgIHdybUhlYWRlciA9IG5ldyBVaW50MTZBcnJheSh3cm1IZWFkZXIuYnVmZmVyKTtcclxuXHJcbiAgICAgICAgLy8gQ29udmVydCB0byBzdHJpbmdcclxuICAgICAgICB3cm1IZWFkZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHdybUhlYWRlcik7XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIDxXUk1IZWFkZXI+IHRvIGdldCBLSUQgZmllbGQgdmFsdWVcclxuICAgICAgICB4bWxSZWFkZXIgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcod3JtSGVhZGVyLCAnYXBwbGljYXRpb24veG1sJyk7XHJcbiAgICAgICAgS0lEID0geG1sUmVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ0tJRCcpLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAvLyBHZXQgS0lEIChiYXNlNjQgZGVjb2RlZCkgYXMgYnl0ZSBhcnJheVxyXG4gICAgICAgIEtJRCA9IEJBU0U2NC5kZWNvZGVBcnJheShLSUQpO1xyXG5cclxuICAgICAgICAvLyBDb252ZXJ0IFVVSUQgZnJvbSBsaXR0bGUtZW5kaWFuIHRvIGJpZy1lbmRpYW5cclxuICAgICAgICBjb252ZXJ0VXVpZEVuZGlhbm5lc3MoS0lEKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIEtJRDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRXUk1IZWFkZXJGcm9tUFJIZWFkZXIocHJIZWFkZXIpIHtcclxuICAgICAgICBsZXQgbGVuZ3RoLFxyXG4gICAgICAgICAgICByZWNvcmRDb3VudCxcclxuICAgICAgICAgICAgcmVjb3JkVHlwZSxcclxuICAgICAgICAgICAgcmVjb3JkTGVuZ3RoLFxyXG4gICAgICAgICAgICByZWNvcmRWYWx1ZTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgICAgIC8vIFBhcnNlIFBsYXlSZWFkeSBoZWFkZXJcclxuXHJcbiAgICAgICAgLy8gTGVuZ3RoIC0gMzIgYml0cyAoTEUgZm9ybWF0KVxyXG4gICAgICAgIGxlbmd0aCA9IChwckhlYWRlcltpICsgM10gPDwgMjQpICsgKHBySGVhZGVyW2kgKyAyXSA8PCAxNikgKyAocHJIZWFkZXJbaSArIDFdIDw8IDgpICsgcHJIZWFkZXJbaV07XHJcbiAgICAgICAgaSArPSA0O1xyXG5cclxuICAgICAgICAvLyBSZWNvcmQgY291bnQgLSAxNiBiaXRzIChMRSBmb3JtYXQpXHJcbiAgICAgICAgcmVjb3JkQ291bnQgPSAocHJIZWFkZXJbaSArIDFdIDw8IDgpICsgcHJIZWFkZXJbaV07XHJcbiAgICAgICAgaSArPSAyO1xyXG5cclxuICAgICAgICAvLyBQYXJzZSByZWNvcmRzXHJcbiAgICAgICAgd2hpbGUgKGkgPCBwckhlYWRlci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gUmVjb3JkIHR5cGUgLSAxNiBiaXRzIChMRSBmb3JtYXQpXHJcbiAgICAgICAgICAgIHJlY29yZFR5cGUgPSAocHJIZWFkZXJbaSArIDFdIDw8IDgpICsgcHJIZWFkZXJbaV07XHJcbiAgICAgICAgICAgIGkgKz0gMjtcclxuXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIFJpZ2h0cyBNYW5hZ2VtZW50IGhlYWRlciAocmVjb3JkIHR5cGUgPSAweDAxKVxyXG4gICAgICAgICAgICBpZiAocmVjb3JkVHlwZSA9PT0gMHgwMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlY29yZCBsZW5ndGggLSAxNiBiaXRzIChMRSBmb3JtYXQpXHJcbiAgICAgICAgICAgICAgICByZWNvcmRMZW5ndGggPSAocHJIZWFkZXJbaSArIDFdIDw8IDgpICsgcHJIZWFkZXJbaV07XHJcbiAgICAgICAgICAgICAgICBpICs9IDI7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVjb3JkIHZhbHVlID0+IGNvbnRhaW5zIDxXUk1IRUFERVI+XHJcbiAgICAgICAgICAgICAgICByZWNvcmRWYWx1ZSA9IG5ldyBVaW50OEFycmF5KHJlY29yZExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICByZWNvcmRWYWx1ZS5zZXQocHJIZWFkZXIuc3ViYXJyYXkoaSwgaSArIHJlY29yZExlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY29yZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb252ZXJ0VXVpZEVuZGlhbm5lc3ModXVpZCkge1xyXG4gICAgICAgIHN3YXBCeXRlcyh1dWlkLCAwLCAzKTtcclxuICAgICAgICBzd2FwQnl0ZXModXVpZCwgMSwgMik7XHJcbiAgICAgICAgc3dhcEJ5dGVzKHV1aWQsIDQsIDUpO1xyXG4gICAgICAgIHN3YXBCeXRlcyh1dWlkLCA2LCA3KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzd2FwQnl0ZXMoYnl0ZXMsIHBvczEsIHBvczIpIHtcclxuICAgICAgICBjb25zdCB0ZW1wID0gYnl0ZXNbcG9zMV07XHJcbiAgICAgICAgYnl0ZXNbcG9zMV0gPSBieXRlc1twb3MyXTtcclxuICAgICAgICBieXRlc1twb3MyXSA9IHRlbXA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBSQ29udGVudFByb3RlY3Rpb24ocHJvdGVjdGlvbkhlYWRlcikge1xyXG4gICAgICAgIGxldCBwcm8gPSB7XHJcbiAgICAgICAgICAgIF9fdGV4dDogcHJvdGVjdGlvbkhlYWRlci5maXJzdENoaWxkLmRhdGEsXHJcbiAgICAgICAgICAgIF9fcHJlZml4OiAnbXNwcidcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjaGVtZUlkVXJpOiAndXJuOnV1aWQ6OWEwNGYwNzktOTg0MC00Mjg2LWFiOTItZTY1YmUwODg1Zjk1JyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjb20ubWljcm9zb2Z0LnBsYXlyZWFkeScsXHJcbiAgICAgICAgICAgIHBybzogcHJvLFxyXG4gICAgICAgICAgICBwcm9fYXNBcnJheTogcHJvXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVXaWRldmluZUNvbnRlbnRQcm90ZWN0aW9uKHByb3RlY3Rpb25IZWFkZXIsIEtJRCkge1xyXG4gICAgICAgIC8vIENyZWF0ZSBXaWRldmluZSBDRU5DIGhlYWRlciAoUHJvdG9jb2wgQnVmZmVyKSB3aXRoIEtJRCB2YWx1ZVxyXG4gICAgICAgIGNvbnN0IHd2Q2VuY0hlYWRlciA9IG5ldyBVaW50OEFycmF5KDIgKyBLSUQubGVuZ3RoKTtcclxuICAgICAgICB3dkNlbmNIZWFkZXJbMF0gPSAweDEyO1xyXG4gICAgICAgIHd2Q2VuY0hlYWRlclsxXSA9IDB4MTA7XHJcbiAgICAgICAgd3ZDZW5jSGVhZGVyLnNldChLSUQsIDIpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBwc3NoIGJveFxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IDEyIC8qIGJveCBsZW5ndGgsIHR5cGUsIHZlcnNpb24gYW5kIGZsYWdzICovICsgMTYgLyogU3lzdGVtSUQgKi8gKyA0IC8qIGRhdGEgbGVuZ3RoICovICsgd3ZDZW5jSGVhZGVyLmxlbmd0aDtcclxuICAgICAgICBsZXQgcHNzaCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG5cclxuICAgICAgICAvLyBTZXQgYm94IGxlbmd0aCB2YWx1ZVxyXG4gICAgICAgIHBzc2hbaSsrXSA9IChsZW5ndGggJiAweEZGMDAwMDAwKSA+PiAyNDtcclxuICAgICAgICBwc3NoW2krK10gPSAobGVuZ3RoICYgMHgwMEZGMDAwMCkgPj4gMTY7XHJcbiAgICAgICAgcHNzaFtpKytdID0gKGxlbmd0aCAmIDB4MDAwMEZGMDApID4+IDg7XHJcbiAgICAgICAgcHNzaFtpKytdID0gKGxlbmd0aCAmIDB4MDAwMDAwRkYpO1xyXG5cclxuICAgICAgICAvLyBTZXQgdHlwZSAoJ3Bzc2gnKSwgdmVyc2lvbiAoMCkgYW5kIGZsYWdzICgwKVxyXG4gICAgICAgIHBzc2guc2V0KFsweDcwLCAweDczLCAweDczLCAweDY4LCAweDAwLCAweDAwLCAweDAwLCAweDAwXSwgaSk7XHJcbiAgICAgICAgaSArPSA4O1xyXG5cclxuICAgICAgICAvLyBTZXQgU3lzdGVtSUQgKCdlZGVmOGJhOS03OWQ2LTRhY2UtYTNjOC0yN2RjZDUxZDIxZWQnKVxyXG4gICAgICAgIHBzc2guc2V0KFsweGVkLCAweGVmLCAweDhiLCAweGE5LCAgMHg3OSwgMHhkNiwgMHg0YSwgMHhjZSwgMHhhMywgMHhjOCwgMHgyNywgMHhkYywgMHhkNSwgMHgxZCwgMHgyMSwgMHhlZF0sIGkpO1xyXG4gICAgICAgIGkgKz0gMTY7XHJcblxyXG4gICAgICAgIC8vIFNldCBkYXRhIGxlbmd0aCB2YWx1ZVxyXG4gICAgICAgIHBzc2hbaSsrXSA9ICh3dkNlbmNIZWFkZXIubGVuZ3RoICYgMHhGRjAwMDAwMCkgPj4gMjQ7XHJcbiAgICAgICAgcHNzaFtpKytdID0gKHd2Q2VuY0hlYWRlci5sZW5ndGggJiAweDAwRkYwMDAwKSA+PiAxNjtcclxuICAgICAgICBwc3NoW2krK10gPSAod3ZDZW5jSGVhZGVyLmxlbmd0aCAmIDB4MDAwMEZGMDApID4+IDg7XHJcbiAgICAgICAgcHNzaFtpKytdID0gKHd2Q2VuY0hlYWRlci5sZW5ndGggJiAweDAwMDAwMEZGKTtcclxuXHJcbiAgICAgICAgLy8gQ29weSBXaWRldmluZSBDRU5DIGhlYWRlclxyXG4gICAgICAgIHBzc2guc2V0KHd2Q2VuY0hlYWRlciwgaSk7XHJcblxyXG4gICAgICAgIC8vIENvbnZlcnQgdG8gQkFTRTY0IHN0cmluZ1xyXG4gICAgICAgIHBzc2ggPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHBzc2gpO1xyXG4gICAgICAgIHBzc2ggPSBCQVNFNjQuZW5jb2RlQVNDSUkocHNzaCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNjaGVtZUlkVXJpOiAndXJuOnV1aWQ6ZWRlZjhiYTktNzlkNi00YWNlLWEzYzgtMjdkY2Q1MWQyMWVkJyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjb20ud2lkZXZpbmUuYWxwaGEnLFxyXG4gICAgICAgICAgICBwc3NoOiB7XHJcbiAgICAgICAgICAgICAgICBfX3RleHQ6IHBzc2hcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcHJvY2Vzc01hbmlmZXN0KHhtbERvYywgbWFuaWZlc3RMb2FkZWRUaW1lKSB7XHJcbiAgICAgICAgY29uc3QgbWFuaWZlc3QgPSB7fTtcclxuICAgICAgICBjb25zdCBjb250ZW50UHJvdGVjdGlvbnMgPSBbXTtcclxuICAgICAgICBjb25zdCBzbW9vdGhTdHJlYW1pbmdNZWRpYSA9IHhtbERvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnU21vb3RoU3RyZWFtaW5nTWVkaWEnKVswXTtcclxuICAgICAgICBjb25zdCBwcm90ZWN0aW9uID0geG1sRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdQcm90ZWN0aW9uJylbMF07XHJcbiAgICAgICAgbGV0IHByb3RlY3Rpb25IZWFkZXIgPSBudWxsO1xyXG4gICAgICAgIGxldCBwZXJpb2QsXHJcbiAgICAgICAgICAgIGFkYXB0YXRpb25zLFxyXG4gICAgICAgICAgICBjb250ZW50UHJvdGVjdGlvbixcclxuICAgICAgICAgICAgS0lELFxyXG4gICAgICAgICAgICB0aW1lc3RhbXBPZmZzZXQsXHJcbiAgICAgICAgICAgIHN0YXJ0VGltZSxcclxuICAgICAgICAgICAgc2VnbWVudHMsXHJcbiAgICAgICAgICAgIHRpbWVzY2FsZSxcclxuICAgICAgICAgICAgaSwgajtcclxuXHJcbiAgICAgICAgLy8gU2V0IG1hbmlmZXN0IG5vZGUgcHJvcGVydGllc1xyXG4gICAgICAgIG1hbmlmZXN0LnByb3RvY29sID0gJ01TUyc7XHJcbiAgICAgICAgbWFuaWZlc3QucHJvZmlsZXMgPSAndXJuOm1wZWc6ZGFzaDpwcm9maWxlOmlzb2ZmLWxpdmU6MjAxMSc7XHJcbiAgICAgICAgbWFuaWZlc3QudHlwZSA9IHNtb290aFN0cmVhbWluZ01lZGlhLmdldEF0dHJpYnV0ZSgnSXNMaXZlJykgPT09ICdUUlVFJyA/ICdkeW5hbWljJyA6ICdzdGF0aWMnO1xyXG4gICAgICAgIHRpbWVzY2FsZSA9ICBzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRBdHRyaWJ1dGUoJ1RpbWVTY2FsZScpO1xyXG4gICAgICAgIG1hbmlmZXN0LnRpbWVzY2FsZSA9IHRpbWVzY2FsZSA/IHBhcnNlRmxvYXQodGltZXNjYWxlKSA6IERFRkFVTFRfVElNRV9TQ0FMRTtcclxuICAgICAgICBsZXQgZHZyV2luZG93TGVuZ3RoID0gcGFyc2VGbG9hdChzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRBdHRyaWJ1dGUoJ0RWUldpbmRvd0xlbmd0aCcpKTtcclxuICAgICAgICBpZiAoZHZyV2luZG93TGVuZ3RoID09PSAwICYmIHNtb290aFN0cmVhbWluZ01lZGlhLmdldEF0dHJpYnV0ZSgnQ2FuU2VlaycpID09PSAnVFJVRScpIHtcclxuICAgICAgICAgICAgZHZyV2luZG93TGVuZ3RoID0gSW5maW5pdHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkdnJXaW5kb3dMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoID0gZHZyV2luZG93TGVuZ3RoIC8gbWFuaWZlc3QudGltZXNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gcGFyc2VGbG9hdChzbW9vdGhTdHJlYW1pbmdNZWRpYS5nZXRBdHRyaWJ1dGUoJ0R1cmF0aW9uJykpO1xyXG4gICAgICAgIG1hbmlmZXN0Lm1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24gPSAoZHVyYXRpb24gPT09IDApID8gSW5maW5pdHkgOiBkdXJhdGlvbiAvIG1hbmlmZXN0LnRpbWVzY2FsZTtcclxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBzZXQgbWluQnVmZmVyVGltZSB0byAyIHNlYy4gKGJ1dCBzZXQgYmVsb3cgYWNjb3JkaW5nIHRvIHZpZGVvIHNlZ21lbnQgZHVyYXRpb24pXHJcbiAgICAgICAgbWFuaWZlc3QubWluQnVmZmVyVGltZSA9IDI7XHJcbiAgICAgICAgbWFuaWZlc3QudHRtbFRpbWVJc1JlbGF0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gTGl2ZSBtYW5pZmVzdCB3aXRoIER1cmF0aW9uID0gc3RhcnQtb3ZlclxyXG4gICAgICAgIGlmIChtYW5pZmVzdC50eXBlID09PSAnZHluYW1pYycgJiYgZHVyYXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIG1hbmlmZXN0LnR5cGUgPSAnc3RhdGljJztcclxuICAgICAgICAgICAgLy8gV2Ugc2V0IHRpbWVTaGlmdEJ1ZmZlckRlcHRoIHRvIGluaXRpYWwgZHVyYXRpb24sIHRvIGJlIHVzZWQgYnkgTXNzRnJhZ21lbnRDb250cm9sbGVyIHRvIHVwZGF0ZSBzZWdtZW50IHRpbWVsaW5lXHJcbiAgICAgICAgICAgIG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoID0gZHVyYXRpb24gLyBtYW5pZmVzdC50aW1lc2NhbGU7XHJcbiAgICAgICAgICAgIC8vIER1cmF0aW9uIHdpbGwgYmUgc2V0IGFjY29yZGluZyB0byBjdXJyZW50IHNlZ21lbnQgdGltZWxpbmUgZHVyYXRpb24gKHNlZSBiZWxvdylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEluIGNhc2Ugb2YgbGl2ZSBzdHJlYW1zLCBzZXQgYXZhaWxhYmlsaXR5U3RhcnRUaW1lIHByb3BlcnR5IGFjY29yZGluZyB0byBEVlJXaW5kb3dMZW5ndGhcclxuICAgICAgICBpZiAobWFuaWZlc3QudHlwZSA9PT0gJ2R5bmFtaWMnICAmJiBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aCA8IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIG1hbmlmZXN0LmF2YWlsYWJpbGl0eVN0YXJ0VGltZSA9IG5ldyBEYXRlKG1hbmlmZXN0TG9hZGVkVGltZS5nZXRUaW1lKCkgLSAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggKiAxMDAwKSk7XHJcbiAgICAgICAgICAgIG1hbmlmZXN0LnJlZnJlc2hNYW5pZmVzdE9uU3dpdGNoVHJhY2sgPSB0cnVlO1xyXG4gICAgICAgICAgICBtYW5pZmVzdC5kb05vdFVwZGF0ZURWUldpbmRvd09uQnVmZmVyVXBkYXRlZCA9IHRydWU7IC8vIERWUldpbmRvdyBpcyB1cGRhdGUgYnkgTXNzRnJhZ21lbnRNb29mUG9jZXNzb3IgYmFzZWQgb24gdGZyZiBib3hlc1xyXG4gICAgICAgICAgICBtYW5pZmVzdC5pZ25vcmVQb3N0cG9uZVRpbWVQZXJpb2QgPSB0cnVlOyAvLyBOZXZlciB1cGRhdGUgbWFuaWZlc3RcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1hcCBwZXJpb2Qgbm9kZSB0byBtYW5pZmVzdCByb290IG5vZGVcclxuICAgICAgICBtYW5pZmVzdC5QZXJpb2QgPSBtYXBQZXJpb2Qoc21vb3RoU3RyZWFtaW5nTWVkaWEsIG1hbmlmZXN0LnRpbWVzY2FsZSk7XHJcbiAgICAgICAgbWFuaWZlc3QuUGVyaW9kX2FzQXJyYXkgPSBbbWFuaWZlc3QuUGVyaW9kXTtcclxuXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwZXJpb2Qgc3RhcnQgdGltZVxyXG4gICAgICAgIHBlcmlvZCA9IG1hbmlmZXN0LlBlcmlvZDtcclxuICAgICAgICBwZXJpb2Quc3RhcnQgPSAwO1xyXG5cclxuICAgICAgICAvLyBVbmNvbW1lbnQgdG8gdGVzdCBsaXZlIHRvIHN0YXRpYyBtYW5pZmVzdHNcclxuICAgICAgICAvLyBpZiAobWFuaWZlc3QudHlwZSAhPT0gJ3N0YXRpYycpIHtcclxuICAgICAgICAvLyAgICAgbWFuaWZlc3QudHlwZSA9ICdzdGF0aWMnO1xyXG4gICAgICAgIC8vICAgICBtYW5pZmVzdC5tZWRpYVByZXNlbnRhdGlvbkR1cmF0aW9uID0gbWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGg7XHJcbiAgICAgICAgLy8gICAgIG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoID0gbnVsbDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIENvbnRlbnRQcm90ZWN0aW9uIG5vZGVcclxuICAgICAgICBpZiAocHJvdGVjdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByb3RlY3Rpb25IZWFkZXIgPSB4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ1Byb3RlY3Rpb25IZWFkZXInKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNvbWUgcGFja2FnZXJzIHB1dCBuZXdsaW5lcyBpbnRvIHRoZSBQcm90ZWN0aW9uSGVhZGVyIGJhc2U2NCBzdHJpbmcsIHdoaWNoIGlzIG5vdCBnb29kXHJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgdGhpcyBjYW5ub3QgYmUgY29ycmVjdGx5IHBhcnNlZC4gTGV0J3MganVzdCBmaWx0ZXIgb3V0IGFueSBuZXdsaW5lcyBmb3VuZCBpbiB0aGVyZS5cclxuICAgICAgICAgICAgcHJvdGVjdGlvbkhlYWRlci5maXJzdENoaWxkLmRhdGEgPSBwcm90ZWN0aW9uSGVhZGVyLmZpcnN0Q2hpbGQuZGF0YS5yZXBsYWNlKC9cXG58XFxyL2csICcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBLSUQgKGluIENFTkMgZm9ybWF0KSBmcm9tIHByb3RlY3Rpb24gaGVhZGVyXHJcbiAgICAgICAgICAgIEtJRCA9IGdldEtJREZyb21Qcm90ZWN0aW9uSGVhZGVyKHByb3RlY3Rpb25IZWFkZXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIENvbnRlbnRQcm90ZWN0aW9uIGZvciBQbGF5UmVhZHlcclxuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb24gPSBjcmVhdGVQUkNvbnRlbnRQcm90ZWN0aW9uKHByb3RlY3Rpb25IZWFkZXIpO1xyXG4gICAgICAgICAgICBjb250ZW50UHJvdGVjdGlvblsnY2VuYzpkZWZhdWx0X0tJRCddID0gS0lEO1xyXG4gICAgICAgICAgICBjb250ZW50UHJvdGVjdGlvbnMucHVzaChjb250ZW50UHJvdGVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgQ29udGVudFByb3RlY3Rpb24gZm9yIFdpZGV2aW5lIChhcyBhIENFTkMgcHJvdGVjdGlvbilcclxuICAgICAgICAgICAgY29udGVudFByb3RlY3Rpb24gPSBjcmVhdGVXaWRldmluZUNvbnRlbnRQcm90ZWN0aW9uKHByb3RlY3Rpb25IZWFkZXIsIEtJRCk7XHJcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9uWydjZW5jOmRlZmF1bHRfS0lEJ10gPSBLSUQ7XHJcbiAgICAgICAgICAgIGNvbnRlbnRQcm90ZWN0aW9ucy5wdXNoKGNvbnRlbnRQcm90ZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIG1hbmlmZXN0LkNvbnRlbnRQcm90ZWN0aW9uID0gY29udGVudFByb3RlY3Rpb25zO1xyXG4gICAgICAgICAgICBtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbl9hc0FycmF5ID0gY29udGVudFByb3RlY3Rpb25zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRhcHRhdGlvbnMgPSBwZXJpb2QuQWRhcHRhdGlvblNldF9hc0FycmF5O1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWRhcHRhdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgYWRhcHRhdGlvbnNbaV0uU2VnbWVudFRlbXBsYXRlLmluaXRpYWxpemF0aW9uID0gJyRCYW5kd2lkdGgkJztcclxuICAgICAgICAgICAgLy8gUHJvcGFnYXRlIGNvbnRlbnQgcHJvdGVjdGlvbiBpbmZvcm1hdGlvbiBpbnRvIGVhY2ggYWRhcHRhdGlvblxyXG4gICAgICAgICAgICBpZiAobWFuaWZlc3QuQ29udGVudFByb3RlY3Rpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYWRhcHRhdGlvbnNbaV0uQ29udGVudFByb3RlY3Rpb24gPSBtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbjtcclxuICAgICAgICAgICAgICAgIGFkYXB0YXRpb25zW2ldLkNvbnRlbnRQcm90ZWN0aW9uX2FzQXJyYXkgPSBtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbl9hc0FycmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTZXQgbWluQnVmZmVyVGltZVxyXG4gICAgICAgICAgICBpZiAoYWRhcHRhdGlvbnNbaV0uY29udGVudFR5cGUgPT09ICd2aWRlbycpIHtcclxuICAgICAgICAgICAgICAgIG1hbmlmZXN0Lm1pbkJ1ZmZlclRpbWUgPSBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLlNfYXNBcnJheVswXS5kIC8gYWRhcHRhdGlvbnNbaV0uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZSAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChtYW5pZmVzdC50eXBlID09PSAnZHluYW1pYycpIHtcclxuICAgICAgICAgICAgICAgIC8vIFNldCBhdmFpbGFiaWxpdHlTdGFydFRpbWUgZm9yIGluZmluaXRlIERWUiBXaW5kb3cgZnJvbSBzZWdtZW50IHRpbWVsaW5lIGR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3QuYXZhaWxhYmlsaXR5U3RhcnRUaW1lID0gbmV3IERhdGUobWFuaWZlc3RMb2FkZWRUaW1lLmdldFRpbWUoKSAtIChhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLmR1cmF0aW9uICogMTAwMCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gTWF0Y2ggdGltZVNoaWZ0QnVmZmVyRGVwdGggdG8gdmlkZW8gc2VnbWVudCB0aW1lbGluZSBkdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgaWYgKG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoID4gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0LnRpbWVTaGlmdEJ1ZmZlckRlcHRoICE9PSBJbmZpbml0eSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGFkYXB0YXRpb25zW2ldLmNvbnRlbnRUeXBlID09PSAndmlkZW8nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPiBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPSBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLmR1cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWFuaWZlc3QudGltZVNoaWZ0QnVmZmVyRGVwdGggPCBtYW5pZmVzdC5taW5CdWZmZXJUaW1lKSB7XHJcbiAgICAgICAgICAgIG1hbmlmZXN0Lm1pbkJ1ZmZlclRpbWUgPSBtYW5pZmVzdC50aW1lU2hpZnRCdWZmZXJEZXB0aDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERlbGV0ZSBDb250ZW50IFByb3RlY3Rpb24gdW5kZXIgcm9vdCBtYW5pZmVzdCBub2RlXHJcbiAgICAgICAgZGVsZXRlIG1hbmlmZXN0LkNvbnRlbnRQcm90ZWN0aW9uO1xyXG4gICAgICAgIGRlbGV0ZSBtYW5pZmVzdC5Db250ZW50UHJvdGVjdGlvbl9hc0FycmF5O1xyXG5cclxuICAgICAgICAvLyBJbiBjYXNlIG9mIFZPRCBzdHJlYW1zLCBjaGVjayBpZiBzdGFydCB0aW1lIGlzIGdyZWF0ZXIgdGhhbiAwXHJcbiAgICAgICAgLy8gVGhlbiBkZXRlcm1pbmUgdGltZXN0YW1wIG9mZnNldCBhY2NvcmRpbmcgdG8gaGlnaGVyIGF1ZGlvL3ZpZGVvIHN0YXJ0IHRpbWVcclxuICAgICAgICAvLyAodXNlIGNhc2UgPSBsaXZlIHN0cmVhbSBkZWxpbmVhcml6YXRpb24pXHJcbiAgICAgICAgaWYgKG1hbmlmZXN0LnR5cGUgPT09ICdzdGF0aWMnKSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2Ugb2Ygc3RhcnQtb3ZlciBzdHJlYW0gYW5kIG1hbmlmZXN0IHJlbG9hZGluZyAoZHVlIHRvIHRyYWNrIHN3aXRjaClcclxuICAgICAgICAgICAgLy8gd2UgY29uc2lkZXIgcHJldmlvdXMgdGltZXN0YW1wT2Zmc2V0IHRvIGtlZXAgdGltZWxpbmVzIHN5bmNocm9uaXplZFxyXG4gICAgICAgICAgICB2YXIgcHJldk1hbmlmZXN0ID0gbWFuaWZlc3RNb2RlbC5nZXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICBpZiAocHJldk1hbmlmZXN0ICYmIHByZXZNYW5pZmVzdC50aW1lc3RhbXBPZmZzZXQpIHtcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcE9mZnNldCA9IHByZXZNYW5pZmVzdC50aW1lc3RhbXBPZmZzZXQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYWRhcHRhdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRhcHRhdGlvbnNbaV0uY29udGVudFR5cGUgPT09ICdhdWRpbycgfHwgYWRhcHRhdGlvbnNbaV0uY29udGVudFR5cGUgPT09ICd2aWRlbycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLlNfYXNBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRUaW1lID0gc2VnbWVudHNbMF0udCAvIGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS50aW1lc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lc3RhbXBPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wT2Zmc2V0ID0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcE9mZnNldCA9IE1hdGgubWluKHRpbWVzdGFtcE9mZnNldCwgc3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ29ycmVjdCBjb250ZW50IGR1cmF0aW9uIGFjY29yZGluZyB0byBtaW5pbXVtIGFkYXB0YXRpb24ncyBzZWdtZW50IHRpbWVsaW5lIGR1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIHRvIGZvcmNlIDx2aWRlbz4gZWxlbWVudCBzZW5kaW5nICdlbmRlZCcgZXZlbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuaWZlc3QubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbiA9IE1hdGgubWluKG1hbmlmZXN0Lm1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24sIGFkYXB0YXRpb25zW2ldLlNlZ21lbnRUZW1wbGF0ZS5TZWdtZW50VGltZWxpbmUuZHVyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBQYXRjaCBzZWdtZW50IHRlbXBsYXRlcyB0aW1lc3RhbXBzIGFuZCBkZXRlcm1pbmUgcGVyaW9kIHN0YXJ0IHRpbWUgKHNpbmNlIGF1ZGlvL3ZpZGVvIHNob3VsZCBub3QgYmUgYWxpZ25lZCB0byAwKVxyXG4gICAgICAgICAgICBpZiAodGltZXN0YW1wT2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbWFuaWZlc3QudGltZXN0YW1wT2Zmc2V0ID0gdGltZXN0YW1wT2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFkYXB0YXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudHMgPSBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUuU2VnbWVudFRpbWVsaW5lLlNfYXNBcnJheTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgc2VnbWVudHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWdtZW50c1tqXS50TWFuaWZlc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzW2pdLnRNYW5pZmVzdCA9IHNlZ21lbnRzW2pdLnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudHNbal0udCAtPSAodGltZXN0YW1wT2Zmc2V0ICogYWRhcHRhdGlvbnNbaV0uU2VnbWVudFRlbXBsYXRlLnRpbWVzY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhZGFwdGF0aW9uc1tpXS5jb250ZW50VHlwZSA9PT0gJ2F1ZGlvJyB8fCBhZGFwdGF0aW9uc1tpXS5jb250ZW50VHlwZSA9PT0gJ3ZpZGVvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJpb2Quc3RhcnQgPSBNYXRoLm1heChzZWdtZW50c1swXS50LCBwZXJpb2Quc3RhcnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGF0aW9uc1tpXS5TZWdtZW50VGVtcGxhdGUucHJlc2VudGF0aW9uVGltZU9mZnNldCA9IHBlcmlvZC5zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwZXJpb2Quc3RhcnQgLz0gbWFuaWZlc3QudGltZXNjYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBGbG9vciB0aGUgZHVyYXRpb24gdG8gZ2V0IGFyb3VuZCBwcmVjaXNpb24gZGlmZmVyZW5jZXMgYmV0d2VlbiBzZWdtZW50cyB0aW1lc3RhbXBzIGFuZCBNU0UgYnVmZmVyIHRpbWVzdGFtcHNcclxuICAgICAgICAvLyBhbmQgdGhlIGF2b2lkICdlbmRlZCcgZXZlbnQgbm90IGJlaW5nIHJhaXNlZFxyXG4gICAgICAgIG1hbmlmZXN0Lm1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24gPSBNYXRoLmZsb29yKG1hbmlmZXN0Lm1lZGlhUHJlc2VudGF0aW9uRHVyYXRpb24gKiAxMDAwKSAvIDEwMDA7XHJcbiAgICAgICAgcGVyaW9kLmR1cmF0aW9uID0gbWFuaWZlc3QubWVkaWFQcmVzZW50YXRpb25EdXJhdGlvbjtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1hbmlmZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlRE9NKGRhdGEpIHtcclxuICAgICAgICBsZXQgeG1sRG9jID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHdpbmRvdy5ET01QYXJzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHhtbERvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoZGF0YSwgJ3RleHQveG1sJyk7XHJcbiAgICAgICAgICAgIGlmICh4bWxEb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdwYXJzaW5nIHRoZSBtYW5pZmVzdCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHhtbERvYztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRNYXRjaGVycygpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJcm9uKCkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGludGVybmFsUGFyc2UoZGF0YSkge1xyXG4gICAgICAgIGxldCB4bWxEb2MgPSBudWxsO1xyXG4gICAgICAgIGxldCBtYW5pZmVzdCA9IG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgLy8gUGFyc2UgdGhlIE1TUyBYTUwgbWFuaWZlc3RcclxuICAgICAgICB4bWxEb2MgPSBwYXJzZURPTShkYXRhKTtcclxuXHJcbiAgICAgICAgY29uc3QgeG1sUGFyc2VUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBpZiAoeG1sRG9jID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ29udmVydCBNU1MgbWFuaWZlc3QgaW50byBEQVNIIG1hbmlmZXN0XHJcbiAgICAgICAgbWFuaWZlc3QgPSBwcm9jZXNzTWFuaWZlc3QoeG1sRG9jLCBuZXcgRGF0ZSgpKTtcclxuXHJcbiAgICAgICAgY29uc3QgbXNzMmRhc2hUaW1lID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBsb2dnZXIuaW5mbygnUGFyc2luZyBjb21wbGV0ZTogKHhtbFBhcnNpbmc6ICcgKyAoeG1sUGFyc2VUaW1lIC0gc3RhcnRUaW1lKS50b1ByZWNpc2lvbigzKSArICdtcywgbXNzMmRhc2g6ICcgKyAobXNzMmRhc2hUaW1lIC0geG1sUGFyc2VUaW1lKS50b1ByZWNpc2lvbigzKSArICdtcywgdG90YWw6ICcgKyAoKG1zczJkYXNoVGltZSAtIHN0YXJ0VGltZSkgLyAxMDAwKS50b1ByZWNpc2lvbigzKSArICdzKScpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWFuaWZlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zdGFuY2UgPSB7XHJcbiAgICAgICAgcGFyc2U6IGludGVybmFsUGFyc2UsXHJcbiAgICAgICAgZ2V0TWF0Y2hlcnM6IGdldE1hdGNoZXJzLFxyXG4gICAgICAgIGdldElyb246IGdldElyb25cclxuICAgIH07XHJcblxyXG4gICAgc2V0dXAoKTtcclxuXHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbk1zc1BhcnNlci5fX2Rhc2hqc19mYWN0b3J5X25hbWUgPSAnTXNzUGFyc2VyJztcclxuZXhwb3J0IGRlZmF1bHQgZGFzaGpzLkZhY3RvcnlNYWtlci5nZXRDbGFzc0ZhY3RvcnkoTXNzUGFyc2VyKTsgLyoganNoaW50IGlnbm9yZTpsaW5lICovXHJcbiIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG5pbXBvcnQgRXZlbnRzQmFzZSBmcm9tICcuLi9jb3JlL2V2ZW50cy9FdmVudHNCYXNlJztcclxuLyoqXHJcbiAqIEBjbGFzc1xyXG4gKlxyXG4gKi9cclxuY2xhc3MgTWVkaWFQbGF5ZXJFdmVudHMgZXh0ZW5kcyBFdmVudHNCYXNlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBkZXNjcmlwdGlvbiBQdWJsaWMgZmFjaW5nIGV4dGVybmFsIGV2ZW50cyB0byBiZSB1c2VkIHdoZW4gZGV2ZWxvcGluZyBhIHBsYXllciB0aGF0IGltcGxlbWVudHMgZGFzaC5qcy5cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBwbGF5YmFjayB3aWxsIG5vdCBzdGFydCB5ZXRcclxuICAgICAgICAgKiBhcyB0aGUgTVBEJ3MgYXZhaWxhYmlsaXR5U3RhcnRUaW1lIGlzIGluIHRoZSBmdXR1cmUuXHJcbiAgICAgICAgICogQ2hlY2sgZGVsYXkgcHJvcGVydHkgaW4gcGF5bG9hZCB0byBkZXRlcm1pbmUgdGltZSBiZWZvcmUgcGxheWJhY2sgd2lsbCBzdGFydC5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkFTVF9JTl9GVVRVUkUgPSAnYXN0SW5GdXR1cmUnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGUgdmlkZW8gZWxlbWVudCdzIGJ1ZmZlciBzdGF0ZSBjaGFuZ2VzIHRvIHN0YWxsZWQuXHJcbiAgICAgICAgICogQ2hlY2sgbWVkaWFUeXBlIGluIHBheWxvYWQgdG8gZGV0ZXJtaW5lIHR5cGUgKFZpZGVvLCBBdWRpbywgRnJhZ21lbnRlZFRleHQpLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNCVUZGRVJfRU1QVFlcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkJVRkZFUl9FTVBUWSA9ICdidWZmZXJTdGFsbGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIHZpZGVvIGVsZW1lbnQncyBidWZmZXIgc3RhdGUgY2hhbmdlcyB0byBsb2FkZWQuXHJcbiAgICAgICAgICogQ2hlY2sgbWVkaWFUeXBlIGluIHBheWxvYWQgdG8gZGV0ZXJtaW5lIHR5cGUgKFZpZGVvLCBBdWRpbywgRnJhZ21lbnRlZFRleHQpLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNCVUZGRVJfTE9BREVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5CVUZGRVJfTE9BREVEID0gJ2J1ZmZlckxvYWRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHRoZSB2aWRlbyBlbGVtZW50J3MgYnVmZmVyIHN0YXRlIGNoYW5nZXMsIGVpdGhlciBzdGFsbGVkIG9yIGxvYWRlZC4gQ2hlY2sgcGF5bG9hZCBmb3Igc3RhdGUuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0JVRkZFUl9MRVZFTF9TVEFURV9DSEFOR0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5CVUZGRVJfTEVWRUxfU1RBVEVfQ0hBTkdFRCA9ICdidWZmZXJTdGF0ZUNoYW5nZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiB0aGVyZSBpcyBhbiBlcnJvciBmcm9tIHRoZSBlbGVtZW50IG9yIE1TRSBzb3VyY2UgYnVmZmVyLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNFUlJPUlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuRVJST1IgPSAnZXJyb3InO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhIGZyYWdtZW50IGRvd25sb2FkIGhhcyBjb21wbGV0ZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0ZSQUdNRU5UX0xPQURJTkdfQ09NUExFVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5GUkFHTUVOVF9MT0FESU5HX0NPTVBMRVRFRCA9ICdmcmFnbWVudExvYWRpbmdDb21wbGV0ZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHBhcnRpYWwgZnJhZ21lbnQgZG93bmxvYWQgaGFzIGNvbXBsZXRlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjRlJBR01FTlRfTE9BRElOR19QUk9HUkVTU1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuRlJBR01FTlRfTE9BRElOR19QUk9HUkVTUyA9ICdmcmFnbWVudExvYWRpbmdQcm9ncmVzcyc7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYSBmcmFnbWVudCBkb3dubG9hZCBoYXMgc3RhcnRlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjRlJBR01FTlRfTE9BRElOR19TVEFSVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5GUkFHTUVOVF9MT0FESU5HX1NUQVJURUQgPSAnZnJhZ21lbnRMb2FkaW5nU3RhcnRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgZnJhZ21lbnQgZG93bmxvYWQgaXMgYWJhbmRvbmVkIGR1ZSB0byBkZXRlY3Rpb24gb2Ygc2xvdyBkb3dubG9hZCBiYXNlIG9uIHRoZSBBQlIgYWJhbmRvbiBydWxlLi5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjRlJBR01FTlRfTE9BRElOR19BQkFORE9ORURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkZSQUdNRU5UX0xPQURJTkdfQUJBTkRPTkVEID0gJ2ZyYWdtZW50TG9hZGluZ0FiYW5kb25lZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHtAbGluayBtb2R1bGU6RGVidWd9IGxvZ2dlciBtZXRob2RzIGFyZSBjYWxsZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI0xPR1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuTE9HID0gJ2xvZyc7XHJcblxyXG4gICAgICAgIC8vVE9ETyByZWZhY3RvciB3aXRoIGludGVybmFsIGV2ZW50XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIG1hbmlmZXN0IGxvYWQgaXMgY29tcGxldGVcclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjTUFOSUZFU1RfTE9BREVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5NQU5JRkVTVF9MT0FERUQgPSAnbWFuaWZlc3RMb2FkZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgYW55dGltZSB0aGVyZSBpcyBhIGNoYW5nZSB0byB0aGUgb3ZlcmFsbCBtZXRyaWNzLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNNRVRSSUNTX0NIQU5HRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1FVFJJQ1NfQ0hBTkdFRCA9ICdtZXRyaWNzQ2hhbmdlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGFuIGluZGl2aWR1YWwgbWV0cmljIGlzIGFkZGVkLCB1cGRhdGVkIG9yIGNsZWFyZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI01FVFJJQ19DSEFOR0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5NRVRSSUNfQ0hBTkdFRCA9ICdtZXRyaWNDaGFuZ2VkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIGV2ZXJ5IHRpbWUgYSBuZXcgbWV0cmljIGlzIGFkZGVkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNNRVRSSUNfQURERURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1FVFJJQ19BRERFRCA9ICdtZXRyaWNBZGRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCBldmVyeSB0aW1lIGEgbWV0cmljIGlzIHVwZGF0ZWQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI01FVFJJQ19VUERBVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5NRVRSSUNfVVBEQVRFRCA9ICdtZXRyaWNVcGRhdGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIGF0IHRoZSBzdHJlYW0gZW5kIG9mIGEgcGVyaW9kLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQRVJJT0RfU1dJVENIX0NPTVBMRVRFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUEVSSU9EX1NXSVRDSF9DT01QTEVURUQgPSAncGVyaW9kU3dpdGNoQ29tcGxldGVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYSBuZXcgcGVyaW9kIHN0YXJ0cy5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUEVSSU9EX1NXSVRDSF9TVEFSVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QRVJJT0RfU1dJVENIX1NUQVJURUQgPSAncGVyaW9kU3dpdGNoU3RhcnRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGFuIEFCUiB1cCAvZG93biBzd2l0Y2ggaXMgaW5pdGlhdGVkOyBlaXRoZXIgYnkgdXNlciBpbiBtYW51YWwgbW9kZSBvciBhdXRvIG1vZGUgdmlhIEFCUiBydWxlcy5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUVVBTElUWV9DSEFOR0VfUkVRVUVTVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5RVUFMSVRZX0NIQU5HRV9SRVFVRVNURUQgPSAncXVhbGl0eUNoYW5nZVJlcXVlc3RlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHRoZSBuZXcgQUJSIHF1YWxpdHkgaXMgYmVpbmcgcmVuZGVyZWQgb24tc2NyZWVuLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNRVUFMSVRZX0NIQU5HRV9SRU5ERVJFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUVVBTElUWV9DSEFOR0VfUkVOREVSRUQgPSAncXVhbGl0eUNoYW5nZVJlbmRlcmVkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gdGhlIG5ldyB0cmFjayBpcyBiZWluZyByZW5kZXJlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjVFJBQ0tfQ0hBTkdFX1JFTkRFUkVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5UUkFDS19DSEFOR0VfUkVOREVSRUQgPSAndHJhY2tDaGFuZ2VSZW5kZXJlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHRoZSBzb3VyY2UgaXMgc2V0dXAgYW5kIHJlYWR5LlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNTT1VSQ0VfSU5JVElBTElaRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlNPVVJDRV9JTklUSUFMSVpFRCA9ICdzb3VyY2VJbml0aWFsaXplZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgc3RyZWFtIChwZXJpb2QpIGlzIGxvYWRlZFxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNTVFJFQU1fSU5JVElBTElaRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlNUUkVBTV9JTklUSUFMSVpFRCA9ICdzdHJlYW1Jbml0aWFsaXplZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHRoZSBwbGF5ZXIgaGFzIGJlZW4gcmVzZXQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1NUUkVBTV9URUFSRE9XTl9DT01QTEVURVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuU1RSRUFNX1RFQVJET1dOX0NPTVBMRVRFID0gJ3N0cmVhbVRlYXJkb3duQ29tcGxldGUnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgb25jZSBhbGwgdGV4dCB0cmFja3MgZGV0ZWN0ZWQgaW4gdGhlIE1QRCBhcmUgYWRkZWQgdG8gdGhlIHZpZGVvIGVsZW1lbnQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1RFWFRfVFJBQ0tTX0FEREVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5URVhUX1RSQUNLU19BRERFRCA9ICdhbGxUZXh0VHJhY2tzQWRkZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHRleHQgdHJhY2sgaXMgYWRkZWQgdG8gdGhlIHZpZGVvIGVsZW1lbnQncyBUZXh0VHJhY2tMaXN0XHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1RFWFRfVFJBQ0tfQURERURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlRFWFRfVFJBQ0tfQURERUQgPSAndGV4dFRyYWNrQWRkZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhIHR0bWwgY2h1bmsgaXMgcGFyc2VkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNUVE1MX1BBUlNFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuVFRNTF9QQVJTRUQgPSAndHRtbFBhcnNlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIGEgdHRtbCBjaHVuayBoYXMgdG8gYmUgcGFyc2VkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNUVE1MX1RPX1BBUlNFXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5UVE1MX1RPX1BBUlNFID0gJ3R0bWxUb1BhcnNlJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVHJpZ2dlcmVkIHdoZW4gYSBjYXB0aW9uIGlzIHJlbmRlcmVkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNDQVBUSU9OX1JFTkRFUkVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5DQVBUSU9OX1JFTkRFUkVEID0gJ2NhcHRpb25SZW5kZXJlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRyaWdnZXJlZCB3aGVuIHRoZSBjYXB0aW9uIGNvbnRhaW5lciBpcyByZXNpemVkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNDQVBUSU9OX0NPTlRBSU5FUl9SRVNJWkVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkNBUFRJT05fQ09OVEFJTkVSX1JFU0laRSA9ICdjYXB0aW9uQ29udGFpbmVyUmVzaXplJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIGVub3VnaCBkYXRhIGlzIGF2YWlsYWJsZSB0aGF0IHRoZSBtZWRpYSBjYW4gYmUgcGxheWVkLFxyXG4gICAgICAgICAqIGF0IGxlYXN0IGZvciBhIGNvdXBsZSBvZiBmcmFtZXMuICBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZVxyXG4gICAgICAgICAqIEhBVkVfRU5PVUdIX0RBVEEgcmVhZHlTdGF0ZS5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjQ0FOX1BMQVlcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLkNBTl9QTEFZID0gJ2NhblBsYXknO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gcGxheWJhY2sgY29tcGxldGVzLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19FTkRFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfRU5ERUQgPSAncGxheWJhY2tFbmRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiBhbiBlcnJvciBvY2N1cnMuICBUaGUgZWxlbWVudCdzIGVycm9yXHJcbiAgICAgICAgICogYXR0cmlidXRlIGNvbnRhaW5zIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX0VSUk9SXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19FUlJPUiA9ICdwbGF5YmFja0Vycm9yJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIHBsYXliYWNrIGlzIG5vdCBhbGxvd2VkIChmb3IgZXhhbXBsZSBpZiB1c2VyIGdlc3R1cmUgaXMgbmVlZGVkKS5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfTk9UX0FMTE9XRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX05PVF9BTExPV0VEID0gJ3BsYXliYWNrTm90QWxsb3dlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtZWRpYSdzIG1ldGFkYXRhIGhhcyBmaW5pc2hlZCBsb2FkaW5nOyBhbGwgYXR0cmlidXRlcyBub3dcclxuICAgICAgICAgKiBjb250YWluIGFzIG11Y2ggdXNlZnVsIGluZm9ybWF0aW9uIGFzIHRoZXkncmUgZ29pbmcgdG8uXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX01FVEFEQVRBX0xPQURFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfTUVUQURBVEFfTE9BREVEID0gJ3BsYXliYWNrTWV0YURhdGFMb2FkZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gcGxheWJhY2sgaXMgcGF1c2VkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19QQVVTRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX1BBVVNFRCA9ICdwbGF5YmFja1BhdXNlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiB0aGUgbWVkaWEgYmVnaW5zIHRvIHBsYXkgKGVpdGhlciBmb3IgdGhlIGZpcnN0IHRpbWUsIGFmdGVyIGhhdmluZyBiZWVuIHBhdXNlZCxcclxuICAgICAgICAgKiBvciBhZnRlciBlbmRpbmcgYW5kIHRoZW4gcmVzdGFydGluZykuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfUExBWUlOR1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfUExBWUlORyA9ICdwbGF5YmFja1BsYXlpbmcnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHBlcmlvZGljYWxseSB0byBpbmZvcm0gaW50ZXJlc3RlZCBwYXJ0aWVzIG9mIHByb2dyZXNzIGRvd25sb2FkaW5nXHJcbiAgICAgICAgICogdGhlIG1lZGlhLiBJbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCBhbW91bnQgb2YgdGhlIG1lZGlhIHRoYXQgaGFzXHJcbiAgICAgICAgICogYmVlbiBkb3dubG9hZGVkIGlzIGF2YWlsYWJsZSBpbiB0aGUgbWVkaWEgZWxlbWVudCdzIGJ1ZmZlcmVkIGF0dHJpYnV0ZS5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfUFJPR1JFU1NcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLlBMQVlCQUNLX1BST0dSRVNTID0gJ3BsYXliYWNrUHJvZ3Jlc3MnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gdGhlIHBsYXliYWNrIHNwZWVkIGNoYW5nZXMuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX1JBVEVfQ0hBTkdFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfUkFURV9DSEFOR0VEID0gJ3BsYXliYWNrUmF0ZUNoYW5nZWQnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTZW50IHdoZW4gYSBzZWVrIG9wZXJhdGlvbiBjb21wbGV0ZXMuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI1BMQVlCQUNLX1NFRUtFRFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfU0VFS0VEID0gJ3BsYXliYWNrU2Vla2VkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIGEgc2VlayBvcGVyYXRpb24gYmVnaW5zLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19TRUVLSU5HXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19TRUVLSU5HID0gJ3BsYXliYWNrU2Vla2luZyc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiBhIHNlZWsgb3BlcmF0aW9uIGhhcyBiZWVuIGFza2VkLlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19TRUVLX0FTS0VEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19TRUVLX0FTS0VEID0gJ3BsYXliYWNrU2Vla0Fza2VkJztcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogU2VudCB3aGVuIHRoZSB2aWRlbyBlbGVtZW50IHJlcG9ydHMgc3RhbGxlZFxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19TVEFMTEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19TVEFMTEVEID0gJ3BsYXliYWNrU3RhbGxlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiBwbGF5YmFjayBvZiB0aGUgbWVkaWEgc3RhcnRzIGFmdGVyIGhhdmluZyBiZWVuIHBhdXNlZDtcclxuICAgICAgICAgKiB0aGF0IGlzLCB3aGVuIHBsYXliYWNrIGlzIHJlc3VtZWQgYWZ0ZXIgYSBwcmlvciBwYXVzZSBldmVudC5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBldmVudCBNZWRpYVBsYXllckV2ZW50cyNQTEFZQkFDS19TVEFSVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19TVEFSVEVEID0gJ3BsYXliYWNrU3RhcnRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0aW1lIGluZGljYXRlZCBieSB0aGUgZWxlbWVudCdzIGN1cnJlbnRUaW1lIGF0dHJpYnV0ZSBoYXMgY2hhbmdlZC5cclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfVElNRV9VUERBVEVEXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5QTEFZQkFDS19USU1FX1VQREFURUQgPSAncGxheWJhY2tUaW1lVXBkYXRlZCc7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNlbnQgd2hlbiB0aGUgbWVkaWEgcGxheWJhY2sgaGFzIHN0b3BwZWQgYmVjYXVzZSBvZiBhIHRlbXBvcmFyeSBsYWNrIG9mIGRhdGEuXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAZXZlbnQgTWVkaWFQbGF5ZXJFdmVudHMjUExBWUJBQ0tfV0FJVElOR1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuUExBWUJBQ0tfV0FJVElORyA9ICdwbGF5YmFja1dhaXRpbmcnO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNYW5pZmVzdCB2YWxpZGl0eSBjaGFuZ2VkIC0gQXMgYSByZXN1bHQgb2YgYW4gTVBEIHZhbGlkaXR5IGV4cGlyYXRpb24gZXZlbnQuXHJcbiAgICAgICAgICogQGV2ZW50IE1lZGlhUGxheWVyRXZlbnRzI01BTklGRVNUX1ZBTElESVRZX0NIQU5HRURcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLk1BTklGRVNUX1ZBTElESVRZX0NIQU5HRUQgPSAnbWFuaWZlc3RWYWxpZGl0eUNoYW5nZWQnO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWVkaWFQbGF5ZXJFdmVudHMgPSBuZXcgTWVkaWFQbGF5ZXJFdmVudHMoKTtcclxuZXhwb3J0IGRlZmF1bHQgbWVkaWFQbGF5ZXJFdmVudHM7XHJcbiIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmNsYXNzIERhc2hKU0Vycm9yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvZGUsIG1lc3NhZ2UsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlIHx8IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZSB8fCBudWxsO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwgbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaEpTRXJyb3I7IiwiLyoqXHJcbiAqIFRoZSBjb3B5cmlnaHQgaW4gdGhpcyBzb2Z0d2FyZSBpcyBiZWluZyBtYWRlIGF2YWlsYWJsZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UsXHJcbiAqIGluY2x1ZGVkIGJlbG93LiBUaGlzIHNvZnR3YXJlIG1heSBiZSBzdWJqZWN0IHRvIG90aGVyIHRoaXJkIHBhcnR5IGFuZCBjb250cmlidXRvclxyXG4gKiByaWdodHMsIGluY2x1ZGluZyBwYXRlbnQgcmlnaHRzLCBhbmQgbm8gc3VjaCByaWdodHMgYXJlIGdyYW50ZWQgdW5kZXIgdGhpcyBsaWNlbnNlLlxyXG4gKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMsIERhc2ggSW5kdXN0cnkgRm9ydW0uXHJcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dCBtb2RpZmljYXRpb24sXHJcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcclxuICogICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXHJcbiAqICBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxyXG4gKiAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3JcclxuICogIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZCB3aXRoIHRoZSBkaXN0cmlidXRpb24uXHJcbiAqICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgRGFzaCBJbmR1c3RyeSBGb3J1bSBub3IgdGhlIG5hbWVzIG9mIGl0c1xyXG4gKiAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZVxyXG4gKiAgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAqXHJcbiAqICBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIEFTIElTIEFORCBBTllcclxuICogIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRURcclxuICogIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cclxuICogIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXHJcbiAqICBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUXHJcbiAqICBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAqICBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSxcclxuICogIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcclxuICogIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXHJcbiAqICBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cclxuICovXHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmNsYXNzIERhdGFDaHVuayB7XHJcbiAgICAvL1JlcHJlc2VudHMgYSBkYXRhIHN0cnVjdHVyZSB0aGF0IGtlZXAgYWxsIHRoZSBuZWNlc3NhcnkgaW5mbyBhYm91dCBhIHNpbmdsZSBpbml0L21lZGlhIHNlZ21lbnRcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RyZWFtSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWVkaWFJbmZvID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlZ21lbnRUeXBlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnF1YWxpdHkgPSBOYU47XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IE5hTjtcclxuICAgICAgICB0aGlzLmJ5dGVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gTmFOO1xyXG4gICAgICAgIHRoaXMuZW5kID0gTmFOO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBOYU47XHJcbiAgICAgICAgdGhpcy5yZXByZXNlbnRhdGlvbklkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVuZEZyYWdtZW50ID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF0YUNodW5rOyIsIi8qKlxyXG4gKiBUaGUgY29weXJpZ2h0IGluIHRoaXMgc29mdHdhcmUgaXMgYmVpbmcgbWFkZSBhdmFpbGFibGUgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLFxyXG4gKiBpbmNsdWRlZCBiZWxvdy4gVGhpcyBzb2Z0d2FyZSBtYXkgYmUgc3ViamVjdCB0byBvdGhlciB0aGlyZCBwYXJ0eSBhbmQgY29udHJpYnV0b3JcclxuICogcmlnaHRzLCBpbmNsdWRpbmcgcGF0ZW50IHJpZ2h0cywgYW5kIG5vIHN1Y2ggcmlnaHRzIGFyZSBncmFudGVkIHVuZGVyIHRoaXMgbGljZW5zZS5cclxuICpcclxuICogQ29weXJpZ2h0IChjKSAyMDEzLCBEYXNoIEluZHVzdHJ5IEZvcnVtLlxyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKlxyXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLFxyXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpc1xyXG4gKiAgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcbiAqICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcclxuICogIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yXHJcbiAqICBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG4gKiAgKiBOZWl0aGVyIHRoZSBuYW1lIG9mIERhc2ggSW5kdXN0cnkgRm9ydW0gbm9yIHRoZSBuYW1lcyBvZiBpdHNcclxuICogIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlIG9yIHByb21vdGUgcHJvZHVjdHMgZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmVcclxuICogIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLlxyXG4gKlxyXG4gKiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBBUyBJUyBBTkQgQU5ZXHJcbiAqICBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRSBJTVBMSUVEXHJcbiAqICBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuXHJcbiAqICBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULFxyXG4gKiAgSU5ESVJFQ1QsIElOQ0lERU5UQUwsIFNQRUNJQUwsIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVFxyXG4gKiAgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUlxyXG4gKiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksXHJcbiAqICBXSEVUSEVSIElOIENPTlRSQUNULCBTVFJJQ1QgTElBQklMSVRZLCBPUiBUT1JUIChJTkNMVURJTkcgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpXHJcbiAqICBBUklTSU5HIElOIEFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRVxyXG4gKiAgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiAqL1xyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmNsYXNzIEZyYWdtZW50UmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IEZyYWdtZW50UmVxdWVzdC5BQ1RJT05fRE9XTkxPQUQ7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBOYU47XHJcbiAgICAgICAgdGhpcy5tZWRpYVR5cGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWVkaWFJbmZvID0gbnVsbDtcclxuICAgICAgICB0aGlzLnR5cGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBOYU47XHJcbiAgICAgICAgdGhpcy50aW1lc2NhbGUgPSBOYU47XHJcbiAgICAgICAgdGhpcy5yYW5nZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy51cmwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VydmljZUxvY2F0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlcXVlc3RTdGFydERhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlyc3RCeXRlRGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0RW5kRGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdWFsaXR5ID0gTmFOO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBOYU47XHJcbiAgICAgICAgdGhpcy5hdmFpbGFiaWxpdHlTdGFydFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXZhaWxhYmlsaXR5RW5kVGltZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy53YWxsU3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJ5dGVzTG9hZGVkID0gTmFOO1xyXG4gICAgICAgIHRoaXMuYnl0ZXNUb3RhbCA9IE5hTjtcclxuICAgICAgICB0aGlzLmRlbGF5TG9hZGluZ1RpbWUgPSBOYU47XHJcbiAgICAgICAgdGhpcy5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xyXG4gICAgICAgIHRoaXMucmVwcmVzZW50YXRpb25JZCA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbkZyYWdtZW50UmVxdWVzdC5BQ1RJT05fRE9XTkxPQUQgPSAnZG93bmxvYWQnO1xyXG5GcmFnbWVudFJlcXVlc3QuQUNUSU9OX0NPTVBMRVRFID0gJ2NvbXBsZXRlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZyYWdtZW50UmVxdWVzdDtcclxuIl19
