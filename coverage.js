/**********************************************************************
Encrypted Encrypted Media Extensions requirements coverage estimates

This document estimates test coverage on each requirement section in the EME spec.

Coverage data must be manually entered.  

Sample from Media-Source:

var coverage = {
  'widl-MediaSource-activeSourceBuffers': {
    coverage: 50,
    comments: [
      'No real test that the active source buffers are the right ones',
      'No test on the SourceBuffers order'
    ],
    assignee: '@tidoust'
  },
  'widl-AudioTrack-sourceBuffer': 100,
  'widl-VideoTrack-sourceBuffer': 100,
  'widl-TextTrack-sourceBuffer': {
    coverage: 0,
    assignee: '@plehegar'
  }
};

**********************************************************************/