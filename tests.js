/**********************************************************************
Encrypted Encrypted Media Extensions tests.

This document lists all EME tests and the spec sections that they check.

Test coverage data must be manually entered.
  
Sample from Media-Source:

  {
    url: 'SourceBuffer-abort-readyState.html',
   checks: '#widl-SourceBuffer-abort-void'
  },
  {
    url: 'mediasource-avtracks.html',
    checks: [
      '#widl-MediaSource-removeSourceBuffer-void-SourceBuffer-sourceBuffer',
      '#widl-SourceBuffer-audioTracks',
      '#widl-SourceBuffer-videoTracks',
      '#widl-AudioTrack-sourceBuffer',
      '#widl-VideoTrack-sourceBuffer',
      '#mediasource-detach',
      '#widl-MediaSource-sourceBuffers',
      '#widl-SourceBuffer-appendBuffer-void-ArrayBufferView-data',
      '#sourcebuffer-buffer-append'
    ],
    definedIn: 'chromium',
    comment: 'Check that media tracks and their properties are populated properly. Checks visible outcomes of SourceBuffer algorithms (e.g. 3.5.1, 3.5.12), removeSourceBuffer (2.2), detach from a media element (2.4.2)'
  },

**********************************************************************/

var tests = [
  {
    url: 'encrypted-media-async-creation-with-gc.html',
    checks: [
      '#widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations',
      '#widl-MediaKeySystemAccess-keySystem',
      '#widl-MediaKeySystemAccess-createMediaKeys-Promise-MediaKeys',
      '#widl-MediaKeySession-close-Promise-void'
    ],
  },
  {
    url: 'encrypted-media-async-setcert-with-gc.html',
    checks: [
      '#widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations',
      '#widl-MediaKeySystemAccess-keySystem',
      '#widl-MediaKeySystemAccess-createMediaKeys-Promise-MediaKeys',
      '#widl-MediaKeys-setServerCertificate-Promise-boolean--BufferSource-serverCertificate'
    ],
  },
  {
    url: 'encrypted-media-check-init-data-type.html',
    checks: [
      '#widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations',
      '#widl-MediaKeySystemMediaCapability-contentType',
      '#widl-MediaKeySystemMediaCapability-robustness',
      '#widl-MediaKeySystemAccess-keySystem',
      '#widl-MediaKeySystemAccess-createMediaKeys-Promise-MediaKeys'
    ],
  },
  {
    url: 'encrypted-media-clear-key-invalid-license.html',
    checks: [
      '#widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations',
      '#widl-MediaKeySession-update-Promise-void--BufferSource-response',
      '#clear-key-license-format-example'
    ],
  },
  {
    url: 'encrypted-media-clearkey-update-non-ascii-input.html',
    checks: [
	  '#widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations',
	  '#widl-MediaKeySession-update-Promise-void--BufferSource-response'
    ],
  },
  {
    url: 'encrypted-media-events.html',
    checks: [
      '#widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData',
      '#widl-ctor-MediaKeyMessageEvent--DOMString-type-MediaKeyMessageEventInit-eventInitDict',
      '#widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#queue-message'
    ],
  },
  {
    url: 'encrypted-media-generate-request-disallowed-input.html',
    checks: '#widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData'
  },
  {
    url: 'encrypted-media-keystatuses-multiple-sessions.html',
    checks: [
      '#widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData',
      '#widl-MediaKeySession-keyStatuses',
      '#widl-MediaKeySession-update-Promise-void--BufferSource-response',
      '#queue-message'
    ],
  },
  {
    url: 'encrypted-media-keystatuses-multiple-updates.html',
    checks: [
      '#widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData',
      '#widl-MediaKeySession-keyStatuses',
      '#widl-MediaKeySession-update-Promise-void--BufferSource-response'
    ],
  },
  {
    url: 'encrypted-media-keystatuses.html',
    checks: [
      '#widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData',
      '#widl-MediaKeySession-keyStatuses',
      '#widl-MediaKeySession-update-Promise-void--BufferSource-response',
      '#widl-MediaKeyStatusMap-size',
      '#widl-MediaKeyStatusMap-get-any-BufferSource-keyId',
      '#widl-MediaKeyStatusMap-has-boolean-BufferSource-keyId'
    ],
  },
  {
    url: 'encrypted-media-lifetime-mediakeys-with-session.html',
    checks: [
      '#widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType',
      '#widl-MediaKeySession-close-Promise-void'
    ],
  },
  {
    url: 'encrypted-media-lifetime-mediakeys.html',
    checks: '#widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType'
  },
  {
    url: 'encrypted-media-lifetime-mediakeysession-reference.html',
    checks: [
      '#widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType',
      '#widl-MediaKeySession-sessionId',
      '#widl-MediaKeySession-close-Promise-void'
    ],
  },
  {
    url: 'encrypted-media-lifetime-mediakeysession-release-noreference.html',
    checks: [
      '#widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType',
      '#session-closed',
      '#widl-MediaKeySession-sessionId',
      '#widl-MediaKeySession-close-Promise-void'
    ],
  },
  {
    url: 'encrypted-media-lifetime-mediakeysession-release.html',
    checks: [
      '#widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType',
      '#session-closed',
      '#widl-MediaKeySession-close-Promise-void'
    ],
  },
  {
    url: 'encrypted-media-lifetime-multiple-mediakeys.html',
    checks: ''
  },
  {
    url: 'encrypted-media-lifetime-reload.html',
    checks: [
      '#widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType',
      '#widl-MediaKeySession-onmessage',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict',
      '#widl-MediaEncryptedEvent-initData',
      '#widl-MediaEncryptedEvent-initDataType',
      '#widl-MediaEncryptedEventInit-initData',
      '#widl-MediaEncryptedEventInit-initDataType',
      '#initdata-encountered',
      '#encrypted-block-encountered',
      '#attempt-to-decrypt'
    ],
  },
  {
    url: 'encrypted-media-not-callable-after-createsession.html',
    checks: [
      '#widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType',
      '#widl-MediaKeySession-close-Promise-void',
      '#widl-MediaKeySession-remove-Promise-void',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#exceptions'
    ],
  },
  {
    url: 'encrypted-media-onencrypted.html',
    checks: [
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict',
      '#widl-MediaEncryptedEvent-initData',
      '#widl-MediaEncryptedEvent-initDataType',
      '#widl-MediaEncryptedEventInit-initData',
      '#widl-MediaEncryptedEventInit-initDataType',
      '#initdata-encountered',
      '#encrypted-block-encountered',
      '#attempt-to-decrypt'
    ],
  },
  {
    url: 'encrypted-media-playback-encrypted-and-clear-sources.html',
    checks: [
      '#widl-MediaKeySession-onmessage',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict',
      '#widl-MediaEncryptedEvent-initData',
      '#widl-MediaEncryptedEvent-initDataType',
      '#widl-MediaEncryptedEventInit-initData',
      '#widl-MediaEncryptedEventInit-initDataType',
      '#initdata-encountered',
      '#encrypted-block-encountered',
      '#attempt-to-decrypt',
      '#clear-key-capabilities',
      '#clear-key-behavior',
      '#clear-key-request-format-example',
      '#clear-key-license-format-example',
      '#clear-key-release-format-example',
      '#clear-key-release-ack-format-example'
   ],
  },
  {
    url: 'encrypted-media-playback-multiple-sessions.html',
    checks: [
      '#widl-MediaKeySession-onmessage',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict',
      '#widl-MediaEncryptedEvent-initData',
      '#widl-MediaEncryptedEvent-initDataType',
      '#widl-MediaEncryptedEventInit-initData',
      '#widl-MediaEncryptedEventInit-initDataType',
      '#initdata-encountered',
      '#encrypted-block-encountered',
      '#attempt-to-decrypt',
      '#clear-key-capabilities',
      '#clear-key-behavior',
      '#clear-key-request-format-example',
      '#clear-key-license-format-example',
      '#clear-key-release-format-example',
      '#clear-key-release-ack-format-example'
    ],
  },
  {
    url: 'encrypted-media-playback-setmediakeys-after-src.html',
    checks: [
      '#widl-MediaKeySession-onmessage',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict',
      '#widl-MediaEncryptedEvent-initData',
      '#widl-MediaEncryptedEvent-initDataType',
      '#widl-MediaEncryptedEventInit-initData',
      '#widl-MediaEncryptedEventInit-initDataType',
      '#initdata-encountered',
      '#encrypted-block-encountered',
      '#attempt-to-decrypt',
      '#clear-key-capabilities',
      '#clear-key-behavior',
      '#clear-key-request-format-example',
      '#clear-key-license-format-example',
      '#clear-key-release-format-example',
      '#clear-key-release-ack-format-example'
    ],
  },
  {
    url: 'encrypted-media-playback-setmediakeys-before-src.html',
    checks: [
      '#widl-MediaKeySession-onmessage',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict',
      '#widl-MediaEncryptedEvent-initData',
      '#widl-MediaEncryptedEvent-initDataType',
      '#widl-MediaEncryptedEventInit-initData',
      '#widl-MediaEncryptedEventInit-initDataType',
      '#initdata-encountered',
      '#encrypted-block-encountered',
      '#attempt-to-decrypt',
      '#clear-key-capabilities',
      '#clear-key-behavior',
      '#clear-key-request-format-example',
      '#clear-key-license-format-example',
      '#clear-key-release-format-example',
      '#clear-key-release-ack-format-example'
    ],
  },
  {
    url: 'encrypted-media-playback-two-videos.html',
    checks: [
      '#widl-MediaKeySession-onmessage',
      '#widl-MediaKeyMessageEvent-message',
      '#widl-MediaKeyMessageEvent-messageType',
      '#widl-MediaKeyMessageEventInit-message',
      '#widl-MediaKeyMessageEventInit-messageType',
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict',
      '#widl-MediaEncryptedEvent-initData',
      '#widl-MediaEncryptedEvent-initDataType',
      '#widl-MediaEncryptedEventInit-initData',
      '#widl-MediaEncryptedEventInit-initDataType',
      '#initdata-encountered',
      '#encrypted-block-encountered',
      '#attempt-to-decrypt',
      '#clear-key-capabilities',
      '#clear-key-behavior',
      '#clear-key-request-format-example',
      '#clear-key-license-format-example',
      '#clear-key-release-format-example',
      '#clear-key-release-ack-format-example'
    ],
  },
  {
    url: 'encrypted-media-requestmediakeysystemaccess.html',
    checks: [
      '#widl-MediaKeySystemConfiguration-audioCapabilities',
      '#widl-MediaKeySystemConfiguration-videoCapabilities',
      '#widl-MediaKeySystemAccess-getConfiguration-MediaKeySystemConfiguration',
      '#exceptions'
    ],
  },
  {
    url: 'encrypted-media-reset-src-after-setmediakeys.html',
    checks: [
      '#widl-HTMLMediaElement-onencrypted',
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-session-closed-event.html',
    checks: [
      '#widl-MediaKeySession-closed',
      '#widl-MediaKeySession-close-Promise-void'
    ],
  },
  {
    url: 'encrypted-media-setmediakeys-again-after-playback.html',
    checks: [
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-setmediakeys-again-after-resetting-src.html',
    checks: [
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-setmediakeys-at-same-time.html',
    checks: [
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-setmediakeys-multiple-times-with-different-mediakeys.html',
    checks: [
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-setmediakeys-multiple-times-with-the-same-mediakeys.html',
    checks: [
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-setmediakeys-to-multiple-video-elements.html',
    checks: [
      '#exceptions',
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-setmediakeys.html',
    checks: [
      '#widl-HTMLMediaElement-mediaKeys',
      '#widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys'
    ],
  },
  {
    url: 'encrypted-media-syntax.html',
    checks: [
      '#get-supported-configuration',
      '#mediakeysystemconfiguration-dictionary',
      '#widl-MediaKeySystemConfiguration-initDataTypes',
      '#widl-MediaKeys-setServerCertificate-Promise-boolean--BufferSource-serverCertificate',
      '#is-persistent-session-type',
      '#widl-MediaKeySession-close-Promise-void',
      '#widl-MediaKeySystemAccess-getConfiguration-MediaKeySystemConfiguration',
      '#widl-MediaKeySession-remove-Promise-void',
      '#exceptions'
    ],
  },
  {
    url: 'encrypted-media-unique-origin.html',
    checks: '#widl-MediaKeySession-onmessage'
  },
  {
    url: 'encrypted-media-update-disallowed-input.html',
    checks: '#widl-MediaKeySystemConfiguration-initDataTypes'
  },
  {
    url: 'encrypted-media-waiting-for-a-key.html',
    checks: [
      '#widl-HTMLMediaElement-onwaitingforkey',
      '#queue-waitingforkey'
    ],
  },
  {
    url: 'Not Required',
    checks: [
      '#cdm',
      '#key-system',
      '#key-session',
      '#session-id',
      '#decryption-key',
      '#usable-for-decryption',
      '#decryption-key-id',
      '#known-key',
      '#license',
      '#initialization-data',
      '#associable-identifiers',
      '#permanent-identifier',
      '#distinctive-identifier',
      '#uses-distinctive-identifiers-or-distinctive-permanent-identifiers',
      '#cross-origin',
      '#mixed-content',
      '#time',
      '#are-insecure-contexts-allowed---deprecated',
      '#media-element-restictions',
      '#allow-persistent-data-cleared',
      '#limit-or-avoid-use-of-distinctive-identifiers-and-permanent-identifiers',
      '#encrypt-identifiers',
      '#per-origin-identifiers',
      '#allow-identifiers-cleared',
      '#licenses-generated-are-independent-of-content-type',
      '#support-extraction-from-media-data',
      '#unencrypted-container',
      '#interoperably-encrypted',
      '#unencrypted-in-band-support-content',
      '#using-base64url',
      '#input-data-security',
      '#cdm-security',
      '#potential-attacks',
      '#like-cookies',
      '#privacy-prompts',
      '#direct-individualization',
      '#security-prompts',
      '#potential-attacks-1',
      '#mitigations-1',
      '#cross-directory-attacks',
      '#privacy-disclosure',
      '#privacy-fingerprinting',
      '#concerns',
      '#mitigations-2',
      '#app-assisted-individualization',
      '#concerns-1',
      '#concerns-2',
      '#mitigations-5',
      '#null'
    ],
  },
  {
    url: 'Not Tested',
    checks: [
      '#get-supported-configuration-and-consent',
      '#get-supported-capabilities-for-audio-video-type',
      '#get-consent-status',
      '#widl-MediaKeySystemConfiguration-distinctiveIdentifier',
      '#widl-MediaKeySystemConfiguration-label',
      '#widl-MediaKeySystemConfiguration-persistentState',
      '#widl-MediaKeySystemConfiguration-sessionTypes',
      '#cdm-unavailable',
      '#media-keys-storage',
      '#widl-MediaKeySession-expiration',
      '#widl-MediaKeySession-onkeystatuseschange',
      '#widl-MediaKeySession-load-Promise-boolean--DOMString-sessionId',
      '#update-key-statuses',
      '#update-expiration',
      '#media-key-session-destroyed',
      '#monitor-cdm',
      '#session-storage',
      '#resume-playback',
      '#support-multiple-keys'
    ],
  }
];