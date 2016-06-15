/**********************************************************************
Encrypted Media Extensions spec sections that need to be tested.

The structure should be updated when needed. Follow the steps described
in the "How to update the table" section.
**********************************************************************/
var toc = {
  "name": "Table of Contents",
  "children": [
    {
      "number": "2.",
      "name": "Definitions",
      "url": "definitions",
      "children": [
        {
          "name": "Content Decryption Module (CDM)",
          "url": "cdm",
          "type": ""
        },
        {
          "name": "Key System",
          "url": "key-system",
          "type": ""
        },
        {
          "name": "Key Session",
          "url": "key-session",
          "type": ""
        },
        {
          "name": "Session ID",
          "url": "session-id",
          "type": ""
        },
        {
          "name": "Key",
          "url": "decryption-key",
          "type": ""
        },
        {
          "name": "Usable For Decryption",
          "url": "usable-for-decryption",
          "type": ""
        },
        {
          "name": "Key ID",
          "url": "decryption-key-id",
          "type": ""
        },
        {
          "name": "Known Key",
          "url": "known-key",
          "type": ""
        },
        {
          "name": "License",
          "url": "license",
          "type": ""
        },
        {
          "name": "Initialization Data",
          "url": "initialization-data",
          "type": ""
        },
        {
          "name": "Associable Identifiers",
          "url": "associable-identifiers",
          "type": ""
        },
        {
          "name": "Permanent Identifiers",
          "url": null,
          "type": ""
        },
        {
          "name": "Distinctive Identifier",
          "url": "distinctive-identifier",
          "type": ""
        },
        {
          "name": "Use of Distinctive Identifiers and Distinctive Permanent Identifiers",
          "url": null,
          "type": ""
        },
        {
          "name": "Cross Origin Limitations",
          "url": "cross-origin",
          "type": ""
        },
        {
          "name": "Mixed Content Limitations",
          "url": "mixed-content",
          "type": ""
        },
        {
          "name": "Time",
          "url": "time",
          "type": ""
        }
      ]
    },
    {
      "number": "3.",
      "name": "Obtaining Access to Key Systems",
      "url": "obtaining-access-to-key-systems",
      "children": [
        {
          "number": "3.1",
          "name": "Navigator",
          "url": "navigator-extension-requestmediakeysystemaccess",
          "children": [
            {
              "number": "3.1.1",
              "name": "Methods",
              "url": "methods",
              "children": [
                {
                  "name": "requestMediaKeySystemAccess",
                  "url": "widl-Navigator-requestMediaKeySystemAccess-Promise-MediaKeySystemAccess--DOMString-keySystem-sequence-MediaKeySystemConfiguration--supportedConfigurations",
                  "type": "method"
                }
              ]
            },
            {
              "number": "3.1.2",
              "name": "Algorithms",
              "url": "algorithms",
              "children": [
                {
                  "number": "3.1.2.1",
                  "name": "Get Supported Configuration",
                  "url": "get-supported-configuration"
                },
                {
                  "number": "3.1.2.2",
                  "name": "Get Supported Configuration and Consent",
                  "url": "get-supported-configuration-and-consent"
                },
                {
                  "number": "3.1.2.3",
                  "name": "Get Supported Capabilities for Audio/Video Type",
                  "url": "get-supported-capabilities-for-audio-video-type"
                },
                {
                  "number": "3.1.2.4",
                  "name": "Are insecure contexts allowed? - DEPRECATED",
                  "url": "are-insecure-contexts-allowed---deprecated"
                },
                {
                  "number": "3.1.2.5",
                  "name": "Get Consent Status",
                  "url": "get-consent-status"
                }
              ]
            }
          ]
        },
        {
          "number": "3.2",
          "name": "MediaKeySystemConfiguration",
          "url": "mediakeysystemconfiguration-dictionary",
          "children": [
            {
              "number": "3.2.1",
              "name": "Dictionary ",
              "url": "dictionary-mediakeysystemconfiguration-members",
              "children": [
                {
                  "name": "audioCapabilities of type sequence<MediaKeySystemMediaCapability>, defaulting to [ ]",
                  "url": "widl-MediaKeySystemConfiguration-audioCapabilities",
                  "type": "dictionary-member"
                },
                {
                  "name": "distinctiveIdentifier of type MediaKeysRequirement, defaulting to \"optional\"",
                  "url": "widl-MediaKeySystemConfiguration-distinctiveIdentifier",
                  "type": "dictionary-member"
                },
                {
                  "name": "initDataTypes of type sequence<DOMString>, defaulting to [ ]",
                  "url": "widl-MediaKeySystemConfiguration-initDataTypes",
                  "type": "dictionary-member"
                },
                {
                  "name": "label of type DOMString, defaulting to \"\"",
                  "url": "widl-MediaKeySystemConfiguration-label",
                  "type": "dictionary-member"
                },
                {
                  "name": "persistentState of type MediaKeysRequirement, defaulting to \"optional\"",
                  "url": "widl-MediaKeySystemConfiguration-persistentState",
                  "type": "dictionary-member"
                },
                {
                  "name": "sessionTypes of type sequence<DOMString>",
                  "url": "widl-MediaKeySystemConfiguration-sessionTypes",
                  "type": "dictionary-member"
                },
                {
                  "name": "videoCapabilities of type sequence<MediaKeySystemMediaCapability>, defaulting to [ ]",
                  "url": "widl-MediaKeySystemConfiguration-videoCapabilities",
                  "type": "dictionary-member"
                }
              ]
            }
          ]
        },
        {
          "number": "3.3",
          "name": "MediaKeySystemMediaCapability",
          "url": "mediakeysystemmediacapability-dictionary",
          "children": [
            {
              "number": "3.3.1",
              "name": "Dictionary ",
              "url": "dictionary-mediakeysystemmediacapability-members",
              "children": [
                {
                  "name": "contentType of type DOMString, defaulting to \"\"",
                  "url": "widl-MediaKeySystemMediaCapability-contentType",
                  "type": "dictionary-member"
                },
                {
                  "name": "robustness of type DOMString, defaulting to \"\"",
                  "url": "widl-MediaKeySystemMediaCapability-robustness",
                  "type": "dictionary-member"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": "4.",
      "name": "MediaKeySystemAccess",
      "url": "mediakeysystemaccess-interface",
      "children": [
        {
          "number": "4.1",
          "name": "Attributes",
          "url": "attributes",
          "children": [
            {
              "name": "keySystem of type DOMString, readonly ",
              "url": "widl-MediaKeySystemAccess-keySystem",
              "type": "attribute"
            }
          ]
        },
        {
          "number": "4.2",
          "name": "Methods",
          "url": "methods-1",
          "children": [
            {
              "name": "createMediaKeys",
              "url": "widl-MediaKeySystemAccess-createMediaKeys-Promise-MediaKeys",
              "type": "method"
            },
            {
              "name": "getConfiguration",
              "url": "widl-MediaKeySystemAccess-getConfiguration-MediaKeySystemConfiguration",
              "type": "method"
            }
          ]
        }
      ]
    },
    {
      "number": "5.",
      "name": "MediaKeys",
      "url": "mediakeys-interface",
      "children": [
        {
          "number": "5.1",
          "name": "Methods",
          "url": "methods-2",
          "children": [
            {
              "name": "createSession",
              "url": "widl-MediaKeys-createSession-MediaKeySession-MediaKeySessionType-sessionType",
              "type": "method"
            },
            {
              "name": "setServerCertificate",
              "url": "widl-MediaKeys-setServerCertificate-Promise-boolean--BufferSource-serverCertificate",
              "type": "method"
            }
          ]
        },
        {
          "number": "5.2",
          "name": "Algorithms",
          "url": "algorithms-1",
          "children": [
            {
              "number": "5.2.1",
              "name": "Is persistent session type?",
              "url": "is-persistent-session-type"
            },
            {
              "number": "5.2.2",
              "name": "CDM Unavailable",
              "url": "cdm-unavailable"
            }
          ]
        },
        {
          "number": "5.3",
          "name": "Storage and Persistence",
          "url": "media-keys-storage"
        }
      ]
    },
    {
      "number": "6.",
      "name": "MediaKeySession",
      "url": "mediakeysession-interface",
      "children": [
        {
          "number": "6.1",
          "name": "Attributes",
          "url": "attributes-1",
          "children": [
            {
              "name": "closed of type Promise<void>, readonly ",
              "url": "widl-MediaKeySession-closed",
              "type": "attribute"
            },
            {
              "name": "expiration of type unrestricted double, readonly ",
              "url": "widl-MediaKeySession-expiration",
              "type": "attribute"
            },
            {
              "name": "keyStatuses of type MediaKeyStatusMap, readonly ",
              "url": "widl-MediaKeySession-keyStatuses",
              "type": "attribute"
            },
            {
              "name": "onkeystatuseschange of type EventHandler",
              "url": "widl-MediaKeySession-onkeystatuseschange",
              "type": "attribute"
            },
            {
              "name": "onmessage of type EventHandler",
              "url": "widl-MediaKeySession-onmessage",
              "type": "attribute"
            },
            {
              "name": "sessionId of type DOMString, readonly ",
              "url": "widl-MediaKeySession-sessionId",
              "type": "attribute"
            }
          ]
        },
        {
          "number": "6.2",
          "name": "Methods",
          "url": "methods-3",
          "children": [
            {
              "name": "close",
              "url": "widl-MediaKeySession-close-Promise-void",
              "type": "method"
            },
            {
              "name": "generateRequest",
              "url": "widl-MediaKeySession-generateRequest-Promise-void--DOMString-initDataType-BufferSource-initData",
              "type": "method"
            },
            {
              "name": "load",
              "url": "widl-MediaKeySession-load-Promise-boolean--DOMString-sessionId",
              "type": "method"
            },
            {
              "name": "remove",
              "url": "widl-MediaKeySession-remove-Promise-void",
              "type": "method"
            },
            {
              "name": "update",
              "url": "widl-MediaKeySession-update-Promise-void--BufferSource-response",
              "type": "method"
            }
          ]
        },
        {
          "number": "6.3",
          "name": "MediaKeyStatusMap",
          "url": "mediakeystatusmap-interface",
          "children": [
            {
              "number": "6.3.1",
              "name": "Attributes",
              "url": "attributes-2",
              "children": [
                {
                  "name": "size of type unsigned long, readonly ",
                  "url": "widl-MediaKeyStatusMap-size",
                  "type": "attribute"
                }
              ]
            },
            {
              "number": "6.3.2",
              "name": "Methods",
              "url": "methods-4",
              "children": [
                {
                  "name": "get",
                  "url": "widl-MediaKeyStatusMap-get-any-BufferSource-keyId",
                  "type": "method"
                },
                {
                  "name": "has",
                  "url": "widl-MediaKeyStatusMap-has-boolean-BufferSource-keyId",
                  "type": "method"
                }
              ]
            }
          ]
        },
        {
          "number": "6.4",
          "name": "MediaKeyMessageEvent",
          "url": "mediakeymessageevent",
          "children": [
            {
              "number": "6.4.1",
              "name": "Constructors",
              "url": "constructors",
              "children": [
                {
                  "name": "MediaKeyMessageEvent",
                  "url": "widl-ctor-MediaKeyMessageEvent--DOMString-type-MediaKeyMessageEventInit-eventInitDict",
                  "type": "constructor"
                }
              ]
            },
            {
              "number": "6.4.2",
              "name": "Attributes",
              "url": "attributes-3",
              "children": [
                {
                  "name": "message of type ArrayBuffer, readonly ",
                  "url": "widl-MediaKeyMessageEvent-message",
                  "type": "attribute"
                },
                {
                  "name": "messageType of type MediaKeyMessageType, readonly ",
                  "url": "widl-MediaKeyMessageEvent-messageType",
                  "type": "attribute"
                }
              ]
            },
            {
              "number": "6.4.3",
              "name": "MediaKeyMessageEventInit",
              "url": "mediakeymessageeventinit",
              "children": [
                {
                  "number": "6.4.3.1",
                  "name": "Dictionary ",
                  "url": "dictionary-mediakeymessageeventinit-members",
                  "children": [
                    {
                      "name": "message of type ArrayBuffer",
                      "url": "widl-MediaKeyMessageEventInit-message",
                      "type": "dictionary-member"
                    },
                    {
                      "name": "messageType of type MediaKeyMessageType, defaulting to \"license-request\"",
                      "url": "widl-MediaKeyMessageEventInit-messageType",
                      "type": "dictionary-member"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "number": "6.6",
          "name": "Algorithms",
          "url": "mediakeysession-algorithms",
          "children": [
            {
              "number": "6.6.1",
              "name": "Queue a \"message\" Event",
              "url": "queue-message"
            },
            {
              "number": "6.6.2",
              "name": "Update Key Statuses",
              "url": "update-key-statuses"
            },
            {
              "number": "6.6.3",
              "name": "Update Expiration",
              "url": "update-expiration"
            },
            {
              "number": "6.6.4",
              "name": "Session Closed",
              "url": "session-closed"
            },
            {
              "number": "6.6.5",
              "name": "MediaKeySession Destroyed",
              "url": "media-key-session-destroyed"
            },
            {
              "number": "6.6.6",
              "name": "Monitor for CDM State Changes",
              "url": "monitor-cdm"
            }
          ]
        },
        {
          "number": "6.7",
          "name": "Exceptions",
          "url": "exceptions"
        },
        {
          "number": "6.8",
          "name": "Session Storage and Persistence",
          "url": "session-storage"
        }
      ]
    },
    {
      "number": "7.",
      "name": "HTMLMediaElement",
      "url": "htmlmediaelement-extensions",
      "children": [
        {
          "number": "7.1",
          "name": "Attributes",
          "url": "attributes-4",
          "children": [
            {
              "name": "mediaKeys of type MediaKeys, readonly , nullable",
              "url": "widl-HTMLMediaElement-mediaKeys",
              "type": "attribute"
            },
            {
              "name": "onencrypted of type EventHandler",
              "url": "widl-HTMLMediaElement-onencrypted",
              "type": "attribute"
            },
            {
              "name": "onwaitingforkey of type EventHandler",
              "url": "widl-HTMLMediaElement-onwaitingforkey",
              "type": "attribute"
            }
          ]
        },
        {
          "number": "7.2",
          "name": "Methods",
          "url": "methods-5",
          "children": [
            {
              "name": "setMediaKeys",
              "url": "widl-HTMLMediaElement-setMediaKeys-Promise-void--MediaKeys-mediaKeys",
              "type": "method"
            }
          ]
        },
        {
          "number": "7.3",
          "name": "MediaEncryptedEvent",
          "url": "mediaencryptedevent",
          "children": [
            {
              "number": "7.3.1",
              "name": "Constructors",
              "url": "constructors-1",
              "children": [
                {
                  "name": "MediaEncryptedEvent",
                  "url": "widl-ctor-MediaEncryptedEvent--DOMString-type-MediaEncryptedEventInit-eventInitDict",
                  "type": "constructor"
                }
              ]
            },
            {
              "number": "7.3.2",
              "name": "Attributes",
              "url": "attributes-5",
              "children": [
                {
                  "name": "initData of type ArrayBuffer, readonly , nullable",
                  "url": "widl-MediaEncryptedEvent-initData",
                  "type": "attribute"
                },
                {
                  "name": "initDataType of type DOMString, readonly ",
                  "url": "widl-MediaEncryptedEvent-initDataType",
                  "type": "attribute"
                }
              ]
            },
            {
              "number": "7.3.3",
              "name": "MediaEncryptedEventInit",
              "url": "mediaencryptedeventinit",
              "children": [
                {
                  "number": "7.3.3.1",
                  "name": "Dictionary ",
                  "url": "dictionary-mediaencryptedeventinit-members",
                  "children": [
                    {
                      "name": "initData of type ArrayBuffer, nullable, defaulting to null",
                      "url": "widl-MediaEncryptedEventInit-initData",
                      "type": "dictionary-member"
                    },
                    {
                      "name": "initDataType of type DOMString, defaulting to \"\"",
                      "url": "widl-MediaEncryptedEventInit-initDataType",
                      "type": "dictionary-member"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "number": "7.5",
          "name": "Algorithms",
          "url": "htmlmediaelement-algorithms",
          "children": [
            {
              "number": "7.5.1",
              "name": "Initialization Data Encountered",
              "url": "initdata-encountered"
            },
            {
              "number": "7.5.2",
              "name": "Encrypted Block Encountered",
              "url": "encrypted-block-encountered"
            },
            {
              "number": "7.5.3",
              "name": "Attempt to Decrypt",
              "url": "attempt-to-decrypt"
            },
            {
              "number": "7.5.4",
              "name": "Queue a \"waitingforkey\" Event",
              "url": "queue-waitingforkey"
            },
            {
              "number": "7.5.5",
              "name": "Attempt to Resume Playback If Necessary",
              "url": "resume-playback"
            }
          ]
        },
        {
          "number": "7.6",
          "name": "Media Element Restrictions",
          "url": "media-element-restictions"
        }
      ]
    },
    {
      "number": "8.",
      "name": "Implementation Requirements",
      "url": "implementation-requirements",
      "children": [
        {
          "number": "8.1",
          "name": "Persistent Data",
          "url": "persistent-state-requirements",
          "children": [
            {
              "number": "8.1.1",
              "name": "Allow Persistent Data to Be Cleared",
              "url": "allow-persistent-data-cleared"
            }
          ]
        },
        {
          "number": "8.2",
          "name": "Identifiers",
          "url": "identifier-requirements",
          "children": [
            {
              "number": "8.2.1",
              "name": "Limit or Avoid use of Distinctive Identifiers and Permanent Identifiers",
              "url": "limit-or-avoid-use-of-distinctive-identifiers-and-permanent-identifiers"
            },
            {
              "number": "8.2.2",
              "name": "Encrypt Identifiers",
              "url": "encrypt-identifiers"
            },
            {
              "number": "8.2.3",
              "name": "Use Per-Origin Identifiers",
              "url": "per-origin-identifiers"
            },
            {
              "number": "8.2.4",
              "name": "Allow Identifiers to Be Cleared",
              "url": "allow-identifiers-cleared"
            }
          ]
        },
        {
          "number": "8.3",
          "name": "Support Multiple Keys",
          "url": "support-multiple-keys"
        },
        {
          "number": "8.4",
          "name": "Initialization Data Type Support",
          "url": "initialization-data-type-support-requirements",
          "children": [
            {
              "number": "8.4.1",
              "name": "Licenses Generated are Independent of Content Type",
              "url": "licenses-generated-are-independent-of-content-type"
            },
            {
              "number": "8.4.2",
              "name": "Support Extraction From Media Data",
              "url": "support-extraction-from-media-data"
            }
          ]
        },
        {
          "number": "8.5",
          "name": "Supported Media",
          "url": "media-requirements",
          "children": [
            {
              "number": "8.5.1",
              "name": "Unencrypted Container",
              "url": "unencrypted-container"
            },
            {
              "number": "8.5.2",
              "name": "Interoperably Encrypted",
              "url": "interoperably-encrypted"
            },
            {
              "number": "8.5.3",
              "name": "Unencrypted In-band Support Content",
              "url": "unencrypted-in-band-support-content"
            }
          ]
        }
      ]
    },
    {
      "number": "9.",
      "name": "Common Key Systems",
      "url": "common-key-systems",
      "children": [
        {
          "number": "9.1",
          "name": "Clear Key",
          "url": "clear-key",
          "children": [
            {
              "number": "9.1.1",
              "name": "Capabilities",
              "url": "clear-key-capabilities"
            },
            {
              "number": "9.1.2",
              "name": "Behavior",
              "url": "clear-key-behavior"
            },
            {
              "number": "9.1.3",
              "name": "License Request Format",
              "url": "clear-key-request-format",
              "children": [
                {
                  "number": "9.1.3.1",
                  "name": "Example",
                  "url": "clear-key-request-format-example"
                }
              ]
            },
            {
              "number": "9.1.4",
              "name": "License Format",
              "url": "clear-key-license-format",
              "children": [
                {
                  "number": "9.1.4.1",
                  "name": "Example",
                  "url": "clear-key-license-format-example"
                }
              ]
            },
            {
              "number": "9.1.5",
              "name": "License Release Format",
              "url": "clear-key-release-format",
              "children": [
                {
                  "number": "9.1.5.1",
                  "name": "Example",
                  "url": "clear-key-release-format-example"
                }
              ]
            },
            {
              "number": "9.1.6",
              "name": "License Release Acknowledgement Format",
              "url": "clear-key-release-ack-format",
              "children": [
                {
                  "number": "9.1.6.1",
                  "name": "Example",
                  "url": "clear-key-release-ack-format-example"
                }
              ]
            },
            {
              "number": "9.1.7",
              "name": "Using base64url",
              "url": "using-base64url"
            }
          ]
        }
      ]
    },
    {
      "number": "10.",
      "name": "Security",
      "url": "security",
      "children": [
        {
          "number": "10.1",
          "name": "Input Data Attacks and Vulnerabilities",
          "url": "input-data-security"
        },
        {
          "number": "10.2",
          "name": "CDM Attacks and Vulnerabilities",
          "url": "cdm-security"
        },
        {
          "number": "10.3",
          "name": "Network Attacks",
          "url": "network-attacks",
          "children": [
            {
              "number": "10.3.1",
              "name": "Potential Attacks",
              "url": "potential-attacks"
            },
            {
              "number": "10.3.2",
              "name": "Mitigations",
              "url": "mitigations",
              "children": [
                {
                  "name": "Use TLS",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Block Mixed Content",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Per-origin user alerts / prompts and permissions",
                  "url": "security-prompts",
                  "type": ""
                }
              ]
            }
          ]
        },
        {
          "number": "10.4",
          "name": "iframe",
          "url": "iframe-attacks",
          "children": [
            {
              "number": "10.4.1",
              "name": "Potential Attacks",
              "url": "potential-attacks-1"
            },
            {
              "number": "10.4.2",
              "name": "Mitigations",
              "url": "mitigations-1"
            }
          ]
        },
        {
          "number": "10.5",
          "name": "Cross-Directory Attacks",
          "url": "cross-directory-attacks"
        }
      ]
    },
    {
      "number": "11.",
      "name": "Privacy",
      "url": "privacy",
      "children": [
        {
          "number": "11.1",
          "name": "Information Disclosed by EME and Key Systems",
          "url": "privacy-disclosure"
        },
        {
          "number": "11.2",
          "name": "Fingerprinting",
          "url": "privacy-fingerprinting"
        },
        {
          "number": "11.3",
          "name": "Information Leakage",
          "url": "privacy-leakage",
          "children": [
            {
              "number": "11.3.1",
              "name": "Concerns",
              "url": "concerns"
            },
            {
              "number": "11.3.2",
              "name": "Mitigations",
              "url": "mitigations-2"
            }
          ]
        },
        {
          "number": "11.4",
          "name": "User Tracking",
          "url": "user-tracking",
          "children": [
            {
              "number": "11.4.1",
              "name": "Mitigations",
              "url": "mitigations-3",
              "children": [
                {
                  "name": "Do not use Distinctive Identifiers or Distinctive Permanent Identifiers",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "User deletion of persistent data, including Distinctive Identifiers",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Use of non-associable per-origin identifiers",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Encryption of Distinctive Identifiers",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Blocking third-party access",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Expiring stored data",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Treating Distinctive Identifiers and Key System stored data like cookies / web storage",
                  "url": "like-cookies",
                  "type": ""
                },
                {
                  "name": "Site-specific white-listing of access to each Key System",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Shared blacklists",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Per-origin user alerts / prompts and permissions",
                  "url": "privacy-prompts",
                  "type": ""
                },
                {
                  "name": "User controls to disable Key Systems or Key System use of identifiers",
                  "url": null,
                  "type": ""
                }
              ]
            },
            {
              "number": "11.4.2",
              "name": "Individualization",
              "url": "privacy-individualization",
              "children": [
                {
                  "number": "11.4.2.1",
                  "name": "Direct Individualization",
                  "url": "direct-individualization"
                },
                {
                  "number": "11.4.2.2",
                  "name": "App-Assisted Individualization",
                  "url": "app-assisted-individualization"
                }
              ]
            }
          ]
        },
        {
          "number": "11.5",
          "name": "Information Stored on User Devices",
          "url": "privacy-storedinfo",
          "children": [
            {
              "number": "11.5.1",
              "name": "Concerns",
              "url": "concerns-1"
            },
            {
              "number": "11.5.2",
              "name": "Mitigations",
              "url": "mitigations-4",
              "children": [
                {
                  "name": "Origin-specific Key System storage",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "User deletion of Key System storage",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Treating Distinctive Identifiers and Key System stored data like cookies / web storage",
                  "url": null,
                  "type": ""
                },
                {
                  "name": "Encryption or obfuscation of Key System stored data",
                  "url": null,
                  "type": ""
                }
              ]
            }
          ]
        },
        {
          "number": "11.6",
          "name": "Incomplete Clearing of Data",
          "url": "incomplete-clearing",
          "children": [
            {
              "number": "11.6.1",
              "name": "Concerns",
              "url": "concerns-2"
            },
            {
              "number": "11.6.2",
              "name": "Mitigations",
              "url": "mitigations-5"
            }
          ]
        },
        {
          "number": "11.7",
          "name": "Private Browsing Modes",
          "url": "private-browsing"
        },
        {
          "number": "11.8",
          "name": "Secure Origin and Transport",
          "url": "privacy-secureorigin"
        }
      ]
    }
  ]
};